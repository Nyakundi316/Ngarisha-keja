import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <CtaBand />
    </main>
  );
}
