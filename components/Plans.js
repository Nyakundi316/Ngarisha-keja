import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { plans } from "@/lib/site";

export default function Plans() {
  return (
    <section id="plans" className="py-24">
      <div className="container-px">
        <SectionHeading
          as="h1"
          eyebrow="Flexible Plans"
          title="Plans that fit your space and schedule"
          subtext="Quote-based pricing — pay only for what your space actually needs."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.title} delay={(i % 5) * 70} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-card border p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift ${
                  plan.popular ? "border-gold/70 bg-navy text-white" : "border-line bg-white hover:border-gold/50"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
                    Most Popular
                  </span>
                )}
                <h2
                  className={`font-display text-lg font-bold ${
                    plan.popular ? "text-white" : "text-navy"
                  }`}
                >
                  {plan.title}
                </h2>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    plan.popular ? "text-white/75" : "text-slatey"
                  }`}
                >
                  {plan.desc}
                </p>
                <dl className={`mt-5 space-y-2 text-xs ${plan.popular ? "text-white/80" : "text-slatey"}`}>
                  <div className="flex justify-between gap-3 border-t border-current/15 pt-2"><dt className="font-semibold">Best for</dt><dd className="text-right">{plan.bestFor}</dd></div>
                  <div className="flex justify-between gap-3"><dt className="font-semibold">Frequency</dt><dd className="text-right">{plan.frequency}</dd></div>
                  <div className="flex justify-between gap-3"><dt className="font-semibold">Pricing</dt><dd className="text-right">{plan.priceType}</dd></div>
                </dl>
                <details className={`mt-5 text-xs ${plan.popular ? "text-white/80" : "text-slatey"}`}>
                  <summary className={`cursor-pointer font-semibold ${plan.popular ? "text-gold" : "text-teal-dark"}`}>See what&apos;s included</summary>
                  <div className="mt-3 space-y-3">
                    <p>{plan.scope}</p>
                    <ul className="list-disc space-y-1 pl-4">{plan.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                    <p><span className="font-semibold">Equipment:</span> {plan.equipment}</p>
                    <p><span className="font-semibold">Team / time:</span> {plan.teamSize} {plan.duration}</p>
                    <p><span className="font-semibold">Scheduling:</span> {plan.priority}</p>
                    <p><span className="font-semibold">Factors:</span> {plan.pricingFactors.join(", ")}.</p>
                  </div>
                </details>
                <Link
                  href={`/contact?service=${encodeURIComponent(plan.title)}`}
                  data-track-event="plan_quote_click"
                  data-track-plan={plan.title}
                  className={`mt-6 ${plan.popular ? "btn-accent" : "btn-outline"} w-full`}
                >
                  Get Quote <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
