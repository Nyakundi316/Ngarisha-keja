import { attributionKeys, sanitizeAttribution } from "@/lib/attribution";
import { company, serviceOptions } from "@/lib/site";

export const quoteLimits = {
  name: 100,
  phone: 30,
  email: 254,
  service: 100,
  location: 120,
  propertyType: 80,
  propertySize: 80,
  frequency: 80,
  preferredDate: 30,
  contactMethod: 40,
  heardAbout: 80,
  message: 1000,
};

export const propertyTypeOptions = ["Home", "Apartment", "Office", "Airbnb / short stay", "School / institution", "Commercial space", "Other"];
export const frequencyOptions = ["One-time", "Weekly", "Twice monthly", "Monthly", "Per turnover", "Agreed schedule", "Not sure yet"];
export const contactMethodOptions = ["WhatsApp", "Phone call", "Email", "No preference"];
export const referralSourceOptions = ["Google search", "Google Business Profile", "Social media", "Referral", "Returning customer", "Other", "Prefer not to say"];

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
    propertyType: singleLine(input.propertyType, quoteLimits.propertyType),
    propertySize: singleLine(input.propertySize, quoteLimits.propertySize),
    frequency: singleLine(input.frequency, quoteLimits.frequency),
    preferredDate: singleLine(input.preferredDate, quoteLimits.preferredDate),
    contactMethod: singleLine(input.contactMethod, quoteLimits.contactMethod),
    heardAbout: singleLine(input.heardAbout, quoteLimits.heardAbout),
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
  if (values.propertyType && !propertyTypeOptions.includes(values.propertyType)) errors.propertyType = "Select a property type.";
  if (values.frequency && !frequencyOptions.includes(values.frequency)) errors.frequency = "Select a frequency.";
  if (values.contactMethod && !contactMethodOptions.includes(values.contactMethod)) errors.contactMethod = "Select a contact method.";
  if (values.heardAbout && !referralSourceOptions.includes(values.heardAbout)) errors.heardAbout = "Select an option.";
  if (values.preferredDate && !/^\d{4}-\d{2}-\d{2}$/.test(values.preferredDate)) errors.preferredDate = "Enter a valid preferred date.";
  if (singleLine(input.companyWebsite, 80)) errors.form = "We could not process that request.";

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
    values.propertyType && `Property type: ${values.propertyType}`,
    values.propertySize && `Property size: ${values.propertySize}`,
    values.frequency && `Frequency: ${values.frequency}`,
    values.preferredDate && `Preferred date: ${values.preferredDate}`,
    values.contactMethod && `Preferred contact: ${values.contactMethod}`,
    values.heardAbout && `Heard about Ngarisha via: ${values.heardAbout}`,
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
