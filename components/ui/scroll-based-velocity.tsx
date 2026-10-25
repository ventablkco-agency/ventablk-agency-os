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
  /** Base movement speed multiplier. Higher values move the marquee faster. Default: 5. */
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

const SEPARATOR = "✳";

/**
 * A seamless, scroll-reactive marquee for React and Next.js.
 * The loop distance is measured from the rendered content rather than guessed
 * from a percentage, preventing blank gaps as the viewport or text changes.
 */
export function ScrollBasedVelocity({
  text,
  default_velocity = 5,
  className = "",
  containerClassName = "",
  scroll_reactivity = true,
  ariaLabel,
}: ScrollBasedVelocityProps) {
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const firstGroupRef = React.useRef<HTMLSpanElement>(null);
  const [repeatCount, setRepeatCount] = React.useState(4);
  const [groupWidth, setGroupWidth] = React.useState(0);
  const [viewportWidth, setViewportWidth] = React.useState(0);
  const offset = useMotionValue(0);
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
  const direction = React.useRef(1);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    const viewport = viewportRef.current;
    const group = firstGroupRef.current;
    if (!viewport || !group) return;

    const measure = () => {
      const nextGroupWidth = group.getBoundingClientRect().width;
      const nextViewportWidth = viewport.getBoundingClientRect().width;
      if (nextGroupWidth <= 0 || nextViewportWidth <= 0) return;

      setGroupWidth(nextGroupWidth);
      setViewportWidth(nextViewportWidth);
      // Keep enough identical copies to cover the viewport even for very short text.
      setRepeatCount(Math.max(3, Math.ceil(nextViewportWidth / nextGroupWidth) + 2));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(group);
    return () => observer.disconnect();
  }, [text, className, containerClassName]);

  useAnimationFrame((_time, delta) => {
    if (reduceMotion || groupWidth <= 0 || viewportWidth <= 0) return;

    const safeDelta = Math.min(delta, 40) / 1000;
    let speed = Math.max(0, Number.isFinite(default_velocity) ? default_velocity : 5) * 20;
    if (scroll_reactivity) {
      const velocity = velocityFactor.get();
      if (velocity < -0.05) direction.current = -1;
      else if (velocity > 0.05) direction.current = 1;
      speed *= 1 + Math.min(5, Math.abs(velocity));
    }

    // Offset stays within one measured copy. The next copy is identical,
    // so resetting by exactly groupWidth is visually seamless.
    const phase = -offset.get();
    const nextPhase = phase + direction.current * speed * safeDelta;
    const wrapped = ((nextPhase % groupWidth) + groupWidth) % groupWidth;
    offset.set(-wrapped);
  });

  return (
    <div
      ref={viewportRef}
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
          style={{ x: offset, willChange: "transform" }}
        >
          {Array.from({ length: repeatCount }, (_, index) => (
            <span
              key={index}
              ref={index === 0 ? firstGroupRef : undefined}
              className="flex w-max shrink-0 items-center"
              style={{ whiteSpace: "nowrap" }}
            >
              <span className={className}>{text}</span>
              <span aria-hidden="true" className="mx-6 shrink-0"> {SEPARATOR} </span>
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default ScrollBasedVelocity;
