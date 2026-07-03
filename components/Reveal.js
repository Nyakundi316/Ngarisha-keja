"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals children when they scroll into view. Pure React — no animation lib.
 *
 * Props:
 *  - variant: motion style — "up" (default), "down", "left", "right", "scale", "fade"
 *  - delay:   ms delay before the reveal (for staggering)
 *  - as:      element tag to render (default "div")
 *  - once:    unobserve after first reveal (default true)
 */
const hidden = {
  up: "opacity-0 translate-y-6",
  down: "opacity-0 -translate-y-6",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
  scale: "opacity-0 scale-95",
  fade: "opacity-0",
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={[
        "transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        shown ? "opacity-100 translate-x-0 translate-y-0 scale-100" : hidden[variant],
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
