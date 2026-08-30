import { company, stats } from "@/lib/site";

export default function Stats() {
  return (
    <section className="bg-navy">
      <div className="container-px py-14">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          {company.name} at a glance
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                {stat.value}
                <span className="text-gold">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
