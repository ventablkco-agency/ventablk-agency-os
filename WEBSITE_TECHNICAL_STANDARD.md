# Website Technical Standard
**VentaBlk Co. — Production, Responsive, SEO, AEO & GEO Standard**  
**Status:** Draft for review  
**Applies to:** New client websites and substantial redesigns  
**Last reviewed:** 15 October 2026

This document defines the technical baseline for a website to be considered ready for client approval and launch. It complements `design.md`: the design standard defines how the website should look and behave; this document defines how it should be built, discovered, measured, secured, and maintained.

> **Operating principle:** Build for people first, make important information accessible in the rendered page, and make the technical implementation clear to browsers, assistive technology, search engines, and AI-powered discovery systems. No checklist guarantees rankings, indexing, AI citations, or leads.

## 1. Project setup and architecture

Before development begins, record the answers in the project brief:

- [ ] Website purpose, target audience, primary conversion, and secondary conversions are agreed.
- [ ] Sitemap/page inventory, navigation, content owner, and required integrations are approved.
- [ ] Domain, DNS, hosting, deployment workflow, repository ownership, and access owners are recorded.
- [ ] Preferred stack is chosen for the project rather than by habit. Use a lightweight static/SSR approach where suitable; add a backend or third-party service only when the requirements need it.
- [ ] Production, preview/staging, and local environments are separated.
- [ ] Secrets and private keys are stored in the hosting provider's secret manager/environment settings, never committed to Git.
- [ ] Dependencies are locked; builds are repeatable; deployment and rollback steps are documented.
- [ ] Client owns or has appropriate access to domain, hosting, analytics, Search Console, business profiles, and critical service accounts.

### Architecture decision rule

A marketing/information website may need only a frontend and static/SSR hosting. A contact form, appointment request, careers form, portal, or other data-collection workflow needs a clearly defined submission path: a secure backend or reputable form service, server-side validation, spam controls, authorized notification, storage/retention rules, and failure handling. Do not create a fake form that appears to submit but does not reliably deliver data.

For sensitive information (especially patient/health information), do not collect it through a general-purpose contact form unless the client has explicitly approved a compliant data-handling design. Collect the minimum necessary information and route it to an authorized system.

## 2. Responsive implementation

- [ ] Use one responsive site, not separate desktop and mobile websites unless there is a compelling, documented requirement.
- [ ] Use fluid layouts, flexible grids, responsive images, and content-driven breakpoints.
- [ ] Avoid fixed widths/heights that cause clipping; avoid horizontal page overflow.
- [ ] Test at representative widths: 320–375 px, 390–430 px, 768–1024 px, and 1280 px and above. These are test ranges, not mandatory breakpoint values.
- [ ] Test portrait/landscape where relevant, browser zoom, long headings, long names, validation messages, empty states, and large text.
- [ ] Navigation, menus, dialogs, accordions, tabs, carousels, and forms work with keyboard and touch.
- [ ] Touch targets are comfortably usable; important actions are not hover-only.
- [ ] No content or functionality is removed on mobile without an explicit product reason.
- [ ] Images and video do not overflow; tables have a mobile strategy; sticky UI does not cover content.
- [ ] Test on real mobile devices or credible device emulation in addition to desktop resizing.

## 3. Accessibility and semantics

Target **WCAG 2.2 AA** as the project baseline, while verifying applicable legal/client obligations separately.

- [ ] Use semantic landmarks, logical heading hierarchy, descriptive link text, and real buttons for actions.
- [ ] Every form field has a programmatic label; errors are explained in text and associated with the relevant field.
- [ ] Keyboard focus is visible and logical; focus is managed correctly in dialogs and menus.
- [ ] Text contrast, non-text contrast, zoom/reflow, reduced motion, and status announcements are checked.
- [ ] Informative images have useful alt text; decorative images use empty alt text. Do not stuff keywords into alt text.
- [ ] Videos with meaningful speech have captions; motion is not essential to understanding or interaction.
- [ ] Accessibility is tested manually as well as with automated tools. Automated scores alone do not prove conformance.

## 4. Technical SEO baseline

### Crawlability and indexability

