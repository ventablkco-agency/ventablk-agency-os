# VentaBlk Co. — Client Lifecycle

Status: Draft for review  
Last updated: 2026-10-15

## Purpose

Define the standard journey for a hospital website client, from the first enquiry through delivery, recurring maintenance, renewal, and eventual offboarding. Use this process for every project; adapt the scope to the client's needs and record any approved exceptions.

## Stage 1 — Lead received and qualified

**Goal:** Decide whether the enquiry is a suitable opportunity.

- Record the hospital/organization name, contact person, role, contact details, location, source, and next follow-up date in the lead tracker.
- Understand the current website, primary business goal, requested services, approximate budget, desired timeline, and decision-maker.
- Check whether the request fits VentaBlk Co.'s capabilities and capacity.
- Arrange a discovery call or politely decline/refer if it is not a fit.

**Gate to proceed:** A suitable prospect, a clear next action, and a scheduled discovery conversation or equivalent requirements exchange.

**Record:** Lead record and qualification notes.

## Stage 2 — Discovery and requirements

**Goal:** Understand the hospital's needs before committing to scope, cost, or delivery dates.

- Discuss audiences and patient journeys, departments, locations, doctors, facilities, and the hospital's main objectives.
- Identify required pages and functions, such as contact forms, appointment enquiries, careers applications, integrations, analytics, and local SEO.
- Identify who supplies and approves medical content, doctor credentials, photographs, testimonials, policies, and contact information.
- Identify domain, hosting, existing website, account ownership, and migration constraints.
- Clarify privacy, security, accessibility, retention, and operational requirements for any data collected.
- Record assumptions, dependencies, exclusions, and unanswered questions.

**Gate to proceed:** The client confirms the requirements summary and outstanding dependencies are visible.

**Record:** Discovery notes and requirements document.

## Stage 3 — Proposal, scope, and agreement

**Goal:** Establish a shared, written definition of the work.

- Define deliverables, page inventory, features, integrations, revisions, content responsibilities, timeline, and acceptance criteria.
- Quote one-time implementation costs and separate optional/recurring services.
- State payment milestones, third-party costs, support boundaries, exclusions, change-request process, and cancellation/termination terms.
- Define ownership and access for domain, hosting, code, assets, data, and third-party accounts.
- Include suitable confidentiality, privacy, security, and data-handling responsibilities in the agreement.
- Obtain written acceptance and the agreed initial payment before starting billable production work.

**Gate to proceed:** Scope and terms are approved, required agreement is signed, and the start/payment condition is met.

**Record:** Approved proposal, agreement, quotation, and payment status.

## Stage 4 — Client onboarding and asset collection

**Goal:** Make the project ready to execute without avoidable delays.

- Identify the primary client contact, final approver, content owners, and technical contacts.
- Create a project workspace and repository using the agreed naming and access conventions.
- Collect brand assets, approved copy, service lists, doctor details, contact information, images, policies, and integration details.
- Record domain/hosting ownership and obtain access through secure, least-privilege methods. Never request passwords in ordinary documents or commit secrets.
- Agree on communication channels, meeting cadence, feedback format, response expectations, and approval deadlines.
- Confirm which content or approvals are still missing and how delays affect the schedule.

**Gate to proceed:** Required access, project contacts, initial assets, and content responsibilities are documented. Missing items have named owners and due dates.

**Record:** Onboarding checklist, asset register, access register (no secrets), and project plan.

## Stage 5 — Design and approval

**Goal:** Agree on the visual and interaction direction before full implementation.

- Review the brand and design requirements.
- Define page layouts, typography, colors, spacing, imagery, components, and interaction patterns in the design specification.
- Define responsive behavior for small, medium, and large viewports; do not create a separate design for every device model.
- Provide the agreed design deliverable or representative page previews.
- Collect consolidated feedback and track revisions against the agreed scope.
- Obtain written approval of the design direction and key page layouts.

**Gate to proceed:** The client approves the agreed design scope, including responsive behavior and key interactions.

**Record:** Versioned design specification (including `design.md` where appropriate), design previews, and approval log.

## Stage 6 — Development and integration

**Goal:** Build the approved website with maintainable, testable implementation.

- Implement reusable components and page templates while preserving the client's distinct branding.
- Configure content, metadata, navigation, forms, integrations, analytics, and environment settings as scoped.
- For each form, document where submitted data goes, who receives it, how it is stored, and how errors are handled.
- For applications, appointment enquiries, or other personal data, use an appropriately secured processing and storage design; minimize data collection and restrict access.
- Keep secrets out of source control and use separate development/preview and production configuration where appropriate.
- Track changes in version control and review the production build before release.

