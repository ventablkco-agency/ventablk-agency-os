# VentaBlk Co. — Progress Tracker

Last updated: 2026-10-15

## Current goal

Finish the laptop-only agency dashboard foundation and establish a repeatable design and browser QA workflow before local setup. Siddaganga Hospital work is paused unless explicitly requested.

## Verified repository state

- Repository: `ventablkco-agency/ventablk-agency-os`
- Default branch: `main`
- Current working branch: `feature/agency-dashboard-foundation`
- Dashboard foundation pull request: https://github.com/ventablkco-agency/ventablk-agency-os/pull/1
- Repository visibility was verified as **public** on 2026-10-15. Do not add real client-specific or commercially sensitive information while it remains public.

## Completed

- [x] Created the initial dashboard foundation on `feature/agency-dashboard-foundation`: Next.js, PostgreSQL/Prisma schema, Docker Compose, local password gate, and read-only overview UI.
- [x] Added `AGENTS.md` with repository-wide coding, design, QA, and privacy rules.
- [x] Added `AGENT_SKILLS.md` documenting VoltAgent Awesome DESIGN.md, Impeccable, Taste Skill, Vercel Web Design Guidelines, and Microsoft Playwright MCP.
- [x] Added `dashboard/DESIGN.md` for the dashboard's light-theme, laptop-first visual and interaction standards.
- [x] Added `.vscode/mcp.json` with the Microsoft Playwright MCP server configuration.
- [x] Updated the root README to link the new operating documents.
- [x] Updated dashboard instructions to keep phone access out of current scope.
- [x] Preserved the rule that the public repository must not contain real client records, secrets, credentials, patient information, or private invoices.

## Not yet verified

- [ ] Skills have **not yet been installed into the laptop's coding-agent environment**. The repository documents the upstream installation commands; run them locally and verify they are discovered by the chosen agent.
- [ ] Playwright MCP configuration has been committed but has **not yet been started or verified in VS Code**.
- [ ] Docker image build and dashboard runtime have not been tested.
- [ ] Dashboard CRUD forms, backup/export, stronger authentication, and reminders remain future implementation work.
- [ ] The dashboard pull request remains unmerged until local testing passes.

## Working agreements

1. Work one step at a time and keep user-facing updates concise.
2. Inspect existing work before changing it; preserve approved designs and production behavior.
3. Never claim a file, feature, permission, test, or deployment is complete without verification.
4. Keep credentials, secrets, patient data, and private client information out of this repository.
5. Update this file after each meaningful session with completed work, blockers, decisions, and the exact next step.
6. Read `AGENTS.md`, `AGENT_SKILLS.md`, and the relevant project design/technical standards before UI work.
7. Use external design skills as complementary guidance, not as authority over approved client requirements.
8. Treat the client lifecycle as approved but adaptable; document meaningful revisions.

## Current caution

The repository is public. Keep it limited to reusable templates, source code, and process documentation. Do not commit real client records, private invoices, bank/UPI details, credentials, patient information, applicant CVs, or commercially sensitive client-specific material.

The dashboard is an early foundation, not a production-ready CRM. Invoice templates contain placeholders and must not be sent as real invoices.

## Exact next step

Install and verify the design skills in the laptop's coding-agent environment, verify Playwright MCP starts in VS Code, then build and test the dashboard locally. Do not merge the dashboard pull request until its runtime is verified.
