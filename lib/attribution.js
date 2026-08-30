export const queryAttributionKeys = [
  "source",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export const attributionKeys = [...queryAttributionKeys, "landing_path", "referrer"];

function cleanValue(value) {
  return String(value || "")
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
}

export function sanitizeAttribution(input = {}) {
  return Object.fromEntries(
    attributionKeys
      .map((key) => [key, cleanValue(input[key])])
      .filter(([, value]) => Boolean(value))
  );
}

export function captureAttribution(seed = {}) {
  if (typeof window === "undefined") return sanitizeAttribution(seed);

  let stored = {};
  try {
    stored = sanitizeAttribution(JSON.parse(window.sessionStorage.getItem("lead_attribution") || "{}"));
  } catch {
    stored = {};
  }

  const search = new URLSearchParams(window.location.search);
  const current = sanitizeAttribution(
    Object.fromEntries(queryAttributionKeys.map((key) => [key, search.get(key) || ""]))
  );
  const merged = { ...sanitizeAttribution(seed), ...current, ...stored };

  if (!merged.landing_path) merged.landing_path = cleanValue(window.location.pathname || "/");

  if (!merged.referrer && document.referrer) {
    try {
      const referrer = new URL(document.referrer);
      if (referrer.hostname !== window.location.hostname) merged.referrer = cleanValue(referrer.hostname);
    } catch {
      // Ignore malformed or unavailable referrer values.
    }
  }

  const attribution = sanitizeAttribution(merged);
  try {
    window.sessionStorage.setItem("lead_attribution", JSON.stringify(attribution));
  } catch {
    // The form still works when storage is disabled.
  }
  return attribution;
}
