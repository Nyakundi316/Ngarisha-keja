import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustQuality from "@/components/TrustQuality";

export const metadata = {
  title: "About — Ngarishakeja",
  description:
    "Who we are: a reliable cleaning and facility support partner for homes, offices, schools, and commercial spaces.",
};

export default function AboutPage() {
  return (
    <main className="pt-[72px]">
      <About />
      <WhyChooseUs />
      <TrustQuality />
    </main>
  );
}
