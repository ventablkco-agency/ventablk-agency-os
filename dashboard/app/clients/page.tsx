import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ClientForm from "./client-form";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ q?: string; edit?: string; saved?: string; error?: string }>;

const errors: Record<string, string> = {
  "name-required": "Enter a contact name before saving.",
  "invalid-email": "Enter a valid email address or leave the field blank.",
  "website-protocol": "Website URLs must start with https:// or http://.",
};

export default async function ClientsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const query = (params.q ?? "").trim().slice(0, 100);
  const editingId = params.edit ?? "";
  const [clients, editingClient] = await Promise.all([
    prisma.client.findMany({
      where: query ? {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { organization: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
          { phone: { contains: query, mode: "insensitive" } },
        ],
      } : undefined,
      include: { _count: { select: { projects: true, leads: true } } },
      orderBy: { updatedAt: "desc" },
    }),
    editingId ? prisma.client.findUnique({ where: { id: editingId } }) : Promise.resolve(null),
  ]);

  return (
    <main className="shell">
      <aside className="sidebar">
        <Link href="/" className="brand"><span className="brand-mark">v.</span><span>ventablk<span className="brand-muted">.co</span><small>AGENCY WORKSPACE</small></span></Link>
        <div className="nav-label">WORKSPACE</div>
        <nav>
          <Link className="nav-item" href="/"><span>◫</span> Overview</Link>
          <Link className="nav-item active" href="/clients" aria-current="page"><span>♧</span> Clients</Link>
          <Link className="nav-item" href="/projects"><span>▦</span> Projects</Link>
          <Link className="nav-item" href="/tasks"><span>☑</span> Tasks &amp; deadlines</Link>
          <Link className="nav-item" href="/leads"><span>↗</span> Leads</Link>
          <Link className="nav-item" href="/invoices"><span>₹</span> Billing</Link>
          <Link className="nav-item" href="/maintenance"><span>⟳</span> Maintenance</Link>
          <Link className="nav-item" href="/import"><span>⇧</span> Import repository</Link>
        </nav>
        <div className="sidebar-bottom"><span className="status-dot" /> Private workspace <small>Local database · Docker</small></div>
      </aside>

      <section className="content">
        <header className="page-header">
          <div>
            <div className="eyebrow">AGENCY OPERATIONS / CLIENTS</div>
            <h1>Client management</h1>
            <p>Keep client contacts and website relationships organized.</p>
          </div>
          <Link href="/clients#client-form" className="primary-button">＋ Add client</Link>
        </header>

        {params.saved === "1" && <p className="notice success-notice" role="status">Client details saved successfully.</p>}
        {params.error && <p className="notice" role="alert">{errors[params.error] ?? "We couldn't save that client. Please try again."}</p>}

        <div className="client-workspace">
          <section className="panel client-table-panel">
            <div className="panel-heading">
              <div><h3>Clients</h3><p>{clients.length} {clients.length === 1 ? "record" : "records"}{query ? " matching your search" : " in your workspace"}</p></div>
            </div>
            <form method="get" action="/clients" className="search-form">
              <label className="sr-only" htmlFor="client-search">Search clients</label>
              <input id="client-search" name="q" type="search" placeholder="Search name, organization, email or phone" defaultValue={query} />
              <button type="submit" className="secondary-button">Search</button>
              {query && <Link className="text-link" href="/clients">Clear</Link>}
            </form>

            {clients.length ? (
              <div className="client-table-wrap">
                <table className="client-table">
                  <thead><tr><th>Client</th><th>Contact</th><th>Work</th><th>Updated</th><th><span className="sr-only">Actions</span></th></tr></thead>
                  <tbody>
                    {clients.map((client) => (
                      <tr key={client.id}>
                        <td><div className="table-client"><span className="client-avatar">{(client.organization || client.name).slice(0, 1).toUpperCase()}</span><span><strong>{client.organization || client.name}</strong><small>{client.organization ? client.name : "Individual client"}</small></span></div></td>
                        <td><span className="table-contact">{client.email || "—"}</span><small className="table-subcontact">{client.phone || "No phone"}</small></td>
                        <td><span className="work-count">{client._count.projects} projects</span><small className="table-subcontact">{client._count.leads} linked leads</small></td>
                        <td><span className="table-date">{client.updatedAt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span></td>
                        <td><Link className="table-action" href={`/clients?edit=${encodeURIComponent(client.id)}#client-form`}>Edit</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : <div className="empty client-empty"><span>♧</span><strong>{query ? "No matching clients" : "Your client list starts here"}</strong><p>{query ? "Try a different name, organization, email, or phone number." : "Add your first client to begin tracking website projects and ongoing support."}</p>{!query && <Link className="primary-button" href="/clients#client-form">Add your first client</Link>}</div>}
          </section>

          <section className="panel client-form-panel" id="client-form">
            <div className="panel-heading"><div><h3>{editingClient ? "Edit client" : "Add a client"}</h3><p>{editingClient ? "Update the saved contact details." : "Add the essential details to your local workspace."}</p></div></div>
            {editingId && !editingClient ? <p className="notice" role="alert">That client record could not be found. Choose a client from the list.</p> : <ClientForm key={editingClient?.id ?? "new"} client={editingClient ?? undefined} />}
          </section>
        </div>
        <footer><span>VENTABLk.CO <b>·</b> AGENCY WORKSPACE</span><span>Client records stay in your local database.</span></footer>
      </section>
    </main>
  );
}
