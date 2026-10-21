# Award-caliber website workflow integration

**Upstream:** [juliobsz/skills](https://github.com/juliobsz/skills)  
**Vendored snapshot:** commit `ea8f1455c2b0e71469d4ecfd32f47862b834d2d0` (2026-10-21 review)  
**License:** MIT. See `vendor/juliobsz-skills/LICENSE`.  
**Purpose:** Apply the upstream build skill and independent critique skill to every relevant website project while preserving Ventablk's brand, security, technical SEO, accessibility and owner-approval gates.

## Canonical local paths

- Build/rebuild websites: `vendor/juliobsz-skills/awwwards/SKILL.md`
- Audit/critique a built or live website: `vendor/juliobsz-skills/jury/SKILL.md`
- Rubric and independent critic brief: `vendor/juliobsz-skills/awwwards/references/quality-bar.md` and `vendor/juliobsz-skills/jury/references/quality-bar.md`
- Design concept/art direction/layout/type/motion guidance: `vendor/juliobsz-skills/awwwards/references/`
- Browser evidence scripts: `vendor/juliobsz-skills/awwwards/scripts/` and `vendor/juliobsz-skills/jury/scripts/`

The `awwwards` and `jury` folders and their referenced documentation/scripts are vendored from upstream. Do not silently rewrite upstream files as if they were authored by Ventablk. Ventablk-specific rules belong in the wrapper skill, this integration document, and the agency's own design/technical standards. Preserve the upstream MIT copyright and license.

## Mandatory operating rule

For every new website, full redesign, substantial visual redesign, or material landing-page rebuild delivered by Ventablk:

1. Read this document, `skills/ventablk-website-workflow/SKILL.md`, the client brief, the project's source-of-truth/brand documents, `design.md`, `WEBSITE_TECHNICAL_STANDARD.md`, and `WEBSITE_PROJECT_BLUEPRINT.md`.
2. Read the vendored `awwwards/SKILL.md`. Follow its Brief → Concept → Art Direction → Build → QA → Ship process and read the reference files it explicitly calls for. Use the existing project's stack unless there is a documented reason to change it.
3. Produce a project-local `DESIGN.md` before implementation. It must include the brief/assumptions, three genuinely distinct concepts and chosen rationale, Concept Card, role-based tokens, type roles, grid/rhythm, motion language, section-by-section wireframes, content/asset provenance, responsive rules, and the genericness check.
4. Implement semantic and usable HTML first. The page must be complete and compelling with JavaScript/motion off. Motion, WebGL, physics, loaders and transitions are optional tools, not goals; choose only when they reinforce the chosen concept and remain performant/accessibile.
5. Build the production output. Run the upstream `audit.mjs` and `shoot.mjs` against a production server/output using the documented commands and prerequisites. Inspect screenshots and reports, not just command exit codes. Cover desktop, phone, reduced motion, keyboard/focus, hover/interaction states and relevant inner pages/404. Verify accessible menus, forms and all primary journeys.
6. Run the existing project's build/type/lint/test/CI gates and Ventablk's full technical checklist: semantic HTML, WCAG 2.2 AA manual plus automated checks, SEO metadata/canonical/robots/sitemap/structured data where appropriate, social previews/favicon, real content and asset rights, performance/bundle budget, browser console/network, forms/security/privacy, and no placeholder content presented as factual.
7. Run `vendor/juliobsz-skills/jury/SKILL.md` against the site. Use a fresh independent critic when the environment supports it; otherwise document clearly that the score is a self-score and is not independent. Critic input must be screenshots/reports only, not design intent or implementation code. Score categories with evidence and create a ranked fix list.
8. Complete at least two full QA-and-fix passes. Do not declare design acceptance while a core layout defect, overlap, horizontal overflow, missing CTA, serious/critical accessibility issue, console error, key broken interaction, or unverified placeholder remains. Aim for 8/10 or higher across the upstream rubric; if tooling is unavailable or the bar cannot be reached, report the measured/observed blocker instead of claiming a pass.
9. Only after the reviewed commit is deployed to Cloudflare preview, supply the exact current preview URL and commit SHA. State what was actually verified versus what remains unverified. Production deployment/merge requires the owner's explicit approval.

## Rules of precedence

1. Client-approved facts, the project-specific source of truth and explicit owner directions take precedence over aesthetic recipes.
2. Ventablk's brand requirements (including white/light theme when specified, approved logo assets, existing navbar/components marked as retained, no unapproved human hero imagery, and project-specific palette/type) remain binding. The upstream skill must not cause a generic rebuild or override existing approved identity.
3. `WEBSITE_TECHNICAL_STANDARD.md`, security/privacy controls, accessibility requirements and client scope remain mandatory. An Awwwards-style score is a craft benchmark, not a guarantee or a substitute for technical readiness.
4. The existing framework and build pipeline remain in place unless a stack change is separately justified and approved. Do not migrate the current Astro site to Next.js just because the upstream default suggests it.
5. Never invent awards, customers, metrics, testimonials, client outcomes, clinician qualifications, product features or project outcomes. Mark fictional concept placeholders explicitly and remove them or get approval before launch.
6. The user owns approval. Do not merge to production or replace explicitly retained UI without authorization.

## Dependencies and execution notes

The upstream scripts require Node 20+; the upstream skill also documents the recommended Node version for its CLI, Playwright and axe-core. Before running scripts, check the chosen project's Node version and whether `playwright`, Chromium, and `axe-core` are present. Install tooling only in the project or review cache as appropriate and with approval to change dependencies. The `jury` workflow says not to modify a third-party project merely to audit it; use a separate cache when no tools are installed.

Commands are examples from the upstream skill; adapt the static-output folder and start command to the actual project:

```bash
npm run build
# Serve the built output using the documented static server or the framework's production server.
node vendor/juliobsz-skills/awwwards/scripts/audit.mjs http://127.0.0.1:4400/ > .shots/audit.txt
node vendor/juliobsz-skills/awwwards/scripts/shoot.mjs http://127.0.0.1:4400/ --crawl --nav --out .shots
```

The jury scripts have a separate copy under `vendor/juliobsz-skills/jury/scripts/`. Review the skill for their exact usage. Save QA evidence in the client repo (for the Ventablk website, a project-local ignored folder is appropriate); do not store sensitive client data/screenshots in the public Agency OS.

## Update procedure

This is a vendored snapshot, not a live link that auto-updates. On each deliberate refresh:
1. Read upstream changelog/README and compare commit SHA.
2. Review changes to skills, reference documents, scripts, dependencies and license.
3. Update the vendored snapshot in one traceable commit while preserving the license.
4. Run script syntax/smoke checks and review this integration contract for path or workflow changes.
5. Record the new upstream commit/date here and in `WEBSITE_REFERENCE_LIBRARY.md`.
6. Never refresh third-party code in the middle of client delivery without reviewing its effects.

**Important:** storing a skill in this repository makes it persistently available to a future agent that opens the repository and follows the workflow. It does not force every AI tool to load it automatically. That's why the mandatory invocation is duplicated in the repo's root instructions/checklist and the website workflow skill. For a particular agent environment, also register the skill in that environment's supported skill discovery mechanism.
