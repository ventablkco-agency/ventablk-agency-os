# Website Project Blueprint
**VentaBlk Co. — Reusable implementation blueprint**  
**Status:** Draft for review  
**Default profile:** Content-led, responsive business/hospital website using Astro + TypeScript + Tailwind CSS where appropriate

This blueprint converts the approved design and technical standards into a repeatable project structure. It is a default starting point, not a mandate: document any project-specific stack or architecture changes in that client's repository.

## 1. Project initialization checklist

- [ ] Copy and complete `CLIENT_INFORMATION_TEMPLATE.md` as the client's project record.
- [ ] Confirm page inventory, content ownership, conversion goals, integrations, and scope.
- [ ] Confirm stack, hosting, repository, environment separation, and deployment owner.
- [ ] Confirm client has appropriate ownership/access to domain, hosting, analytics, Search Console, and business listings.
- [ ] Protect the agency OS repository and any client repositories containing internal or commercial information. Never put credentials or patient/applicant data in Git.
- [ ] Create the initial project skeleton, CI build check, and preview deployment before building all pages.

## 2. Suggested Astro project structure

Use this as a starting point; do not create empty folders that the project does not need.

```text
client-website/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico                 # if needed for legacy compatibility
│   ├── apple-touch-icon.png        # if supplied
│   ├── site.webmanifest            # only if a manifest is needed
│   ├── robots.txt                  # static only if rules are fixed
│   ├── images/
│   └── fonts/
├── src/
│   ├── assets/                     # processed source assets
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   ├── forms/
│   │   └── seo/
│   ├── content/
│   │   ├── services/
│   │   ├── doctors/                # only when the project needs profiles
│   │   └── articles/               # only when the project needs articles
│   ├── data/
│   │   ├── site.ts                 # approved public business facts
│   │   ├── navigation.ts
│   │   └── services.ts             # only if content collections are not used
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services/
│   │   ├── doctors/
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── 404.astro
│   │   └── api/                    # only for server endpoints
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── seo.ts
│       └── validation.ts           # only when applicable
├── tests/                          # unit, integration, or smoke tests as needed
├── .github/workflows/              # CI checks if using GitHub Actions
├── .env.example                    # variable names only; no real values
├── .gitignore
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 3. Core shared components

Build shared components where they genuinely improve consistency:

- **BaseLayout:** document shell, language, metadata, global styles, and reusable head elements.
- **Header / Navigation / Footer:** accessible, responsive, and consistent across pages.
- **SEO component/utilities:** title, description, canonical URL, robots directives, social preview metadata, and optional structured data.
- **Breadcrumbs:** only on pages where they help users.
- **Buttons and links:** consistent design tokens and clear accessible states.
- **Form field components:** labels, hints, validation messages, pending/success/error states.
- **Cookie/consent UI:** only where applicable based on actual tracking and legal requirements; do not add a meaningless banner by default.
- **Analytics wrapper:** load only the approved tags, respect the agreed consent approach, and never send sensitive personal data.

Do not turn every visual element into a component. Reuse stable patterns; keep unique sections simple.

## 4. Site facts and URL configuration

Maintain approved public facts in one typed source where practical. For example, `src/data/site.ts` may hold:

- Public-facing organization name and description.
- Production site URL and preferred canonical hostname.
- Public phone, email, address, map URL, and opening hours.
- Logo/social image paths.
- Default language and supported locales.
- Public social profile URLs.

Use these values to avoid inconsistent metadata, footers, contact blocks, and structured data. Do not place secrets, private contact details, or patient data in public site configuration. Verify all facts with the client before launch.

## 5. SEO implementation pattern

Every indexable page should explicitly provide:
- Unique title and meta description.
- Absolute canonical URL based on the production origin.
- Correct index/follow behavior.
- Social sharing title, description, and image.
- One clear H1 and a sensible heading hierarchy.
- Useful visible page content and crawlable internal links.

Implementation requirements:
- [ ] Do not build canonical URLs from an untrusted request host.
- [ ] Use a configured production origin; do not emit preview URLs as canonicals.
- [ ] Add XML sitemap generation using the chosen framework integration or a maintained generator.
- [ ] Verify sitemap output includes only canonical, indexable production URLs.
- [ ] Create a valid robots.txt and reference the production sitemap.
- [ ] Use redirects for changed/retired URLs and test the redirect map.
- [ ] Add structured data only where it accurately represents visible, verified page content.
- [ ] Validate metadata, structured data, sitemap, robots, and redirects in the production build.

For Astro, review the official integrations and version-specific documentation when selecting sitemap and image handling. Keep dependencies current and locked.

## 6. Favicon and social assets

At minimum, create a recognizable, optimized brand favicon and wire it into the shared layout. Depending on the supplied assets and browser requirements, include SVG and PNG/ICO fallbacks, and an Apple touch icon. Add a web manifest only when useful.

- [ ] Verify every referenced asset exists and returns successfully in production.
- [ ] Check favicon at browser tab/bookmark size; do not use a detailed logo that becomes illegible.
- [ ] Configure Open Graph title, description, URL, and image.
- [ ] Check that social preview images use an appropriate aspect ratio and are accessible to crawlers.
- [ ] Confirm assets use approved brand files and permissioned photography.

## 7. Forms and server-side workflows

Choose a secure form service or backend based on requirements, budget, access, and maintenance. A static frontend alone does not safely store submissions.

For each form, document:
- Data fields and the reason each is required.
- Server-side validation and normalization.
- Spam/rate controls and abuse monitoring.
- Destination system and access roles.
- Notification behavior and failure/retry process.
- Data retention/deletion and privacy notice.
- Success, validation-error, network-error, and service-error states.
- End-to-end test evidence.

For careers applications, use controlled access to applications and CVs. For hospital websites, avoid collecting patient symptoms or medical records in ordinary marketing forms unless an explicitly approved secure system is available. Never commit submitted data to Git or email secrets/credentials.

## 8. Responsive, accessibility, and performance implementation

- Use the approved `design.md` tokens and interaction patterns.
- Prefer responsive layout primitives and content-driven breakpoints.
- Provide responsive images and dimensions; avoid lazy-loading the main LCP image.
- Keep client-side JavaScript small and justify each dependency.
- Use semantic HTML and accessible labels, focus, validation, and motion behavior.
- Test at representative mobile, tablet, and desktop widths plus keyboard and zoom.
- Run automated accessibility/performance tools, then manually test key flows.
- Record exceptions and remediation rather than hiding failures behind scores.

## 9. CI and deployment baseline

A minimal CI pipeline should:
1. Install dependencies reproducibly from the lockfile.
2. Run formatting/lint and type checks where configured.
3. Run tests that exist for the project.
4. Build the production site.
5. Fail the workflow when required checks fail.

Deployment practices:
- Keep preview/staging separate from production.
- Keep secrets in hosting environment settings or a secret manager.
- Verify environment variables, redirects, headers, domain, HTTPS, and forms after deploy.
- Maintain a rollback path and know who is authorized to deploy.
- Avoid destructive production changes without client approval and a recovery plan.

## 10. Recommended acceptance tests

Before handover, verify at least:

- [ ] Home, key service pages, contact page, and any high-priority landing pages load.
- [ ] Mobile navigation and all primary CTAs work.
- [ ] Contact/appointment/careers forms are tested end-to-end, including failure paths.
- [ ] No console errors, broken assets, placeholder text, or broken links remain.
- [ ] Metadata and canonicals are correct on representative page types.
- [ ] `/robots.txt`, `/sitemap.xml`, favicon, and custom 404 behave correctly.
- [ ] Redirects and hostname/HTTPS normalization work.
- [ ] Structured data passes relevant validation, if used.
- [ ] Lighthouse/PageSpeed checks are reviewed and major issues addressed.
- [ ] Keyboard navigation, labels, focus, contrast, and reduced motion are reviewed.
- [ ] Search Console, analytics, and business profile are configured if included in scope.
- [ ] Client has approved content, launch, access ownership, and maintenance terms.

## 11. Project README handover fields

Each client repository README should contain:
- Project purpose and stack.
- Local setup/build/test instructions.
- Required environment variable **names** and where authorized maintainers configure them (never values).
- Deployment workflow and production/preview URLs.
- Repository and hosting owners.
- Form/integration architecture and where submissions go (no sensitive records).
- SEO essentials and sitemap location.
- Known limitations, operational risks, and rollback notes.
- Links to the client information record and relevant design/technical standards.

## Official implementation references

- [Astro documentation](https://docs.astro.build/)
- [Astro sitemap integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Google SEO guide for developers](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [Core Web Vitals](https://web.dev/articles/vitals)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

**Review note:** Confirm the project's actual stack and client requirements before copying this blueprint into a client repository. A checklist is a control, not proof that a feature is implemented; verify the deployed behavior.
