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
              <article className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slatey">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
