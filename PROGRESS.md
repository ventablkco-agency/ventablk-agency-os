# VentaBlk Co. — Progress Tracker

Last updated: 2026-10-15

## Current goal

Finish the laptop-only agency dashboard and remove repetitive data entry through local website-repository discovery, previewable bulk import, stable technical metadata sync and reusable task templates. Apply the agency's five design/QA resources as required workflow gates on every substantial website project.

## Repository and privacy

- Repository: ventablkco-agency/ventablk-agency-os
- Working branch: feature/agency-dashboard-foundation
- Dashboard PR #1 is open and unmerged pending CI/local verification.
- This repository is public. Never commit real client data, credentials, database dumps, generated inventories, patient information, CVs, private invoices or commercial secrets.
- Generated scanner output defaults to ~/ventablk-repository-inventory.json, outside the repository, with owner-only permissions where supported.

## Completed in source

- [x] Dashboard overview and modules for clients, projects, tasks, leads, invoice tracking, maintenance plans, export, settings and single-manifest import.
- [x] Updated dashboard typography and corrected Contact name label/required-marker markup.
- [x] Added AUTOMATION_ROADMAP.md for local discovery, reconciliation and proposed task-template workflows.
- [x] Made the five listed design/QA resources mandatory review gates in AGENTS.md and skills/ventablk-website-workflow/SKILL.md. Manual fallbacks are required when upstream tools are unavailable; no tool run may be claimed without evidence.
- [x] Added a Node.js website-repository scanner at scripts/repo-scanner.mjs and tests at scripts/repo-scanner.test.mjs.
- [x] Scanner examines Git metadata, package manifests and top-level names only; identifies likely website repositories, excludes the Agency OS checkout itself, sanitizes remote URLs and never runs project scripts or reads environment/credential contents.
- [x] Added a local inventory preview and batch import UI at dashboard/app/import/bulk-import-form.tsx, preserving the existing single-manifest flow.
- [x] Added explicit client mapping and bulk assignment for unresolved projects; imports use stable source IDs, avoid duplicate creates on repeat scans, and skip cross-client conflicts.
- [x] Added project fields for framework, relative source directory, branch, commit and last-scan time. Import refreshes technical metadata while preserving project status, deadlines, budget, notes and manually set website/hosting values.
- [x] Root .gitignore excludes local generated inventory files.
- [x] CI now runs scanner tests and builds the dashboard/Prisma Client when relevant files change.

## CI and local verification

- [x] A GitHub Actions run completed successfully for a prior commit containing the scanner and bulk importer changes; the scanner test step and dashboard production build both passed.
- [ ] A newer commit adds extra scanner filtering, technical metadata fields and preview validation; verify the latest PR CI run after it completes.
- [ ] User must pull the latest branch and rebuild the local Docker dashboard; database schema changes are applied by the dashboard startup command.
- [ ] Run the scanner against ~/web-dev and review the generated inventory before importing.
- [ ] Test first import and second repeated import, existing-project updates, new-client metadata creation, bulk client mapping and cross-client conflict handling in the local dashboard.
- [ ] Verify Playwright MCP and external skill tools actually start in VS Code. Their repository instructions alone do not install them.

## Next implementation after verification

- [ ] Add an auditable import change log and clearer conflict details.
- [ ] Add reusable project-specific task templates (marketing site, hospital website, landing page) with a preview/apply step.
- [ ] Add local project health summaries for missing metadata, upcoming maintenance and overdue tasks.
- [ ] Keep automated reminders and backups out of scope until the user chooses a cadence and a reliable local execution strategy.

## Exact next step

Pull the feature branch, run the scanner test suite, scan ~/web-dev to ~/ventablk-repository-inventory.json, inspect that file, then rebuild the dashboard and test one or two fictional repository imports locally.
