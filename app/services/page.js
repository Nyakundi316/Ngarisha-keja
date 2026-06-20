import Services from "@/components/Services";
import FacilitySupport from "@/components/FacilitySupport";
import ClientsWeServe from "@/components/ClientsWeServe";

export const metadata = {
  title: "Services — Ngarishakeja",
  description:
    "Residential, commercial, and institutional cleaning plus full facility support — all in one place.",
};

export default function ServicesPage() {
  return (
    <main className="pt-[72px]">
      <Services />
      <FacilitySupport />
      <ClientsWeServe />
    </main>
  );
}
