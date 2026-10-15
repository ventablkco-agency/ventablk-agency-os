import Link from "next/link";
import { importProjectManifest } from "./actions";
import BulkImportForm from "./bulk-import-form";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ error?: string; success?: string; client?: string; project?: string; bulkError?: string; bulkSuccess?: string; createdProjects?: string; updatedProjects?: string; createdClients?: string; conflicts?: string }>;

const errors: Record<string, string> = {
  "file-required": "Choose a JSON manifest file first.",
  "file-too-large": "The manifest is too large. Keep it under 64 KB.",
  "invalid-json": "This file is not valid JSON. Check its syntax and try again.",
  "invalid-shape": "The manifest must be a JSON object.",
  "missing-sections": "The manifest must contain both client and project objects.",
  "client-name-required": "Add a client contact name or organization.",
  "project-name-required": "Add a project name.",
  "invalid-email": "The client email is not valid.",
  "invalid-url": "Website and repository URLs must start with http:// or https://.",
  "invalid-status": "The project status is not recognized.",
  "invalid-budget": "Budget must be a non-negative whole number in rupees.",
};

export default async function ImportPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const [clients, projects] = await Promise.all([
    prisma.client.findMany({ select: { id: true, name: true, organization: true }, orderBy: { name: "asc" } }),
    prisma.project.findMany({ select: { sourceId: true, repositoryUrl: true, clientId: true, name: true } }),
  ]);
  const bulkErrors: Record<string, string> = {
    "inventory-required": "Choose a repository inventory file first.",
    "inventory-too-large": "The inventory is too large. Scan fewer repositories or exclude archived folders.",
    "invalid-json": "The inventory or mapping data is invalid JSON. Select the generated inventory again.",
    "invalid-inventory": "Unsupported inventory format. Generate a fresh inventory using the repository scanner.",
    "invalid-mappings": "Client mappings are missing. Refresh the page and retry.",
    "invalid-repository": "One or more repository records are incomplete. Regenerate the inventory.",
    "duplicate-source": "This inventory contains duplicate repository identifiers. Resolve duplicates and rescan.",
    "invalid-url": "A website or repository URL must use http:// or https://.",
    "unmapped-client": "Choose a client for every repository before importing.",
    "missing-client-metadata": "A new client can only be created from explicitly approved client name/organization metadata.",
  };
  return (
    <main className="shell">
      <aside className="sidebar">
        <Link href="/" className="brand"><span className="brand-mark">v.</span><span>ventablk<span className="brand-muted">.co</span><small>AGENCY WORKSPACE</small></span></Link>
        <div className="nav-label">WORKSPACE</div>
        <nav>
          <Link className="nav-item" href="/"><span>◫</span> Overview</Link>
          <Link className="nav-item" href="/clients"><span>♧</span> Clients</Link>
          <Link className="nav-item" href="/projects"><span>▦</span> Projects</Link>
          <Link className="nav-item" href="/tasks"><span>☑</span> Tasks &amp; deadlines</Link>
          <Link className="nav-item" href="/leads"><span>↗</span> Leads</Link>
          <Link className="nav-item" href="/invoices"><span>₹</span> Billing</Link>
          <Link className="nav-item" href="/maintenance"><span>⟳</span> Maintenance</Link>
          <Link className="nav-item active" href="/import" aria-current="page"><span>⇧</span> Import repository</Link>
          <Link className="nav-item" href="/settings"><span>⚙</span> Workspace settings</Link>
        </nav>
        <div className="sidebar-bottom"><span className="status-dot" /> Private workspace <small>Local database · Docker</small></div>
      </aside>
      <section className="content">
        <header className="page-header"><div><div className="eyebrow">AGENCY OPERATIONS / IMPORT</div><h1>Import website project</h1><p>Populate client and project records from a manifest in your local website repository.</p></div></header>
        {params.success === "1" && <p className="notice success-notice" role="status">Import complete. Client: {params.client === "updated" ? "updated" : "created"}. Project: {params.project === "updated" ? "updated" : "created"}. Review both records before continuing.</p>}
        {params.error && <p className="notice" role="alert">{errors[params.error] ?? "The import could not be completed. Check the file and try again."}</p>}
        {params.bulkError && <p className="notice" role="alert">{bulkErrors[params.bulkError] ?? "The repository inventory could not be imported. Review the file and try again."}</p>}
        {params.bulkSuccess === "1" && <p className="notice success-notice" role="status">Repository sync complete. Projects created: {params.createdProjects || "0"}; projects updated: {params.updatedProjects || "0"}; clients created from approved metadata: {params.createdClients || "0"}; client conflicts skipped: {params.conflicts || "0"}.</p>}
        <section className="panel import-panel bulk-import-panel">
          <div className="panel-heading"><div><h3>Scan and import repositories</h3><p>Preview detected projects and map each to a client before importing in one batch.</p></div></div>
          <BulkImportForm clients={clients} projects={projects} />
        </section>
        <section className="panel import-panel">
          <div className="panel-heading"><div><h3>Choose a project manifest</h3><p>Only the selected JSON file is read; the dashboard does not scan your repository.</p></div></div>
          <form action={importProjectManifest} className="client-form import-form">
            <label className="file-picker">Manifest file
              <input type="file" name="manifest" accept=".json,application/json" required />
            </label>
            <div className="notice">Importing may update a matching client and project. A matching repository URL is used to identify an existing project. Review the preview file before importing and avoid putting secrets or private client information in the manifest.</div>
            <button type="submit" className="primary-button">Validate and import</button>
          </form>
          <div className="manifest-help">
            <h3>Manifest example</h3>
            <p>Create <code>ventablk.project.json</code> in the root of a website repository. Use only approved project metadata.</p>
            <pre><code>{JSON.stringify({client:{name:"Project contact",organization:"Example Hospital",email:"",phone:"",website:""},project:{name:"Hospital website",websiteUrl:"https://example.com",repositoryUrl:"https://github.com/your-agency/example-site",hosting:"Cloudflare Pages",status:"DEVELOPMENT",budget:25000,notes:""}},null,2)}</code></pre>
            <p className="muted-copy">Supported statuses: DISCOVERY, DESIGN, CONTENT, DEVELOPMENT, QA, LAUNCH, MAINTENANCE, ON_HOLD, COMPLETED.</p>
          </div>
        </section>
        <footer><span>VENTABLk.CO <b>·</b> AGENCY WORKSPACE</span><span>Import runs locally against your dashboard database.</span></footer>
      </section>
    </main>
  );
}