- [ ] Important pages return successful HTTP status codes and can be reached through crawlable internal links.
- [ ] Production pages intended for search are not blocked by robots.txt, authentication, CDN rules, or accidental `noindex` directives.
- [ ] Preview/staging environments are protected from indexing; launch checklist includes removing staging-only blocks from production.
- [ ] Use `noindex` for pages that should not appear in search; do not rely on robots.txt to remove a URL from the index.
- [ ] Every indexable page has a preferred canonical URL. Canonicals point to the correct absolute production URL.
- [ ] Redirect retired/changed URLs to the closest relevant replacement; avoid redirect chains and loops. Use permanent redirects for permanent URL changes.
- [ ] Custom 404 page returns an actual 404 status. Do not return 200 for missing pages (soft 404).
- [ ] Internal links use valid destinations and descriptive anchor text.
- [ ] Important content is available as crawlable text in the rendered page; essential information is not image-only or dependent on a user interaction search engines cannot access.
- [ ] Use HTTPS throughout; avoid mixed content.

### Metadata and page structure

For each indexable page:
- [ ] Unique, descriptive `<title>` reflecting the actual page and user intent.
- [ ] Useful meta description written for people; it may be rewritten by search engines and is not a guaranteed ranking factor.
- [ ] One clear primary H1, followed by a logical heading hierarchy.
- [ ] Correct language declaration, e.g. `<html lang="en-IN">` when appropriate.
- [ ] Canonical URL, robots directives where needed, and appropriate social sharing metadata.
- [ ] Descriptive image filenames where practical and useful alt text.
- [ ] Breadcrumbs and internal links where they help users understand site hierarchy.
- [ ] Avoid duplicate titles/descriptions, keyword stuffing, doorway pages, and mass-produced thin pages.

### XML sitemap

- [ ] A valid XML sitemap is generated or maintained at a predictable URL, commonly `/sitemap.xml`.
- [ ] It contains only canonical, indexable, successful production URLs.
- [ ] It excludes redirects, 404s, noindex pages, preview URLs, and duplicate URL variants.
- [ ] It updates when relevant pages are added, removed, or changed.
- [ ] The sitemap URL is referenced in `robots.txt` and submitted in Google Search Console; submit to other search engines when relevant.
- [ ] Validate the sitemap after launch. A sitemap helps discovery; it does not guarantee indexing.

### robots.txt

- [ ] A valid `/robots.txt` exists when useful for the project and does not unintentionally block important content or resources.
- [ ] The sitemap URL is included when available.
- [ ] Do not put secrets or private URLs in robots.txt; it is public.
- [ ] Confirm staging and production robots behavior independently.

### URL and international/local targeting

- [ ] URLs are stable, readable, lowercase where practical, and use consistent trailing-slash rules.
- [ ] Redirect and canonical rules consistently enforce the chosen hostname (www or non-www) and HTTPS.
- [ ] Use hreflang only when the site genuinely provides equivalent language/region variants; implement reciprocal, valid references.
- [ ] For local businesses, ensure business name, address, phone, service areas, opening hours, and contact details are accurate and consistent with client-approved business listings.
- [ ] Avoid creating near-duplicate location pages without genuinely useful, location-specific content.

## 5. AEO / GEO / AI-assisted discovery

AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) are useful industry terms, not separate guarantees or universally standardized ranking systems. Build on sound SEO and content quality rather than chasing hacks.

- [ ] Answer real audience questions directly and accurately, with helpful context and clear page structure.
- [ ] Put key facts in visible HTML text, not only in images, PDFs, scripts, or accordions that cannot be accessed reliably.
- [ ] Make expertise, authorship/review responsibility, credentials where applicable, dates, contact information, and source references clear.
- [ ] Publish original, client-verified information that is more useful than generic boilerplate.
- [ ] Keep important facts consistent across the website and authoritative business profiles.
- [ ] Use descriptive headings, meaningful internal links, and concise definitions where they genuinely help readers.
- [ ] Structured data must accurately describe visible page content and comply with the search engine's policies.
- [ ] Do not promise inclusion in AI answers or use fake reviews, fabricated citations, keyword-stuffed FAQ pages, or mass-generated doorway pages.
- [ ] Do not add `llms.txt`, special “AI schema,” or artificial content chunking as a substitute for strong technical SEO and useful content. Add emerging machine-readable features only when there is a real use case and reliable support.
- [ ] Where available to the site/account, review Search Console reporting for generative AI search visibility and normal search performance; availability may vary by rollout and property.

## 6. Structured data (Schema.org / JSON-LD)

- [ ] Select types based on the actual organization and page—not on a desired rich result.
- [ ] Ensure every marked-up claim matches visible content and current client-approved facts.
- [ ] Validate syntax and eligibility with Schema.org Validator and Google's Rich Results Test where applicable.
- [ ] Keep structured data current when the underlying visible content changes.
- [ ] Do not mark up hidden, misleading, fabricated, or irrelevant content.

