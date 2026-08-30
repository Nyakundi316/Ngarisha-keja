import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { getLocalBusinessSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cleaning Services in Nairobi",
  description:
    "Professional home, office, Airbnb, institutional, and facility-support cleaning services across Nairobi. Request a tailored quote from Ngarishakeja.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <JsonLd data={getLocalBusinessSchema()} />
      <Hero />
      <ServicesPreview />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <Projects featuredOnly />
      <Reviews />
      <CtaBand />
    </main>
  );
}
