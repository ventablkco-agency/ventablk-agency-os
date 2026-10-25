# Using React components from the Ventablk library

This file is the repository's practical setup guide. Use it whenever you bring a component from this library into a React or Next.js website.

## 1. Choose the right source

- **ScrollBasedVelocity (React):** `components/ui/scroll-based-velocity.tsx`
- **Menu button animations V2/V3/V4 (Lottie JSON):** `assets/useanimations/menu/menu-v2.json`, `menu-v3.json`, `menu-v4.json`
- **Interactive combined previews:** [Preview page](https://ventablkco-agency.github.io/ventablk-agency-os/components/preview.html)
- **Categorized inventory:** [Component registry](../COMPONENT_LIBRARY.md)

The menu JSON files are animation assets, not React components by themselves. The React guide below applies to React components. To use a menu animation in React, add a Lottie React player/wrapper and load the selected JSON.

## 2. Install prerequisites

For a Next.js/React app using the ScrollBasedVelocity component, install Framer Motion:

```bash
npm install framer-motion
```

Use the package manager already used by the target project (npm, pnpm, or yarn). Do not introduce a second package manager.

The component uses Tailwind-style class names. If the target project does not use Tailwind CSS, replace those utility classes with equivalent CSS before shipping.

## 3. Copy the component into your project

Copy `components/ui/scroll-based-velocity.tsx` from this repository into the target app's component folder, for example:

```text
src/components/ui/scroll-based-velocity.tsx
```

The source uses the client component directive and Framer Motion hooks, so in Next.js App Router it must remain a Client Component. Do not import it into a Server Component that tries to execute client hooks.

## 4. Use it on a page

Adjust the import path to match your app's folder structure:

```tsx
import { ScrollBasedVelocity } from "@/components/ui/scroll-based-velocity";

export default function VelocityBand() {
  return (
    <section className="overflow-hidden py-8">
      <ScrollBasedVelocity
        text="VENTABL K ✳ DIGITAL EXPERIENCES ✳"
        default_velocity={5}
        className="text-4xl font-semibold tracking-tight md:text-7xl"
      />
    </section>
  );
}
```

For a Next.js App Router project, the component using the hook is already marked as client-side. Keep the wrapper section overflow-hidden to prevent the moving text from creating horizontal page overflow.

## 5. Props

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `text` | `string` | Required | Text repeated across the marquee |
| `default_velocity` | `number` | `5` | Base movement speed and direction |
| `className` | `string` | `""` | Classes applied to the text track |
| `containerClassName` | `string` | `""` | Classes applied to the outer wrapper |
| `scroll_reactivity` | `boolean` | `true` | Whether page-scroll velocity affects movement |
| `ariaLabel` | `string` | Derived from text | Accessible label for the moving content |

## 6. Using the menu animations in React

The existing menu assets are JSON files. Install a Lottie player in the target project, then import a JSON asset and pass it to the player. For example, with `lottie-react`:

```bash
npm install lottie-react
```

```tsx
"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import menuAnimation from "@/assets/useanimations/menu/menu-v2.json";

export function AnimatedMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={() => setIsOpen((value) => !value)}
    >
      <Lottie
        animationData={menuAnimation}
        autoplay={false}
        loop={false}
        play={false}
        // For directional playback, use the Lottie player's documented controls
        // or wrap the animation with a ref and call playSegments/setDirection.
      />
    </button>
  );
}
```

This snippet illustrates the integration shape only. Confirm the exact playback API for the installed Lottie player version and implement forward/reverse playback before using it in production. The existing static HTML menu preview already has working toggle/reverse behavior.

## 7. Verify before reusing

1. Run the target app's development server and inspect the component on desktop and mobile.
2. Confirm keyboard focus, accessible labels, and reduced-motion behavior.
3. Check console output and production build.
4. Confirm the animation and any third-party library license/provenance.
5. Add project-specific colors, text, routes, and interactions through props or wrappers rather than editing the canonical library copy unnecessarily.

## 8. Important limitations

- The live HTML preview is for quick visual review; it is not a substitute for testing the actual React component inside the destination app.
- The ScrollBasedVelocity implementation in this repository is a Ventablk-authored implementation of the behavior/API described in the source reference, not a byte-for-byte upstream copy.
- Astro or plain HTML sites need an Astro-specific integration or a standalone implementation; do not paste a React component directly into an Astro page without a React integration.