**Gate to proceed:** The scoped features are implemented in a reviewable preview and the build passes.

**Record:** Repository changes, integration notes, environment-variable names (never secret values), and known limitations.

## Stage 7 — Quality assurance and client acceptance

**Goal:** Verify the website before it goes live.

- Test representative mobile, tablet, and desktop widths; check layout overflow, navigation, typography, and touch targets.
- Test current major browsers as appropriate for the audience.
- Check forms end-to-end, including validation, successful submission, notifications, failure states, spam protection, and data access.
- Check links, images, content, doctor details, contact information, accessibility basics, metadata, sitemap, robots directives, and structured data where relevant.
- Review performance, security configuration, privacy notices, and the handling of personal data.
- Obtain client approval of the final content and functionality.
- Record defects, severity, fixes, accepted limitations, and any out-of-scope requests.

**Gate to proceed:** Critical issues are resolved, required checks pass, and the client gives written launch approval.

**Record:** QA checklist, issue log, and acceptance approval.

## Stage 8 — Production launch and handover

**Goal:** Release safely and transfer the agreed operational information.

- Confirm the production domain, DNS, HTTPS, hosting configuration, and deployment permissions.
- Confirm a rollback/recovery path appropriate to the hosting and data architecture.
- Deploy the approved release and verify critical pages, forms, notifications, analytics, and redirects on the live domain.
- Verify search-engine configuration and submit the sitemap to relevant tools when appropriate.
- Transfer or document ownership of repositories, domain, hosting, analytics, and other client accounts as agreed.
- Provide the live URL, support contact, basic operating instructions, known limitations, and renewal details.
- Record the launch date, release version, and maintenance start date.

**Gate to proceed:** Live-site smoke tests pass, the client receives the agreed handover, and outstanding issues have owners and due dates.

**Record:** Launch checklist, release/change log, handover pack, and client sign-off.

## Stage 9 — Maintenance, support, and renewal

**Goal:** Deliver the recurring service that was actually purchased.

- Follow the signed maintenance scope, support hours, response targets, and included change allowance.
- Perform the agreed availability, certificate/domain, dependency, form, link, and performance checks.
- Apply appropriate updates and verify changes before production release.
- Maintain backups or recovery mechanisms where applicable to the site's architecture and data.
- Track incidents, changes, approvals, and resolution.
- Send the agreed periodic report covering completed work, issues, observations, and recommendations.
- Invoice according to the agreement, monitor renewal dates, and discuss scope changes before work expands.
- Escalate security incidents and data-related issues using the agreed procedure.

**Gate to continue:** Service is within the agreed scope, payment/renewal status is known, and risks or incidents have a documented owner and next action.

**Record:** Maintenance log, reports, invoices, change requests, and renewal decision.

## Stage 10 — Client offboarding or termination

**Goal:** End the relationship cleanly and protect both parties.

- Confirm the termination date, contractual obligations, final invoice, and any transition period.
- Agree on the destination and method for transferring the website, repository, domain, hosting, data, and other assets that the client owns or is entitled to receive.
- Provide the agreed handover and recovery documentation.
- Transfer administrative ownership or revoke agency access in a coordinated way; rotate credentials where needed.
- Export, return, retain, or securely delete client data according to the agreement and applicable requirements.
- Disable agency-managed services only after the agreed transition and required notices; avoid unplanned disruption to the live hospital website.
- Confirm third-party subscriptions, renewals, monitoring, DNS, and billing responsibilities.
- Record completion and close the project workspace according to the retention policy.

**Gate to close:** Transfer and data-handling obligations are complete, access is reconciled, final billing is resolved or documented, and the client has confirmation of closure.

**Record:** Offboarding checklist, asset-transfer confirmation, access-revocation record, and closure note.

## Rules that apply at every stage

1. Keep the scope, decisions, approvals, risks, and next action documented.
2. Assign an owner and due date to every client dependency.
3. Do not publish unapproved medical claims, doctor details, photographs, or testimonials.
4. Do not place credentials, secrets, patient information, or private client data in this repository.
5. Treat new requirements outside the approved scope as change requests and agree on cost/timeline before proceeding.
6. Do not promise specific SEO rankings, uptime, security compliance, or response times unless the service and evidence support the promise.
7. Update `PROGRESS.md` after meaningful work and `DECISIONS.md` when a durable agency decision is approved.

## Status and next review

This lifecycle is a working draft until reviewed with the agency owner. Once approved, create the detailed stage checklists and client-facing templates one at a time.
