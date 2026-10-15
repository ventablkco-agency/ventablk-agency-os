# Client Offboarding & Cancellation Workflow
**ventablk.co — AGENCY**  
**Status:** Draft for review  
**Purpose:** Close a website project or recurring maintenance relationship in an orderly, secure, and documented way.

## 1. Start an offboarding record

- [ ] Record client, project, production URL, request date, and person requesting closure.
- [ ] Confirm the request comes from an authorized client representative.
- [ ] Identify whether this is project closeout, maintenance cancellation, hosting transfer, or full relationship termination.
- [ ] Review the signed agreement for notice period, outstanding obligations, access/ownership terms, fees, and deliverables.
- [ ] Confirm the planned end date and any work that remains in scope.
- [ ] Communicate the process, dependencies, dates, and any contractually permitted charges in writing.

## 2. Financial and contract closeout

- [ ] Reconcile issued invoices and actual payments using the approved accounting records.
- [ ] List overdue or disputed invoices factually and follow the agreement; do not invent fees or change terms unilaterally.
- [ ] Prepare final invoice/credit documentation if applicable and permitted by the agreement.
- [ ] Confirm whether third-party subscriptions are client-owned, agency-owned, or being transferred/cancelled.
- [ ] Tell the client which renewals and services will stop, transfer, or continue and on what date.
- [ ] Preserve invoices and records in the approved access-controlled accounting location.

## 3. Ownership and access transfer

- [ ] Confirm the client has owner/admin access to the domain, DNS, hosting, repository, analytics, Search Console, and business profiles they own or are entitled to control.
- [ ] Transfer accounts using the provider's supported process; do not send passwords in plain text.
- [ ] Confirm new owner/admin can access the systems and complete required verification.
- [ ] Transfer source code, design files, documentation, redirect maps, deployment instructions, and backups to the extent agreed in the contract.
- [ ] Document third-party licenses, subscriptions, renewal dates, and any assets that cannot be transferred.
- [ ] Rotate or revoke agency credentials, tokens, deploy keys, and temporary access that are no longer needed.
- [ ] Remove agency staff access after the transfer is verified and contractual obligations are met.
- [ ] Ensure no production system is left dependent on a personal agency account without explicit client agreement and documented recovery arrangements.

## 4. Website continuity and technical closeout

- [ ] Confirm the target hosting/deployment arrangement and who maintains it after the end date.
- [ ] Create a final backup/export where agreed and verify the restore/import instructions when feasible.
- [ ] Record current production release/commit, build instructions, environment variable names (never secret values), and known issues.
- [ ] Confirm domain, SSL/certificate, DNS, scheduled jobs, forms, notifications, analytics, and integrations have a clear future owner.
- [ ] Test critical public pages and forms after any transfer or migration.
- [ ] Provide a transition window only if agreed; do not imply ongoing support after the contracted end date.
- [ ] Avoid destructive deletion until ownership transfer, backup, retention, and contractual duties are confirmed.

## 5. Data, privacy, and retention

- [ ] Identify any client data held in agency-controlled systems and the approved return, transfer, or deletion action.
- [ ] Do not download or copy patient records, applicant CVs, or sensitive submissions for convenience.
- [ ] Confirm the authorized client recipient and secure transfer method for any required data export.
- [ ] Remove access to submissions and other personal data when no longer required, subject to contractual/legal retention obligations.
- [ ] Retain only the records required for accounting, legal, contractual, or operational purposes, in the approved secure system.
- [ ] Document completion of transfer/deletion without recording sensitive payloads in GitHub.
- [ ] Follow the applicable contract, provider terms, and qualified legal/privacy advice for retention or deletion obligations.

## 6. Maintenance cancellation checklist

- [ ] Confirm cancellation notice and effective date under the agreement.
- [ ] Confirm final service period and whether a final monthly invoice is due under the contract.
- [ ] Clarify whether hosting, domain renewal, monitoring, backups, security updates, and form services continue or stop.
- [ ] Tell the client which tasks will no longer be performed after the effective date.
- [ ] Hand over renewal dates, access owners, backups, and operational notes.
- [ ] Remove recurring billing or reminders only after the final contractual period is settled.
- [ ] Do not disable the website, revoke client ownership, or withhold client-owned assets as leverage in a payment dispute; follow the agreement and applicable law.

## 7. Final handover package

Provide agreed items such as:
- Production URL and repository/source-code access.
- Domain, DNS, hosting, analytics, Search Console, and business-profile ownership status.
- Build/deployment instructions and environment variable names.
- Backup/export and restore instructions.
- Form/integration ownership and notification route (no sensitive submission data in the handover pack).
- License/subscription inventory and renewal dates.
- Known issues, technical debt, and recommended next steps.
- Final invoice/payment status contact and support end date.
- Written confirmation of completed transfer and remaining exceptions.

## 8. Closure record

| Field | Record |
|---|---|
| Client / project | |
| Closure type | Project / maintenance / full relationship |
| Authorized requester | |
| Request date | |
| Effective end date | |
| Contract reviewed by | |
| Final invoice status | |
| Domain/hosting owner confirmed | |
| Repository/source handover | |
| Access revoked/rotated | |
| Backup/transfer status | |
| Data return/deletion status | |
| Remaining obligations/issues | |
| Client confirmation evidence | |
| Closed by / date | |

## 9. Completion message checklist

Send a concise written confirmation that states:
- The agreed end date and services ending.
- Items transferred and accounts the client now controls.
- Remaining items, owners, and due dates.
- Final invoice status or the correct accounting contact.
- Support end date and where future requests should go.

## 10. Review log

- Initial draft: 15 October 2026.
- Review after the first actual client cancellation or transfer.
