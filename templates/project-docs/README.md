# Project Documentation Pack

Use these six documents for every substantial client website or web application project. Copy them into that client's repository under `docs/` and fill them with client-confirmed information. These are reusable templates, not completed project decisions.

## Required documents and order

1. [Product Requirements Document](PRODUCT_REQUIREMENTS.md) — why the product exists, users, scope, functional requirements, measurable outcomes and acceptance criteria.
2. [Technical Requirements Document](TECHNICAL_REQUIREMENTS.md) — stack constraints, integrations, non-functional requirements, security, environments, deployment and verification.
3. [Application Flow Document](APP_FLOW.md) — routes/screens, user journeys, decisions, validation, permissions, failure recovery and flow tests.
4. [Design Brief](DESIGN_BRIEF.md) — brand/audience, art direction, reference selection, tokens, information architecture, responsive behavior and design approval.
5. [Backend Schema Document](BACKEND_SCHEMA.md) — entities, relationships, fields, constraints, API contracts, privacy and migrations. For frontend-only sites, explicitly state that no backend/database is required and document any external services instead.
6. [Implementation Plan](IMPLEMENTATION_PLAN.md) — phases, dependencies, tasks, acceptance criteria, QA gates, release, rollback and handover.

## Required creation sequence

- **Discovery:** draft PRD; list assumptions and open questions.
- **Technical/design planning:** draft TRD, app flow, design brief and backend schema where applicable. Technical and design work may proceed in parallel once scope is clear.
- **Approval gate:** reconcile contradictions across all documents. Get owner/client approval for scope, visual direction, integrations, data handling and deployment responsibilities before large implementation work.
- **Implementation:** write a sequenced plan that links work items to requirements and acceptance criteria. Update status and decisions as scope changes.
- **Verification:** record evidence for build/tests, responsive/accessibility checks, Taste Skill, Impeccable, Vercel Web Design Guidelines and Playwright MCP. Clearly label manual reviews and unavailable tools.
- **Launch/handover:** record production verification, access ownership, rollback, maintenance and outstanding risks.

## Rules

- Never fabricate client requirements, branding, clinical/business facts, budgets, security guarantees or approval.
- Use `TBD`, assumptions and an owner/date for unknowns; ask focused questions when an unknown blocks implementation.
- Treat source schema/migrations and running code as authoritative for implementation; keep this schema document synchronized.
- If a project does not need a backend, mark the backend schema as not applicable with a reason rather than inventing a database.
- Keep client-specific and commercially sensitive project documents in the client's private repository/workspace, not this public Agency OS repository.
