import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";
import Projects from "@/components/Projects";
import JsonLd from "@/components/JsonLd";
import { allServices, getServiceBySlug, company, steps } from "@/lib/site";
import {
  createPageMetadata,
  getServiceSeoDescription,
  getServiceSeoTitle,
} from "@/lib/seo";
import { getServiceSchemas } from "@/lib/schema";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return { title: "Service not found", robots: { index: false, follow: false } };
  }
  return createPageMetadata({
    title: getServiceSeoTitle(service),
    description: getServiceSeoDescription(service),
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  // A few other services to nudge people deeper into the catalog.
  const related = allServices
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  const quoteHref = `/contact?service=${encodeURIComponent(service.title)}`;

  return (
    <main className="pt-[72px]">
      <JsonLd data={getServiceSchemas(service)} />
      {/* Header band */}
      <section className="relative overflow-hidden bg-surface">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
        <div className="container-px relative py-16 sm:py-20">
          <Reveal variant="fade">
            <nav aria-label="Breadcrumb" className="text-sm text-slatey">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-teal-dark">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-line">/</li>
                <li>
                  <Link href="/services" className="transition-colors hover:text-teal-dark">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true" className="text-line">/</li>
                <li aria-current="page" className="font-medium text-navy">
                  {service.title}
                </li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <Reveal variant="left">
              <span className="eyebrow">{service.category}</span>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
                {service.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slatey">{service.long}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={quoteHref} className="btn-accent" data-track-event="service_quote_click" data-track-service={service.slug}>
                  Request this service <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a href={`tel:${company.phoneHref}`} className="btn-outline">
                  <Icon name="phone" className="h-4 w-4" /> {company.phoneDisplay}
                </a>
              </div>
            </Reveal>

            <Reveal variant="scale" delay={120} className="hidden lg:block">
              {service.image ? (
                <div className="relative ml-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem] shadow-lift">
                  <Image
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-xl bg-navy/80 text-gold shadow-lift backdrop-blur-sm">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                </div>
              ) : (
                <div className="relative ml-auto grid h-56 w-56 place-items-center rounded-[2rem] bg-gradient-to-br from-navy via-navy to-teal-dark shadow-lift">
                  <div className="absolute inset-0 rounded-[2rem] opacity-[0.14] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
                  <Icon name={service.icon} className="relative h-24 w-24 text-white/80" />
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Detail body */}
      <section className="py-20">
        <div className="container-px grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* What's included */}
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-navy">What&apos;s included</h2>
            <p className="mt-2 text-slatey">
              A typical {service.title.toLowerCase()} job covers:
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-card border border-line bg-white p-4 shadow-soft"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal/10 text-teal">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-card border border-line bg-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal">Recommended frequency</p>
                <p className="mt-2 text-sm font-medium text-navy">{service.frequency}</p>
              </div>
              <div className="rounded-card border border-line bg-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal">Typical duration</p>
                <p className="mt-2 text-sm font-medium text-navy">{service.duration}</p>
              </div>
              <div className="rounded-card border border-line bg-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal">Pricing factors</p>
                <p className="mt-2 text-sm font-medium text-navy">{service.pricingFactors.join(", ")}.</p>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-xl font-bold text-navy">What&apos;s not included</h2>
                <ul className="mt-4 space-y-2 text-sm text-slatey">{service.excludes.map((item) => <li key={item}>• {item}</li>)}</ul>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-navy">Prepare for your quote</h2>
                <p className="mt-4 text-sm leading-relaxed text-slatey">{service.preparation}</p>
              </div>
            </div>

            <div className="mt-12 rounded-card border border-line bg-white p-6 shadow-soft">
              <h2 className="font-display text-xl font-bold text-navy">Questions we&apos;ll ask</h2>
              <ul className="mt-4 grid gap-2 text-sm text-slatey sm:grid-cols-2">{service.quoteQuestions.map((question) => <li key={question}>• {question}</li>)}</ul>
            </div>

            {service.gallery?.length > 0 && (
              <div className="mt-12">
                <h3 className="font-display text-lg font-bold text-navy">Recent work</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {service.gallery.map((photo) => (
                    <div
                      key={photo.src}
                      className="relative aspect-[4/3] overflow-hidden rounded-card border border-line bg-surface shadow-soft"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Reveal>

          {/* Who it serves + CTA */}
          <Reveal variant="right" delay={100} className="lg:pt-1">
            <div className="rounded-card border border-line bg-surface p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-teal shadow-soft">
                <Icon name="handshake" className="h-5 w-5" />
              </span>
              <h2 className="mt-5 font-display text-lg font-bold text-navy">Who it&apos;s for</h2>
              <p className="mt-2 text-sm leading-relaxed text-slatey">{service.serves}</p>

              <div className="my-6 h-px bg-line" />

              <p className="text-sm font-semibold text-navy">Recommended rhythm</p>
              <p className="mt-1 text-sm text-slatey">{service.frequency}</p>

              <div className="my-6 h-px bg-line" />

              <p className="text-sm font-semibold text-navy">Quote-based pricing</p>
              <p className="mt-1 text-sm text-slatey">
                Pricing depends on the size and state of your space — we confirm it after a quick
                site visit, before any work starts.
              </p>
              <Link href={quoteHref} className="btn-primary mt-6 w-full" data-track-event="service_quote_click" data-track-service={service.slug}>
                Get a quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">Common questions</h2>
            <div className="mt-6 space-y-3">{service.faqs.map((item) => <details key={item.q} className="rounded-card border border-line bg-white p-5 shadow-soft"><summary className="cursor-pointer font-semibold text-navy">{item.q}</summary><p className="mt-3 text-sm leading-relaxed text-slatey">{item.a}</p></details>)}</div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">Related plans</h2>
            <div className="mt-6 flex flex-wrap gap-2">{service.relatedPlans.map((plan) => <Link key={plan} href={`/contact?service=${encodeURIComponent(plan)}`} className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-teal-dark hover:border-teal" data-track-event="plan_quote_click" data-track-plan={plan}>{plan}</Link>)}</div>
            <p className="mt-8 text-sm leading-relaxed text-slatey">We serve configured areas in Nairobi. <Link href="/service-areas" className="font-semibold text-teal-dark hover:underline">See service areas</Link> or <Link href={quoteHref} className="font-semibold text-teal-dark hover:underline">request this service</Link>.</p>
          </div>
        </div>
      </section>

      <Projects serviceSlug={service.slug} />

      {/* From enquiry to done */}
      <section className="border-y border-line bg-white py-16">
        <div className="container-px">
          <Reveal variant="fade">
            <h2 className="font-display text-2xl font-bold text-navy">Booking is simple</h2>
          </Reveal>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 80} as="li" className="flex gap-4">
                <span className="font-display text-2xl font-extrabold text-teal">{step.n}</span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slatey">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-surface py-20">
          <div className="container-px">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold text-navy">
                Other {service.category.toLowerCase()}
              </h2>
              <Link href="/services" className="hidden text-sm font-semibold text-teal-dark hover:underline sm:inline">
                View all
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 80}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-navy transition-colors duration-200 group-hover:bg-teal group-hover:text-white">
                      <Icon name={r.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-navy">{r.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slatey">{r.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                      Details <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="pt-24">
        <CtaBand />
      </div>
    </main>
  );
}
