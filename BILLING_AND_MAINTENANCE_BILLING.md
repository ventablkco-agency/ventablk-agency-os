# Billing, Invoices & Recurring Maintenance
**VentaBlk Co. — Operating procedure**  
**Status:** Draft for review  
**Purpose:** Standardize project invoices and monthly website maintenance billing.

## 1. Core policy

- Every paid project or service must have a written scope, agreed fee, billing schedule, and payment terms.
- Create and send an invoice for each agreed billing milestone.
- For recurring website maintenance, issue an invoice **every month** for the contracted service, unless the signed agreement explicitly defines another billing cadence.
- Track invoice status: Draft → Issued → Part-paid (if applicable) → Paid / Overdue / Cancelled.
- Never mark an invoice paid based only on a screenshot or client message; reconcile against the actual payment account/statement.
- Do not silently change fees, tax treatment, scope, due dates, or payment details.

## 2. Invoice contents checklist

Each invoice should contain the applicable legally required details and, at minimum:
- VentaBlk Co. legal/trading name and contact details.
- Client's correct billing name and address; tax/GST details when applicable.
- Unique invoice number following a consistent sequence.
- Issue date, service period, due date, and currency (normally INR unless agreed otherwise).
- Clear line items and service descriptions.
- Quantity/rate, subtotal, applicable taxes, total due, and outstanding balance.
- Payment instructions and verified payment destination.
- Scope/plan reference and support contact.
- Terms for due date, late payment, disputes, and any applicable fees as agreed in contract.
- QR code only when it encodes the verified intended payment destination and is readable on the final PDF/print.

Tax, GST registration, invoice format, e-invoicing, and record-retention obligations depend on the agency's legal/tax circumstances. Confirm these with a qualified accountant; this checklist is not tax advice.

## 2A. Invoice visual direction (based on owner-provided references)

- **Design direction:** Premium, minimalist, typography-led invoice inspired by the two references supplied by the agency owner.
- **Preferred layout:** Strong VentaBlk wordmark at the top, clear invoice title and number, issue/due dates, bill-to details, a clean itemized table, aligned subtotal/tax/total/balance, and a dedicated payment section near the bottom.
- **Visual treatment:** A dark/black version with crisp light typography is the leading direction; keep contrast strong and the layout calm, readable, and print-friendly.
- **Practicality:** Use A4 portrait as the primary PDF format; test on a phone and on paper. Avoid tiny terms, crowded footers, and decorative graphics that compete with the amount due.
- **Branding:** Use the actual approved VentaBlk logo and brand assets. Do not use the reference studios' names, logos, contact details, or invented bank data.
- **Payment section:** Show the approved bank transfer details, UPI ID if supplied, a verified QR code, the exact invoice amount/reference, and a text fallback. The QR must be tested after final PDF export.
- **Tax and currency:** Use INR by default for Indian clients, and apply tax lines only after the agency's accountant confirms the correct treatment.

## 3. QR payment requirement

**Requirement:** Where practical, include a QR code on invoices so the client can scan it to initiate payment directly.

Before using it:
1. Confirm the payment method and destination (for example, a verified UPI ID or a payment provider's official invoice/checkout link).
2. Generate the QR from the bank/payment provider's trusted interface or a verified payment URI. Do not invent or manually guess a QR payload.
3. Verify the displayed payee name and destination match VentaBlk Co.'s approved business payment details.
4. Decide whether the QR should encode a fixed invoice amount or allow the client to enter the amount. Fixed amounts reduce typing errors; variable amounts can suit recurring bills only if the payment flow and reconciliation remain clear.
5. Scan-test the QR using a separate payment app/device before sending the invoice. Verify payee, amount, and reference, then cancel or use an agreed test process rather than making an unintended payment.
6. Ensure the QR is high-resolution, has enough quiet space around it, and does not cover invoice details.
7. Include a fallback written payment instruction and invoice number/reference.
8. Reconcile the actual received payment and issue a receipt/paid confirmation as appropriate.

Never store banking passwords, card details, secret keys, or private payment credentials in GitHub. A QR image and public payment address are not a substitute for checking payment settlement.

### UPI QR implementation note

A static UPI QR can open a compatible payment app and prefill the payee and, when supported by the chosen QR format, the amount/reference. The exact behavior depends on the app and payment flow; do not promise that every app will behave identically. Use a valid UPI payment URI/QR from a trusted, verified source and test across commonly used apps. Never generate a QR from an unverified or guessed UPI ID.

Payment fees and rules can change. As of 15 October 2026, public reporting says a proposed merchant-fee framework for some higher-value UPI person-to-merchant payments has been postponed; confirm current applicability and charges directly with the business's bank/payment provider before choosing a QR arrangement. A direct bank-account UPI QR avoids payment-gateway platform fees, but it should not be described as guaranteed fee-free in every merchant scenario.

## 4. Monthly website maintenance billing workflow

For every active maintenance client, maintain a billing entry with:
- Client and billing contact.
- Contract/plan name and agreed monthly fee.
- Included service scope and exclusions.
- Billing day, service period, due date, currency, and applicable tax treatment.
- Invoice number, sent date, amount due, payment status, and reconciliation date.
- Next billing date and contract renewal/review date.

Monthly procedure:
1. Review the active maintenance register at the start of the billing cycle.
2. Confirm the client remains on the agreed plan and record any approved change request separately.
3. Create an invoice for the correct service period and contracted fee.
4. Add the verified QR/payment instructions and invoice reference.
5. Send the invoice to the authorized billing contact and record the sent date.
6. Record the invoice and payment status in the register.
7. Reconcile incoming payments against the bank/payment provider record.
8. Send a polite reminder after the agreed due date if unpaid; follow the signed contract's escalation and service-suspension terms rather than improvising.
9. Keep the invoice, proof of issue, payment reconciliation, and service report in the appropriate access-controlled accounting/client system.
10. Review renewals and fee changes in advance and obtain written approval before changing recurring charges.

**Important:** This document defines the workflow; it does not itself send invoices or create recurring payment transactions. Automation can be added later once billing software, recipients, billing dates, and payment provider are chosen.

## 5. Recommended records

Keep a private accounting record or approved invoicing platform as the financial source of truth. Do not keep confidential client financial records in a public agency OS repository.

Suggested register columns:
| Client | Plan | Monthly fee | Billing date | Service period | Invoice no. | Sent date | Due date | Status | Paid date | Next invoice |
|---|---|---:|---|---|---|---|---|---|---|---|
| | | | | | | | | | | |

Store the actual invoice PDFs and sensitive client billing details in an access-controlled location. This repository should hold only the reusable process and blank templates.

## 6. Invoice template workflow

When building the reusable invoice template:
- Use a clean, professional layout with VentaBlk branding.
- Make invoice number, issue date, due date, service period, line items, tax, total due, and payment instructions easy to scan.
- Reserve a clear QR area with sufficient size and contrast.
- Include a written payment fallback and payment reference.
- Ensure PDFs render well on mobile and print at A4 size.
- Test QR scanning on both phone-screen and printed/exported PDF versions.
- Keep a blank template separate from client-specific invoices.

## 7. Decisions still required before automation

- Legal billing identity and applicable tax details.
- Preferred invoicing tool or PDF generation workflow.
- Approved payment destination and QR format.
- Monthly invoice day and payment terms per client.
- Who sends invoices and who reconciles payments.
- Where private invoices and the active maintenance register will be stored.
- Whether automated email sending/reminders are desired and which authorized email account should send them.

## Review and change log

- Initial draft: 15 October 2026.
- Review after the first real maintenance contract and invoice cycle.
