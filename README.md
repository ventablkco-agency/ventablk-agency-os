# VentaBlk Co. — Agency Operating System

This repository documents the repeatable processes and reusable standards for `ventablk.co — AGENCY`, from lead qualification through hospital website delivery, recurring maintenance, billing, and offboarding.

## Start here

1. **[Progress tracker](PROGRESS.md)** — current status, approvals, blockers, and exact next step.
2. **[Agency OS audit](AGENCY_OS_AUDIT.md)** — gaps and prioritized remediation plan.
3. **[Agent instructions](AGENTS.md)** — rules AI coding agents should follow in this repository.
4. **[Agent skills and browser tooling](AGENT_SKILLS.md)** — design skill setup, intended workflow, and Playwright MCP.
5. **[Checklist index](CHECKLIST.md)** — find the right document for each project stage.
6. **[Client lifecycle](CLIENT_LIFECYCLE.md)** — end-to-end workflow.
7. **[Decision log](DECISIONS.md)** — durable agency decisions and rationale.

## Core website standards

- [Design specification](design.md)
- [Website technical standard](WEBSITE_TECHNICAL_STANDARD.md)
- [Website project blueprint](WEBSITE_PROJECT_BLUEPRINT.md)
- [Default website architecture](DEFAULT_WEBSITE_ARCHITECTURE.md) — approval still pending.
- [Website reference library](WEBSITE_REFERENCE_LIBRARY.md) — add owner-supplied optimization repositories and UI/animation links here.
- [Project documentation pack](templates/project-docs/README.md) — six required documents and lifecycle for every substantial website/app project.
- [Product Requirements template](templates/project-docs/PRODUCT_REQUIREMENTS.md)
- [Technical Requirements template](templates/project-docs/TECHNICAL_REQUIREMENTS.md)
- [Application Flow template](templates/project-docs/APP_FLOW.md)
- [Design Brief template](templates/project-docs/DESIGN_BRIEF.md)
- [Backend Schema template](templates/project-docs/BACKEND_SCHEMA.md)
- [Implementation Plan template](templates/project-docs/IMPLEMENTATION_PLAN.md)

## Agency dashboard

- [Dashboard README](dashboard/README.md) — laptop-only Docker setup.
- [Dashboard design system](dashboard/DESIGN.md) — visual and interaction standards.

## Client lifecycle documents

- [Client information template](CLIENT_INFORMATION_TEMPLATE.md)
- [Onboarding and kickoff pack](CLIENT_ONBOARDING_KICKOFF.md)
- [Design and content approval workflow](DESIGN_CONTENT_APPROVAL_WORKFLOW.md)
- [Proposal and statement of work](PROPOSAL_AND_SCOPE_OF_WORK.md)
- [Launch, handover, and closeout](WEBSITE_HANDOVER_LAUNCH_CLOSEOUT.md)
- [Maintenance operations](WEBSITE_MAINTENANCE_OPERATIONS.md)
- [Offboarding and cancellation](CLIENT_OFFBOARDING_CANCELLATION.md)
- [Client project README starter](CLIENT_PROJECT_README_STARTER.md)

## Billing and invoicing

- [Billing and monthly maintenance billing workflow](BILLING_AND_MAINTENANCE_BILLING.md)
- [Invoice template specification](INVOICE_TEMPLATE_SPEC.md)
- [HTML invoice template](invoice-template.html) — placeholders only; not ready to issue as a real invoice.

## Working rules

- Work in small, agreed steps and update documentation after meaningful decisions.
- Do not claim an implementation, integration, permission, test, or deployment is complete until verified.
- Keep secrets, credentials, patient information, applicant CVs, form submissions, and private client invoices out of this repository.
- This repository is currently public. Keep only reusable blank templates and source code here. Switch it to private before adding client-specific or commercially sensitive information.
- Treat the website blueprint and architecture documents as guidance until a project-specific implementation is built and tested.
- Legal, tax, privacy, and contract templates require appropriate professional review before being treated as binding terms.

## Scope

The current focus is to finish the agency dashboard foundation and integrate a repeatable design-review and browser-testing workflow. Client-specific website work is paused unless explicitly requested.
