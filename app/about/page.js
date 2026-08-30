import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustQuality from "@/components/TrustQuality";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Our Nairobi Cleaning Team",
  description:
    "Learn about Ngarishakeja's cleaning and facility-support approach for homes, offices, schools, and commercial spaces across Nairobi.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="pt-[72px]">
      <About />
      <WhyChooseUs />
      <TrustQuality />
    </main>
  );
}
