import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { whyChooseUs, whatsappLink } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24">
      <div className="container-px grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Left: pitch + CTA */}
        <div>
          <Reveal>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              A facility partner you can count on
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slatey">
              We combine dependable people, clear standards, and flexible scheduling so your space
              stays clean and well maintained — without the hassle.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 rounded-card border border-line bg-surface p-6">
              <p className="font-display text-lg font-bold text-navy">
                Ready when you are.
              </p>
              <p className="mt-1.5 text-sm text-slatey">
                Book by WhatsApp, phone, email, or our online form.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-green text-white hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
                </a>
                <Link href="/contact" className="btn-outline">
                  Request a Quote
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: reasons grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 80}>
              <div className="flex h-full gap-4 rounded-card border border-line bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slatey">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
