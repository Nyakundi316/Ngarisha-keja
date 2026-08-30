import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="pt-[72px]">
      <section className="container-px flex min-h-[60vh] flex-col items-start justify-center py-24">
        <span className="eyebrow">404</span>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
          That page has been swept away
        </h1>
        <p className="mt-4 max-w-md text-lg text-slatey">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Try our services
          overview, or get in touch and we&apos;ll point you the right way.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back home
          </Link>
          <Link href="/services" className="btn-outline">
            Browse services <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
