import Services from "@/components/Services";
import FacilitySupport from "@/components/FacilitySupport";
import ClientsWeServe from "@/components/ClientsWeServe";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cleaning & Facility Support Services in Nairobi",
  description:
    "Explore residential, commercial, institutional, deep-cleaning, and facility-support services available across Nairobi from Ngarishakeja.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="pt-[72px]">
      <Services />
      <FacilitySupport />
      <ClientsWeServe />
    </main>
  );
}
