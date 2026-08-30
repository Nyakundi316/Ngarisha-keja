import http from "node:http";

const localBase = process.env.VERIFY_BASE_URL || "http://127.0.0.1:3100";
const productionBase = "https://www.ngarisha.co.ke";
const mojibake = [
  "\u00c2\u00a9",
  "\u00c2\u00b7",
  "\u00e2\u20ac\u201d",
  "\u00e2\u20ac\u00a6",
  "\u00e2\u20ac\u0153",
  "\u00e2\u20ac\u02dc",
  "\u00e2\u20ac\u2122",
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function isSameUrl(actual, expected) {
  try {
    const actualUrl = new URL(actual);
    const expectedUrl = new URL(expected);
    if (actualUrl.origin !== expectedUrl.origin || actualUrl.pathname !== expectedUrl.pathname) return false;
    const normalizeQuery = (url) => [...url.searchParams].sort(([a], [b]) => a.localeCompare(b));
    return JSON.stringify(normalizeQuery(actualUrl)) === JSON.stringify(normalizeQuery(expectedUrl));
  } catch {
    return false;
  }
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");
}

function getAttribute(html, selector, attribute) {
  const tag = html.match(selector)?.[0] || "";
  return decodeHtml(tag.match(new RegExp(`${attribute}=["']([^"']*)["']`, "i"))?.[1] || "");
}

function getMeta(html, key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const selector = new RegExp(
    `<meta[^>]+(?:name|property)=["']${escaped}["'][^>]*>`,
    "i"
  );
  return getAttribute(html, selector, "content");
}

function requestWithHost(path, host) {
  const baseUrl = new URL(localBase);
  return new Promise((resolve, reject) => {
    const request = http.request(
      {
        hostname: baseUrl.hostname,
        port: baseUrl.port,
        path,
        method: "GET",
        headers: { Host: host, Connection: "close" },
      },
      (response) => {
        response.resume();
        response.on("end", () => resolve(response));
      }
    );
    request.on("error", reject);
    request.end();
  });
}

const sitemapResponse = await fetch(`${localBase}/sitemap.xml`);
assert(sitemapResponse.ok, "sitemap.xml did not return 200");
const sitemap = await sitemapResponse.text();
assert(sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), "sitemap XML declaration is invalid");
assert(sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'), "sitemap urlset is invalid");
assert(!sitemap.includes("ngarishakeja.co.ke"), "sitemap contains the unavailable domain");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert(urls.length === 28, `expected 28 sitemap URLs, found ${urls.length}`);
assert(urls[0] === `${productionBase}/`, "homepage sitemap URL must end in a slash");
assert(new Set(urls).size === urls.length, "sitemap contains duplicate URLs");

const titles = new Set();
const descriptions = new Set();

for (const url of urls) {
  const productionUrl = new URL(url);
  const response = await fetch(`${localBase}${productionUrl.pathname}`);
  assert(response.ok, `${productionUrl.pathname} did not return 200`);
  const html = await response.text();
  const canonical = getAttribute(html, /<link[^>]+rel=["']canonical["'][^>]*>/i, "href");
  const title = decodeHtml(html.match(/<title>([^<]+)<\/title>/i)?.[1] || "");
  const description = getMeta(html, "description");
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const jsonLd = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(
    (match) => JSON.parse(match[1])
  );

  // Next.js serializes a root URL as its bare origin. URL normalization confirms
  // that this is the same self-referencing homepage URL as the sitemap's `/`.
  assert(isSameUrl(canonical, url), `${productionUrl.pathname} canonical is ${canonical || "missing"}`);
  assert(isSameUrl(getMeta(html, "og:url"), url), `${productionUrl.pathname} og:url is incorrect`);
  assert(getMeta(html, "og:title"), `${productionUrl.pathname} is missing og:title`);
  assert(getMeta(html, "og:description"), `${productionUrl.pathname} is missing og:description`);
  assert(getMeta(html, "og:image")?.startsWith(productionBase), `${productionUrl.pathname} is missing an absolute og:image`);
  assert(getMeta(html, "twitter:card") === "summary_large_image", `${productionUrl.pathname} Twitter card is incorrect`);
  assert(getMeta(html, "twitter:image")?.startsWith(productionBase), `${productionUrl.pathname} is missing twitter:image`);
  assert(h1Count === 1, `${productionUrl.pathname} has ${h1Count} H1 elements`);
  assert(title && !titles.has(title), `${productionUrl.pathname} title is missing or duplicated`);
  assert(description && !descriptions.has(description), `${productionUrl.pathname} description is missing or duplicated`);
  mojibake.forEach((sequence) => assert(!html.includes(sequence), `${productionUrl.pathname} contains ${sequence}`));
  titles.add(title);
  descriptions.add(description);

  if (productionUrl.pathname === "/") {
    assert(jsonLd.some((item) => item["@type"] === "LocalBusiness"), "homepage LocalBusiness JSON-LD is missing");
    ["15", "8", "6", "4"].forEach((value) =>
      assert(new RegExp(`>${value}<`).test(html), `homepage server HTML is missing counter ${value}`)
    );
  } else if (productionUrl.pathname === "/contact") {
    assert(jsonLd.some((item) => item["@type"] === "FAQPage"), "contact FAQPage JSON-LD is missing");
  } else if (productionUrl.pathname.startsWith("/services/")) {
    const schemas = jsonLd.flat();
    assert(schemas.some((item) => item["@type"] === "Service"), `${productionUrl.pathname} Service JSON-LD is missing`);
    assert(
      schemas.some((item) => item["@type"] === "BreadcrumbList"),
      `${productionUrl.pathname} BreadcrumbList JSON-LD is missing`
    );
  }
}

const robotsResponse = await fetch(`${localBase}/robots.txt`);
assert(robotsResponse.ok, "robots.txt did not return 200");
const robots = await robotsResponse.text();
assert(robots.includes("Allow: /"), "robots.txt does not allow public crawling");
assert(robots.includes("Disallow: /api/"), "robots.txt does not exclude API routes");
assert(robots.includes(`Sitemap: ${productionBase}/sitemap.xml`), "robots.txt sitemap is incorrect");
assert(!robots.includes("ngarishakeja.co.ke"), "robots.txt contains the unavailable domain");

const invalidQuote = await fetch(`${localBase}/api/quote`, {
  method: "POST",
  headers: { Accept: "application/json" },
  body: new FormData(),
});
assert(invalidQuote.status === 400, "blank quote submission was not rejected");

const quote = new FormData();
quote.set("name", "Verification Test");
quote.set("phone", "+254 000 000 000");
quote.set("service", "Office Cleaning");
quote.set("utm_source", "verification");
const validQuote = await fetch(`${localBase}/api/quote`, {
  method: "POST",
  headers: { Accept: "application/json" },
  body: quote,
});
assert(validQuote.ok, "valid quote handoff was rejected");
const quoteResult = await validQuote.json();
const whatsappUrl = new URL(quoteResult.whatsappUrl);
assert(whatsappUrl.hostname === "wa.me", "quote handoff does not use WhatsApp");
assert(whatsappUrl.searchParams.get("text")?.includes("utm_source: verification"), "quote lost UTM attribution");

const noJavaScriptQuote = new URLSearchParams({
  name: "Verification Test",
  phone: "+254 000 000 000",
  service: "Office Cleaning",
  utm_source: "verification",
});
const noJavaScriptResponse = await fetch(`${localBase}/api/quote`, {
  method: "POST",
  headers: {
    Accept: "text/html",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: noJavaScriptQuote,
  redirect: "manual",
});
assert(noJavaScriptResponse.status === 303, "no-JavaScript quote fallback did not redirect after POST");
assert(
  new URL(noJavaScriptResponse.headers.get("location") || "https://invalid.example").hostname === "wa.me",
  "no-JavaScript quote fallback did not redirect to WhatsApp"
);

for (const service of ["Office Cleaning", "Fumigation Coordination"]) {
  const contactResponse = await fetch(`${localBase}/contact?service=${encodeURIComponent(service)}`);
  const contactHtml = await contactResponse.text();
  const encodedService = service.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  assert(
    new RegExp(`<option value=["']${encodedService}["'] selected=["']["']>${encodedService}</option>`).test(contactHtml),
    `contact form did not preserve the ${service} query selection`
  );
}

const apex = await requestWithHost("/contact?service=Office%20Cleaning", "ngarisha.co.ke");
assert(apex.statusCode === 308, "non-www host did not return a permanent redirect");
assert(
  isSameUrl(apex.headers.location, `${productionBase}/contact?service=Office%20Cleaning`),
  "non-www redirect did not preserve the pathname and query"
);
const legacy = await requestWithHost("/services/office-cleaning", "ngarishakeja.co.ke");
assert(legacy.statusCode === 308, "legacy host did not return a permanent redirect");
assert(legacy.headers.location === `${productionBase}/services/office-cleaning`, "legacy redirect path is incorrect");
const preview = await requestWithHost("/contact", "sample-preview.vercel.app");
assert(preview.headers["x-robots-tag"] === "noindex, nofollow", "preview host is missing X-Robots-Tag");
const production = await requestWithHost("/contact", "www.ngarisha.co.ke");
assert(!production.headers["x-robots-tag"], "production host must never receive X-Robots-Tag noindex");

process.stdout.write(
  `Verified ${urls.length} public URLs, metadata/schema, form validation, attribution, and host controls.\n`
);
