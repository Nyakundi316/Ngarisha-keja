"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and fades/slides them up when they scroll into view.
 * Pure Next.js + React — no animation library required.
 *
 * Props:
 *  - delay: ms delay before the reveal (for staggering)
 *  - as: element tag to render (default "div")
 *  - className: passthrough classes
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the browser can't observe, just show it.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={[
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
