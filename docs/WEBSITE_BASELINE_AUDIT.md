# Ventablk.co Website — Baseline Audit Before Full Redesign

**Date:** 21 October 2026  
**Audited website branch:** `feature/matterjs-useanimations-menu`  
**Audited website commit:** `1523fa1685cc8c45e494d4bdcb69e27fbe9cc21f`  
**Brand source:** [Ventablk Figma identity](https://www.figma.com/design/K3jb20BHEWnhASaMyPPYUl/Ventablk.co?node-id=0-1)  
**Required build/critique workflow:** [Awwwards integration contract](AWWWARDS_SKILLS_INTEGRATION.md), [website quality gate](../AGENCY_WEBSITE_QUALITY_GATE.md), vendored `/awwwards` and `/jury` skills.

## Evidence boundary

This is a source/configuration audit of the named branch and the current project/brand/source-of-truth docs. It is **not** a completed Playwright/axe/Lighthouse run or a fresh browser-based jury score. The repository connection can read/write files, but has not executed the website or vendored audit scripts in a runtime. No website files or production deployment were changed during this audit. The navbar/menu is explicitly retained for the upcoming redesign.

## Executive conclusion

This is an early prototype, not a finished homepage. The most significant gap is not just styling: the implementation has drifted away from the approved brand and the agency's own brief, and the homepage does not deliver the intended information architecture. Rebuild the homepage as a complete system, starting with a written concept and static composition, then add only justified motion.

## Findings

| Priority | Finding | Evidence | Required correction |
|---|---|---|---|
| P0 | Main and mobile navigation links target missing sections | `src/pages/index.astro` links to `#services`, `#work`, and `#approach`, but the page contains only the hero section. | Build matching sections and test every anchor by keyboard/touch. No dead navigation. |
| P0 | Homepage is incomplete versus the agency source of truth | Agency brief calls for positioning, six service pillars, selected real work, process, project enquiry and footer; current page is only a hero. | Build the full home-page narrative. Never fabricate clients, testimonials, awards, measured outcomes or metrics. |
| P1 | Missing project-local `DESIGN.md` | Project has a design brief and brand guidelines, but no dedicated artifact with three distinct concepts, selected concept rationale, tokens, section wireframes and genericness check. | Write `DESIGN.md` before implementation and follow the vendored build skill. |
| P1 | Visual composition is over-layered and lacks a distinctive ownable concept | Current hero combines oversized text, side labels, index, multiple pseudo-element planes, physics canvas, violet glow, a tilted laptop, screen dashboard, caption and several staggered animations. Owner-shared screenshots showed crowded, unbalanced hierarchy. | Recompose the static first frame around one strong visual idea; remove competing decorations. Only then add one justified signature motion. |
| P1 | Laptop mockup contains generic fictitious content | The screen says `yourbusiness.co` and includes illustrative "Search reach", "Google presence", and "More enquiries" dashboard cards. This can imply results that were not measured. | Use approved screenshots of actual work where permitted (e.g. Siddaganga Hospital) or explicitly label conceptual work. Do not imply fabricated metrics are real. |
| P1 | Type system deviates from brand docs | Brand guide specifies Inter; current page imports Manrope and DM Mono, uses ad hoc colours and extreme display tracking/leading. | Use Inter as primary heading/body family; DM Mono only for useful metadata. Define tokens from approved palette and tune rendered scale/leading responsively. |
| P1 | Mobile layout depends on fragile positioning | Headline spans force `white-space:nowrap`; service labels are absolutely positioned at fixed percentages; device width reaches `102vw`; numerous narrow breakpoint overrides. | Create intentional mobile composition in normal flow/grid. Test 320, 360, 375, 390, 430, 768, 1024, 1280 and 1440px plus intermediate sizes. |
| P1 | No clear primary enquiry CTA | The scroll cue leads to a missing section; project brief says qualified project enquiry is the primary conversion. | Add clear primary enquiry and a restrained secondary CTA. Be truthful whether the route opens email, WhatsApp, or a working form; test end-to-end. |
| P1 | SEO/social metadata needs completion and verification | Current HTML includes title/description/favicon, but source does not emit canonical, Open Graph/Twitter metadata or JSON-LD. Static robots/sitemap exist; sitemap currently only lists `/`. | Validate canonical, social preview, accurate organization schema, sitemap, robots, 404, links, favicon and preview-vs-production URLs. Do not make preview canonical. |
| P1 | Lockfile missing from inspected branch tree | `package.json` exists but no `package-lock.json` was present in the inspected commit tree; implementation plan marks this incomplete. | Generate the lockfile from a real install using a documented Node/package-manager version; use reproducible CI installs. Never synthesize a lockfile manually. |
| P2 | Motion and Matter.js may be unnecessary | Physics field, device entrance and multiple reveals compete with a layout that is not yet solved. The concept does not document why a physics simulation improves the message. | Pick one motion verb/signature moment; remove Matter.js if it does not materially improve the design. Page must work with motion off. |
| P2 | Project documents are stale/inconsistent | Project brief says logos are not in the repository and favicon is absent, yet approved SVGs exist under `public/brand/` and `public/favicon.svg`. Implementation plan still marks export steps incomplete. | Reconcile docs against files and approval state; distinguish "asset exists" from "rendered and verified." |
| P2 | No visual critic evidence or iterative scorecards yet | Vendored skills were just added; no screenshot/report bundle, jury scorecard or two evidence-backed fix passes are recorded for this site. | Run production build and upstream audit/shoot scripts, inspect screenshots/reports, use a fresh critic if supported, and complete at least two fix cycles. |
| P2 | Browser, performance and accessibility behavior not proven by source inspection | This audit cannot confirm actual LCP/CLS, animation FPS, contrast in rendered states, focus order, runtime console/network errors or real device overflow. | Run compatible Node/Playwright/Chromium/axe checks and manual browser/device inspection. Never claim a pass without evidence. |

## Existing foundations to preserve

- Astro static-first configuration and a build script using `astro check && astro build`.
- Approved wordmark, monogram and favicon SVGs are already present; use them unchanged.
- UseAnimations menu JSON and Lottie implementation exist, with semantic button attributes and a reduced-motion/static fallback. Verify the actual deployed animation visually before claiming final quality.
- Basic title/description, robots.txt, static sitemap, focus styles and reduced-motion handling exist in source.
- A preloader exists and should be preserved pending a timing, truthful-progress and reduced-motion audit.
- Useful brand, project and agency source-of-truth docs exist; they must be reconciled and inform the new `DESIGN.md`.

These foundations do not establish full acceptance.

## Required redesign sequence

### Gate 1 — Baseline and creative direction
1. Run `vendor/juliobsz-skills/jury/SKILL.md` against the current site using screenshots/reports only. Save the evidence and explicitly label unavailable checks.
2. Reconcile `docs/PROJECT_BRIEF.md`, `docs/IMPLEMENTATION_PLAN.md`, `docs/DESIGN_BRIEF.md`, `docs/BRAND_GUIDELINES.md` and `AGENCY_SOURCE_OF_TRUTH.md`.
3. Write `DESIGN.md` with three distinct concept directions, a selected direction and rationale, concept card, typography/palette/grid/motion tokens, section-by-section wireframes, content/assets, responsive behavior and genericness check.
4. Explicitly mark the navbar, approved wordmark, preloader and menu animation as retained unless the owner authorizes a change.

### Gate 2 — Build the whole homepage
1. Implement the hero and all agreed sections with valid anchor IDs and complete CTA paths.
2. Use real approved project imagery or clearly identified conceptual mockups.
3. Implement static layout and accessible semantics first; then add justified motion.
4. Ensure every section has desktop/tablet/mobile composition and reduced-motion behavior.

### Gate 3 — Two evidence-backed QA/fix passes
1. Generate a reproducible lockfile; run project check/build and CI.
2. Run upstream `audit.mjs` and `shoot.mjs` against production output.
3. Inspect desktop, phone, intermediate widths, reduced motion, keyboard/focus and key interactive states.
4. Run accessibility checks, SEO/link/404/social metadata checks, browser console/network review and performance measurements where tools support them.
5. Run the blind jury critique, rank issues, fix them, reshoot and rescore. Preserve evidence and scores per pass.

### Gate 4 — Preview and release
1. Deploy the exact reviewed commit to a Cloudflare preview.
2. Confirm preview URL and deployed SHA match; visually inspect the real preview in a browser.
3. In the handoff, include preview URL, commit SHA, actual tests/evidence reviewed and known limitations.
4. Production merge/deployment requires explicit owner approval.

## Immediate next action

Create the project-local `DESIGN.md` and a baseline visual evidence bundle before editing the homepage. Do not begin another ungrounded hero variation. The first design decision is the composition and proof/story the hero communicates—not which animation or decorative object to add.
