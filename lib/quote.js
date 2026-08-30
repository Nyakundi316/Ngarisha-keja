import { attributionKeys, sanitizeAttribution } from "@/lib/attribution";
import { company, serviceOptions } from "@/lib/site";

export const quoteLimits = {
  name: 100,
  phone: 30,
  email: 254,
  service: 100,
  location: 120,
  message: 1000,
};

function singleLine(value, limit) {
  return String(value || "")
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, limit);
}

function multiLine(value, limit) {
  return String(value || "")
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim()
    .slice(0, limit);
}

export function validateQuote(input = {}) {
  const values = {
    name: singleLine(input.name, quoteLimits.name),
    phone: singleLine(input.phone, quoteLimits.phone),
    email: singleLine(input.email, quoteLimits.email),
    service: singleLine(input.service, quoteLimits.service),
    location: singleLine(input.location, quoteLimits.location),
    message: multiLine(input.message, quoteLimits.message),
  };
  const errors = {};
  const digits = values.phone.replace(/\D/g, "");

  if (!values.name) errors.name = "Please enter your name.";
  if (!/^[+\d\s()-]+$/.test(values.phone) || digits.length < 7 || digits.length > 15) {
    errors.phone = "Enter a valid phone number.";
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address or leave this field blank.";
  }
  if (!serviceOptions.includes(values.service)) errors.service = "Select a service.";

  const attribution = sanitizeAttribution(
    Object.fromEntries(attributionKeys.map((key) => [key, input[key]]))
  );

  return { values, attribution, errors };
}

export function buildWhatsAppUrl(values, attribution = {}) {
  const lines = [
    "New quote request",
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    values.email && `Email: ${values.email}`,
    `Service: ${values.service}`,
    values.location && `Location: ${values.location}`,
    values.message && `Message: ${values.message}`,
  ].filter(Boolean);

  const attributionDetails = attributionKeys
    .filter((key) => attribution[key])
    .map((key) => `${key}: ${attribution[key]}`);
  if (attributionDetails.length) lines.push(`Source: ${attributionDetails.join(" | ")}`);

  const url = new URL(`https://wa.me/${company.whatsapp}`);
  url.searchParams.set("text", lines.join("\n"));
  return url.toString();
}
