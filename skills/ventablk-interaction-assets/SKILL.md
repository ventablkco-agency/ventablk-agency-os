---
name: ventablk-interaction-assets
description: Reuse approved UseAnimations menu Lottie files and the optional Matter.js physics field in Ventablk website projects.
---

# Ventablk interaction assets

## Original source assets

The original supplied ZIP archives are preserved byte-for-byte under `assets/useanimations/menu/source-archives/`; extracted working copies are stored in `assets/useanimations/menu/`. If exact source preservation matters, treat the ZIP archives as canonical. Do not trace/redraw/substitute homemade icons when these assets are intended.

- `menu-v2.json` — 32×32 Lottie, 30 fps, 60 frames; line-to-cross transition.
- `menu-v3.json` — 32×32 Lottie, 30 fps, 45 frames; burger transition.
- `menu-v4.json` — 32×32 Lottie, 30 fps, 21 frames; compact burger transition.
- `menu.svg` — original static menu glyph supplied in all three ZIPs (identical contents).

The three SVG copies in the uploaded archives were byte-identical, so one extracted SVG is kept. The three ZIP archives preserve all original JSON data unchanged. Validate working JSON before using it.

## Reuse policy

1. Inspect the three original Lottie options and choose one for a project; do not put all three in one menu.
2. Preserve the JSON source unchanged. Use a compatible Lottie player only after checking current package compatibility, license and bundle cost.
3. Implement the trigger as a semantic `button` with an accessible name, `aria-expanded`, and `aria-controls`. The animation must never be the only accessible label.
4. Animate only when the menu opens/closes; support keyboard, focus, Escape/outside dismissal where appropriate, and mobile touch targets.
5. Respect `prefers-reduced-motion` and provide a static icon fallback if motion is reduced or the Lottie player fails.
6. Keep source files local; don't make essential navigation depend on a remote animation URL.
7. Test keyboard behavior, 320px+ mobile sizes, desktop, and reduced motion.

## Matter.js

Matter.js is a 2D rigid-body physics engine, not a 3D renderer. Install `matter-js` only when a project benefits from physics-based movement. The website feature branch includes `src/scripts/physics-field.js` as a starting point; activate it only in a decorative canvas and never let the canvas intercept links or controls. Pause for hidden tabs/unmount, honor reduced motion and test performance on mobile.

## Project acceptance

Record dependency versions and rationale. Verify licenses and attribution in the specific project's context. Run the production build and test animation/menu interaction before saying it is complete.
