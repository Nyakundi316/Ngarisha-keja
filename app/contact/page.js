import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

export const metadata = {
  title: "Contact — Ngarishakeja",
  description: "Request a quote or book a site visit. Reach us by form, WhatsApp, phone, or email.",
};

export default function ContactPage() {
  return (
    <main className="pt-[72px]">
      <Contact />
      <Faq />
    </main>
  );
}
