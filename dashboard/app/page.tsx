import Link from "next/link";
import { prisma } from "@/lib/prisma";

// This page reads live PostgreSQL records and must render at request time,
// not during the Docker image build when DATABASE_URL is unavailable.
export const dynamic = "force-dynamic";

const inr = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

const projectLabels: Record<string, string> = {
  DISCOVERY: "Discovery", DESIGN: "Design", CONTENT: "Content", DEVELOPMENT: "Development",
  QA: "Quality check", LAUNCH: "Launch", MAINTENANCE: "Maintenance", ON_HOLD: "On hold", COMPLETED: "Completed",
};

export default async function DashboardPage() {
  const [clients, projects, tasks, invoices, leads, maintenance] = await Promise.all([
    prisma.client.findMany({ orderBy: { updatedAt: "desc" }, take: 5 }),
    prisma.project.findMany({ include: { client: true }, orderBy: { updatedAt: "desc" }, take: 6 }),
    prisma.task.findMany({ where: { status: { not: "DONE" } }, include: { project: { include: { client: true } } }, orderBy: [{ dueDate: "asc" }, { createdAt: "desc" }], take: 6 }),
    prisma.invoice.findMany({ where: { status: { in: ["SENT", "PARTIALLY_PAID", "OVERDUE"] } } }),
    prisma.lead.findMany({ where: { status: { notIn: ["WON", "LOST"] } }, orderBy: { updatedAt: "desc" }, take: 5 }),
    prisma.maintenancePlan.findMany({ where: { active: true } }),
  ]);

  const outstanding = invoices.reduce((sum, invoice) => sum + Math.max(0, invoice.amount - invoice.amountPaid), 0);
  const now = new Date();
  const overdueTasks = tasks.filter((task) => task.dueDate && task.dueDate < now).length;

  return (
    <main className="shell">
      <aside className="sidebar">
        <Link href="/" className="brand"><span className="brand-mark">v.</span><span>ventablk<span className="brand-muted">.co</span><small>AGENCY WORKSPACE</small></span></Link>
        <div className="nav-label">WORKSPACE</div>
        <nav>
          <a className="nav-item active" href="#overview"><span>◫</span> Overview</a>
          <Link className="nav-item" href="/clients"><span>♧</span> Clients</Link>
          <a className="nav-item" href="#projects"><span>▦</span> Projects</a>
          <a className="nav-item" href="#tasks"><span>☑</span> Tasks & deadlines</a>
          <a className="nav-item" href="#leads"><span>↗</span> Leads</a>
          <a className="nav-item" href="#finance"><span>₹</span> Billing</a>
          <a className="nav-item" href="#maintenance"><span>⟳</span> Maintenance</a>
        </nav>
        <div className="sidebar-bottom"><span className="status-dot" /> Private workspace <small>Local database · Docker</small></div>
      </aside>

      <section className="content" id="overview">
        <header className="topbar"><div><div className="eyebrow">AGENCY OPERATIONS / OVERVIEW</div><h1>Good to have you here.</h1><p>Your clients, projects, and next actions in one place.</p></div><div className="today">{now.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}<span className="avatar">V</span></div></header>

        <div className="welcome"><div><span className="welcome-tag">YOUR AGENCY AT A GLANCE</span><h2>Build good work.<br/><span>Keep every detail in control.</span></h2><p>A single workspace for the work behind every website you deliver.</p></div><div className="welcome-art" aria-hidden="true"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="orb-core">v.</div><span className="orbit-label label-one">CLIENTS</span><span className="orbit-label label-two">DELIVERY</span><span className="orbit-label label-three">GROWTH</span></div></div>

        <div className="section-heading"><div><h2>Operations snapshot</h2><p>Current workload and items that need attention.</p></div><span className="live-pill"><i/> LIVE DATA</span></div>
        <div className="stats-grid">
          <article className="stat-card"><div className="stat-top"><span>Active clients</span><span className="stat-icon blue">♧</span></div><strong>{clients.length}</strong><small>Recently updated records</small></article>
          <article className="stat-card"><div className="stat-top"><span>Active projects</span><span className="stat-icon purple">▦</span></div><strong>{projects.filter((p) => p.status !== "COMPLETED").length}</strong><small>Across all client work</small></article>
          <article className="stat-card"><div className="stat-top"><span>Outstanding</span><span className="stat-icon amber">₹</span></div><strong>{inr(outstanding)}</strong><small>Unpaid invoice balance</small></article>
          <article className="stat-card"><div className="stat-top"><span>Open leads</span><span className="stat-icon green">↗</span></div><strong>{leads.length}</strong><small>Opportunities in progress</small></article>
        </div>

        <div className="main-grid">
          <section className="panel" id="projects"><div className="panel-heading"><div><h3>Recent projects</h3><p>Keep delivery moving.</p></div><span className="panel-count">{projects.length} shown</span></div>
            {projects.length ? <div className="project-list">{projects.map((project) => <div className="project-row" key={project.id}><div className="project-symbol">{project.client.organization?.slice(0, 1) || project.client.name.slice(0, 1)}</div><div className="project-info"><strong>{project.name}</strong><span>{project.client.organization || project.client.name}</span></div><span className={"status status-" + project.status.toLowerCase()}>{projectLabels[project.status] || project.status}</span><div className="progress-track"><i style={{ width: project.status === "COMPLETED" ? "100%" : project.status === "LAUNCH" ? "88%" : project.status === "QA" ? "78%" : project.status === "DEVELOPMENT" ? "60%" : project.status === "CONTENT" ? "40%" : project.status === "DESIGN" ? "25%" : "12%" }} /></div></div>)}</div> : <div className="empty"><span>▦</span><strong>No projects yet</strong><p>Your projects will appear here once records are added.</p></div>}
          </section>

          <section className="panel" id="tasks"><div className="panel-heading"><div><h3>Next actions</h3><p>Tasks and deadlines to stay ahead of.</p></div><span className="panel-count">{tasks.length} open</span></div>
            {tasks.length ? <div className="task-list">{tasks.map((task) => <div className="task-row" key={task.id}><span className={"task-check " + (task.dueDate && task.dueDate < now ? "late" : "")}></span><div><strong>{task.title}</strong><span>{task.project.name} · {task.project.client.name}</span></div><time className={task.dueDate && task.dueDate < now ? "late-text" : ""}>{task.dueDate ? task.dueDate.toLocaleDateString("en-IN", { day: "numeric", month: "short" }) : "No due date"}</time></div>)}</div> : <div className="empty"><span>☑</span><strong>Nothing urgent right now</strong><p>Tasks assigned to projects will show up here.</p></div>}
            {overdueTasks > 0 && <div className="notice">{overdueTasks} task(s) may be overdue. Review deadlines.</div>}
          </section>

          <section className="panel" id="clients"><div className="panel-heading"><div><h3>Recent clients</h3><p>Relationships at the centre of the work.</p></div><Link className="table-action" href="/clients">Manage clients →</Link></div>
            {clients.length ? <div className="client-list">{clients.map((client) => <div className="client-row" key={client.id}><div className="client-avatar">{(client.organization || client.name).slice(0, 1).toUpperCase()}</div><div><strong>{client.organization || client.name}</strong><span>{client.email || client.name}</span></div><span className="client-arrow">↗</span></div>)}</div> : <div className="empty"><span>♧</span><strong>Your client list starts here</strong><p>Add client records in the next build stage.</p></div>}
          </section>

          <section className="panel" id="leads"><div className="panel-heading"><div><h3>Lead pipeline</h3><p>Potential work to follow up.</p></div><span className="panel-count">{leads.length} active</span></div>
            {leads.length ? <div className="lead-list">{leads.map((lead) => <div className="lead-row" key={lead.id}><div><strong>{lead.organization}</strong><span>{lead.contactName || lead.service || "New opportunity"}</span></div><span className={"lead-stage stage-" + lead.status.toLowerCase()}>{lead.status.replaceAll("_", " ")}</span>{lead.nextFollowUp && <time>{lead.nextFollowUp.toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</time>}</div>)}</div> : <div className="empty"><span>↗</span><strong>No open leads recorded</strong><p>Keep prospects and follow-ups together here.</p></div>}
          </section>
        </div>

        <div className="bottom-grid">
          <section className="mini-panel" id="finance"><div className="mini-icon amber">₹</div><div><h3>Billing overview</h3><p>{invoices.length} invoice(s) need payment follow-up.</p><strong>{inr(outstanding)} <small>outstanding</small></strong></div></section>
          <section className="mini-panel" id="maintenance"><div className="mini-icon green">⟳</div><div><h3>Maintenance plans</h3><p>Recurring client support.</p><strong>{maintenance.length} <small>active plan(s)</small></strong></div></section>
        </div>
        <footer><span>VENTABLk.CO <b>·</b> AGENCY WORKSPACE</span><span>Private by design. Keep client data out of GitHub.</span></footer>
      </section>
    </main>
  );
}
