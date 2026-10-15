import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ProjectStatus } from "@prisma/client";
import ProjectForm from "./project-form";

export const dynamic = "force-dynamic";
type SearchParams = Promise<{ q?: string; status?: string; edit?: string; saved?: string; error?: string }>;

const statusLabels: Record<string, string> = {
  DISCOVERY: "Discovery", DESIGN: "Design", CONTENT: "Content", DEVELOPMENT: "Development",
  QA: "Quality check", LAUNCH: "Launch", MAINTENANCE: "Maintenance", ON_HOLD: "On hold", COMPLETED: "Completed",
};
const statuses = Object.keys(statusLabels) as ProjectStatus[];
const errors: Record<string, string> = {
  "name-required": "Enter a project name.",
  "client-required": "Choose a client for this project.",
  "invalid-status": "Choose a valid project status.",
  "invalid-url": "Website and repository URLs must start with http:// or https://.",
  "invalid-budget": "Budget must be a non-negative whole number in rupees.",
  "invalid-date": "Enter a valid start and due date.",
  "date-order": "The due date cannot be earlier than the start date.",
  "client-not-found": "That client could not be found. Refresh and select a valid client.",
};

const inr = (value: number | null) => value === null ? "Not set" : new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

export default async function ProjectsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const query = (params.q ?? "").trim().slice(0, 100);
  const requestedStatus = params.status ?? "";
  const status = statuses.includes(requestedStatus as ProjectStatus) ? requestedStatus as ProjectStatus : "";
  const editingId = params.edit ?? "";
  const [projects, clients, editingProject] = await Promise.all([
    prisma.project.findMany({
      where: {
        ...(query ? { OR: [
          { name: { contains: query, mode: "insensitive" } },
          { client: { name: { contains: query, mode: "insensitive" } } },
          { client: { organization: { contains: query, mode: "insensitive" } } },
        ] } : {}),
        ...(status ? { status: status as ProjectStatus } : {}),
      },
      include: { client: true, _count: { select: { tasks: true } } },
      orderBy: [{ updatedAt: "desc" }],
    }),
    prisma.client.findMany({ select: { id: true, name: true, organization: true }, orderBy: { name: "asc" } }),
    editingId ? prisma.project.findUnique({ where: { id: editingId } }) : Promise.resolve(null),
  ]);

  return (
    <main className="shell">
      <aside className="sidebar">
        <Link href="/" className="brand"><span className="brand-mark">v.</span><span>ventablk<span className="brand-muted">.co</span><small>AGENCY WORKSPACE</small></span></Link>
        <div className="nav-label">WORKSPACE</div>
        <nav>
          <Link className="nav-item" href="/"><span>◫</span> Overview</Link>
          <Link className="nav-item" href="/clients"><span>♧</span> Clients</Link>
          <Link className="nav-item active" href="/projects" aria-current="page"><span>▦</span> Projects</Link>
          <a className="nav-item" href="/#tasks"><span>☑</span> Tasks &amp; deadlines</a>
          <a className="nav-item" href="/#leads"><span>↗</span> Leads</a>
          <a className="nav-item" href="/#finance"><span>₹</span> Billing</a>
          <a className="nav-item" href="/#maintenance"><span>⟳</span> Maintenance</a>
          <Link className="nav-item" href="/import"><span>⇧</span> Import repository</Link>
        </nav>
        <div className="sidebar-bottom"><span className="status-dot" /> Private workspace <small>Local database · Docker</small></div>
      </aside>
      <section className="content">
        <header className="page-header">
          <div><div className="eyebrow">AGENCY OPERATIONS / PROJECTS</div><h1>Project management</h1><p>Track each website from discovery through launch and maintenance.</p></div>
          <Link href="/projects#project-form" className="primary-button">＋ New project</Link>
        </header>
        {params.saved === "1" && <p className="notice success-notice" role="status">Project saved successfully.</p>}
        {params.error && <p className="notice" role="alert">{errors[params.error] ?? "We couldn't save that project. Please try again."}</p>}
        {clients.length === 0 && <p className="notice" role="status">Add a client first. Projects must be linked to a client. <Link className="table-action" href="/clients">Open client management →</Link></p>}
        <div className="client-workspace">
          <section className="panel client-table-panel">
            <div className="panel-heading"><div><h3>Projects</h3><p>{projects.length} {projects.length === 1 ? "record" : "records"}{query || status ? " matching filters" : " in your workspace"}</p></div></div>
            <form method="get" action="/projects" className="search-form">
              <label className="sr-only" htmlFor="project-search">Search projects</label>
              <input id="project-search" name="q" type="search" placeholder="Search project or client" defaultValue={query} />
              <label className="sr-only" htmlFor="project-status">Filter by status</label>
              <select id="project-status" name="status" defaultValue={status}><option value="">All statuses</option>{statuses.map((s) => <option key={s} value={s}>{statusLabels[s]}</option>)}</select>
              <button type="submit" className="secondary-button">Filter</button>
              {(query || status) && <Link className="text-link" href="/projects">Clear</Link>}
            </form>
            {projects.length ? <div className="client-table-wrap"><table className="client-table">
              <thead><tr><th>Project</th><th>Client</th><th>Status</th><th>Due date</th><th>Budget</th><th><span className="sr-only">Actions</span></th></tr></thead>
              <tbody>{projects.map((project) => <tr key={project.id}>
                <td><div className="table-client"><span className="client-avatar">▦</span><span><strong>{project.name}</strong><small>{project._count.tasks} tasks</small></span></div></td>
                <td><span className="table-contact">{project.client.organization || project.client.name}</span><small className="table-subcontact">{project.client.name}</small></td>
                <td><span className={"status status-" + project.status.toLowerCase()}>{statusLabels[project.status] ?? project.status}</span></td>
                <td><span className="table-date">{project.dueDate ? project.dueDate.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "Not set"}</span></td>
                <td><span className="table-contact">{inr(project.budget)}</span></td>
                <td><Link className="table-action" href={`/projects?edit=${encodeURIComponent(project.id)}#project-form`}>Edit</Link></td>
              </tr>)}</tbody>
            </table></div> : <div className="empty client-empty"><span>▦</span><strong>{query || status ? "No matching projects" : "No projects yet"}</strong><p>{query || status ? "Change or clear the filters to see other projects." : "Create a project and link it to a client to start tracking delivery."}</p>{clients.length > 0 && <Link className="primary-button" href="/projects#project-form">Create your first project</Link>}</div>}
          </section>
          <section className="panel client-form-panel" id="project-form">
            <div className="panel-heading"><div><h3>{editingProject ? "Edit project" : "Create a project"}</h3><p>{editingProject ? "Update the delivery details." : "Start with the client, project name, and delivery stage."}</p></div></div>
            {clients.length === 0 ? <p className="empty"><strong>No clients available</strong><span>Add a client before creating a project.</span></p> : editingId && !editingProject ? <p className="notice" role="alert">That project could not be found. Choose a project from the list.</p> : <ProjectForm clients={clients} project={editingProject ?? undefined} />}
          </section>
        </div>
        <footer><span>VENTABLk.CO <b>·</b> AGENCY WORKSPACE</span><span>Project records stay in your local database.</span></footer>
      </section>
    </main>
  );
}
