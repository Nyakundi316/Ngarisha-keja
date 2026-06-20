import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive cleaning for every space"
          subtext="From everyday upkeep to specialized deep cleans, we cover it all."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <article className="card group h-full">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface text-navy transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slatey">{s.desc}</p>
              </article>
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
