import Plans from "@/components/Plans";
import HowItWorks from "@/components/HowItWorks";

export const metadata = {
  title: "Plans — Ngarishakeja",
  description:
    "Flexible, quote-based cleaning plans — one-time, weekly, monthly, or long-term contracts.",
};

export default function PlansPage() {
  return (
    <main className="pt-[72px]">
      <Plans />
      <HowItWorks />
    </main>
  );
}
