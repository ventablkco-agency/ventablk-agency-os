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
- Repository visibility was verified as **public** on 2026-10-15. Make it private before adding real client-specific or commercially sensitive information. The client-information file in this repo is a blank reusable template only.

## Completed

- [x] Confirmed repository access and committed `README.md`.
- [x] Added this progress tracker as the persistent session handoff.
- [x] Created `CLIENT_LIFECYCLE.md` covering lead qualification through offboarding.
- [x] Verified the lifecycle file from GitHub.
- [x] Received explicit approval of the lifecycle as the working process, with changes allowed when real project challenges arise.

## In progress

- [x] Created and received approval for `design.md` as the canonical design specification for hospital websites.
- [x] Created `WEBSITE_TECHNICAL_STANDARD.md` and received approval as the agency-wide production baseline.
- [x] Added `CLIENT_INFORMATION_TEMPLATE.md` to keep client-confirmed hospital/project facts in one reusable record.
- [x] Added `WEBSITE_PROJECT_BLUEPRINT.md` as the starting implementation structure and technical workflow; owner explicitly approved it.
- [x] Received explicit approval of `WEBSITE_PROJECT_BLUEPRINT.md`.
- [x] Created `DEFAULT_WEBSITE_ARCHITECTURE.md` defining the default stack approach and a decision tree for static sites, enquiry forms, careers uploads, appointment workflows, and sensitive health data.
- [x] Created `DECISIONS.md` to record durable agency-wide decisions.
- [ ] Review and approve `DEFAULT_WEBSITE_ARCHITECTURE.md`; choose any form-service provider only after comparing project requirements, data handling, reliability, ownership, and cost.
- [x] Added `BILLING_AND_MAINTENANCE_BILLING.md` to define invoicing, monthly maintenance invoices, QR payment verification, reminders, and reconciliation.
- [x] Recorded owner preference: bank transfer + direct UPI QR; prefill exact invoice amount/reference where supported; consider payment gateway later.
- [x] Added `INVOICE_TEMPLATE_SPEC.md` defining the invoice layout, payment section, QR verification, PDF export, and required information before real invoices can be issued.
- [x] Confirmed invoice display branding as `ventablk.co` with the `AGENCY` descriptor; owner supplied white and black logo variants.
- [x] Created first visual invoice mockup with placeholders; no live payment QR or unverified bank details are presented as real.
- [x] Generated downloadable A4 PDF invoice template: `ventablk_invoice_template.pdf` (placeholder fields only).
- [x] Added reusable responsive/printable HTML invoice template at `invoice-template.html` in the agency OS repository.
- [x] Added `WEBSITE_REFERENCE_LIBRARY.md` to collect optimization repositories, UI components, animation references, and design tools supplied by the agency owner.
- [x] Audited agency OS documentation and repository navigation; findings recorded in `AGENCY_OS_AUDIT.md`.
- [x] Repaired `README.md` links and added `CHECKLIST.md` as the central workflow index.
- [ ] Begin implementation of the reusable website starter after confirming project stack/version and reviewing owner-supplied optimization/component references.
- [ ] Audit the existing Siddaganga Hospital repository before extracting reusable website components.

## Working agreements

1. Work one step at a time and keep user-facing updates concise.
2. Inspect existing work before changing it; preserve approved designs and production behavior.
3. Never claim a file, feature, permission, or deployment is complete without verification.
4. Keep credentials, secrets, patient data, and private client information out of this repository.
5. Update this file after each meaningful session with completed work, blockers, decisions, and the exact next step.
6. Record durable decisions in `DECISIONS.md`; record visual and responsive specifications in `design.md`.
7. In a new chat, begin by reading this file and the relevant project documents.
8. Treat the client lifecycle as approved but adaptable: revise it when real-world challenges justify a change, and document meaningful revisions.

## Current blocker / caution

The repository remains public by the owner's choice. Do not add real client records, private invoices, bank/UPI details, credentials, patient information, applicant CVs, or commercially sensitive client-specific material until visibility and access are changed appropriately. Reusable blank templates and process documentation remain in this repository.

The agency OS is a documentation foundation, not yet a working website starter or automated billing system. Invoice templates still contain placeholders and must not be sent as real invoices.

## Exact next step

1. Review the audit: `AGENCY_OS_AUDIT.md`.
2. Keep the README and checklist index as the entry point.
3. Start the reusable website starter implementation after confirming the first implementation stack and checking any optimization/component repositories supplied by the owner.
4. Before extracting code, audit the Siddaganga Hospital repository and preserve its current production behavior.
