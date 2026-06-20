import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { clients } from "@/lib/site";

export default function ClientsWeServe() {
  return (
    <section id="clients" className="bg-surface py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Trusted across every type of space"
          center
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {clients.map((c, i) => (
            <Reveal key={c.label} delay={(i % 4) * 70}>
              <div className="group flex flex-col items-center gap-3 rounded-card border border-line bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                  <Icon name={c.icon} className="h-7 w-7" />
                </span>
                <span className="text-sm font-semibold text-navy">{c.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
