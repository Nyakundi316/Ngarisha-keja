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

Still marked `// TODO` in `lib/site.js` (fill when ready): address, service area, hours, social links, and years in business. The homepage counts are derived from the service arrays and the visible Mon–Sat / four-step information.

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
  Plans.js           5 plan cards (one highlighted)
  ClientsWeServe.js  Audience icon grid
  Testimonials.js    Service-standard cards
  TrustQuality.js    Promise statement band
  Faq.js             Accordion
  Contact.js         Info column + validated quote form
  Footer.js          Links, contact, socials, legal
  FloatingButtons.js Persistent WhatsApp + Call
  Reveal.js          Fade-up-on-scroll helper (IntersectionObserver)
  SectionHeading.js  Shared eyebrow/title/subtext
  Icon.js            Inline SVG icon set
lib/
  site.js            ALL content + company config
tailwind.config.js   Palette (navy/teal/green), fonts, shadows
```

## Images

Section visuals currently use styled gradient panels as placeholders. To use real photos, drop files in `/public` and replace the marked panel in `Hero.js` / `About.js`, e.g.:

```jsx
<img src="/hero.jpg" alt="Clean, bright office space" className="h-full w-full object-cover" />
```

## Contact form

The form validates on the client and server, then prepares a WhatsApp handoff with the fields and allowlisted campaign attribution. The API route does not store or claim delivery of leads; the visitor reviews and sends the prepared WhatsApp message. Configure a real lead-delivery provider before describing submissions as received.

## SEO and analytics

Public metadata, JSON-LD, sitemap, robots rules, and host redirects use `https://www.ngarisha.co.ke`. A Google Analytics tag is loaded only when the owner supplies a valid `NEXT_PUBLIC_GA_ID` deployment variable; no ID is included in this repository. Review consent and privacy wording before enabling it.

## Built-in quality

- Mobile responsive across all breakpoints
- Keyboard-focusable controls with visible focus rings
- `prefers-reduced-motion` respected (animations disabled)
- Semantic headings, alt text, ARIA labels on icon-only buttons
- SEO metadata, Open Graph/Twitter cards, JSON-LD, sitemap, and robots rules
