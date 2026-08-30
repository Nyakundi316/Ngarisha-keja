"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { company, navLinks } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const firstLink = menuRef.current?.querySelector("a[href]");
    firstLink?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        menuRef.current?.querySelectorAll("a[href], button:not([disabled])") || []
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/90 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-px flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${company.shortName} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-white">
            <Icon name="sparkle" className="h-5 w-5 text-gold" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-navy">{company.shortName}</span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-slatey">
              {company.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-gold after:transition-all after:duration-200 hover:text-teal-dark ${
                isActive(link.href) ? "text-teal-dark after:w-5" : "text-ink/80 after:w-0 hover:after:w-5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${company.phoneHref}`} className="btn-ghost text-sm">
            <Icon name="phone" className="h-4 w-4" />
            {company.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-accent">
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-navigation"
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
        inert={open ? undefined : ""}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close menu"
          className={`fixed inset-0 top-[72px] bg-navy/30 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          ref={menuRef}
          aria-label="Mobile navigation"
          className={`fixed inset-x-0 top-[72px] origin-top border-b border-line bg-white px-6 pb-8 pt-2 shadow-lift transition-all ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col divide-y divide-line">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`py-3.5 text-base font-medium transition-colors hover:text-teal-dark ${
                  isActive(link.href) ? "text-teal-dark" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a href={`tel:${company.phoneHref}`} className="btn-outline w-full" onClick={() => setOpen(false)}>
              <Icon name="phone" className="h-4 w-4" /> Call
            </a>
            <Link href="/contact" className="btn-accent w-full" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
