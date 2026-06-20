import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { company } from "@/lib/site";

const features = [
  "Trained & vetted staff",
  "Consistent hygiene standards",
  "Punctual, dependable service",
  "Customer satisfaction guaranteed",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-px grid items-center gap-14 lg:grid-cols-2">
        {/* Visual */}
        <Reveal className="relative order-last lg:order-first">
          <div className="relative aspect-square w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-surface to-line shadow-soft">
            {/* Replace with a real photo of your team / a clean space */}
            <div className="absolute inset-0 grid place-items-center">
              <Icon name="building" className="h-28 w-28 text-navy/15" />
            </div>
          </div>
          <div className="absolute -right-4 bottom-6 rounded-2xl border border-line bg-navy p-5 text-white shadow-lift">
            <p className="font-display text-3xl font-bold">{company.name}</p>
            <p className="mt-1 text-sm text-white/70">Your facility partner</p>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">About Us</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Reliable cleaning and facility support — for one-time jobs and long-term partnerships
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-lg leading-relaxed text-slatey">
              {company.name} provides professional cleaning and facility support services for
              residential, commercial, and institutional clients. Whether you need a single deep
              clean or a long-term maintenance partner, our trained team delivers consistent,
              hygiene-focused results you can rely on.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-lg leading-relaxed text-slatey">
              We work to clear standards, show up on time, and treat every space with care — so you
              can focus on what matters while we keep your environment clean, safe, and well
              maintained.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-navy">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal/10 text-teal">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
