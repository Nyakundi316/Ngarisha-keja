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

  if (!window.__NGARISHA_ANALYTICS_ENABLED__) {
    if (process.env.NODE_ENV !== "production") {
      window.__NGARISHA_DEBUG_EVENTS__ = window.__NGARISHA_DEBUG_EVENTS__ || [];
      window.__NGARISHA_DEBUG_EVENTS__.push({ event: eventName, ...safeParameters });
    }
    return;
  }

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
      const explicitEvent = link.dataset.trackEvent;
      const eventName = [
        "whatsapp_click",
        "phone_click",
        "email_click",
        "service_quote_click",
        "plan_quote_click",
        "project_view",
        "review_link_click",
      ].includes(explicitEvent)
        ? explicitEvent
        : href.startsWith("tel:")
          ? "phone_click"
          : href.startsWith("mailto:")
            ? "email_click"
            : href.startsWith("https://wa.me/")
              ? "whatsapp_click"
              : "";

      if (!eventName) return;
      trackConversion(eventName, {
        page_path: window.location.pathname,
        service: link.dataset.trackService || undefined,
        plan: link.dataset.trackPlan || undefined,
        source: link.dataset.trackSource || undefined,
        project_slug: link.dataset.trackProject || undefined,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    let started = false;
    const onFocusIn = (event) => {
      if (started || !(event.target instanceof Element)) return;
      if (!event.target.closest("form[data-quote-form]")) return;
      started = true;
      trackConversion("quote_form_start", { page_path: window.location.pathname });
    };
    document.addEventListener("focusin", onFocusIn);
    return () => document.removeEventListener("focusin", onFocusIn);
  }, []);

  return null;
}