Potential types to consider only when appropriate:
- Organization / LocalBusiness for the actual organization or local business.
- MedicalOrganization, Hospital, Physician, or other healthcare types only when they accurately describe the client and are supported by the schema vocabulary and search feature policies.
- WebSite, WebPage, BreadcrumbList, Article, Event, Product, or JobPosting only for matching content and supported use cases.
- FAQPage markup should not be added just because a page has FAQs; Google limits FAQ rich results to eligible authoritative government and health websites, and eligibility is not guaranteed.

Structured data helps machines interpret a page; it does not guarantee a rich result or ranking.

## 7. Social sharing, favicon, and browser metadata

- [ ] Supply a recognizable favicon set, including an SVG favicon where supported and PNG/ICO fallbacks as appropriate.
- [ ] Add correct `rel="icon"` references and verify files return successfully.
- [ ] Add a web app manifest only when useful; ensure referenced icons and names are correct.
- [ ] Configure Open Graph metadata (title, description, canonical public URL, and suitable share image); add Twitter/X card metadata when relevant.
- [ ] Social images have correct dimensions, are compressed, and are not blocked from crawlers.
- [ ] Set theme color only when it matches the intended browser UI.
- [ ] Use a consistent, client-approved brand name and logo assets. Check browser tabs, bookmarks, and social previews.

## 8. Performance and Core Web Vitals

Measure real performance when data is available; do not rely only on a local Lighthouse run.

Target Google's “good” Core Web Vitals at the 75th percentile of real visits:
- **LCP:** 2.5 seconds or less.
- **INP:** 200 milliseconds or less.
- **CLS:** 0.1 or less.

Implementation checks:
- [ ] Serve appropriately sized modern image formats when supported; provide responsive sources and intrinsic dimensions.
- [ ] Do not lazy-load the main above-the-fold/LCP image; lazy-load off-screen images and embeds.
- [ ] Use font subsets and sensible font loading; avoid excessive font families/weights.
- [ ] Minimize JavaScript, third-party tags, unused CSS, and render-blocking resources.
- [ ] Reserve space for images, embeds, and dynamic components to prevent layout shifts.
- [ ] Cache static assets appropriately; use compression and a CDN when suitable.
- [ ] Avoid autoplay video backgrounds on mobile; offer a poster/fallback and respect reduced-motion preferences.
- [ ] Test with Lighthouse/PageSpeed Insights and, after launch, field data in PageSpeed Insights/CrUX where available.
- [ ] Record baseline results and fix the largest user-impacting issues before polishing minor scores.

## 9. Security, forms, and privacy

- [ ] Enforce HTTPS and secure hosting configuration.
- [ ] Never expose secrets, API keys, private tokens, database credentials, or sensitive debug output in client code or public repositories.
- [ ] Validate and normalize all submitted data on the server/service; client-side validation is for usability, not security.
- [ ] Add appropriate spam/rate controls and safe error handling to public forms.
- [ ] Send notifications to authorized recipients only; prefer a protected record/link over emailing sensitive attachments.
- [ ] Test successful submission, invalid input, network/service failure, duplicate submission, and confirmation state.
- [ ] Define who receives data, where it is stored, access controls, retention/deletion, and who handles failures.
- [ ] Collect only necessary personal data; include a privacy notice and consent mechanism where legally or operationally required.
- [ ] Assess applicable Indian privacy/data-protection requirements and other client jurisdictions with qualified advice; do not treat a generic template as legal compliance.
- [ ] Use security headers and a Content Security Policy where feasible; configure permissions and third-party integrations conservatively.
- [ ] Keep dependencies updated and remove unused packages, demo routes, and debug tooling before launch.

## 10. Healthcare website requirements

For hospitals, clinics, and healthcare providers:
- [ ] Confirm all specialties, services, doctors, degrees, registrations, claims, timings, phone numbers, and emergency instructions with the client.
- [ ] Do not invent doctors, credentials, patient testimonials, treatment outcomes, awards, or statistics.
- [ ] Provide clear contact, appointment-request, location, opening-hours, and emergency information as appropriate.
- [ ] Avoid collecting patient symptoms, reports, or medical history through a general marketing form unless a secure, approved workflow exists.
- [ ] Obtain permission for staff portraits, patient imagery, testimonials, logos, and clinical photography.
- [ ] Make medical content accurate, reviewed by an appropriately qualified person, and clear about who reviewed it when relevant.
- [ ] Use accessible language and avoid unsupported guarantees such as “100% cure.”
- [ ] Keep Google Business Profile details aligned with the real business and its policies; never fabricate reviews or locations.

## 11. Analytics, measurement, and local visibility

