# Client Website Project README Starter
**ventablk.co — AGENCY**  
Use this as the starting `README.md` in a client website repository. Replace all bracketed placeholders and remove sections that do not apply.

## Project overview

- **Client / organization:** [Approved public name]
- **Website:** [Production URL]
- **Purpose:** [Primary website goal]
- **Status:** [Discovery / Design / Development / Staging / Production / Maintenance]
- **Project owner:** [Authorized role/contact]
- **Repository owner:** [Client or agency; confirm agreement]
- **Last updated:** [YYYY-MM-DD]

## Project information and source of truth

- **Client information record:** [Link to secure approved location or non-sensitive project file]
- **Design specification / approved design:** [Link]
- **Content approval record:** [Link]
- **Technical architecture decision record:** [Link]
- **Redirect map:** [Link, if applicable]
- **Launch QA / handover record:** [Link]
- **Maintenance plan:** [Link, if applicable]

Do not add passwords, API keys, private tokens, patient records, CVs, form submissions, or confidential invoices to this repository. Store secrets in approved hosting environment settings/secret management and sensitive records in access-controlled systems.

## Stack and architecture

- **Framework / language:** [e.g. Astro + TypeScript]
- **Styling:** [e.g. Tailwind CSS]
- **Rendering mode:** [Static / SSR / hybrid]
- **Content source / CMS:** [Repository / CMS / other]
- **Hosting / CDN:** [Provider]
- **Forms / backend:** [Provider and destination, no sensitive data]
- **Analytics:** [Property and owner, if applicable]

## Local development

### Prerequisites

- [Supported Node.js version]
- [Package manager]
- [Other dependencies]

### Setup

1. Clone the repository using your authorized account.
2. Install dependencies using the lockfile, for example `npm ci` when npm is used.
3. Copy `.env.example` to the local environment file if required.
4. Configure required variables locally using approved development values; never commit the values.
5. Start the development server with the command below.

```bash
npm run dev
```

Confirm the actual package scripts before using these commands; replace them if the project uses a different stack.

## Common commands

| Task | Command (verify against package.json) |
|---|---|
| Install dependencies | `npm ci` |
| Start local development | `npm run dev` |
| Run tests | `npm test` |
| Run lint | `npm run lint` |
| Type check | `npm run check` |
| Production build | `npm run build` |

Only list commands that actually exist in the project. Document any project-specific test or preview command.

## Environment variables

List **names and purpose only**, never real values.

| Variable name | Purpose | Configured in | Required for |
|---|---|---|---|
| `[PUBLIC_SITE_URL]` | Canonical production origin, if used by this project | Hosting settings / local env | Build/runtime |
| `[FORM_PROVIDER_KEY]` | Server-only form integration secret, if applicable | Secret manager / hosting settings | Form endpoint |

Remove example rows that are not used. Prefixes such as `PUBLIC_` may expose values to browser code in some frameworks; never put secrets in public variables. Confirm the actual framework's environment-variable behavior.

## Build, deployment, and rollback

- **Production branch:** [Branch]
- **Preview/staging URL:** [URL, if applicable]
- **Production URL:** [URL]
- **Deployment workflow:** [CI/CD provider and workflow link]
- **Authorized deploy owners:** [Roles]
- **Environment configuration location:** [Provider settings; no values here]
- **Rollback method:** [Known-good deployment/commit and steps]
- **Backup/export location:** [Access-controlled location]

Before deployment, run the project's configured checks and confirm approval for the intended release. After deployment, test the live site, key pages, forms, redirects, and metadata. Do not paste secrets into workflow logs or commit them to Git.

## SEO and discovery

- **Preferred canonical hostname:** [https://example.com or https://www.example.com]
- **Sitemap URL:** [e.g. https://example.com/sitemap-index.xml — verify actual path]
- **robots.txt URL:** [URL]
- **Search Console property owner:** [Authorized owner]
- **Analytics property owner:** [Authorized owner, if applicable]
- **Structured data:** [Types used and validation notes]
- **Redirect map:** [Location]
- **Local listing / Google Business Profile:** [URL and authorized owner, if in scope]

Verify the actual sitemap path and generated output; do not assume every framework uses the same URL. Canonicals must point to production URLs, and sitemap entries should be canonical, indexable URLs.

## Forms and integrations

- **Form types:** [Contact / appointment enquiry / careers / other]
- **Submission destination:** [Service/system and authorized role]
- **Notification route:** [Who receives notifications]
- **Validation / spam controls:** [Implementation]
- **Failure and fallback:** [Documented behavior]
- **Retention/deletion owner:** [Role/system]
- **Privacy notice:** [URL / approval status]

Do not include submitted data in this README. Do not use ordinary marketing forms for sensitive health information without a separately approved secure system. Test forms end-to-end after relevant changes and production deployment.

## Accessibility, performance, and testing

- **Responsive QA record:** [Link]
- **Accessibility review:** [Date / findings]
- **Performance / Core Web Vitals review:** [Date / findings]
- **Automated checks:** [CI steps]
- **Manual smoke tests:** [Key pages and flows]
- **Known limitations:** [Owner and remediation plan]

## Operations and ownership

- **Domain registrar / owner:** [Provider and role]
- **DNS administrator:** [Role]
- **Hosting account owner:** [Role]
- **Repository administrator:** [Role]
- **Third-party services / renewal dates:** [List]
- **Backup owner / schedule:** [Plan]
- **Monitoring / incident contact:** [Role/channel]
- **Maintenance plan / support terms:** [Link, if applicable]
- **Client handover date:** [Date]

## Current status and next actions

| Action | Owner | Due date | Status |
|---|---|---|---|
| [Next task] | [Role] | [Date] | [Open] |

## Changelog / release notes

| Date | Release / commit | Summary | Approved by |
|---|---|---|---|
| | | | |
