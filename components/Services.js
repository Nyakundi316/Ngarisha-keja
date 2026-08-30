import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/site";
// Each card links to its own /services/[slug] detail page.

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container-px">
        <SectionHeading
          as="h1"
          eyebrow="Our Services"
          title="Comprehensive cleaning for every space"
          subtext="From everyday upkeep to specialized deep cleans, we cover it all."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lift"
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
                  <h2 className="mt-5 font-display text-lg font-bold text-navy">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slatey">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Learn more <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Get a free quote <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
