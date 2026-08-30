import { company } from "@/lib/site";

export const defaultDescription =
  "Professional cleaning and facility support for homes, offices, Airbnbs, schools, and commercial spaces across Nairobi.";

const socialImage = {
  url: company.socialImage,
  width: 736,
  height: 552,
  alt: `${company.name} cleaning team at work`,
};

export function createPageMetadata({ title, description, path }) {
  const socialTitle = `${title} | ${company.name}`;
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: company.name,
      locale: "en_KE",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [company.socialImage],
    },
  };
}

export function getServiceSeoTitle(service) {
  if (service.slug === "office-cleaning") return "Office Cleaning Services in Nairobi";
  return `${service.title} in Nairobi`;
}

export function getServiceSeoDescription(service) {
  return `${service.desc} Request a tailored quote for ${service.title.toLowerCase()} in Nairobi and surrounding areas.`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, `${company.siteUrl}/`).toString();
}
