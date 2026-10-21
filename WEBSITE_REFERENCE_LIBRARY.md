# Website Optimization & Design Reference Library
**VentaBlk Co. — Reusable external references register**  
**Status:** Active; links will be added as supplied by the agency owner.

## Purpose

Keep useful repositories, tools, code-component galleries, animation references, performance/SEO resources, and implementation examples in one place. When a new project needs a component or optimization, check this register before researching from scratch.

This is a reference index, not permission to copy code or assets. Check each project's license, attribution requirements, dependencies, security, maintenance status, and compatibility before using it in a client project.

## 1. Reference register

Add one entry for every link the agency owner shares.

| Name | Type | URL | What to reuse / learn | License / usage notes | Compatibility / review | Status |
|---|---|---|---|---|---|---|
| Matter.js | 2D physics engine | https://github.com/liabru/matter-js | Optional physics-driven decorative motion; not a 3D renderer | MIT; retain license notice if redistributing substantial code; verify package version | Evaluate frame cost, reduced-motion, pause on hidden tab, responsive canvas, no pointer interception | Implemented on website feature branch; GitHub Actions build and Cloudflare preview pass; production unchanged |
| UseAnimations menu assets | Lottie menu button assets supplied as ZIPs by agency owner | https://useanimations.com/ | Use original JSON menu variants; choose one variant per project and animate actual menu toggle | Preserve upstream terms and asset license; confirm current UseAnimations terms before commercial client release | Lottie player is an additional dependency; accessible button and static/reduced-motion fallback required | Original assets stored in Agency OS library |
| `juliobsz/skills` — `/awwwards` + `/jury` | Creative website build process and evidence-based critique | https://github.com/juliobsz/skills | `/awwwards`: concept, art direction, build, 2+ QA loops; `/jury`: screenshot/report-based blind scoring | MIT; vendored source/license at `vendor/juliobsz-skills/LICENSE`; pinned snapshot recorded in `docs/AWWWARDS_SKILLS_INTEGRATION.md` | Keep existing project stack; scripts require Node/Playwright/Chromium/axe as documented; verify compatibility and report limitations | Vendored in Agency OS; mandatory workflow gates added |

## 2. Categories

### SEO / performance / technical audits
- Repositories and scripts for crawl checks, metadata, sitemap/robots validation, broken links, image optimization, bundle analysis, Core Web Vitals, and accessibility.
- Record the exact audit it improves, whether it runs locally or in CI, and how findings are verified.

### UI components and animation
- Component libraries, interaction examples, motion systems, micro-interactions, page transitions, and visual effects.
- Record the framework/version, installation method, dependencies, license, keyboard behavior, reduced-motion support, mobile behavior, and performance cost.

### Design and inspiration
- Website references, layouts, typography, visual systems, and examples of responsive behavior.
- Record what specifically is useful; do not copy a client's competitor design wholesale.

### Testing and launch
- Tools for responsive screenshots, accessibility, Lighthouse/PageSpeed, structured data, metadata, redirects, and form testing.
- Record where each tool belongs in the workflow and what constitutes a pass.

## 3. Evaluation checklist for every submitted link

Before adding a tool or code snippet to a production project:
- [ ] The URL and repository are the intended, authentic source.
- [ ] License permits the intended commercial/client use; attribution requirements are understood.
- [ ] Dependencies and build requirements are compatible with the client stack.
- [ ] Project activity, open issues, release history, and security risks are reviewed.
- [ ] Accessibility, keyboard support, and reduced-motion behavior are tested.
- [ ] Responsive behavior is tested on mobile and desktop.
- [ ] Bundle/runtime impact and third-party requests are understood.
- [ ] Code is reviewed; no secrets, unexpected telemetry, suspicious install scripts, or unnecessary permissions.
- [ ] The final implementation is tested in the actual client project.
- [ ] The client project documents any new dependency and how it is maintained.

## 4. How we will use this library

When the agency owner shares links:
1. Add each link to the appropriate category with its intended use.
2. Summarize what it offers and its trade-offs.
3. Verify licensing and technical fit before recommending production use.
4. Select only what improves the project; avoid installing tools or animation libraries just because they are available.
5. Update this register with the selected implementation and any caveats.

## 5. Links to official baseline references

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Core Web Vitals](https://web.dev/articles/vitals)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Astro documentation](https://docs.astro.build/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)

## Change log

- 15 October 2026: Initial register created; awaiting repository, optimization, component, and animation links from the agency owner.
