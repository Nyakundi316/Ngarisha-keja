import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

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
  title: `${company.name} — Professional Cleaning & Facility Support in ${company.serviceArea}`,
  description:
    "Reliable residential, commercial, and institutional cleaning plus full facility support. Request a quote today.",
  openGraph: {
    title: `${company.name} — Cleaning & Facility Support`,
    description:
      "Reliable cleaning and facility support for homes, offices, schools, Airbnbs, and commercial spaces.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
