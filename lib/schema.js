import { allServices, company, faqs } from "@/lib/site";
import { absoluteUrl, defaultDescription } from "@/lib/seo";

const businessId = `${company.siteUrl}/#business`;

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: company.name,
    url: `${company.siteUrl}/`,
    image: absoluteUrl(company.socialImage),
    description: defaultDescription,
    telephone: company.phoneHref,
    email: company.email,
    areaServed: {
      "@type": "City",
      name: "Nairobi",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning and facility support services",
      itemListElement: allServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
  };
}

export function getServiceSchemas(service) {
  const path = `/services/${service.slug}`;
  const url = absoluteUrl(path);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.long,
    url,
    provider: {
      "@type": "LocalBusiness",
      "@id": businessId,
      name: company.name,
      url: `${company.siteUrl}/`,
      telephone: company.phoneHref,
    },
    areaServed: {
      "@type": "City",
      name: "Nairobi",
    },
  };

  if (service.image) schema.image = absoluteUrl(service.image);

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${company.siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: absoluteUrl("/services"),
      },
      { "@type": "ListItem", position: 3, name: service.title, item: url },
    ],
  };

  return [schema, breadcrumbs];
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
