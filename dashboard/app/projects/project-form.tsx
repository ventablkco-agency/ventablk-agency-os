import { saveProject } from "./actions";

type ClientOption = { id: string; name: string; organization: string | null };
type ProjectValues = {
  id?: string;
  name?: string;
  clientId?: string;
  websiteUrl?: string | null;
  repositoryUrl?: string | null;
  hosting?: string | null;
  status?: string;
  startDate?: Date | null;
  dueDate?: Date | null;
  budget?: number | null;
  notes?: string | null;
};
const dateValue = (date?: Date | null) => date ? new Date(date).toISOString().slice(0, 10) : "";

const statuses = [
  ["DISCOVERY", "Discovery"], ["DESIGN", "Design"], ["CONTENT", "Content"],
  ["DEVELOPMENT", "Development"], ["QA", "Quality check"], ["LAUNCH", "Launch"],
  ["MAINTENANCE", "Maintenance"], ["ON_HOLD", "On hold"], ["COMPLETED", "Completed"],
];

export default function ProjectForm({ clients, project }: { clients: ClientOption[]; project?: ProjectValues }) {
  return (
    <form action={saveProject} className="client-form">
      {project?.id && <input type="hidden" name="id" value={project.id} />}
      <div className="form-grid">
        <label className="form-full">Project name <span aria-hidden="true">*</span>
          <input name="name" required maxLength={160} defaultValue={project?.name ?? ""} placeholder="e.g. Hospital website redesign" />
        </label>
        <label className="form-full">Client <span aria-hidden="true">*</span>
          <select name="clientId" required defaultValue={project?.clientId ?? ""}>
            <option value="" disabled>Select a client</option>
            {clients.map((client) => <option key={client.id} value={client.id}>{client.organization || client.name} — {client.name}</option>)}
          </select>
        </label>
        <label>Status
          <select name="status" defaultValue={project?.status ?? "DISCOVERY"}>
            {statuses.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
        <label>Project budget (₹)
          <input name="budget" type="number" min="0" step="1" inputMode="numeric" defaultValue={project?.budget ?? ""} placeholder="e.g. 25000" />
        </label>
        <label>Start date
          <input name="startDate" type="date" defaultValue={dateValue(project?.startDate)} />
        </label>
        <label>Due date
          <input name="dueDate" type="date" defaultValue={dateValue(project?.dueDate)} />
        </label>
        <label className="form-full">Website URL
          <input name="websiteUrl" type="url" maxLength={500} placeholder="https://example.com" defaultValue={project?.websiteUrl ?? ""} />
        </label>
        <label className="form-full">Repository URL
          <input name="repositoryUrl" type="url" maxLength={500} placeholder="https://github.com/organization/repository" defaultValue={project?.repositoryUrl ?? ""} />
        </label>
        <label className="form-full">Hosting / platform
          <input name="hosting" maxLength={120} placeholder="e.g. Cloudflare Pages" defaultValue={project?.hosting ?? ""} />
        </label>
        <label className="form-full">Project notes
          <textarea name="notes" rows={3} maxLength={3000} defaultValue={project?.notes ?? ""} />
          <small>Do not store passwords, API keys, patient data, or private credentials here.</small>
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" className="primary-button">{project?.id ? "Save changes" : "Create project"}</button>
        {project?.id && <a className="secondary-button" href="/projects">Cancel</a>}
      </div>
    </form>
  );
}
