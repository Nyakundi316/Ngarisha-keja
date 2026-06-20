"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

function useCountUp(target, run) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const num = parseInt(String(target).replace(/[^0-9]/g, ""), 10) || 0;
    if (num === 0) {
      setVal(0);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * num));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return val;
}

function Stat({ value, suffix, label, run }) {
  const count = useCountUp(value, run);
  const display = value.includes(",")
    ? count.toLocaleString()
    : String(count);
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
        {run ? display : "0"}
        <span className="text-teal">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/60">{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setRun(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy">
      <div className="container-px grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
        {stats.map((s) => (
          <Stat key={s.label} {...s} run={run} />
        ))}
      </div>
    </section>
  );
}
