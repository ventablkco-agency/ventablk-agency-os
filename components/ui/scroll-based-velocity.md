# ScrollBasedVelocity

A reusable React component for a continuously moving text marquee that reacts to page-scroll velocity. It is stored in this repository so it can be copied into any Ventablk React/Next.js project.

## Status

**Ready as a source component for React projects.** The destination project must have React, Framer Motion, and (for the default styling classes) Tailwind CSS. The component itself uses inline styles for the viewport clipping, so its essential layout does not depend on Tailwind.

This is a Ventablk implementation of the behavior described in the supplied component reference; it is not a verified byte-for-byte copy of the upstream package. Check the upstream license/provenance before copying upstream source directly.

## Dependency

```bash
npm install framer-motion
```

Use `pnpm add framer-motion` if the project uses pnpm.

## Copy into a project

Copy `scroll-based-velocity.tsx` to your project's `components/ui/scroll-based-velocity.tsx`. In Next.js App Router, keep the `"use client"` directive because this component reads scroll motion on the client.

## Basic usage

```tsx
import { ScrollBasedVelocity } from "@/components/ui/scroll-based-velocity";

export function VelocityBand() {
  return (
    <section className="overflow-hidden py-8">
      <ScrollBasedVelocity
        text="Design that moves"
        default_velocity={5}
        className="text-center text-4xl font-bold tracking-tight md:text-7xl"
      />
    </section>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | required | Text repeated across the viewport. |
| `default_velocity` | `number` | `5` | Base movement speed. Higher values move the marquee faster. |
| `className` | `string` | `""` | Classes applied to each moving text item. |
| `containerClassName` | `string` | `""` | Optional classes applied to the clipped outer container. |
| `scroll_reactivity` | `boolean` | `true` | Enables acceleration and direction response from page-scroll velocity. |
| `ariaLabel` | `string` | `text` | Accessible label for the marquee. |

## Usage examples

### Premium agency band

```tsx
<ScrollBasedVelocity
  text="VENTABL K  /  DIGITAL EXPERIENCES"
  default_velocity={3}
  className="text-3xl font-semibold uppercase tracking-[-0.04em] md:text-6xl"
/>
```

### Disable scroll response

```tsx
<ScrollBasedVelocity
  text="Always moving"
  default_velocity={2}
  scroll_reactivity={false}
  className="text-4xl font-semibold"
/>
```

## Behavior and accessibility

- Repeats the supplied text to create a seamless horizontal band.
- Uses Framer Motion scroll velocity and a spring to smooth acceleration.
- Honors the user's reduced-motion preference by rendering static text instead.
- Decorative repeats are hidden from assistive technology; the outer region has an accessible label.
- Keep the text short enough to work well on mobile, and test it with the typography and background of the destination site.

## Preview

[Open the browser preview](https://ventablkco-agency.github.io/ventablk-agency-os/components/examples/scroll-based-velocity.html) after GitHub Pages has deployed the current `main` branch.

The browser preview demonstrates the same interaction in a standalone HTML file. The reusable production component remains the React/TypeScript file linked above.

## Source and license

- Ventablk source: [`components/ui/scroll-based-velocity.tsx`](./scroll-based-velocity.tsx)
- Reference package provided for this component: `@componentry/scroll-based-velocity`
- The implementation here was authored for the Ventablk component library based on the behavior and API described in the supplied reference. It is not presented as a verbatim upstream source file. Verify any upstream license before importing or redistributing upstream code.
