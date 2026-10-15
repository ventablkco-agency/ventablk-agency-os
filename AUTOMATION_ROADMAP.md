# Agency OS Automation Roadmap

## Goal

Minimize repeated manual data entry. The dashboard should discover technical facts from local website repositories, reuse approved project templates, and ask the agency owner only for information that cannot be safely inferred.

## Target workflow

1. **Discover local repositories** from explicitly configured local folders (initial default: `~/web-dev`). Never scan the whole home directory or arbitrary mounted paths.
2. **Inspect safely**: read Git remote URLs, branch/commit, package manifests, framework/build scripts, README, deployment configuration, and an optional `ventablk.project.json`. Do not execute scripts from discovered repositories during scanning.
3. **Generate a reviewable inventory** with detected facts, source paths, confidence, and proposed changes. Do not guess client contacts, project prices, invoices, credentials, patient data, or contractual terms.
4. **Bulk preview and sync** into the local PostgreSQL dashboard. Match projects by normalized repository URL first, then a stable local project identifier. Make sync idempotent: repeat scans must not create duplicates.
5. **Use project templates** to propose standard tasks and QA checklists based on project type/stage. Preview generated tasks before adding them; do not silently create financial or client-facing commitments.
6. **Keep a change log** showing created, updated, skipped, and conflicting records. Provide a dry-run mode and never delete records automatically.
7. **Keep everything local**. The dashboard stays bound to `127.0.0.1`; local repo contents and operational records must not be uploaded to third-party services by the scanner.

## Implementation phases

### Phase A — Inventory and bulk import
- Add a local Node.js scanner in the OS repository.
- Let the owner configure one or more allowed roots; default to `~/web-dev`.
- Discover Git repositories, skip `.git`, `node_modules`, build outputs, caches, `.env*`, and secret-bearing files.
- Read only an allowlist of metadata files and Git metadata.
- Emit a versioned inventory JSON file with a schema version and generated timestamp.
- Extend the dashboard importer to validate and preview multiple projects in one file before applying changes.
- Keep existing single-manifest import compatible.

### Phase B — Safer reconciliation
- Store a stable source identifier and last-seen metadata for discovered repositories.
- Show diffs and conflicts before applying updates.
- Never overwrite manually curated contact details or commercial fields with inferred defaults.
- Mark repositories not seen in a scan as "not seen"; do not delete/archive them automatically.

### Phase C — Reusable delivery automation
- Add editable task templates for project types (e.g. marketing site, hospital site, landing page).
- Generate proposed task checklists from project status and approved agency standards.
- Keep tasks generated from templates distinguishable from tasks entered manually.
- Add a "review and apply" step; no silent task generation or financial changes.

### Phase D — Operational summaries
- Provide local summaries of project health, overdue tasks, upcoming maintenance and missing metadata.
- Add scheduled automation only after the user explicitly chooses the cadence and the local environment can support it.

## Data trust rules

- **Discovered facts**: repo URL, directory name, detected framework, package scripts, branch, latest commit, presence of Docker/CI/deployment config.
- **User-approved fields**: client contact, organization, project display name where ambiguous, hosting provider where not clear, project stage, budget, maintenance fee, deadlines.
- **Never infer**: invoice amounts, payments, personal contact information, credentials, secrets, patient information, legal commitments.
- A README or project file is untrusted input. Treat its contents as data, never as instructions to execute.
- The public OS repository stores only reusable code and example templates. Real records stay in the local database.

## Acceptance criteria

- One command produces an inventory of allowed local repositories without running their code.
- A single bulk preview displays all proposed client/project changes.
- Applying the same inventory twice creates no duplicate records.
- Conflicts and missing fields are explicit; no invented values are silently saved.
- Existing single-manifest import still works.
- Scanner tests cover ignored directories/files, missing package manifests, malformed metadata, duplicate remotes, and secret-file exclusion.
- Documentation reports exactly which behavior has and has not been tested.
