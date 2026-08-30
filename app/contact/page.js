import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { serviceOptions } from "@/lib/site";
import { attributionKeys, sanitizeAttribution } from "@/lib/attribution";
import { createPageMetadata } from "@/lib/seo";
import { getFaqSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Request a Cleaning Quote in Nairobi",
  description:
    "Contact Ngarishakeja for a tailored cleaning or facility-support quote in Nairobi by form, WhatsApp, phone, or email.",
  path: "/contact",
});

export default function ContactPage({ searchParams = {} }) {
  const requestedService =
    typeof searchParams.service === "string" && serviceOptions.includes(searchParams.service)
      ? searchParams.service
      : "";
  const initialAttribution = sanitizeAttribution(
    Object.fromEntries(
      attributionKeys.map((key) => [
        key,
        typeof searchParams[key] === "string" ? searchParams[key] : "",
      ])
    )
  );

  return (
    <main className="pt-[72px]">
      <JsonLd data={getFaqSchema()} />
      <Contact initialService={requestedService} initialAttribution={initialAttribution} />
      <Faq />
    </main>
  );
}
