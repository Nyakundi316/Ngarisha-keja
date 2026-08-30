import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/site";
import { defaultDescription } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Analytics from "@/components/Analytics";
import ConversionTracking from "@/components/ConversionTracking";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `Cleaning Services in Nairobi | ${company.name}`,
    template: `%s | ${company.name}`,
  },
  description: defaultDescription,
  applicationName: company.name,
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#66724A",
};

export default function RootLayout({ children }) {
  const analyticsId = process.env.NEXT_PUBLIC_GA_ID?.trim();

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-btn bg-navy px-4 py-3 font-semibold text-white shadow-lift transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </div>
        <Footer />
        <FloatingButtons />
        <ConversionTracking />
        <Analytics measurementId={analyticsId} />
      </body>
    </html>
  );
}
