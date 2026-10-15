# Agent Instructions — Ventablk Agency OS

These instructions apply to the whole repository unless a deeper `AGENTS.md` overrides them.

## Before making changes
- Read `PROGRESS.md`, `DECISIONS.md`, and the relevant project standards before editing.
- Follow `design.md` for agency-wide hospital website design principles and `WEBSITE_TECHNICAL_STANDARD.md` for implementation quality.
- For the agency dashboard, also read `dashboard/DESIGN.md` and `dashboard/README.md`.
- Inspect the current implementation before replacing or restyling it. Preserve approved decisions and existing behavior unless a change is requested.

## Design skill workflow
Use the relevant installed skills when available; do not claim a skill or MCP server is active unless the current coding environment confirms it.

1. **New interface or substantial redesign:** use Taste Skill (`design-taste-frontend`) to establish a distinctive art direction before implementation.
2. **Design critique and refinement:** use Impeccable for shaping, critique, audit, polish, responsive adaptation, typography, layout, motion, and edge cases.
3. **Guideline compliance review:** use Vercel's `web-design-guidelines` skill for accessibility, interaction, responsive layout, forms, semantics, and performance checks.
4. **Browser verification:** use Microsoft Playwright MCP when it is configured and available. Test real page behavior and representative viewports; do not treat a screenshot alone as proof of functional correctness.
5. **Visual reference research:** use VoltAgent's Awesome DESIGN.md collection to find a relevant reference. Select references deliberately; do not blindly copy another company's branding or assume a catalog is itself an agent skill.

These tools complement, rather than replace, the approved agency standard and project-specific client approvals. Resolve conflicts in this order: explicit user/client approval and scope, project-specific design brief, agency standards, then external skill recommendations.

## Quality gate for website and dashboard changes
- Check desktop and responsive layouts at relevant widths; test intermediate widths, zoom, and long content where relevant.
- Review keyboard access, visible focus, semantic structure, form labels/errors, loading/empty/error states, and reduced-motion behavior.
- Check image dimensions, font loading, layout shift, unnecessary JavaScript, and metadata/SEO where relevant.
- Use Playwright for key flows when available. Record what was actually tested and the result.
- Fix issues found by review; do not merely list them if implementation is in scope.
- Never claim tests, builds, browser checks, deployments, or integrations passed unless they were run and verified.

## Safety and repository hygiene
- This repository is public. Never commit real client records, patient information, applicant CVs, private invoices, credentials, tokens, database dumps, or sensitive commercial data.
- Keep secrets in local environment files that are ignored by Git.
- Do not make destructive database or Git operations without explicit authorization.
- Make focused changes and update `PROGRESS.md` after meaningful milestones.
