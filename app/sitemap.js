import { company, allServices } from "@/lib/site";

export default function sitemap() {
  const pages = ["/", "/about", "/services", "/plans", "/contact"].map((route) => ({
    url: route === "/" ? `${company.siteUrl}/` : `${company.siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const serviceDetails = allServices.map((s) => ({
    url: `${company.siteUrl}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...serviceDetails];
}
