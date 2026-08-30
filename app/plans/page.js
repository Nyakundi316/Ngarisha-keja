import Plans from "@/components/Plans";
import HowItWorks from "@/components/HowItWorks";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Flexible Cleaning Plans in Nairobi",
  description:
    "Choose one-time, weekly, monthly, long-term, or custom quote-based cleaning plans for homes and workplaces across Nairobi.",
  path: "/plans",
});

export default function PlansPage() {
  return (
    <main className="pt-[72px]">
      <Plans />
      <HowItWorks />
    </main>
  );
}
