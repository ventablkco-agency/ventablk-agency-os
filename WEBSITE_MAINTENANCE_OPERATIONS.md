# Website Maintenance Operations
**ventablk.co — AGENCY**  
**Status:** Draft for review

## 1. Purpose and boundaries

This document defines the operating process for recurring website maintenance. The signed maintenance agreement controls the actual service scope, price, response targets, and cancellation terms. Do not promise coverage that is not staffed or technically supported.

## 2. Maintenance plan record

For each client, record:
- Client/project and production URL.
- Plan name and contracted monthly fee.
- Included tasks, quantities, and limits.
- Exclusions and billable change-request process.
- Support channel, hours, and agreed response targets.
- Hosting and third-party subscriptions and payer.
- Domain, SSL, and renewal owners.
- Backup schedule, retention, and restore owner.
- Update and release process.
- Monitoring/alert owner and escalation route.
- Invoice contact, billing day, due terms, and next renewal/review date.
- Start date, renewal date, cancellation notice, and offboarding plan.

## 3. Typical maintenance task categories

Only include a category in a client's plan if it is explicitly contracted.

### Routine health checks
- Confirm website responds over HTTPS.
- Check key pages, navigation, forms, and primary calls to action.
- Check domain and certificate renewal status where authorized.
- Review hosting/build logs and availability alerts.
- Review broken links and failed third-party integrations where appropriate.

### Updates and security
- Review framework/dependency updates and security advisories.
- Apply updates in a branch or staging environment where possible.
- Run build/tests and review regressions before deployment.
- Keep secrets in provider environment settings/secret manager.
- Verify backups and restore procedure according to the contracted plan.
- Document changes and preserve rollback capability.

### SEO and performance upkeep
- Check for accidental noindex, robots, canonical, sitemap, and redirect regressions.
- Review image weight, performance regressions, and Core Web Vitals when enough data is available.
- Check key metadata and structured data after material content changes.
- Monitor Search Console errors and indexing reports when access is authorized.
- Keep local business facts and public contact details accurate when client supplies updates.

### Content and conversion checks
- Apply only the agreed number/type of content updates.
- Confirm client-provided hospital service/doctor changes are verified before publishing.
- Test forms and notifications after relevant changes.
- Do not independently invent or edit clinical claims, doctor qualifications, pricing, or emergency instructions.

## 4. Suggested operating cadence

Adapt this cadence to the contracted plan and actual risk; it is not a promise of 24/7 monitoring.

### Each month
- Review availability and key user flows.
- Test important forms/notifications with an approved test method.
- Review dependency/security updates and apply appropriate changes through the release process.
- Check backups/restore status where included.
- Review relevant SEO, analytics, and performance signals if configured.
- Record work performed, issues found, actions taken, and outstanding risks.
- Send a concise maintenance report if included in the plan.
- Issue the monthly invoice for active monthly plans and reconcile payment separately from service reporting.

### Quarterly or at agreed intervals
- Review domain/hosting ownership and renewal dates.
- Review user access and remove unnecessary access.
- Review third-party services, cost, and unused integrations.
- Revisit performance/accessibility priorities and recurring incidents.
- Confirm client contacts, maintenance scope, and renewal plans.

## 5. Incident and change process

1. Record the incident, time, affected page/workflow, impact, and evidence without copying sensitive payloads.
2. Assign severity using the agreed client plan. Do not claim a response time beyond the contract.
3. Notify the client contact when required by the plan or incident impact.
4. Triage, mitigate, and preserve logs/evidence appropriately.
5. Use a reviewed fix and rollback path; avoid untested direct production edits where possible.
6. Verify the live fix and affected workflows.
7. Record root cause, action taken, and preventive follow-up.
8. Separate incidents within contracted maintenance from new features or out-of-scope work; obtain written approval for extra charges.

For a suspected security or data incident, follow the hosting/provider and client's incident procedures and seek qualified assistance as needed. Do not make unverified claims about data exposure or legal reporting obligations.

## 6. Monthly maintenance report template

**Client / site:** [Client and URL]  
**Service period:** [Start–end date]  
**Plan:** [Contracted plan]

### Work completed
- [Task / change / test]

### Checks and results
- Availability / HTTPS: [Result]
- Forms and key flows: [Result]
- Updates/security: [Result]
- Backups (if included): [Result]
- SEO/performance: [Result]

### Issues and risks
- [Issue, impact, owner, next action, target date]

### Client action required
- [Content approval, access, decision, or none]

### Next period
- [Planned tasks within scope]

Do not include patient records, applicant data, credentials, or sensitive logs in the report.

## 7. Billing and renewal controls

- Issue monthly maintenance invoices according to the signed contract and billing calendar.
- Invoice only the agreed plan and approved additional work.
- Use the invoice-specific verified payment QR and written fallback instructions once payment details are approved.
- Reconcile payment against actual account/provider records; do not mark paid from a screenshot alone.
- Send reminders according to agreed terms and keep a record of invoice delivery and status.
- Review price/scope changes before renewal and obtain written agreement before they take effect.
- Never suspend a client's site or remove access without following the contract, client communications, and applicable law.

## 8. Maintenance register fields

| Client | URL | Plan | Start / renewal | Monthly fee | Backup owner | Monitoring owner | Billing day | Invoice status | Next review |
|---|---|---|---|---:|---|---|---|---|---|
| | | | | | | | | | |

Keep private financial records in the approved accounting system, not in the public agency OS repository. The table above is a blank template only.

## 9. Review log

- Initial draft: 15 October 2026.
- Review after the first real maintenance cycle; adjust based on the actual plan scope, incidents, and workload.
