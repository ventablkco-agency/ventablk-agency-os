# Agent Instructions — Ventablk Agency OS

These instructions apply to the entire repository unless a deeper AGENTS.md overrides them.

## Mandatory preflight for every substantial website task

Read skills/ventablk-website-workflow/SKILL.md and follow its required gates. The five resources are agency requirements:
1. VoltAgent Awesome DESIGN.md reference selection for new visual directions.
2. Taste Skill for art direction and pre-flight critique.
3. Impeccable for design critique and refinement.
4. Vercel Web Design Guidelines for UI/accessibility/interaction review.
5. Microsoft Playwright MCP for browser workflow and responsive verification when connected.

Do not skip an unavailable gate silently. Use its manual checklist as fallback, label it Manual review, and do not claim the upstream skill/MCP ran. Installation documentation is in AGENT_SKILLS.md.

## Before changes

- Read PROGRESS.md, DECISIONS.md, and relevant standards.
- For hospital websites, follow design.md and WEBSITE_TECHNICAL_STANDARD.md.
- For the dashboard, read dashboard/DESIGN.md and dashboard/README.md.
- Inspect the implementation, preserve approved decisions, check branch and diff, and keep changes focused.

## Quality and security

- Check desktop and responsive layouts, including intermediate widths and long content.
- Review keyboard access, visible focus, semantics, form labels/errors, loading/empty/error states, reduced motion, performance and SEO as relevant.
- Run actual project build/lint/tests when execution is available; report only verified results.
- This repository is public. Never commit real client records, patient data, private invoices, CVs, tokens, credentials, database dumps, local repository inventories, or commercial secrets.
- Keep operational records in the local database, secrets in ignored environment files, and scanner output outside this repository.
- Do not make destructive database/Git actions, merge a PR, or deploy without explicit authorization.
- Update PROGRESS.md after meaningful milestones.
