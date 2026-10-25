# Ventablk Reusable Component Library

> The single source of truth for reusable website UI, interaction patterns, motion assets, and implementation recipes used across Ventablk projects.

## Rules for keeping this library organized

1. **Register before reuse.** Every component or asset we decide to keep must have one entry here, its source location, a preview, and usage notes.
2. **Keep status honest.** `Ready` means a developer can use it with the linked files and documented dependencies. `Adapt` means it exists but needs styling, accessibility, framework, or project-specific changes. `Capture` means we remember building or exploring it, but its canonical source file has not yet been added to this repository.
3. **One canonical copy.** Keep original files in their source project or asset folder; link to them instead of duplicating and drifting versions.
4. **Every component should document:** category, purpose, source, preview, framework/dependencies, props/configuration, responsive behavior, accessibility/reduced-motion behavior, and a small usage example.
5. **Do not silently promote prototypes.** An animation JSON or screenshot is an asset/reference, not automatically a production-ready component.
6. **Check the library before building a duplicate.** Search by category and use case first.

## Categories

| Category | Use for |
|---|---|
| Navigation & menus | Navbar, menu triggers, menu overlays, mobile navigation |
| Buttons & calls to action | Primary/secondary buttons, icon-slide buttons, animated CTAs |
| Hero & page sections | Hero compositions, feature sections, CTA sections, footers |
| Cards & content | Service cards, feature cards, testimonials, galleries |
| Social proof & people | Avatar stacks, doctor/team circles, trust indicators |
| Motion & interaction assets | Lottie files, hover effects, scroll reveals, transitions |
| Layout & visual effects | Grids, containers, parallax, camera/scroll journeys |
| Forms & conversion | Contact, appointment, lead capture, validation states |
| SEO & technical patterns | Metadata, structured data, sitemap, performance/accessibility patterns |

## Current inventory

### Navigation & menus

| Item | Status | Source / preview | Notes |
|---|---|---|---|
| Menu button animation V2 | Asset ready; production integration not yet packaged | [Interactive preview](https://ventablkco-agency.github.io/ventablk-agency-os/assets/useanimations/menu/preview.html) · [JSON](assets/useanimations/menu/menu-v2.json) · [source ZIP](assets/useanimations/menu/source-archives/menu-v2-source.zip) | Lottie JSON. Confirm licensing/provenance and test on the target site before shipping. |
| Menu button animation V3 | Asset ready; production integration not yet packaged | [Interactive preview](https://ventablkco-agency.github.io/ventablk-agency-os/assets/useanimations/menu/preview.html) · [JSON](assets/useanimations/menu/menu-v3.json) · [source ZIP](assets/useanimations/menu/source-archives/menu-v3-source.zip) | Lottie JSON. Preview uses Lottie Web from a CDN. |
| Menu button animation V4 | Asset ready; production integration not yet packaged | [Interactive preview](https://ventablkco-agency.github.io/ventablk-agency-os/assets/useanimations/menu/preview.html) · [JSON](assets/useanimations/menu/menu-v4.json) · [source ZIP](assets/useanimations/menu/source-archives/menu-v4-source.zip) | Previously used on the agency website; validate current implementation before assuming it is still wired in. |
| Menu overlay / mobile navigation | Adapt / inventory pending | [Siddaganga Hospital repository](https://github.com/ventablkco-agency/siddaganga-hospital) | Existing project component reported at `src/components/navigation/MenuOverlay.astro`. Audit props, accessibility, and dependencies before promoting to shared use. |
| Header / navbar | Adapt / inventory pending | [Siddaganga Hospital repository](https://github.com/ventablkco-agency/siddaganga-hospital) | Existing project component reported at `src/components/navigation/Header.astro`. Project branding and routes may be site-specific. |

### Buttons & calls to action

| Item | Status | Source / preview | Notes |
|---|---|---|---|
| Icon Slide Button | Existing implementation; adapt before cross-project reuse | [Siddaganga Hospital repository](https://github.com/ventablkco-agency/siddaganga-hospital) · source path: `src/components/ui/IconSlideButton.astro` | Astro/CSS pill button with icon slide/reveal, `href`, label, `dark`/`blue`/`light` variants, new-tab option, focus states, and reduced-motion handling. Confirm current source and props before copying. |

### Social proof & people

| Item | Status | Source / preview | Notes |
|---|---|---|---|
| AvatarCircles / avatar stack | Capture / source location pending | No canonical file linked yet | Horizontal overlapping circular avatars with a final count circle (for example, `+1200`); hover scale/raise behavior. Prior concept included healthcare/team social proof. Add the actual Framer component/code and a preview before marking ready. |

### Hero & page sections

| Item | Status | Source / preview | Notes |
|---|---|---|---|
| Hero section | Adapt / inventory pending | [Siddaganga Hospital repository](https://github.com/ventablkco-agency/siddaganga-hospital) | Existing project hero reported at `src/components/Hero.astro`. Treat copy, media, colors, and layout as project-specific until generalized. |

## Next intake queue

When bringing in the remaining components, add them in this order:

1. Existing reusable components from current Ventablk website and hospital projects.
2. Framer components and animation snippets we have already selected or implemented.
3. Scroll-driven motion patterns and 3D/visual effects.
4. Common sections: hero, services, stats, testimonials, gallery, CTA, footer.
5. Technical patterns: responsive behavior, accessibility, SEO, and performance.

For every new item, record the actual file path and framework. If its source is only a screenshot, external reference, or memory of a previous implementation, label it `Capture` rather than pretending a reusable implementation is already stored here.

## Adding a component

Copy this template into the appropriate category table or create a dedicated folder when the component has multiple files:

- **Name:**
- **Category:**
- **Status:** Ready / Adapt / Capture
- **Purpose and ideal use cases:**
- **Canonical source path:**
- **Live preview:**
- **Framework and dependencies:**
- **Props/configuration:**
- **Responsive notes:**
- **Accessibility and reduced-motion notes:**
- **Install/use example:**
- **License/provenance:**
- **Last verified:**
