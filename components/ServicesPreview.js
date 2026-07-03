import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { services } from "@/lib/site";

const highlights = services.slice(0, 6);

export default function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="container-px">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal variant="left" className="max-w-xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Cleaning &amp; facility care,{" "}
              <span className="text-teal">all under one roof</span>
            </h2>
          </Reveal>
          <Reveal variant="right" delay={120} className="self-start md:self-auto">
            <Link href="/services" className="btn-outline whitespace-nowrap">
              View all services <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift"
              >
                {s.image && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                    <Image
                      src={s.image}
                      alt={s.imageAlt || s.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface text-navy transition-colors duration-200 group-hover:bg-teal group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slatey">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Learn more <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-sm text-slatey">
            Plus deep cleaning, post-construction, fumigation, landscaping &amp; more â€”{" "}
            <Link href="/services" className="font-semibold text-teal hover:underline">
              see the full list
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
