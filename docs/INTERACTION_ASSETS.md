# UseAnimations Menu Motion Assets

Original files supplied by the agency owner in three archives and stored byte-for-byte here.

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
