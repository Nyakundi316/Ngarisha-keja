export const paymentProvider = {
  name: process.env.NGARISHA_PAYMENT_PROVIDER || "manual",
  configured: Boolean(process.env.NGARISHA_PAYMENT_PROVIDER),
};

export function validateManualPayment(input = {}) {
  const reference = String(input.externalReference || "").trim().slice(0, 120);
  const amount = Number(input.amount);
  if (!reference || !Number.isFinite(amount) || amount <= 0) throw new Error("A payment reference and positive amount are required.");
  return { reference, amount, method: String(input.method || "Manual verification").slice(0, 60) };
}

export async function initiatePayment() {
  return { configured: paymentProvider.configured, initiated: false };
}
