# VentaBlk Co. — Progress Tracker

Last updated: 2026-10-16

## Current goal

Finish the laptop-only agency dashboard and reduce repetitive manual work through local repository discovery, reviewable bulk import, reusable task templates, and a mandatory website design/QA workflow.

## Repository and safety

- Repository: ventablkco-agency/ventablk-agency-os
- Working branch: feature/agency-dashboard-foundation
- Dashboard PR #1 remains open and unmerged pending local build and feature verification.
- This repository is public. Never commit real client data, credentials, database dumps, generated inventory files, patient information, CVs or private invoices.

## Completed

- [x] Dashboard foundation and modules for clients, projects, tasks, leads, invoice tracking, maintenance plans, JSON export and single-manifest import.
- [x] Updated dashboard typography and fixed the Contact name label/required-marker markup.
- [x] Defined AUTOMATION_ROADMAP.md for local discovery, bulk review/import, reconciliation and project task templates.
- [x] Added repository-native skills index and mandatory design/implementation/QA gates for the five required resources.
- [x] Added local repository scanner source in scripts/repo-scanner.mjs and automated tests in scripts/repo-scanner.test.mjs.

## Scanner behavior in source

- [x] Scans configured root (default ~/web-dev) and discovers Git repositories without descending inside repositories, dependencies or build/cache folders.
- [x] Reads Git remote/branch/commit, package manifest framework clues and top-level hosting/CI configuration-file presence.
- [x] Reads only allowlisted fields from optional ventablk.project.json.
- [x] Does not run project scripts, read .env contents or README bodies, collect contacts/budgets, or send data over the network.
- [x] Writes owner-only inventory JSON outside the repo by default and supports explicit exclusions.

## Not yet verified / remaining work

- [ ] Scanner has not run in the user's local environment; automated tests must be run there.
- [ ] Dashboard bulk preview/reconciliation is not implemented yet; the current dashboard importer supports one project manifest.
- [ ] Idempotent batch sync, client mapping UI, change log and generated task-template preview are pending.
- [ ] Complete dashboard production build, key flows and Playwright browser verification need local confirmation.
- [ ] External skill installations and Playwright MCP availability must be verified in VS Code; repo documentation alone does not install tools.

## Next step

Pull the feature branch, run scanner tests, scan ~/web-dev and inspect the inventory locally. Then implement dashboard bulk preview and safe apply.
