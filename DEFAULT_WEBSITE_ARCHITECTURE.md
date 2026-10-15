# Default Website Architecture
**VentaBlk Co. — Architecture decision record**  
**Status:** Draft for approval  
**Scope:** New content-led business and hospital marketing websites

## 1. Default recommendation

For a typical hospital marketing website with pages for services, doctors, location, contact, and content, start with:

- **Frontend/rendering:** Astro with TypeScript and Tailwind CSS, using server-rendered or pre-rendered HTML where appropriate.
- **Hosting/deployment:** Use the client's existing approved platform when it meets requirements. Cloudflare Pages/Workers or another static/SSR-capable host may be appropriate; choose based on framework compatibility, form requirements, cost, support, and account ownership.
- **Content:** Keep a clear source of truth for approved public facts and content. Use Astro content collections or a CMS when content volume and client editing needs justify it.
- **Forms:** Use a managed form service or a small server-side endpoint. A static frontend alone cannot securely store submissions or guarantee delivery.
- **Data storage:** Only add a database when there is a defined need for persistent records, access controls, retention/deletion, backups, and an owner. Do not build a database just because a form exists.
- **Notifications:** Notify authorized recipients after server-side validation and successful storage/delivery. Include error handling and a documented fallback.
- **SEO:** Shared metadata utilities, absolute production canonicals, generated sitemap, deliberate robots rules, redirects, favicon/social assets, and appropriate structured data.
- **Quality:** Automated build/type/lint/test checks as suitable, preview deployments, responsive/accessibility review, production smoke test, and documented rollback.

This is a default profile, not a universal architecture. A portal, patient system, appointment platform, or large editorial site may need a different design.

## 2. Architecture decision tree

### A. Informational pages only
Use a lightweight static or server-rendered site. Avoid a database and backend if there are no dynamic requirements. Keep approved public content in the repository or a CMS chosen for client editing needs.

### B. Contact form / callback request
Choose either:
1. A reputable managed form provider with appropriate data handling, spam controls, access management, and delivery reporting; or
2. A server-side endpoint with validation, rate limiting, secure storage/delivery, monitoring, and operational ownership.

Do not treat a frontend-only form as a working backend. Verify submission end-to-end after deployment.

### C. Careers form with CV upload
Use a controlled application system or a secure upload workflow with access restrictions, file-type/size checks, malware scanning where supported, retention/deletion rules, and authorized HR access. Prefer a protected application record/link over attaching CVs to email. Do not store CVs in Git or an unrestricted public bucket.

### D. Appointment requests
If the hospital already has an appointment/EMR/booking system, integrate through its supported workflow where approved. Otherwise, define whether this is merely an enquiry or a confirmed booking. Do not imply an appointment is booked until the authoritative system confirms it.

### E. Patient information or clinical records
Treat as a separate, higher-risk system. Do not collect symptoms, reports, medical history, or other sensitive health data through an ordinary marketing form. Require an approved secure system, access model, retention policy, incident process, and legal/privacy review before implementation.

## 3. Form workflow contract

Every form must define these steps and owners:

1. Browser-side usability validation.
2. Server/service-side validation and normalization.
3. Spam and abuse controls appropriate to the form.
4. Persist or deliver the submission through the approved destination.
5. Notify authorized recipients only after success.
6. Show a truthful success or failure state to the user.
7. Record operational errors without logging sensitive payloads.
8. Define retries, duplicate handling, fallback, retention, and deletion.
9. Test valid, invalid, duplicate, spam-like, and service-outage scenarios.
10. Verify the live destination and notification route before launch.

## 4. Secrets and data

- Keep secrets in the hosting platform's encrypted environment settings or a secret manager.
- Commit only variable names in `.env.example`, never real values.
- Do not put secrets in client-side JavaScript or public build variables.
- Collect the minimum data required for the workflow.
- Limit access by role; document who owns the data and who handles access requests/deletion.
- Avoid sending personal or sensitive form fields to analytics or logs.
- Select providers after checking cost, data location/processing terms, export/deletion capability, uptime/support, and the client's obligations.

## 5. SEO and rendering rules

- Important page content, links, titles, and descriptions must be accessible in crawlable HTML.
- Use a configured production origin for canonical URLs; never trust an arbitrary incoming host header to set canonicals.
- Generate and validate a sitemap containing only canonical, indexable production URLs.
- Keep `robots.txt`, noindex directives, redirects, and canonical tags consistent.
- Add structured data only for verified, visible content.
- Avoid shipping heavy client-side JavaScript when server/static rendering solves the problem.
- Test the deployed site, not only the local development environment.

## 6. Hosting decision criteria

Choose hosting only after checking:
- Framework/runtime compatibility and supported deployment mode.
- Static assets, server functions, upload size, execution limits, and background work requirements.
- Form destination and email delivery reliability.
- Custom domains, HTTPS, redirects, headers, cache controls, and logs.
- Preview deployments, rollback, backups, observability, and incident response.
- Monthly cost, usage limits, billing owner, and what happens when limits are exceeded.
- Account ownership and whether the client can take over without agency lock-in.

Do not select a provider solely because its advertised free tier exists. Re-check current limits and pricing before committing a client.

## 7. Project-specific decision record

For each project, complete:

- **Rendering mode:** Static / SSR / hybrid
- **Framework and version:**
- **Hosting and deployment:**
- **CMS or content source:**
- **Forms and destination:**
- **Database/storage (if any):**
- **Notification provider:**
- **Analytics and consent approach:**
- **Search Console / business profile owner:**
- **Secrets owner and configuration location:**
- **Backups and rollback:**
- **Data categories collected:**
- **Retention/deletion owner:**
- **Security/privacy review owner:**
- **Reason for any deviation from the default:**

## 8. Current default for VentaBlk

Until project requirements say otherwise:
- Prefer Astro + TypeScript + Tailwind for content-led marketing sites when it fits the existing team and hosting.
- Prefer no database for a brochure site that does not need persistent data.
- For simple enquiries, evaluate a managed form provider first, then compare it with a server-side implementation based on cost, privacy, reliability, and ownership.
- For careers applications and any sensitive workflow, do not choose a provider or start collecting data until the access and retention requirements are clear.
- Reuse the approved design and technical standards; record project-specific exceptions.

**Approval needed:** This document describes the recommended decision framework. It intentionally does not lock a single form provider, database, or hosting platform for every client.
