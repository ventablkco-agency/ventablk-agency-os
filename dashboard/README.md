# Ventablk Agency Dashboard

Private, laptop-only workspace for agency clients, leads, projects, tasks, invoices, and maintenance plans.

## Architecture

- Next.js web dashboard
- PostgreSQL database persisted in a Docker volume
- HTTP Basic Authentication using a locally configured password
- Docker publishes the web app on **127.0.0.1 only**

The dashboard must be running on the laptop to be available. If the laptop is off or Docker Desktop is stopped, the dashboard is unavailable. The database remains in the Docker volume across normal container restarts. Phone access and cloud hosting are intentionally out of scope for now.

The dashboard source is in this public repository, but operational records stay in the local PostgreSQL Docker volume. Never commit a real `.env` file, client records, database dumps, or credentials.

## Run on your laptop

Requirements: Docker Desktop and Git.

1. Open a terminal in this `dashboard` directory.
2. Copy `.env.example` to `.env`.
3. Replace both placeholder values with different, long random passwords. Do not commit `.env`.
4. Start the services:

   ```bash
   docker compose up -d --build
   ```

5. Open http://127.0.0.1:3000. When prompted, use username `agency` and the value you set for `DASHBOARD_PASSWORD`.

PostgreSQL is initialized automatically when the app starts. The database lives in the `agency_db` Docker volume and survives normal container restarts.

## Useful commands

```bash
docker compose up -d --build   # start/rebuild
docker compose logs -f app     # inspect app logs
docker compose ps              # check service health
docker compose down            # stop services, keep database volume
docker compose down -v         # DESTRUCTIVE: also deletes the database volume
```

## Dashboard modules

- Overview with live operational counts and recent records.
- Client records: create, edit, and search.
- Website projects: create, edit, filter by status, and link to clients.
- Tasks and deadlines: create, edit, search, filter by status, and flag overdue work.
- Leads: create, edit, search, track pipeline stages, estimated value, and follow-up dates.
- Invoice tracking: create/edit invoices, record amounts paid, calculate outstanding balances, and flag overdue invoices. This is an internal tracker, not a tax-invoice generator or payment processor.
- Maintenance plans: create/edit recurring care plans, fees, next billing dates, and active/inactive state. Billing reminders and automatic charges are not enabled.
- Repository manifest importer to populate client/project records from a selected JSON file; it does not scan repositories automatically.
- Workspace settings with authenticated JSON data export and a documented PostgreSQL backup command.

## Verification status

The user has confirmed the local project-manifest importer worked. The latest bundled modules were written to the feature branch, but the complete dashboard must still be rebuilt and exercised locally before this branch is considered verified. Automated reminders, automated backups, and stronger session-based authentication are not implemented.

## Before storing real client data

- Confirm the laptop's disk encryption and OS login are enabled.
- Use unique passwords and keep the laptop OS updated.
- Set up and test encrypted database backups to a location separate from this laptop.
- Treat Basic Auth as an initial access gate, not a substitute for secure device access.
- Do not store passwords, API keys, hosting credentials, patient data, or sensitive client documents in free-text notes.
- Because this repository is public, only the app's reusable source code belongs here. Client data belongs in the local database.
