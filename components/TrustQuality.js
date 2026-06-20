import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { qualityPoints } from "@/lib/site";

export default function TrustQuality() {
  return (
    <section className="bg-navy py-24">
      <div className="container-px text-center">
        <Reveal>
          <span className="eyebrow justify-center text-teal">Our Promise</span>
          <p className="mx-auto mt-6 max-w-3xl font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
            We don’t just clean spaces — we help clients maintain healthier, safer, and more
            organized environments.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {qualityPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white"
              >
                <Icon name="check" className="h-4 w-4 text-teal" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
