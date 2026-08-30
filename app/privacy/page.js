import Link from "next/link";
import { company } from "@/lib/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Notice | Ngarishakeja",
  description: "How Ngarishakeja handles information shared through the cleaning quote form and contact channels.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-surface py-20">
        <div className="container-px max-w-3xl">
          <span className="eyebrow">Privacy</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-5xl">Privacy notice</h1>
          <p className="mt-5 text-slatey">This notice describes the information flow currently implemented on this website. It is not a statement of legal compliance.</p>
          <div className="mt-10 space-y-8 rounded-card border border-line bg-white p-7 shadow-soft sm:p-9">
            <section><h2 className="font-display text-xl font-bold text-navy">Information collected</h2><p className="mt-2 text-sm leading-relaxed text-slatey">The quote form asks for your name, phone number, selected service, and optional contact details such as email, area, property details, frequency, preferred date, contact method, referral source, and a short description. The site also receives basic technical request information needed to serve the page.</p></section>
            <section><h2 className="font-display text-xl font-bold text-navy">Why it is collected</h2><p className="mt-2 text-sm leading-relaxed text-slatey">These details are used to prepare a readable quote request and help Ngarishakeja understand the requested cleaning or facility-support scope.</p></section>
            <section><h2 className="font-display text-xl font-bold text-navy">How it is submitted</h2><p className="mt-2 text-sm leading-relaxed text-slatey">The website sends the form to its quote route, which validates the fields and prepares a WhatsApp message. The visitor reviews that message and chooses whether to send it to the configured WhatsApp number. The website does not currently store quote submissions in an application database or claim that a lead was received.</p></section>
            <section><h2 className="font-display text-xl font-bold text-navy">Third-party services</h2><p className="mt-2 text-sm leading-relaxed text-slatey">If the owner enables a valid <code className="rounded bg-surface px-1">NEXT_PUBLIC_GA_ID</code>, Google Analytics may load and receive privacy-safe event data such as page paths and service labels. It is disabled when that variable is absent. WhatsApp receives information only if the visitor sends the prepared message.</p></section>
            <section><h2 className="font-display text-xl font-bold text-navy">Storage, retention, and security</h2><p className="mt-2 text-sm leading-relaxed text-slatey">Campaign attribution may be kept in the browser’s session storage to preserve the source while a visitor navigates. The current quote route has no configured application lead database or retention schedule. Reasonable transport and access controls should be maintained by the hosting and messaging providers.</p></section>
            <section><h2 className="font-display text-xl font-bold text-navy">Your requests</h2><p className="mt-2 text-sm leading-relaxed text-slatey">For a correction or deletion request, contact <a href={`mailto:${company.email}`} className="font-semibold text-teal-dark underline">{company.email}</a> and describe the information or message involved. The owner should review and respond to requests using the applicable process for their business.</p></section>
          </div>
          <p className="mt-8 text-sm text-slatey"><Link href="/contact" className="font-semibold text-teal-dark hover:underline">Return to the quote form</Link></p>
        </div>
      </section>
    </main>
  );
}
