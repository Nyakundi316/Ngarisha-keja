import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { steps } from "@/lib/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Simple Process"
          title="How it works"
          subtext="Four easy steps from first contact to a spotless space."
          center
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          {/* connector line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-line md:block" />

          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100} className="relative">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-navy font-display text-lg font-bold text-white shadow-soft">
                  {step.n}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slatey">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
