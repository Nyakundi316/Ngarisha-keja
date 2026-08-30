import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/site";

export function getPublicProjects({ serviceSlug, featuredOnly = false } = {}) {
  return projects.filter(
    (project) =>
      project.approvalStatus === "approved" &&
      project.permissionStatus === "approved" &&
      (!featuredOnly || project.featured === true) &&
      (!serviceSlug || project.serviceSlug === serviceSlug)
  );
}

// This is intentionally exported for a future authenticated admin surface;
// the public site returns null when no approved records exist.
export function ProjectsAdminEmptyState() {
  return (
    <div className="rounded-card border border-dashed border-line bg-surface p-6 text-sm text-slatey">
      Add a project record with approved photos, truthful captions, and customer permission before publishing it.
    </div>
  );
}

export default function Projects({ serviceSlug, featuredOnly = false }) {
  const visibleProjects = getPublicProjects({ serviceSlug, featuredOnly });
  if (!visibleProjects.length) return null;

  return (
    <section id="recent-projects" className="bg-surface py-20">
      <div className="container-px">
        <SectionHeading eyebrow="Recent Projects" title="A closer look at our work" subtext="Selected work shared with permission." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <article className="overflow-hidden rounded-card border border-line bg-white shadow-soft">
                {project.afterImages?.[0] && (
                  <div className="relative aspect-[4/3] bg-surface">
                    <Image src={project.afterImages[0]} alt={project.afterAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal">{project.serviceCategory}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-navy">{project.title}</h3>
                  {project.location && <p className="mt-1 text-sm text-slatey">{project.location}</p>}
                  <p className="mt-3 text-sm leading-relaxed text-ink">{project.workCompleted}</p>
                  {project.customerQuotation && <p className="mt-3 text-sm italic leading-relaxed text-slatey">“{project.customerQuotation}”</p>}
                  <Link href={project.serviceSlug ? `/services/${project.serviceSlug}` : "/contact"} data-track-event="project_view" data-track-project={project.slug} data-track-service={project.serviceSlug} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark">
                    View related service <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slatey"><Link href="/contact" className="font-semibold text-teal-dark hover:underline">Ask about a similar service</Link></p>
      </div>
    </section>
  );
}
