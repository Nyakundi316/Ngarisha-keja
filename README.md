# Ngarishakeja — Cleaning & Facility Support Website

A modern, responsive marketing site built with **Next.js (App Router) + Tailwind CSS**. No extra UI or animation libraries — scroll reveals, the impact stats, the FAQ accordion, and the quote form are all hand-built in plain React.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

> Note: `next/font` downloads Google Fonts at build time, so the first build needs internet access.

## Where to edit things

**`lib/site.js` is the control panel.** Almost everything — company details, services, plans, FAQs, service standards, stats, and nav links — lives here. Change content there and every section updates.

Already wired in:
- Company name: **Ngarishakeja**
- Phone: **0759 553 961**
- WhatsApp: **254759553961**
- Email: **nyakundibrian316@gmail.com**

Still marked `// TODO` in `lib/site.js` (fill when ready): legal name, address, hours, social links, Google Business Profile URL, review-request URL, and years in business. The configured service area is Nairobi; expand it only when confirmed by the owner.

## Project structure

```
app/
  layout.js          Fonts (Plus Jakarta Sans + Inter), metadata
  page.js            Assembles all sections in order
  globals.css        Tailwind layers + button/card/eyebrow utilities
components/
  Header.js          Sticky nav, mobile drawer, CTA
  Hero.js            Headline, CTAs, trust badges, visual
  About.js           Story + feature list
  Stats.js           Count-up impact band
  Services.js        15 service cards
  FacilitySupport.js 8 facility-support cards
  WhyChooseUs.js     Reasons grid + booking CTA
  HowItWorks.js      4-step process
  Plans.js           7 quote-based plan cards (one highlighted)
  ClientsWeServe.js  Audience icon grid
  Testimonials.js    Service-standard cards
  TrustQuality.js    Promise statement band
  Faq.js             Accordion
  Contact.js         Info column + validated quote form
  Projects.js        Permission-gated recent-projects renderer (empty until approved records exist)
  Reviews.js         Verified-review renderer and configured review invitation
  Footer.js          Links, contact, socials, legal
  FloatingButtons.js Persistent WhatsApp + Call
  Reveal.js          Fade-up-on-scroll helper (IntersectionObserver)
  SectionHeading.js  Shared eyebrow/title/subtext
  Icon.js            Inline SVG icon set
  lib/
  site.js            ALL content + company config
  resources.js       Draft resource templates (unpublished until authored)
  lead.js            Server-side boundary for a future lead provider
tailwind.config.js   Palette (navy/teal/green), fonts, shadows
```

## Images

Section visuals currently use styled gradient panels as placeholders. To use real photos, drop files in `/public` and replace the marked panel in `Hero.js` / `About.js`, e.g.:

```jsx
<img src="/hero.jpg" alt="Clean, bright office space" className="h-full w-full object-cover" />
```

## Contact form

The form validates on the client and server, then prepares a WhatsApp handoff with the fields and allowlisted campaign attribution. The API route does not store or claim delivery of leads; the visitor reviews and sends the prepared WhatsApp message. Configure a real lead-delivery provider before describing submissions as received.

The form also accepts optional property type/size, frequency, preferred date, contact method, and referral source. A hidden honeypot and lightweight server-side rate limit reduce accidental or automated duplicates. No property-photo upload is enabled because secure storage is not configured.

## SEO and analytics

Public metadata, JSON-LD, sitemap, robots rules, and host redirects use `https://www.ngarisha.co.ke`. A Google Analytics tag is loaded only when the owner supplies a valid `NEXT_PUBLIC_GA_ID` deployment variable; no ID is included in this repository. Review consent and privacy wording before enabling it.

When analytics is enabled, the centralized tracker records `whatsapp_click`, `phone_click`, `email_click`, `quote_form_start`, `quote_form_submit`, `quote_whatsapp_handoff`, `service_quote_click`, `plan_quote_click`, `project_view`, and `review_link_click`. Mark only business-approved events as GA4 key events. In development, inspect the non-PII event queue at `window.__NGARISHA_DEBUG_EVENTS__`; production does not log event payloads.

Projects and reviews are intentionally empty until approved records are supplied. Add projects to `projects` in `lib/site.js` with `approvalStatus: "approved"`, `permissionStatus: "approved"`, truthful image captions/alt text, and non-identifying location text. Add reviews with `verified: true` and `permission: true`, plus source and date; only then will they render. Add real `company.reviewRequestUrl` or `company.googleBusinessProfileUrl` to show a review invitation.

Resource drafts live in `lib/resources.js`. Add authored content to `publishedResources` only after supplying a description, author, updated date, canonical path, related services, and any required citations; empty drafts are not routed or added to the sitemap.

The future lead boundary is server-only. If a provider is approved, implement it behind `lib/lead.js` and configure `NGARISHA_LEAD_PROVIDER` plus provider-specific server environment variables in deployment settings. Never commit credentials or expose them to the browser.

## Deployment and business-system foundations

The production source of truth is the `main` branch of the existing GitHub repository. Vercel should remain connected to that branch and the existing `www.ngarisha.co.ke` domain; no second project is required. Deployments expose the non-sensitive `X-Ngarisha-Version` header and `/api/version` response, sourced from `VERCEL_GIT_COMMIT_SHA` or `NEXT_PUBLIC_BUILD_VERSION`.

`db/migrations/001_business_system.sql` is a provider-neutral PostgreSQL schema for customers, leads, quotations, bookings, payments, and activity history. It is not applied automatically. Set `DATABASE_URL` and (optionally) `NGARISHA_STORAGE_PROVIDER` only after the owner provisions an approved database, then implement the server adapter behind `lib/storage.js`/`lib/lead.js`. Until then, the public form truthfully remains a WhatsApp handoff and the `/admin` route is not exposed.

Future integrations are intentionally disabled until configured: `NGARISHA_LEAD_PROVIDER`, `NGARISHA_PAYMENT_PROVIDER`, `NEXT_PUBLIC_GA_ID`, an authentication provider, secure file storage, and any email or M-Pesa credentials. Never place these values in source control. Tax/VAT is disabled by default in quotation calculations.

After adding genuine approved project or review records in `lib/site.js`, keep permission and approval flags enabled before publishing. Add only confirmed service areas, approved prices, and real Google Business Profile/review links. Draft resource templates in `lib/resources.js` remain unpublished until complete, reviewed content is available.

## Built-in quality

- Mobile responsive across all breakpoints
- Keyboard-focusable controls with visible focus rings
- `prefers-reduced-motion` respected (animations disabled)
- Semantic headings, alt text, ARIA labels on icon-only buttons
- SEO metadata, Open Graph/Twitter cards, JSON-LD, sitemap, and robots rules