- [ ] Configure Google Search Console with the appropriate verified property and submit the sitemap.
- [ ] Configure analytics only when agreed with the client; define meaningful events such as successful contact submission, appointment enquiry, phone click, or WhatsApp click.
- [ ] Do not count button clicks as successful leads when submission or delivery has not been confirmed.
- [ ] Avoid sending personal or sensitive form data to analytics.
- [ ] Verify tracking in preview and production; document who owns the accounts and who can access reports.
- [ ] For local businesses, assist with an accurate Google Business Profile only with authorized owner/manager access.
- [ ] Check local business name/address/phone, categories, hours, services, website URL, and map pin against client-approved information.
- [ ] Set a baseline for organic visibility, indexed pages, form conversions, and performance; distinguish setup completion from future SEO results.

## 12. Content and media quality

- [ ] Every key page has a defined audience, search intent, primary purpose, and call to action.
- [ ] Content is original, specific, factual, readable, and approved by the client.
- [ ] Titles and headings describe the actual content; no keyword stuffing.
- [ ] Images have permission/licensing, useful alt text where appropriate, correct crop, and optimized file size.
- [ ] Important phone numbers, addresses, hours, prices, doctor details, and service claims are checked before publication.
- [ ] Broken links, placeholder copy, lorem ipsum, demo content, and unfinished sections are removed.
- [ ] Content has an identified owner and a plan for updates where information can change.

## 13. Testing and launch gate

A site is not launch-ready until the applicable items below are checked.

### Functional and responsive QA
- [ ] Test primary pages on mobile, tablet, and desktop widths.
- [ ] Test navigation, links, forms, validation, confirmation, error states, telephone links, email links, and WhatsApp links.
- [ ] Check keyboard navigation, visible focus, headings, image alt text, and reduced motion.
- [ ] Check browser console/network errors and failed assets.
- [ ] Check all external links and third-party embeds.

### SEO and indexing QA
- [ ] Confirm production canonical URLs, title tags, descriptions, H1s, and language.
- [ ] Confirm robots.txt, sitemap.xml, redirects, 404 behavior, and index/noindex directives.
- [ ] Validate structured data where used and confirm it matches visible content.
- [ ] Inspect important URLs in Google Search Console after launch and request indexing when appropriate.
- [ ] Verify social sharing previews, favicons, and the intended site name/logo.
- [ ] Ensure staging hostnames and test pages are not exposed as indexable production pages.

### Performance, security, and handover
- [ ] Run a production build and review build/deployment logs.
- [ ] Run Lighthouse/PageSpeed checks on representative key pages.
- [ ] Confirm HTTPS, form delivery, environment secrets, backups/rollback approach, and access permissions.
- [ ] Verify analytics events and Search Console ownership where included in scope.
- [ ] Capture final screenshots and record outstanding known issues.
- [ ] Obtain written client approval for content and launch.
- [ ] Hand over account ownership/access, key URLs, maintenance scope, renewal terms, and support contact.
- [ ] Schedule a post-launch smoke test and a follow-up review after search engines have had time to crawl.

## 14. Maintenance standard

At the cadence agreed in the maintenance contract:
- [ ] Check uptime, domain/DNS/certificate status, form delivery, and key conversion paths.
- [ ] Review dependency/security updates and hosting/deployment failures.
- [ ] Check Search Console indexing issues, sitemap errors, manual actions/security issues, and important organic changes.
- [ ] Review performance field data when sufficient traffic exists.
- [ ] Update business-critical content and verify that changes do not break metadata, structured data, forms, or responsive layouts.
- [ ] Keep a change log and report work completed, issues found, and recommended next actions.

## 15. Definition of done

A project can be marked **Production Ready** only when:
1. Design and content are approved.
2. Responsive, accessibility, and functional QA have been completed.
3. SEO fundamentals, canonical URLs, robots directives, sitemap, favicon, and social metadata are checked.
4. Applicable structured data is validated.
5. Forms and integrations have been tested end-to-end.
6. Performance and security checks have been completed, with known exceptions recorded.
7. Analytics/Search Console setup included in scope is verified.
8. Client approval, handover, and maintenance responsibilities are documented.

Items outside the contracted scope must be clearly marked **not included**, not silently skipped or presented as completed.

## Reference standards and official guidance

Use current documentation during each project because platform requirements evolve:
- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [SEO guide for developers](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [Google's guide to generative AI features in Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google Search structured data documentation](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Core Web Vitals](https://web.dev/articles/vitals)
- [W3C Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
- [Schema.org](https://schema.org/)

**Review note:** This is a production baseline, not a promise of ranking or legal compliance. Confirm project-specific requirements and revisit official documentation before launches.
