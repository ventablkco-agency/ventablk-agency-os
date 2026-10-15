# VentaBlk Co. — Progress Tracker

Last updated: 2026-10-15

## Current goal

Build a reliable, documented operating system for VentaBlk Co.'s hospital website agency, covering the complete client lifecycle from first contact through delivery, maintenance, renewal, and offboarding.

## Verified repository state

- Repository: `ventablkco-agency/ventablk-agency-os`
- Default branch: `main`
- GitHub integration has all-repository selection enabled for the account.
- Direct write access was verified through successful commits.
- `CLIENT_LIFECYCLE.md` has been committed, fetched, and explicitly approved by the agency owner as the working process.
- Agency logo was provided in the conversation but is not yet committed as a repository asset.
- Repository visibility was verified as **public** on 2026-10-15. Do not add real client-specific or commercially sensitive information while it remains public.

## Completed

- [x] Confirmed repository access and committed `README.md`.
- [x] Added this progress tracker as the persistent session handoff.
- [x] Created and verified `CLIENT_LIFECYCLE.md`; owner approved it as the working process.
- [x] Created and received approval for `design.md` as the canonical design specification for hospital websites.
- [x] Created `WEBSITE_TECHNICAL_STANDARD.md` and received approval as the agency-wide production baseline.
- [x] Added `CLIENT_INFORMATION_TEMPLATE.md` as a reusable blank client/project record.
- [x] Created and received approval for `WEBSITE_PROJECT_BLUEPRINT.md`.
- [x] Created `DEFAULT_WEBSITE_ARCHITECTURE.md`; owner approval is still pending.
- [x] Created `DECISIONS.md` for durable agency-wide decisions.
- [x] Added billing, maintenance, invoice specification, invoice HTML, and placeholder PDF template. These remain templates and are not ready to issue as real invoices.
- [x] Added `WEBSITE_REFERENCE_LIBRARY.md` for owner-supplied optimization repositories and component/animation references.
- [x] Audited agency OS documentation and repository navigation; findings are in `AGENCY_OS_AUDIT.md`.
- [x] Repaired README links and added `CHECKLIST.md` as the central workflow index.
- [x] Per owner instruction, skipped the reusable website starter.
- [x] Completed a read-only source audit of `ventablkco-agency/siddaganga-hospital`; findings are documented in `SIDDAGANGA_TECHNICAL_SEO_AUDIT.md`.
- [x] Confirmed that the Siddaganga repository was not modified during the audit.

## Pending decisions and work

- [ ] Review and approve `DEFAULT_WEBSITE_ARCHITECTURE.md` before selecting providers or locking implementation architecture.
- [ ] Confirm Siddaganga Hospital's final production hostname and preferred HTTPS/host variant before implementing canonical URLs or absolute sitemap references.
- [ ] Address the P1 findings in `SIDDAGANGA_TECHNICAL_SEO_AUDIT.md`: canonical URLs, robots/sitemap, accurate structured data, and social preview image.
- [ ] Fix the duplicate font preconnect, replace the generic Astro README, and verify doctor profile content.
- [ ] Add a small automated QA workflow after checking compatibility with the current Astro and Cloudflare deployment setup.
- [ ] Review owner-supplied optimization/component/animation references when provided.

## Working agreements

1. Work one step at a time and keep user-facing updates concise.
2. Inspect existing work before changing it; preserve approved designs and production behavior.
3. Never claim a file, feature, permission, test, or deployment is complete without verification.
4. Keep credentials, secrets, patient data, and private client information out of this repository.
5. Update this file after each meaningful session with completed work, blockers, decisions, and the exact next step.
6. Record durable agency decisions in `DECISIONS.md`; record visual and responsive specifications in `design.md`.
7. In a new chat, begin by reading this file and relevant project documents.
8. Treat the client lifecycle as approved but adaptable; document meaningful revisions.

## Current caution

The agency OS repository remains public by the owner's choice. Keep it limited to reusable blank templates and process documentation. Do not store real client records, private invoices, bank/UPI details, credentials, patient information, applicant CVs, or commercially sensitive client-specific material.

The agency OS is a documentation foundation, not a working website starter or automated billing system. Invoice templates contain placeholders and must not be sent as real invoices.

## Exact next step

Confirm the final public domain and preferred HTTPS/host variant for Siddaganga Hospital. This is required before adding canonical URLs or absolute sitemap references. Then implement the highest-priority SEO fixes in the hospital repository in a controlled change and verify the production build before deployment.
