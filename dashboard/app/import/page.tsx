import Link from "next/link";
import { importProjectManifest } from "./actions";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ error?: string; success?: string; client?: string; project?: string }>;

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
  return (
    <main className="shell">
      <aside className="sidebar">
        <Link href="/" className="brand"><span className="brand-mark">v.</span><span>ventablk<span className="brand-muted">.co</span><small>AGENCY WORKSPACE</small></span></Link>
        <div className="nav-label">WORKSPACE</div>
        <nav>
          <Link className="nav-item" href="/"><span>◫</span> Overview</Link>
          <Link className="nav-item" href="/clients"><span>♧</span> Clients</Link>
          <Link className="nav-item" href="/projects"><span>▦</span> Projects</Link>
          <a className="nav-item" href="/#tasks"><span>☑</span> Tasks &amp; deadlines</a>
          <a className="nav-item" href="/#leads"><span>↗</span> Leads</a>
          <a className="nav-item" href="/#finance"><span>₹</span> Billing</a>
          <a className="nav-item" href="/#maintenance"><span>⟳</span> Maintenance</a>
          <Link className="nav-item active" href="/import" aria-current="page"><span>⇧</span> Import repository</Link>
        </nav>
        <div className="sidebar-bottom"><span className="status-dot" /> Private workspace <small>Local database · Docker</small></div>
      </aside>
      <section className="content">
        <header className="page-header"><div><div className="eyebrow">AGENCY OPERATIONS / IMPORT</div><h1>Import website project</h1><p>Populate client and project records from a manifest in your local website repository.</p></div></header>
        {params.success === "1" && <p className="notice success-notice" role="status">Import complete. Client: {params.client === "updated" ? "updated" : "created"}. Project: {params.project === "updated" ? "updated" : "created"}. Review both records before continuing.</p>}
        {params.error && <p className="notice" role="alert">{errors[params.error] ?? "The import could not be completed. Check the file and try again."}</p>}
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
