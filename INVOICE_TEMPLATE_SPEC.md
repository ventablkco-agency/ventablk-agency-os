# VentaBlk Co. — Invoice Template Specification
**Status:** Design requirements approved; payment details pending  
**Primary format:** A4 portrait PDF  
**Visual reference:** Owner-provided minimalist black invoice and editorial-style invoice examples

## 0. Confirmed agency branding

- **Invoice display name:** `ventablk.co`
- **Descriptor:** `AGENCY`
- **Logo asset:** Agency owner supplied a combined image containing both white-on-black and black-on-white wordmarks. Use the white version for the dark invoice and the black version for the light/print-friendly variant.
- **Brand name confirmation:** The owner confirmed the invoice should use the same agency name shown in the logo.
- **Next asset task:** Extract/use clean logo variants from the supplied image for production-quality invoice output; do not use the full two-panel reference image as the logo itself.

## 1. Design direction

Create a premium, minimal invoice for a modern web design and development agency. The design should feel deliberate and high-end, with strong typography, precise alignment, generous negative space, thin separators, and a restrained visual system.

### Visual system
- **Primary version:** Black/dark background with high-contrast white typography and subtle grey secondary text, inspired by the supplied references.
- **Print-safe consideration:** Ensure the invoice remains legible if printed in grayscale or on a printer that does not reproduce large solid black areas well. Consider a light-background print variant using the same layout and hierarchy.
- **Typography:** One modern sans-serif family or a carefully paired set; bold display heading, clear labels, highly legible body and legal text.
- **Brand:** Use the approved VentaBlk logo/wordmark. Do not imitate or include the reference brands' logos or names.
- **Layout:** Consistent grid, right-aligned monetary columns, restrained dividers, enough whitespace around totals and payment details.
- **Accessibility:** Strong contrast, readable type, no meaning conveyed by color alone, selectable text in the exported PDF when possible.

## 2. Page layout

### Header
- VentaBlk logo/wordmark.
- “INVOICE” as the dominant document title.
- Invoice number clearly visible.
- Issue date, due date, and service period.
- Optional compact payment-status label for paid/overdue copies; do not alter the original invoice record.

### Parties
- **From:** Legal/trading name, business address if required, email, phone, and applicable tax registration details.
- **Bill to:** Client's billing name, billing address, and applicable tax details.
- Include only confirmed information. Do not invent legal entity details or tax IDs.

### Line items
Columns:
- Description
- Service period (for recurring maintenance)
- Quantity
- Rate
- Tax (when applicable)
- Amount

Examples of service descriptions may include website design, development milestone, website maintenance — October 2026, hosting/managed service if contractually included, or an approved additional change request. Only invoice actual contracted work.

### Totals
- Subtotal
- Applicable tax, if confirmed
- Discount, only if approved
- Total
- Amount paid, if applicable
- **Balance due** emphasized
- Currency explicitly shown (INR by default for Indian clients).

### Payment section
- Heading: “PAYMENT DETAILS”
- Bank transfer details: account holder name, bank name, account number, IFSC, and any additional details confirmed by the bank.
- UPI ID, if supplied and verified.
- UPI QR generated from a verified payment URI/official bank/provider flow.
- QR should prefill the exact invoice amount and invoice reference where supported.
- Written fallback instructions, invoice number/reference, and the amount due.
- Do not use a placeholder or sample QR as a real payment code. A design mockup must label it “PLACEHOLDER — NOT FOR PAYMENT” until a real QR is verified.
- Keep QR large enough to scan on phone-screen and printed A4; maintain clear quiet space and strong contrast.

### Footer
- Payment terms and due-date policy.
- Short thank-you message.
- Contact for invoice questions.
- Legal/tax text only after confirmation with the agency's accountant.

## 3. Recurring maintenance invoice rules

- Generate one invoice per active client per agreed billing period; monthly by default for monthly maintenance contracts.
- Show the service period explicitly, e.g. “Website maintenance — 1–31 October 2026”.
- Use a unique sequential invoice number that follows the selected accounting process.
- Calculate subtotal/tax/total and QR amount from the same invoice data source to avoid mismatches.
- Each QR must be generated for that specific invoice; do not reuse a fixed-amount QR across invoices if it embeds an amount.
- Track invoice issue date, due date, delivery channel, status, payment received date, and reconciliation evidence in a private accounting system.
- Do not mark paid based on a screenshot alone; reconcile with the bank/payment provider.
- Email automation is a later phase after selecting a sending method, authorized billing contacts, invoice numbering, and private storage.

## 4. Functional and export requirements

- Export as a selectable-text PDF with embedded/available fonts and correct A4 dimensions.
- Check margins, line wrapping, long client names, multiple line items, large totals, and multi-page overflow.
- Ensure totals and payment details do not split awkwardly across pages.
- Verify QR remains sharp and scans after PDF export, not only in the source design.
- Test at 100% zoom on a mobile screen and on a printed page.
- Store each issued invoice in an access-controlled accounting/client location, not the public agency OS repository.
- Never store credentials, full bank login information, or private payment secrets in GitHub.

## 5. Required details before generating a usable invoice

### VentaBlk billing identity
- Legal name / trading name to print.
- Billing address, if required.
- Business email and phone.
- GST registration status and exact tax details, if applicable, confirmed by an accountant.
- Preferred invoice numbering format and current next invoice number.
- Currency and payment terms.

### Bank and UPI
- Exact account holder name.
- Bank name.
- Account number and IFSC (share only when ready to create the invoice; do not put private banking credentials in this repo).
- Verified UPI ID.
- Whether the bank/payment app can generate a dynamic amount/reference QR or whether we should construct a UPI intent QR and test it.
- Confirm the payee name shown when scanning.

### Client and invoice
- Client billing name and address.
- Invoice issue date and due date.
- Exact service period and contracted line items.
- Agreed fee, approved taxes, discounts, and any amount already paid.
- Authorized billing email recipient.

## 6. Definition of done

The template is ready for real use only after:
- [ ] VentaBlk logo/wordmark and brand styling are verified.
- [ ] Billing identity and required tax treatment are confirmed.
- [ ] Invoice numbering and terms are approved.
- [ ] Bank details and UPI ID are verified against the actual account.
- [ ] A real invoice-specific QR is generated and scan-tested; payee, amount, and reference are checked.
- [ ] Totals reconcile with the invoice line items.
- [ ] PDF exports correctly and is readable on mobile and print.
- [ ] One test invoice is reviewed before sending to a client.
- [ ] A private storage and reconciliation workflow is selected.

## 7. Future automation (not yet implemented)

Potential later workflow:
1. Read approved client plan and billing period.
2. Create the invoice with a unique invoice number.
3. Calculate line items and tax using approved accounting rules.
4. Generate invoice-specific QR/payment details.
5. Export the PDF.
6. Send it to the authorized billing contact.
7. Record delivery status and due date.
8. Send reminders according to the contract.
9. Reconcile payments from the bank/provider before marking paid.

Automation must not guess fees, tax treatment, bank details, client recipients, or payment status.
