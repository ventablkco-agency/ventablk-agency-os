"use client";

import * as React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export interface ScrollBasedVelocityProps {
  /** Text repeated across the viewport. */
  text: string;
  /** Base movement speed. Higher values move the text faster. Default: 5. */
  default_velocity?: number;
  /** Optional classes applied to the moving text. */
  className?: string;
  /** Optional classes applied to the clipped viewport. */
  containerClassName?: string;
  /** Set false to disable scroll-reactive acceleration. */
  scroll_reactivity?: boolean;
  /** Accessible label for the visual marquee. Defaults to text. */
  ariaLabel?: string;
}

/**
 * Scroll-reactive text marquee.
 *
 * A lightweight React component that continuously moves repeated text and
 * accelerates/responds to the user's page-scroll velocity. Uses Framer Motion.
 *
 * Usage:
 * <ScrollBasedVelocity
 *   text="Velocity Scroll"
 *   default_velocity={5}
 *   className="text-4xl font-bold tracking-tight md:text-7xl"
 * />
 */
export function ScrollBasedVelocity({
  text,
  default_velocity = 5,
  className = "",
  containerClassName = "",
  scroll_reactivity = true,
  ariaLabel,
}: ScrollBasedVelocityProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [-1000, 0, 1000],
    [-5, 0, 5],
    { clamp: false },
  );
  const x = useTransform(baseX, (value) => `${wrap(-25, -50, value)}%`);
  const direction = React.useRef(1);
  const reduceMotion = useReducedMotion();

  useAnimationFrame((_time, delta) => {
    if (reduceMotion) return;

    const safeDelta = Math.min(delta, 40) / 1000;
    let moveBy = direction.current * Math.max(0, default_velocity) * safeDelta;

    if (scroll_reactivity) {
      const velocity = velocityFactor.get();
      if (velocity < -0.05) direction.current = -1;
      else if (velocity > 0.05) direction.current = 1;

      moveBy += direction.current * moveBy * Math.min(5, Math.abs(velocity));
    }

    baseX.set(baseX.get() + moveBy);
  });

  const copies = React.useMemo(() => Array.from({ length: 4 }, (_, index) => index), []);

  return (
    <div
      className={`w-full overflow-hidden ${containerClassName}`.trim()}
      role="img"
      aria-label={ariaLabel ?? text}
      style={{ overflow: "hidden", width: "100%" }}
    >
      {reduceMotion ? (
        <div className={className} style={{ whiteSpace: "nowrap" }}>
          {text}
        </div>
      ) : (
        <motion.div
          aria-hidden="true"
          className="flex w-max flex-nowrap"
          style={{ x, willChange: "transform" }}
        >
          {copies.map((copy) => (
            <span
              key={copy}
              className={`mr-8 shrink-0 whitespace-nowrap ${className}`.trim()}
            >
              {text}
              <span aria-hidden="true" className="mx-6">✳</span>
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

export default ScrollBasedVelocity;
