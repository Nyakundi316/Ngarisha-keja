import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { company, heroBadges, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-surface">
      {/* soft ambient shapes */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-36">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">Trusted cleaning &amp; facility partner</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]">
              Professional Cleaning &amp; Facility Support{" "}
              <span className="text-teal">You Can Trust</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slatey">
              We help homes, offices, apartments, schools, Airbnbs, and commercial spaces stay
              clean, hygienic, and well maintained through reliable cleaning and facility support
              solutions.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-accent">
                Request a Quote <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Book a Site Visit
              </Link>
            </div>
          </Reveal>

          {/* Trust badges */}
          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {heroBadges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-navy shadow-soft"
                >
                  <Icon name="check" className="h-4 w-4 text-teal" />
                  {badge}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy via-navy to-teal-dark shadow-lift">
            {/* Replace this gradient panel with a real photo:
                <img src="/hero.jpg" alt="Clean, bright office space" className="h-full w-full object-cover" /> */}
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
            <div className="absolute inset-0 grid place-items-center">
              <Icon name="sparkle" className="h-24 w-24 text-white/30" />
            </div>
          </div>

          {/* floating card: rating */}
          <div className="absolute -left-4 top-10 hidden rounded-2xl border border-line bg-white p-4 shadow-lift sm:block">
            <div className="flex items-center gap-1 text-teal">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4 fill-teal" />
              ))}
            </div>
            <p className="mt-1.5 text-xs font-medium text-slatey">Loved by our clients</p>
          </div>

          {/* floating card: trust */}
          <div className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-lift">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal/10 text-teal">
              <Icon name="shield" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-navy">Reliable &amp; insured</p>
              <p className="text-xs text-slatey">Punctual, vetted teams</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
