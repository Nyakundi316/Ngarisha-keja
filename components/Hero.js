import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { company, whatsappLink } from "@/lib/site";

// Drop a real photo at public/images/hero.jpg (a team at work, or a finished
// space) and the hero switches to it automatically at build time.
const heroPhoto = fs.existsSync(path.join(process.cwd(), "public/images/hero.jpg"))
  ? "/images/hero.jpg"
  : null;

// Quick visual proof of the spaces we cover — shown inside the hero panel.
const covered = [
  { icon: "office", label: "Offices" },
  { icon: "home", label: "Homes" },
  { icon: "key", label: "Airbnbs" },
  { icon: "school", label: "Schools" },
];

// Plain, checkable statements — no invented client counts or ratings.
const assurances = [
  "One-off jobs or long-term contracts",
  "Trained, supervised teams",
  "Free quotes — WhatsApp, call, or form",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-surface">
      {/* layered ambient background */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(17,16,14,0.05)_1px,transparent_0)] [background-size:26px_26px]" />
      <div className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-cream" />

      <div className="container-px relative grid items-center gap-14 pb-24 pt-32 lg:grid-cols-[1.06fr_0.94fr] lg:pt-36">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-navy shadow-soft backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              Now serving {company.serviceArea}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.07] text-navy sm:text-5xl lg:text-[3.5rem]">
              A cleaner space,
              <br className="hidden sm:block" /> handled{" "}
              <span className="relative whitespace-nowrap text-teal">
                start to finish
                <svg
                  className="absolute -bottom-2 left-0 w-full text-gold/60"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C50 3 150 3 198 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="220"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slatey">
              Reliable cleaning and facility support for homes, offices, schools, Airbnbs, and
              commercial spaces — trained teams, clear plans, dependable results.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-accent">
                Request a Quote <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-green/30 bg-white text-green hover:-translate-y-0.5 hover:border-green hover:shadow-soft"
              >
                <Icon name="whatsapp" className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          {/* plain-spoken assurances instead of invented social proof */}
          <Reveal delay={320}>
            <ul className="mt-10 flex flex-col gap-2.5 text-sm text-slatey sm:flex-row sm:flex-wrap sm:gap-x-6">
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual showpiece — real photo when available, branded panel until then */}
        <Reveal variant="scale" delay={200} className="relative">
          <div className="relative ml-auto w-full max-w-md lg:max-w-none">
            {heroPhoto ? (
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-lift sm:aspect-[5/4]">
                <Image
                  src={heroPhoto}
                  alt={`${company.name} team cleaning a client space`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-6 pt-16">
                  <p className="font-display text-lg font-bold text-white">
                    Our team, on site.
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Everyday cleaning and full facility upkeep, one partner.
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy via-navy to-teal-dark p-7 shadow-lift">
                <div className="absolute inset-0 opacity-[0.14] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-gold">
                    <Icon name="sparkle" className="h-6 w-6" />
                  </span>
                  <p className="mt-6 font-display text-2xl font-bold leading-snug text-white">
                    Spotless, hygienic, and well maintained.
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                    One dependable partner for everyday cleaning and full facility upkeep.
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {covered.map((c) => (
                      <div
                        key={c.label}
                        className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3 py-2.5 text-sm font-medium text-white backdrop-blur-sm"
                      >
                        <Icon name={c.icon} className="h-4 w-4 text-gold" />
                        {c.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* floating: working hours */}
            <div className="absolute -right-3 -top-4 flex animate-float items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 shadow-lift motion-reduce:animate-none">
              <Icon name="clock" className="h-4 w-4 text-teal" />
              <span className="text-xs font-semibold text-navy">{company.hours}</span>
            </div>

            {/* floating: how to reach us */}
            <div className="absolute -bottom-6 -left-3 flex animate-float-slow items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-lift motion-reduce:animate-none">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-green/10 text-green">
                <Icon name="whatsapp" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold leading-tight text-navy">{company.phoneDisplay}</p>
                <p className="mt-0.5 text-xs text-slatey">WhatsApp or call for a quote</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
