"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { faqs } from "@/lib/site";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24">
      <div className="container-px">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" center />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-card border border-line bg-white shadow-soft">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-navy">{item.q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-navy transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-teal text-white border-teal" : ""
                    }`}
                  >
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden px-6 transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 text-sm leading-relaxed text-slatey">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
