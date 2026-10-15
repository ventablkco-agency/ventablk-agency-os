import { saveClient } from "./actions";

type ClientFormValues = {
  id?: string;
  name?: string | null;
  organization?: string | null;
  email?: string | null;
  phone?: string | null;
  website?: string | null;
  notes?: string | null;
};

export default function ClientForm({ client }: { client?: ClientFormValues }) {
  return (
    <form action={saveClient} className="client-form">
      {client?.id && <input type="hidden" name="id" value={client.id} />}
      <div className="form-grid">
        <label>
          Contact name <span aria-hidden="true">*</span>
          <input name="name" required maxLength={120} defaultValue={client?.name ?? ""} autoComplete="name" />
        </label>
        <label>
          Organization
          <input name="organization" maxLength={160} defaultValue={client?.organization ?? ""} autoComplete="organization" />
        </label>
        <label>
          Email
          <input name="email" type="email" maxLength={254} defaultValue={client?.email ?? ""} autoComplete="email" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" maxLength={40} defaultValue={client?.phone ?? ""} autoComplete="tel" />
        </label>
        <label className="form-full">
          Website
          <input name="website" type="url" placeholder="https://example.com" maxLength={500} defaultValue={client?.website ?? ""} />
        </label>
        <label className="form-full">
          Internal notes
          <textarea name="notes" rows={3} maxLength={2000} defaultValue={client?.notes ?? ""} />
          <small>Do not store passwords, hosting credentials, patient information, or other sensitive data here.</small>
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" className="primary-button">{client?.id ? "Save changes" : "Add client"}</button>
        {client?.id && <a className="secondary-button" href="/clients">Cancel</a>}
      </div>
    </form>
  );
}
