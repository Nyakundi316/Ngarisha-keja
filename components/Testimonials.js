import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="What Clients Say"
          title="The kind of feedback we work for"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
                <span className="font-display text-5xl font-extrabold leading-none text-teal/30" aria-hidden="true">
                  â€œ
                </span>
                <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy font-display text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy">{t.name}</p>
                    <p className="text-xs text-slatey">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
