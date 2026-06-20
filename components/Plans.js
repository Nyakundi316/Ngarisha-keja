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
          eyebrow="Flexible Plans"
          title="Plans that fit your space and schedule"
          subtext="Quote-based pricing — pay only for what your space actually needs."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan, i) => (
            <Reveal key={plan.title} delay={(i % 5) * 70} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-card border p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                  plan.popular ? "border-teal bg-navy text-white" : "border-line bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-teal px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`font-display text-lg font-bold ${
                    plan.popular ? "text-white" : "text-navy"
                  }`}
                >
                  {plan.title}
                </h3>
                <p
                  className={`mt-2 flex-1 text-sm leading-relaxed ${
                    plan.popular ? "text-white/75" : "text-slatey"
                  }`}
                >
                  {plan.desc}
                </p>
                <Link
                  href="/contact"
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
