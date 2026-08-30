"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution } from "@/lib/attribution";

export function trackConversion(eventName, parameters = {}) {
  if (typeof window === "undefined") return;
  const safeParameters = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) =>
      ["string", "number", "boolean"].includes(typeof value)
    )
  );

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, safeParameters);
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...safeParameters });
}

export default function ConversionTracking() {
  const pathname = usePathname();
  const firstPage = useRef(true);

  useEffect(() => {
    captureAttribution();
    if (firstPage.current) {
      firstPage.current = false;
      return;
    }
    trackConversion("page_view", { page_path: pathname });
  }, [pathname]);

  useEffect(() => {
    const onClick = (event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        trackConversion("click_to_call", { page_path: window.location.pathname });
      } else if (href.startsWith("https://wa.me/")) {
        trackConversion("click_whatsapp", { page_path: window.location.pathname });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
