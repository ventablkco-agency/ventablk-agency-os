# VentaBlk Co. — Decision Log

Record durable agency-wide decisions here. Add a date, decision, rationale, and any conditions that would trigger a review. Client-specific decisions belong in that client's project record or repository.

## 2026-10-15 — Website design standard approved

- **Decision:** Use `design.md` as the canonical reusable design standard for hospital websites.
- **Rationale:** Maintain consistent visual quality, responsive behavior, accessibility, and client approval practices.
- **Review trigger:** Real project feedback or a standard that no longer meets current accessibility/browser expectations.

## 2026-10-15 — Production technical baseline approved

- **Decision:** Use `WEBSITE_TECHNICAL_STANDARD.md` as the agency-wide production readiness baseline.
- **Rationale:** Make SEO, accessibility, performance, security, forms, analytics, and launch verification explicit.
- **Review trigger:** Significant platform/search guidance changes or lessons from production incidents.

## 2026-10-15 — Client information source of truth

- **Decision:** Use `CLIENT_INFORMATION_TEMPLATE.md` as the starting record for each hospital project.
- **Rationale:** Reduce repeated briefings and keep client-confirmed facts, approvals, and operational notes together.
- **Safeguard:** Store only necessary, non-sensitive project information. Never store credentials, patient records, or sensitive applicant data in Git.
- **Review trigger:** Client workflow shows the need for additional fields or a different secure system of record.

## 2026-10-15 — Reusable project blueprint approved

- **Decision:** Use `WEBSITE_PROJECT_BLUEPRINT.md` as the starting implementation blueprint, adapting it to project requirements.
- **Rationale:** Standardize project setup, shared components, SEO, forms, QA, and handover without forcing unnecessary folders or features.
- **Review trigger:** A client project exposes a repeatable improvement.

## 2026-10-15 — Default architecture is a decision framework, not a fixed vendor

- **Decision:** Prefer Astro + TypeScript + Tailwind for suitable content-led marketing sites, but select hosting and form services per project after requirements and current provider limits are checked.
- **Rationale:** Avoid unnecessary infrastructure and databases, while preserving secure server-side handling for forms and sensitive workflows.
- **Safeguard:** Do not collect patient/health data through an ordinary marketing form. Do not commit secrets or submissions to Git.
- **Review trigger:** Project requirements, client constraints, provider pricing/limits, privacy obligations, or team capabilities change.
- **Status:** Recommended default; approval for the architecture framework is pending.


## 2026-10-21 — Mandatory creative build and blind critique for website work

- **Decision:** Use the MIT-licensed, pinned `juliobsz/skills` `awwwards` skill for every new website or substantial redesign and the `jury` skill for evidence-based visual/technical critique before release. The skills and referenced scripts are vendored under `vendor/juliobsz-skills/`.
- **Rationale:** Enforce distinct concepts, written art direction, a genericness check, production-browser evidence, independent critique, and at least two QA/fix passes. The existing OS has strong technical standards, but its website workflow did not operationalize that creative direction and blind visual-critique loop.
- **Guardrails:** Preserve approved brand/client constraints; keep the existing stack unless separately justified; do not add effects/dependencies without purpose; retain technical SEO, accessibility, privacy, performance, scope and owner-approval gates.
- **Review trigger:** Upstream skill update, license/workflow changes, CI/tooling incompatibility, or production lessons. Refresh only after reviewing upstream diffs.
