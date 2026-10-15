---
name: ventablk-website-workflow
description: Repeatable design, implementation, review, and verification workflow for websites built by Ventablk through ChatGPT and the Agency OS repository.
---

# Ventablk Website Workflow

Use this workflow whenever planning, building, auditing, or improving a Ventablk client website.

## Operating model

- The primary collaboration surface is the ChatGPT conversation.
- Use the connected GitHub tools to inspect and edit repository files when available.
- Local-only tasks (running Docker, installing dependencies, viewing the user's local browser, checking environment-specific errors) require the user to run commands and share output unless a connected tool can actually perform them.
- Never imply ChatGPT can see the user's local filesystem or browser without a verified connection.
- Never claim a tool, skill, build, test, or deployment ran unless its execution and result are observable.

## Skill application requirement\n\nAt the start of every substantial website task, read this file and the relevant repository playbooks. Treat the documented methods as mandatory review gates, not optional name-drops. Apply the agency-owned checklists even when the original upstream tool is unavailable. Distinguish clearly between (a) an upstream skill/MCP that actually ran and (b) a manual review guided by its principles. Do not claim that ChatGPT has installed or permanently learned an external skill.\n\n## Required context before editing

1. Identify the target repository, branch, framework, deployment target, and exact scope.
2. Read root `AGENTS.md`, `PROGRESS.md`, `DECISIONS.md`, `design.md`, and `WEBSITE_TECHNICAL_STANDARD.md` as relevant.
3. Read the project's brief, approved copy/assets, and project-specific `DESIGN.md` where available.
4. Inspect the existing implementation before changing it. Preserve approved work and avoid unrelated rewrites.
5. Check whether the repository is public; never commit credentials, patient information, private client records, real invoices, applicant CVs, database dumps, or other sensitive information.

## Design workflow

1. Clarify the page's business goal, audience, conversion action, content hierarchy, and constraints.
2. Establish a distinct art direction before implementation: layout, typography, palette, spacing, image treatment, motion, and responsive behavior.
3. Consult VoltAgent Awesome DESIGN.md for relevant design-system references when useful. Treat references as inspiration, not permission to copy a brand.
4. Use Taste Skill principles for distinctive visual direction when its source or installed implementation is available. If unavailable, apply the principles manually and say so.
5. Record durable project-specific decisions in `DESIGN.md` and follow explicit client approvals.
6. Prefer a clean, light visual theme unless the brief explicitly asks for another theme. Do not default to generic gradients, oversized rounded cards, or decorative elements without a purpose.
7. Respect accessibility: semantic HTML, keyboard operation, visible focus, contrast, reduced motion, meaningful alt text, labels, and clear validation states.

## Implementation workflow

1. Follow the existing framework, package manager, architecture, naming, and formatting conventions.
2. Make focused changes in small, reviewable units.
3. Build responsive behavior intentionally for mobile, tablet, laptop, and wide desktop as appropriate; check intermediate widths and long content.
4. Consider performance, image sizing, font loading, layout shift, SEO metadata, structured data, and useful loading/empty/error states.
5. Avoid introducing dependencies unless they materially help.
6. Keep secrets in ignored environment files and keep production client data out of source control.

## Review and quality gate

1. Review the result against the approved brief and project-specific design system.
2. Apply Impeccable-style critique: hierarchy, typography, spacing, consistency, copy, responsiveness, polish, and edge cases.
3. Apply Vercel Web Design Guidelines principles: accessibility, interaction behavior, semantics, forms, responsive layout, and performance. Use the upstream skill only if actually available.
4. Use Microsoft Playwright MCP for real browser flows when configured and available. Test key interactions and representative viewports, not just screenshots.
5. Run the project's actual lint, type-check, build, and test commands when execution is available.
6. If execution is not available in ChatGPT, provide the shortest exact commands for the user and wait for output. Do not report success until verified.
7. Fix issues within the agreed scope, then summarize changed files, tests run, results, and known limitations.

## GitHub and deployment safety

- Inspect the current branch and diff before writing.
- Use feature branches and pull requests for substantial work; do not merge or deploy without explicit authorization.
- Verify remote changes by fetching the resulting file or commit after a write.
- Never overwrite unrelated work or perform destructive Git/database operations without explicit approval.
- Treat deployment as a separate step requiring actual verification.

## Required final report

For each meaningful website task, report:
- What changed and where.
- The design/technical decisions that matter.
- Tests actually run and their results.
- Anything still unverified or blocked.
- The exact next action, if one is needed.
