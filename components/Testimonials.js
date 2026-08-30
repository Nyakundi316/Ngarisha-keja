import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import { servicePromises } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="service-standards" className="py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="What to Expect"
          title="A service built around clear standards"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {servicePromises.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal/10 text-teal">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
