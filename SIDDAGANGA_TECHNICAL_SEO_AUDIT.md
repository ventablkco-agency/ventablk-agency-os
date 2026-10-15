# Siddaganga Hospital — Read-Only Technical SEO Audit

**Audit date:** 2026-10-15  
**Repository reviewed:** [ventablkco-agency/siddaganga-hospital](https://github.com/ventablkco-agency/siddaganga-hospital)  
**Branch reviewed:** main  
**Scope:** Source-code inspection only. No production deployment, live URL, Search Console, analytics account, or browser-based Lighthouse run was tested. Findings are confirmed from repository files inspected; this is not a claim that every runtime issue has been tested.

## Executive summary

The site already has a useful SEO foundation: Astro-generated pages, page-specific titles and descriptions on the main routes, favicons, and Open Graph/Twitter metadata support in the shared layout. The highest-priority technical gaps are canonical URL handling, crawl directives and sitemap availability, structured data, and complete social preview metadata. There are also content/QA issues to resolve before treating the site as a polished hospital marketing site.

## Findings

### P1 — Address before calling technical SEO complete

1. **Canonical URLs are not defined in the shared layout.**  
   src/layouts/Layout.astro renders title, description, and social metadata, but no rel="canonical". Add canonical URLs only after confirming the final production hostname and preferred HTTPS/host variant. Avoid deriving canonical URLs from untrusted request headers.

2. **No robots.txt or sitemap file was found in the inspected public/ and src/pages/ directories.**  
   The public/ directory listing contained assets and favicon files; the src/pages/ listing contained about.astro, careers.astro, contact.astro, doctors.astro, index.astro, and services.astro, but no robots or sitemap route. Confirm the live deployment as well, then add a crawlable sitemap and a simple robots policy with the sitemap URL after the production domain is verified.

3. **No JSON-LD structured data was found in the shared layout or inspected page files.**  
   Plan and validate accurate MedicalOrganization/Hospital or other appropriate organization markup only from hospital-confirmed facts. Do not invent ratings, doctor credentials, opening hours, services, or addresses. Add page-specific markup only where it accurately reflects visible content and is eligible under search-engine guidelines.

4. **Social preview image is optional but not configured on the inspected pages.**  
   The shared layout emits og:image only when its image prop is supplied. The inspected route layouts do not pass an image, so social previews may have no image. Create or select an approved public social preview image, then use an absolute production URL and provide suitable dimensions/alt handling where supported.

### P2 — Improve consistency and quality

5. **Shared layout contains a duplicate Google Fonts preconnect.**  
   src/layouts/Layout.astro includes rel="preconnect" href="https://fonts.googleapis.com" twice. Remove the duplicate during a controlled maintenance change; retain the fonts.gstatic.com preconnect with crossorigin.

6. **Page metadata is not fully consistent.**  
   The homepage uses the shared default title/description; the other inspected pages have custom metadata. Review titles/descriptions for unique, accurate, non-repetitive wording and consistent brand/location naming. Keep descriptions useful to visitors rather than keyword-stuffed.

7. **Doctor profile content needs a factual-content review.**  
   src/pages/doctors.astro contains a named first profile and placeholder-style entries such as “Specialist Profile 02”. Replace placeholders with hospital-approved details or omit unpublished profiles. Confirm names, specialties, qualifications, and images with the hospital before publication.

8. **The repository README is still the generic Astro starter README.**  
   README.md describes the Astro starter kit rather than this hospital website, and does not document the actual build/deployment workflow or SEO QA. Replace it with project-specific setup, build, preview, deployment, content approval, and release-check instructions.

9. **No project-specific SEO or quality scripts are declared in package.json.**  
   Current scripts are dev, build, preview, and astro. A future QA step should add appropriate checks only after verifying compatibility with the existing Astro version and Cloudflare deployment workflow. Do not claim automated checks exist yet.

### Existing positives observed

- Astro project uses Node >=22.12.0 and declares Astro ^7.3.5.
- Shared layout sets lang="en", viewport, theme color, page title, meta description, favicon links, Open Graph title/description/site name/locale/type, and a Twitter card.
- Inspected content pages use page-specific title and description values.
- The route listing includes home, about, services, doctors, contact, and careers pages.
- The site has both SVG and ICO favicon files.

## Recommended order of work

1. Confirm the canonical production URL and HTTPS/host preference.
2. Add canonical metadata and generate/verify sitemap and robots.txt.
3. Add accurate, validated organization/hospital JSON-LD using only confirmed facts.
4. Create an approved social preview image and configure it consistently.
5. Fix the duplicate font preconnect and replace the generic README.
6. Verify doctor profile content and all medical claims with the hospital.
7. Add a small automated QA workflow for production builds and key SEO checks.
8. Run a live URL crawl, mobile/responsive checks, accessibility checks, and Lighthouse/Core Web Vitals review after deployment.

## Explicit limitations and safety

- This was a source inspection, not a live SEO crawl or a ranking assessment.
- The final public domain was not confirmed from the inspected source, so canonical URLs and absolute sitemap references must not be guessed.
- Structured data must describe real, visible, hospital-confirmed facts.
- No files in the Siddaganga Hospital repository were modified during this audit.
