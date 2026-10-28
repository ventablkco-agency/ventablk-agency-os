# Agency OS Checklist Index
**ventablk.co — AGENCY**  
Use this index to find the correct operating document at each stage. Checklists are controls to run and record, not proof that a task is complete.

## 1. Agency-level navigation and status
- [ ] Read [PROGRESS.md](PROGRESS.md) for current status, approvals, blockers, and the next action.
- [ ] Check [AGENCY_OS_AUDIT.md](AGENCY_OS_AUDIT.md) for agency-wide gaps.
- [ ] Record durable agency decisions in [DECISIONS.md](DECISIONS.md).

## 2. Lead to kickoff
- [ ] Follow [CLIENT_LIFECYCLE.md](CLIENT_LIFECYCLE.md) for the complete process.
- [ ] Use [CLIENT_ONBOARDING_KICKOFF.md](CLIENT_ONBOARDING_KICKOFF.md) as the internal process guide after commercial start conditions are met.
- [ ] Send the [Client Welcome Pack](CLIENT_WELCOME_PACK.md) and [Welcome Email](CLIENT_WELCOME_EMAIL.md), replacing and verifying every placeholder.
- [ ] Send the [Discovery Questionnaire](CLIENT_DISCOVERY_QUESTIONNAIRE.md) and track responses in the approved client workspace.
- [ ] Use the [Asset & Content Collection Checklist](CLIENT_ASSET_AND_CONTENT_CHECKLIST.md) to track approved materials, permissions, owners, and dependencies.
- [ ] Use the [Kickoff Agenda & Action Summary](CLIENT_KICKOFF_AGENDA_AND_ACTIONS.md) to run kickoff and circulate written actions.
- [ ] Copy [CLIENT_INFORMATION_TEMPLATE.md](CLIENT_INFORMATION_TEMPLATE.md) into the appropriate client project and fill only client-confirmed facts.
- [ ] Use [PROPOSAL_AND_SCOPE_OF_WORK.md](PROPOSAL_AND_SCOPE_OF_WORK.md) for the scope and commercial proposal; have binding terms reviewed appropriately.

## 3. Design and content
- [ ] Apply [design.md](design.md) for responsive design, visual consistency, and handoff.
- [ ] For every new site/substantial redesign, read [AWWWARDS_SKILLS_INTEGRATION.md](docs/AWWWARDS_SKILLS_INTEGRATION.md), follow `vendor/juliobsz-skills/awwwards/SKILL.md`, create a project-local `DESIGN.md`, and use [AGENCY_WEBSITE_QUALITY_GATE.md](AGENCY_WEBSITE_QUALITY_GATE.md).
- [ ] Before acceptance/release, run `vendor/juliobsz-skills/jury/SKILL.md` on production-build browser evidence, complete at least two QA/fix passes, and document scores/limitations.
- [ ] Use [DESIGN_CONTENT_APPROVAL_WORKFLOW.md](DESIGN_CONTENT_APPROVAL_WORKFLOW.md) to record approval gates and consolidated feedback.
- [ ] Keep doctor credentials, service details, clinical claims, photos, and testimonials verified and approved.

## 4. Technical planning and implementation
- [ ] Follow [WEBSITE_TECHNICAL_STANDARD.md](WEBSITE_TECHNICAL_STANDARD.md) for SEO, AEO/GEO, accessibility, performance, security, analytics, and launch readiness.
- [ ] Use [WEBSITE_PROJECT_BLUEPRINT.md](WEBSITE_PROJECT_BLUEPRINT.md) as implementation guidance.
- [ ] Review [DEFAULT_WEBSITE_ARCHITECTURE.md](DEFAULT_WEBSITE_ARCHITECTURE.md) before locking architecture or selecting providers; approval is pending.
- [ ] Record useful external repositories, components, and animation references in [WEBSITE_REFERENCE_LIBRARY.md](WEBSITE_REFERENCE_LIBRARY.md), then review licensing and technical fit before use.
- [ ] Review [SIDDAGANGA_TECHNICAL_SEO_AUDIT.md](SIDDAGANGA_TECHNICAL_SEO_AUDIT.md) before changing the hospital website.

## 5. QA, launch, and handover
- [ ] Use [WEBSITE_HANDOVER_LAUNCH_CLOSEOUT.md](WEBSITE_HANDOVER_LAUNCH_CLOSEOUT.md) before and after production launch.
- [ ] Start each client repository with [CLIENT_PROJECT_README_STARTER.md](CLIENT_PROJECT_README_STARTER.md).
- [ ] Record responsive, accessibility, performance, SEO, form, analytics, and smoke-test results in the client project.

## 6. Maintenance and billing
- [ ] Confirm the contracted service scope in the client agreement.
- [ ] Follow [WEBSITE_MAINTENANCE_OPERATIONS.md](WEBSITE_MAINTENANCE_OPERATIONS.md) for recurring checks, updates, incident handling, and reports.
- [ ] Follow [BILLING_AND_MAINTENANCE_BILLING.md](BILLING_AND_MAINTENANCE_BILLING.md) for monthly invoices, reminders, and payment reconciliation.
- [ ] Use [INVOICE_TEMPLATE_SPEC.md](INVOICE_TEMPLATE_SPEC.md) and [invoice-template.html](invoice-template.html) only as templates. Payment fields/QR are placeholders; do not issue until payment details, totals, and tax treatment are verified.

## 7. Offboarding
- [ ] Follow [CLIENT_OFFBOARDING_CANCELLATION.md](CLIENT_OFFBOARDING_CANCELLATION.md) for final billing, access transfer/revocation, data handling, and closure.

## 8. Security and repository hygiene
- [ ] Never commit credentials, tokens, patient information, CVs, form submissions, or confidential invoice PDFs.
- [ ] Store real client records and financial documents in an access-controlled system.
- [ ] This agency OS repository is public. Keep only reusable blank templates and process documentation here until its visibility/access policy changes.
- [ ] Do not mark an item complete until implementation or action is verified.

## 9. Current next step
Confirm Siddaganga Hospital's final production domain and preferred HTTPS/host variant. Then address the P1 items in [SIDDAGANGA_TECHNICAL_SEO_AUDIT.md](SIDDAGANGA_TECHNICAL_SEO_AUDIT.md). The reusable website starter is intentionally skipped per owner instruction.
