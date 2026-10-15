# Ventablk Agency Dashboard

Private, self-hosted workspace for agency clients, leads, projects, tasks, invoices, and maintenance plans.

## Architecture

- Next.js web dashboard
- PostgreSQL database persisted in a Docker volume
- HTTP Basic Authentication using a locally configured password
- Docker publishes the web app on **127.0.0.1 only**
- Optional Tailscale Serve provides private HTTPS access from your enrolled phone without exposing the app publicly

The dashboard source is in this public repository, but operational records stay in the local PostgreSQL Docker volume. Never commit a real `.env` file, client records, database dumps, or credentials.

## Run on your laptop

Requirements: Docker Desktop and a Tailscale account if you want access away from your home/local Wi-Fi.

1. Open a terminal in this `dashboard` directory.
2. Copy `.env.example` to `.env`.
3. Replace both placeholder values with different, long random passwords. Do not commit `.env`.
4. Start the services:

   ```bash
   docker compose up -d --build
   ```

5. Open http://127.0.0.1:3000. When prompted, use username `agency` and the value you set for `DASHBOARD_PASSWORD`.

PostgreSQL is initialized automatically when the app starts. The database lives in the `agency_db` Docker volume and survives normal container restarts.

## Private phone access with Tailscale

1. Install Tailscale on the laptop and phone, sign both into the same private tailnet, and enable device approval/lock where available.
2. Keep the dashboard container running on the laptop.
3. On the laptop, run:

   ```bash
   tailscale serve --bg http://127.0.0.1:3000
   ```

4. Run `tailscale serve status` to see the private HTTPS address Tailscale assigned. Open that address on the phone while Tailscale is connected, then authenticate with the dashboard password.

Tailscale Serve is intended for private tailnet access; do not use Funnel or publish port 3000 to the internet. The Compose port is intentionally bound to localhost. If your Tailscale version uses different Serve syntax, follow the CLI help for that installed version.

## Useful commands

```bash
docker compose up -d --build   # start/rebuild
docker compose logs -f app     # inspect app logs
docker compose ps              # check service health
docker compose down            # stop services, keep database volume
docker compose down -v         # DESTRUCTIVE: also deletes the database volume
```

## Current MVP scope

The dashboard reads live records from PostgreSQL and presents an operations overview: clients, projects, outstanding invoice balances, open leads, tasks/deadlines, and maintenance plans. Record creation/edit forms, database backup/export, stronger session-based authentication, and automated reminders are follow-up implementation steps.

## Before storing real client data

- Confirm the laptop's disk encryption and OS login are enabled.
- Use unique passwords and keep the laptop/phone OS updated.
- Set up and test encrypted database backups to a location separate from this laptop.
- Treat Basic Auth as an initial access gate, not a substitute for secure device access.
- Do not store passwords, API keys, hosting credentials, patient data, or sensitive client documents in free-text notes.
- Because this repository is public, only the app's reusable source code belongs here. Client data belongs in the local database.
