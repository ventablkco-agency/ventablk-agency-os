# UseAnimations Menu Motion Assets

Original supplied ZIP files are preserved byte-for-byte in `assets/useanimations/menu/source-archives/`; extracted working copies are stored alongside them for convenient implementation.

| File | Source archive | Dimensions / duration | Intended role |
|---|---|---|---|
| `menu-v2.json` | `menu-v2 (1).zip` | 32×32, 30 fps, 60 frames | Menu-to-close animation |
| `menu-v3.json` | `menu-v3.zip` | 32×32, 30 fps, 45 frames | Burger transition |
| `menu-v4.json` | `menu-v4.zip` | 32×32, 30 fps, 21 frames | Short burger transition |
| `menu.svg` | All three archives; identical SVG | 24×24 | Static reference/fallback |

## Project usage

- Select one Lottie variant per website and wire it to the real menu open/close state.
- Preserve JSON source unchanged. Add a Lottie player to a project only when necessary and verify licensing, versions, and bundle impact.
- Provide accessible name, `aria-expanded`, `aria-controls`, keyboard support, visible focus, and a static fallback.
- Respect `prefers-reduced-motion`. Avoid remote runtime dependencies for critical navigation.
- Check [UseAnimations](https://useanimations.com/) and its current terms before commercial deployment; the supplied ZIPs contain assets, not a copy of player code.

## Matter.js reference

- Repository: https://github.com/liabru/matter-js
- Intended use: opt-in 2D physics interactions, not 3D device rendering.
- Project needs to test reduced motion, hidden-tab pause, responsive canvas, and performance before release.

## Current website implementation

The Ventablk website feature branch `feature/matterjs-useanimations-menu` stores the same original assets under `public/animations/menu/` and wires `menu-v4.json` into the responsive mobile navigation. The menu button has an accessible label/expanded state, closes on Escape, outside click and link selection, and uses a static fallback when reduced motion is requested. Review the current implementation before copying because the Lottie player is currently loaded from its upstream browser CDN; prefer a pinned, locally bundled package for a production hardening pass.
