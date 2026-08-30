import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { company } from "@/lib/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cleaning Service Areas in Nairobi",
  description: "See the configured service area for Ngarishakeja cleaning and facility support bookings in Nairobi.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <main className="pt-[72px]">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "Cleaning Service Areas in Nairobi", url: `${company.siteUrl}/service-areas`, about: { "@type": "LocalBusiness", name: company.name, areaServed: company.serviceAreas.map((area) => ({ "@type": "City", name: area })) } }} />
      <section className="bg-surface py-20">
        <div className="container-px max-w-3xl">
          <span className="eyebrow">Where we work</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-5xl">Cleaning and facility support in Nairobi</h1>
          <p className="mt-6 text-lg leading-relaxed text-slatey">We currently accept cleaning and facility-support enquiries for the configured area below. Share your property details so we can confirm whether the requested visit is practical.</p>
          <div className="mt-10 rounded-card border border-line bg-white p-7 shadow-soft">
            <h2 className="font-display text-xl font-bold text-navy">Configured service area</h2>
            <ul className="mt-4 space-y-3">{company.serviceAreas.map((area) => <li key={area} className="flex items-center gap-3 text-slatey"><span className="grid h-8 w-8 place-items-center rounded-full bg-teal/10 text-teal">✓</span>{area}</li>)}</ul>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-white p-6"><h2 className="font-display text-lg font-bold text-navy">Travel and minimums</h2><p className="mt-2 text-sm leading-relaxed text-slatey">Any travel considerations or minimum booking requirements are discussed during the quote. We do not publish a fixed charge or minimum here.</p></div>
            <div className="rounded-card border border-line bg-white p-6"><h2 className="font-display text-lg font-bold text-navy">Ready to check?</h2><p className="mt-2 text-sm leading-relaxed text-slatey">Tell us your area, property type, and service need for a practical response.</p><Link href="/contact" className="btn-primary mt-5">Request a quote</Link></div>
          </div>
          <p className="mt-10 text-sm text-slatey">Browse <Link href="/services" className="font-semibold text-teal-dark hover:underline">all services</Link> or return to the <Link href="/" className="font-semibold text-teal-dark hover:underline">homepage</Link>.</p>
        </div>
      </section>
    </main>
  );
}
