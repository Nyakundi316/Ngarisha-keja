import Link from "next/link";
import Icon from "@/components/Icon";
import { company, navLinks, services, facilitySupport } from "@/lib/site";

const year = new Date().getFullYear();

export default function Footer() {
  const socials = Object.entries(company.socials).filter(([, url]) => url);

  return (
    <footer className="bg-navy text-white/80">
      <div className="container-px grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-teal">
              <Icon name="sparkle" className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold text-white">{company.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Professional cleaning and facility support for homes, offices, schools, Airbnbs, and
            commercial spaces.
          </p>
          {socials.length > 0 && (
            <div className="mt-5 flex gap-2">
              {socials.map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-teal"
                >
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link href="/services" className="text-sm text-white/60 transition-colors hover:text-teal">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Facility support */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Facility Support
          </h3>
          <ul className="mt-4 space-y-2.5">
            {facilitySupport.slice(0, 6).map((f) => (
              <li key={f.title}>
                <Link href="/services" className="text-sm text-white/60 transition-colors hover:text-teal">
                  {f.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-3">
              <Icon name="phone" className="h-4 w-4 text-teal" />
              <a href={`tel:${company.phoneHref}`} className="hover:text-teal">{company.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" className="h-4 w-4 text-teal" />
              <a href={`mailto:${company.email}`} className="hover:text-teal">{company.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="pin" className="h-4 w-4 text-teal" />
              <span>{company.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="clock" className="h-4 w-4 text-teal" />
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} {company.name}. All rights reserved.</p>
          <nav className="flex gap-5">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-teal">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
