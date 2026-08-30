"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { trackConversion } from "@/components/ConversionTracking";
import { attributionKeys, captureAttribution } from "@/lib/attribution";
import {
  contactMethodOptions,
  frequencyOptions,
  propertyTypeOptions,
  quoteLimits,
  referralSourceOptions,
  validateQuote,
} from "@/lib/quote";
import { company, serviceOptions, whatsappLink } from "@/lib/site";

const emptyForm = (service = "") => ({
  name: "",
  phone: "",
  email: "",
  service,
  location: "",
  propertyType: "",
  propertySize: "",
  frequency: "",
  preferredDate: "",
  contactMethod: "",
  heardAbout: "",
  message: "",
  companyWebsite: "",
});


function RequiredMark() {
  return (
    <>
      <span aria-hidden="true" className="text-terracotta"> *</span>
      <span className="sr-only"> (required)</span>
    </>
  );
}

export default function Contact({ initialService = "", initialAttribution = {} }) {
  const [form, setForm] = useState(() => emptyForm(initialService));
  const [attribution, setAttribution] = useState(initialAttribution);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");
  const [clientReady, setClientReady] = useState(false);
  const statusRef = useRef(null);
  const submittingRef = useRef(false);

  useEffect(() => {
    setClientReady(true);
    setAttribution(captureAttribution(initialAttribution));
  }, [initialAttribution]);

  useEffect(() => {
    if (status === "success" || status === "error") statusRef.current?.focus();
  }, [status]);

  const focusFirstError = (nextErrors) => {
    const first = ["name", "phone", "email", "service", "propertyType", "propertySize", "frequency", "preferredDate", "contactMethod", "heardAbout"].find((field) => nextErrors[field]);
    if (first) window.setTimeout(() => document.getElementById(first)?.focus(), 0);
  };

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status === "error") {
      setStatus("idle");
      setStatusMessage("");
      setFallbackUrl("");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (submittingRef.current) return;
    const result = validateQuote({ ...form, ...attribution });
    if (Object.keys(result.errors).length) {
      setErrors(result.errors);
      setStatus("error");
      setStatusMessage("Check the highlighted fields and try again.");
      focusFirstError(result.errors);
      return;
    }

    setErrors({});
    submittingRef.current = true;
    setStatus("loading");
    setStatusMessage("");
    setFallbackUrl("");
    trackConversion("quote_form_submit", {
      service: result.values.service,
      page_path: window.location.pathname,
    });

    const popup = window.open("about:blank", "_blank");
    if (popup) {
      try {
        popup.opener = null;
        popup.document.title = "Opening WhatsApp";
        popup.document.body.textContent = "Preparing your WhatsApp quote…";
      } catch {
        // Navigation below still works if the temporary window cannot be customized.
      }
    }

    const payload = new FormData();
    Object.entries(result.values).forEach(([key, value]) => payload.set(key, value));
    Object.entries(result.attribution).forEach(([key, value]) => payload.set(key, value));

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (popup && !popup.closed) popup.close();
        const serverErrors = data.errors || {};
        setErrors(serverErrors);
        setStatus("error");
        setStatusMessage(data.message || "We could not prepare WhatsApp. Please try again.");
        focusFirstError(serverErrors);
        submittingRef.current = false;
        return;
      }

      const whatsappUrl = String(data.whatsappUrl || "");
      const trustedUrl = new URL(whatsappUrl);
      if (trustedUrl.protocol !== "https:" || trustedUrl.hostname !== "wa.me") {
        throw new Error("Unexpected handoff URL");
      }

      setFallbackUrl(whatsappUrl);
      if (!popup || popup.closed) {
        setStatus("error");
        setStatusMessage("Your browser blocked the WhatsApp window. Use the link below to continue.");
        submittingRef.current = false;
        return;
      }

      popup.location.replace(whatsappUrl);
      trackConversion("quote_whatsapp_handoff", {
        method: "WhatsApp",
        service: result.values.service,
        page_path: window.location.pathname,
      });
      setForm(emptyForm(initialService));
      setStatus("success");
      submittingRef.current = false;
    } catch {
      if (popup && !popup.closed) popup.close();
      setStatus("error");
      setStatusMessage("We could not prepare WhatsApp. Check your connection and try again.");
      submittingRef.current = false;
    }
  };

  const reset = () => {
    submittingRef.current = false;
    setForm(emptyForm(initialService));
    setErrors({});
    setStatus("idle");
    setStatusMessage("");
    setFallbackUrl("");
  };

  const fieldClass = (name) =>
    `w-full rounded-btn border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slatey/80 focus:border-teal focus:ring-2 focus:ring-teal/20 ${
      errors[name] ? "border-terracotta" : "border-line"
    }`;

  const accessibilityProps = (name) => ({
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const errorText = (name) =>
    errors[name] ? (
      <p id={`${name}-error`} role="alert" className="mt-1.5 text-sm font-medium text-terracotta">
        {errors[name]}
      </p>
    ) : null;

  return (
    <section id="contact" className="bg-surface py-24">
      <div className="container-px grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <Reveal>
            <span className="eyebrow">Get In Touch</span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Need a Reliable Cleaning &amp; Facility Support Partner?
            </h1>
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

          <Reveal delay={220}>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-slatey">
              Looking for coverage details? See our <Link href="/service-areas" className="font-semibold text-teal-dark underline">service areas</Link> before you request a quote.
            </p>
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

        <Reveal delay={120}>
          <div className="rounded-xl border border-line bg-white p-7 shadow-lift sm:p-8">
            {status === "success" ? (
              <div
                ref={statusRef}
                tabIndex={-1}
                role="status"
                className="flex h-full min-h-[420px] flex-col items-center justify-center text-center outline-none"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-teal/10 text-teal">
                  <Icon name="check" className="h-8 w-8" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-navy">Request ready to send</h2>
                <p className="mt-2 max-w-sm text-sm text-slatey">
                  We’ve opened WhatsApp with your details prefilled. Review the message and tap send
                  there to finish your request.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {fallbackUrl && (
                    <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" className="btn-accent">
                      Reopen WhatsApp
                    </a>
                  )}
                  <button type="button" onClick={reset} className="btn-outline">
                    Send another request
                  </button>
                </div>
              </div>
            ) : (
              <form
                action="/api/quote"
                method="post"
                onSubmit={onSubmit}
                noValidate={clientReady}
                data-quote-form="true"
                aria-busy={status === "loading"}
                className="grid gap-4"
              >
                {attributionKeys.map((key) => (
                  <input key={key} type="hidden" name={key} value={attribution[key] || ""} />
                ))}
                <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="companyWebsite">Leave this field empty</label>
                  <input id="companyWebsite" name="companyWebsite" tabIndex={-1} autoComplete="off" value={form.companyWebsite} onChange={update} />
                </div>

                {status === "error" && statusMessage && (
                  <div
                    ref={statusRef}
                    tabIndex={-1}
                    role="alert"
                    className="rounded-btn border border-terracotta/40 bg-terracotta/10 p-4 text-sm text-ink outline-none"
                  >
                    <p>{statusMessage}</p>
                    {fallbackUrl && (
                      <a
                        href={fallbackUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex font-semibold text-teal-dark underline"
                      >
                        Continue to WhatsApp
                      </a>
                    )}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                      Name<RequiredMark />
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      maxLength={quoteLimits.name}
                      value={form.name}
                      onChange={update}
                      className={fieldClass("name")}
                      placeholder="Your full name"
                      {...accessibilityProps("name")}
                    />
                    {errorText("name")}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
                      Phone Number<RequiredMark />
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={quoteLimits.phone}
                      value={form.phone}
                      onChange={update}
                      className={fieldClass("phone")}
                      placeholder="07XX XXX XXX"
                      {...accessibilityProps("phone")}
                    />
                    {errorText("phone")}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="propertyType" className="mb-1.5 block text-sm font-medium text-navy">Property type <span className="font-normal text-slatey">(optional)</span></label>
                    <select id="propertyType" name="propertyType" value={form.propertyType} onChange={update} className={fieldClass("propertyType")} {...accessibilityProps("propertyType")}>
                      <option value="">Select a property type…</option>
                      {propertyTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                    {errorText("propertyType")}
                  </div>
                  <div>
                    <label htmlFor="propertySize" className="mb-1.5 block text-sm font-medium text-navy">Property size <span className="font-normal text-slatey">(optional)</span></label>
                    <input id="propertySize" name="propertySize" type="text" autoComplete="off" maxLength={quoteLimits.propertySize} value={form.propertySize} onChange={update} className={fieldClass("propertySize")} placeholder="Rooms, floor area, or a short note" {...accessibilityProps("propertySize")} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="frequency" className="mb-1.5 block text-sm font-medium text-navy">Cleaning frequency <span className="font-normal text-slatey">(optional)</span></label>
                    <select id="frequency" name="frequency" value={form.frequency} onChange={update} className={fieldClass("frequency")} {...accessibilityProps("frequency")}>
                      <option value="">Select a frequency…</option>
                      {frequencyOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                    {errorText("frequency")}
                  </div>
                  <div>
                    <label htmlFor="preferredDate" className="mb-1.5 block text-sm font-medium text-navy">Preferred date <span className="font-normal text-slatey">(optional)</span></label>
                    <input id="preferredDate" name="preferredDate" type="date" autoComplete="off" value={form.preferredDate} onChange={update} className={fieldClass("preferredDate")} {...accessibilityProps("preferredDate")} />
                    {errorText("preferredDate")}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contactMethod" className="mb-1.5 block text-sm font-medium text-navy">Preferred contact <span className="font-normal text-slatey">(optional)</span></label>
                    <select id="contactMethod" name="contactMethod" value={form.contactMethod} onChange={update} className={fieldClass("contactMethod")} {...accessibilityProps("contactMethod")}>
                      <option value="">Choose a contact method…</option>
                      {contactMethodOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                    {errorText("contactMethod")}
                  </div>
                  <div>
                    <label htmlFor="heardAbout" className="mb-1.5 block text-sm font-medium text-navy">How did you hear about us? <span className="font-normal text-slatey">(optional)</span></label>
                    <select id="heardAbout" name="heardAbout" value={form.heardAbout} onChange={update} className={fieldClass("heardAbout")} {...accessibilityProps("heardAbout")}>
                      <option value="">Choose an option…</option>
                      {referralSourceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                    {errorText("heardAbout")}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                      Email <span className="font-normal text-slatey">(optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      maxLength={quoteLimits.email}
                      value={form.email}
                      onChange={update}
                      className={fieldClass("email")}
                      placeholder="you@email.com"
                      {...accessibilityProps("email")}
                    />
                    {errorText("email")}
                  </div>
                  <div>
                    <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-navy">
                      Location <span className="font-normal text-slatey">(optional)</span>
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      autoComplete="address-level2"
                      maxLength={quoteLimits.location}
                      value={form.location}
                      onChange={update}
                      className={fieldClass("location")}
                      placeholder="Area / neighborhood"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
                    Service Needed<RequiredMark />
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={update}
                    className={fieldClass("service")}
                    {...accessibilityProps("service")}
                  >
                    <option value="">Select a service…</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errorText("service")}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                    Message <span className="font-normal text-slatey">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows={4}
                    maxLength={quoteLimits.message}
                    className={fieldClass("message")}
                    placeholder="Tell us about your space…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-accent mt-2 w-full disabled:cursor-wait disabled:opacity-70"
                >
                  {status === "loading" ? "Preparing WhatsApp…" : "Request Quote"}
                  {status !== "loading" && <Icon name="arrow" className="h-4 w-4" />}
                </button>
                <p className="text-center text-xs leading-relaxed text-slatey">
                  Submitting prepares a WhatsApp message. Review it there before sending.
                  <br />Read our <Link href="/privacy" className="font-semibold text-teal-dark underline">privacy notice</Link>.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
