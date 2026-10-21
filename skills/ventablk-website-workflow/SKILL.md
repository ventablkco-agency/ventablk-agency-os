---
name: ventablk-website-workflow
description: Required workflow gates for Ventablk website implementation, including reuse of approved animation assets.
---

# Ventablk website workflow

Apply this skill whenever building or materially revising a Ventablk website or client website delivered through Ventablk.

## Required first checks

1. Read the project brief, current design/brand rules and website technical standard before changing the implementation.
2. Check `WEBSITE_REFERENCE_LIBRARY.md` for already-approved repositories and tools before adding new dependencies.
3. Read `skills/ventablk-interaction-assets/SKILL.md` whenever the project has a menu toggle or asks for animation/physics interactions.
4. Preserve existing navigation, preloader, approved logos and other explicitly retained components unless the owner authorizes their removal.

## Menu animation requirement

For each website with an interactive menu button, select and use one of the original supplied UseAnimations menu Lottie variants in `assets/useanimations/menu/`, with the canonical original ZIP sources under `assets/useanimations/menu/source-archives/`. Pick the variant that suits the motion/art direction; do not place all variants in one menu, redraw the supplied asset, or leave the menu as a static generic icon when an approved animation can be used.

Implementation must remain accessible:
- Use a semantic button with an accessible name, `aria-expanded`, and `aria-controls`.
- Ensure the menu works by keyboard and touch, with visible focus and expected Escape/link-dismiss behavior.
- Respect `prefers-reduced-motion` and provide a stable static fallback if animation is reduced or fails.
- Prefer a locally bundled player and local JSON asset, rather than a remote runtime dependency for critical navigation.
- Check current UseAnimations terms and attribution/licensing requirements before commercial client release.

## Physics and other motion

Matter.js is approved as an optional 2D physics dependency for interaction concepts where physics has a clear design purpose. It is not a 3D rendering engine and must not be added indiscriminately. Keep decorative canvases non-interactive, pause/clean up their simulation and honor reduced motion. Prefer CSS/Framer Motion for simpler transitions.

## Acceptance gate

Before marking a site change complete:
- Run `npm run build` and resolve all type/build errors.
- Verify navigation and menu button with keyboard, touch and screen-size changes.
- Test reduced motion and animation fallback.
- Check 320px, tablet, laptop and desktop layouts, plus console errors and performance.
- Confirm the preview deploy corresponds to the reviewed commit.
- Never merge to production without the owner's explicit approval.
