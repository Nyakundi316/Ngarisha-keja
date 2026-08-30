import { randomBytes } from "node:crypto";

export const leadStatuses = [
  "New",
  "Contacted",
  "Site Visit Scheduled",
  "Site Visit Completed",
  "Quote Sent",
  "Approved",
  "Scheduled",
  "Completed",
  "Lost",
];

export const bookingStatuses = [
  "Pending Confirmation",
  "Confirmed",
  "Team Assigned",
  "In Progress",
  "Completed",
  "Cancelled",
  "Rescheduled",
];

export const paymentStatuses = ["Pending", "Submitted", "Verified", "Failed", "Refunded"];

export function createLeadReference(date = new Date()) {
  const stamp = date.toISOString().slice(0, 10).replaceAll("-", "");
  return `NG-${stamp}-${randomBytes(3).toString("hex").toUpperCase()}`;
}

export function createApprovalToken() {
  return randomBytes(32).toString("base64url");
}

const allowedLeadTransitions = {
  New: ["Contacted", "Lost"],
  Contacted: ["Site Visit Scheduled", "Quote Sent", "Lost"],
  "Site Visit Scheduled": ["Site Visit Completed", "Lost"],
  "Site Visit Completed": ["Quote Sent", "Lost"],
  "Quote Sent": ["Approved", "Lost"],
  Approved: ["Scheduled", "Lost"],
  Scheduled: ["Completed", "Lost"],
  Completed: [],
  Lost: ["New"],
};

export function canTransitionLead(from, to) {
  return from === to || Boolean(allowedLeadTransitions[from]?.includes(to));
}

export function transitionLead(from, to) {
  if (!leadStatuses.includes(from) || !leadStatuses.includes(to) || !canTransitionLead(from, to)) {
    throw new Error("Invalid lead status transition");
  }
  return to;
}

export function validateCustomer(input = {}) {
  const name = String(input.name || "").trim();
  const phone = String(input.phone || "").trim();
  const email = String(input.email || "").trim();
  const errors = {};
  if (!name) errors.name = "Name is required.";
  if (!/^[+\d\s()\-]{7,30}$/.test(phone)) errors.phone = "A valid phone number is required.";
  if (email && !/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email address.";
  return { values: { name, phone, email }, errors };
}

export function calculateQuotation(items = [], { discount = 0, taxEnabled = false, taxRate = 0 } = {}) {
  const normalizedItems = items.map((item) => {
    const quantity = Number(item.quantity);
    const unitPrice = Number(item.unitPrice);
    if (!Number.isFinite(quantity) || quantity <= 0 || !Number.isFinite(unitPrice) || unitPrice < 0) {
      throw new Error("Quotation quantities and prices must be valid numbers.");
    }
    return { description: String(item.description || "").trim(), quantity, unit: String(item.unit || "unit"), unitPrice, subtotal: quantity * unitPrice };
  });
  const subtotal = normalizedItems.reduce((sum, item) => sum + item.subtotal, 0);
  const safeDiscount = Math.min(Math.max(Number(discount) || 0, 0), subtotal);
  const taxable = subtotal - safeDiscount;
  const safeTaxRate = taxEnabled ? Math.max(Number(taxRate) || 0, 0) : 0;
  const tax = taxable * (safeTaxRate / 100);
  return { items: normalizedItems, subtotal, discount: safeDiscount, tax, total: taxable + tax, taxEnabled: Boolean(taxEnabled), taxRate: safeTaxRate };
}

export function hasBookingConflict(bookings = [], candidate) {
  if (!candidate?.start || !candidate?.end) return false;
  const start = new Date(candidate.start).getTime();
  const end = new Date(candidate.end).getTime();
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return true;
  return bookings.some((booking) => {
    if (!booking || booking.status === "Cancelled") return false;
    if (candidate.staffId && booking.staffId && candidate.staffId !== booking.staffId) return false;
    const bookingStart = new Date(booking.start).getTime();
    const bookingEnd = new Date(booking.end).getTime();
    return Number.isFinite(bookingStart) && Number.isFinite(bookingEnd) && start < bookingEnd && end > bookingStart;
  });
}
