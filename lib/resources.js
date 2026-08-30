// Resource records are kept separate from published pages so drafts cannot
// accidentally enter the sitemap before they contain verified, useful content.
const template = (slug, title, relatedServices) => ({
  slug,
  title,
  description: "",
  author: "",
  updatedDate: "",
  canonicalPath: `/resources/${slug}`,
  relatedServices,
  status: "draft",
});

export const resourceTemplates = [
  template("house-cleaning-costs-nairobi", "House cleaning costs in Nairobi", ["home-apartment-cleaning"]),
  template("sofa-cleaning-costs-nairobi", "Sofa cleaning costs in Nairobi", ["sofa-upholstery-cleaning"]),
  template("airbnb-turnover-checklist", "Airbnb turnover-cleaning checklist", ["airbnb-turnover-cleaning"]),
  template("office-cleaning-frequency-guide", "Office cleaning frequency guide", ["office-cleaning"]),
  template("move-out-cleaning-checklist", "Move-out cleaning checklist", ["move-in-move-out-cleaning"]),
  template("post-construction-cleaning-preparation", "Post-construction cleaning preparation guide", ["post-construction-cleaning"]),
];

// Add only owner-approved, authored resources here. Empty means no article is
// published or included in the sitemap.
export const publishedResources = [];

export function getPublishedResource(slug) {
  return publishedResources.find((resource) => resource.slug === slug);
}
