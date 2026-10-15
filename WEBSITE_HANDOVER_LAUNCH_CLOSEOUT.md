# Website Handover & Launch Closeout
**ventablk.co — AGENCY**  
**Status:** Draft for review

## Purpose

Ensure every website launch is tested, approved, documented, and handed over cleanly. Use one copy per client project and adapt to its actual stack and contract.

## 1. Pre-launch readiness

### Content and approval
- [ ] Client has approved the exact production-ready content/version.
- [ ] Organization details, service descriptions, doctor credentials, hours, emergency instructions, and contact details have been verified by the client.
- [ ] All photos, logos, testimonials, and third-party assets have usage permission.
- [ ] No placeholder text, sample data, broken links, or unintended draft pages remain.

### Responsive and accessibility QA
- [ ] Test representative mobile widths (320–375 px and 390–430 px), tablet widths (768–1024 px), and desktop widths (1280 px and above); adapt tests to actual user analytics and layout behavior.
- [ ] Navigation, menus, sticky elements, forms, buttons, and key content work on touch and keyboard.
- [ ] Check zoom/reflow, focus visibility, labels, contrast, error messages, reduced motion, and semantic headings.
- [ ] Review automated accessibility results and manually test key flows; record known exceptions.

### Technical SEO and discovery
- [ ] Unique title and meta description on indexable pages.
- [ ] Canonicals use the intended production origin and preferred hostname.
- [ ] Sitemap contains intended canonical, indexable production URLs only.
- [ ] robots.txt is valid and does not block required content/assets; staging is protected from indexing.
- [ ] Redirect map is implemented and tested; no redirect loops or unnecessary chains.
- [ ] Structured data, if used, matches visible and verified content and passes relevant validation.
- [ ] Social preview image/title/description and favicons load correctly.
- [ ] Custom 404 page and internal links are checked.
- [ ] Search Console property and sitemap submission are configured if in scope.

### Performance and reliability
- [ ] Production build succeeds and CI checks pass.
- [ ] No critical console errors or broken network requests.
- [ ] Images are appropriately sized/compressed and responsive; main LCP image is not unnecessarily lazy-loaded.
- [ ] Review Core Web Vitals / PageSpeed and address major issues within scope.
- [ ] HTTPS, domain routing, caching, headers, and redirects are correct.
- [ ] Backup/rollback path and responsible person are documented.

### Forms, privacy, and integrations
- [ ] Each form is tested end-to-end with a test submission.
- [ ] Server/service-side validation, spam protection, and error states work.
- [ ] Correct authorized recipient and destination receive the submission.
- [ ] Failure and fallback behavior is understood; no false success message.
- [ ] Privacy notice and agreed consent behavior are present where applicable.
- [ ] No sensitive payloads are sent to analytics or logged unnecessarily.
- [ ] Careers uploads or sensitive workflows use the approved secure system.
- [ ] Do not test using real patient records or real applicant data.

### Analytics and local visibility
- [ ] Analytics property/tag is correct and tested, if included.
- [ ] Conversion events are tested and do not contain personal or sensitive data.
- [ ] Google Business Profile details are consistent and access is with the authorized owner/manager, if in scope.
- [ ] Local business facts, NAP details, and service areas are accurate.

## 2. Launch procedure

1. Confirm written client launch approval for the exact version.
2. Confirm final invoice/payment milestone status as defined in the contract; do not invent new conditions after acceptance.
3. Freeze changes or announce the agreed cutover window.
4. Verify production environment variables and secret configuration in the hosting provider; never commit secrets.
5. Deploy the approved release and run production smoke tests.
6. Verify domain, HTTPS, canonical host, redirects, forms, notifications, analytics, sitemap, robots.txt, and important pages.
7. Check logs/monitoring for errors and keep the rollback option available.
8. Record launch time, deployed version/commit, tests, known issues, and person responsible.
9. Notify the client that launch checks are complete and share any outstanding non-blocking items.

## 3. Handover package

Provide the items included in the contract:
- [ ] Production URL and preview/staging URL if it remains available.
- [ ] Repository/source-code access and ownership arrangement.
- [ ] Hosting, domain, DNS, and third-party account ownership/access instructions.
- [ ] Build/deploy instructions and required environment variable names (never values/secrets).
- [ ] Content editing instructions or CMS training if applicable.
- [ ] Form destination and authorized operational owner (no sensitive submission data in the handover document).
- [ ] SEO basics: sitemap location, Search Console access, redirect list, analytics setup.
- [ ] Backup and rollback process.
- [ ] Known issues, accepted exceptions, and maintenance responsibilities.
- [ ] Warranty/support window and how to request help.
- [ ] Maintenance plan and billing contact, if agreed.

## 4. Access and security closeout

- [ ] Ensure the client has appropriate owner/admin access to accounts they own.
- [ ] Remove temporary agency/developer access that is no longer required.
- [ ] Rotate temporary credentials/tokens through the appropriate provider if they were used.
- [ ] Confirm secrets are stored only in approved secret/environment management.
- [ ] Confirm no passwords, patient data, applicant CVs, form submissions, or confidential invoices are in Git.
- [ ] Document who owns future renewals and billing for domain, hosting, and third-party tools.

## 5. Client acceptance and closeout record

| Field | Record |
|---|---|
| Client / project | |
| Production URL | |
| Release / commit | |
| Launch date/time | |
| Client launch approver | |
| Approval evidence | |
| QA checklist location | |
| Known issues accepted | |
| Handover completed by/on | |
| Warranty/support ends | |
| Maintenance plan / next billing date | |
| Client access confirmed | |
| Follow-up review date | |

## 6. Post-launch follow-up

- [ ] Within 1–3 working days, check uptime, forms, redirects, indexing accessibility, and any launch errors.
- [ ] Within the agreed follow-up window, ask the client whether the key workflows are working as expected.
- [ ] Review Search Console/analytics only when configured and enough data exists; do not infer outcomes from tiny samples.
- [ ] Log issues, assign owners, and distinguish included warranty corrections from new work.
- [ ] Confirm monthly maintenance billing and the service period if a maintenance contract is active.

## 7. Review log

- Initial draft: 15 October 2026.
- Review after the first real launch and update based on actual incidents and client handover questions.
