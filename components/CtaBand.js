import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { company } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="pb-24">
      <div className="container-px">
        <Reveal variant="scale" className="relative overflow-hidden rounded-2xl bg-navy px-8 py-14 shadow-lift sm:px-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />

          <div className="relative grid gap-9 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-[2.5rem]">
                Ready for a cleaner, better-run space?
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
                Tell us what you need — we&apos;ll send a fast, no-obligation quote, usually the
                same day.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contact" className="btn-accent w-full">
                Request a Quote <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${company.phoneHref}`}
                className="btn w-full border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <Icon name="phone" className="h-4 w-4" /> {company.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
