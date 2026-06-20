"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { company, whatsappLink, serviceOptions } from "@/lib/site";

const initial = { name: "", phone: "", email: "", service: "", location: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[0-9 +()-]{7,}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email.";
    if (!form.service) e.service = "Select a service.";
    if (!form.location.trim()) e.location = "Tell us your location.";
    return e;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }
    // No backend yet: compose a prefilled WhatsApp message.
    // To use email instead, swap this for a mailto: link or wire to Formspree/Resend/your API.
    const text =
      `New quote request%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Email: ${form.email}%0A` +
      `Service: ${form.service}%0A` +
      `Location: ${form.location}%0A` +
      `Message: ${form.message || "-"}`;
    window.open(`https://wa.me/${company.whatsapp}?text=${text}`, "_blank", "noopener");
    setSent(true);
    setForm(initial);
  };

  const fieldClass = (name) =>
    `w-full rounded-btn border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slatey/60 focus:border-teal focus:ring-2 focus:ring-teal/20 ${
      errors[name] ? "border-red-400" : "border-line"
    }`;

  return (
    <section id="contact" className="bg-surface py-24">
      <div className="container-px grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Info column */}
        <div>
          <Reveal>
            <span className="eyebrow">Get In Touch</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Need a Reliable Cleaning &amp; Facility Support Partner?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slatey">
              Request a quotation today and let our team help you keep your space clean, fresh, and
              professionally maintained.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green text-white hover:-translate-y-0.5 hover:shadow-lift"
              >
                <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp Us
              </a>
              <a href={`tel:${company.phoneHref}`} className="btn-primary">
                <Icon name="phone" className="h-4 w-4" /> Call Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-teal shadow-soft">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <a href={`tel:${company.phoneHref}`} className="text-sm font-medium text-navy hover:text-teal">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-teal shadow-soft">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <a href={`mailto:${company.email}`} className="text-sm font-medium text-navy hover:text-teal">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-teal shadow-soft">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-navy">
                  {company.address} · {company.hours}
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Form column */}
        <Reveal delay={120}>
          <div className="rounded-[1.5rem] border border-line bg-white p-7 shadow-lift sm:p-8">
            {sent ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-teal/10 text-teal">
                  <Icon name="check" className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">Request ready to send</h3>
                <p className="mt-2 max-w-sm text-sm text-slatey">
                  We’ve opened WhatsApp with your details prefilled. Hit send there and we’ll get
                  back to you shortly.
                </p>
                <button onClick={() => setSent(false)} className="btn-outline mt-6">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                      Name
                    </label>
                    <input id="name" name="name" value={form.name} onChange={update} className={fieldClass("name")} placeholder="Your full name" />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
                      Phone Number
                    </label>
                    <input id="phone" name="phone" value={form.phone} onChange={update} className={fieldClass("phone")} placeholder="07XX XXX XXX" inputMode="tel" />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                      Email
                    </label>
                    <input id="email" name="email" value={form.email} onChange={update} className={fieldClass("email")} placeholder="you@email.com" inputMode="email" />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-navy">
                      Location
                    </label>
                    <input id="location" name="location" value={form.location} onChange={update} className={fieldClass("location")} placeholder="Area / neighborhood" />
                    {errors.location && <p className="mt-1 text-xs text-red-500">{errors.location}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
                    Service Needed
                  </label>
                  <select id="service" name="service" value={form.service} onChange={update} className={fieldClass("service")}>
                    <option value="">Select a service…</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                    Message <span className="font-normal text-slatey">(optional)</span>
                  </label>
                  <textarea id="message" name="message" value={form.message} onChange={update} rows={4} className={fieldClass("message")} placeholder="Tell us about your space…" />
                </div>

                <button type="submit" className="btn-accent mt-2 w-full">
                  Request Quote <Icon name="arrow" className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-slatey">
                  We typically respond within a few hours during working hours.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
