import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { facilitySupport } from "@/lib/site";

export default function FacilitySupport() {
  return (
    <section id="facility-support" className="bg-surface py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Beyond Cleaning"
          title="Complete facility support, not just cleaning"
          subtext="We help you run and maintain your property end-to-end."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilitySupport.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 70}>
              <Link
                href={`/services/${f.slug}`}
                data-track-event="service_quote_click"
                data-track-service={f.slug}
                className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-navy/30 hover:shadow-lift"
              >
                {f.image && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <Image
                      src={f.image}
                      alt={f.imageAlt || f.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy/5 text-navy transition-colors duration-200 group-hover:bg-navy group-hover:text-white">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-navy">{f.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slatey">{f.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Learn more <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
