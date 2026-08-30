// Server-side boundary for a future lead provider. No provider is configured
// today, so quote requests remain a WhatsApp handoff and are not persisted.
export const leadIntegration = {
  provider: process.env.NGARISHA_LEAD_PROVIDER || "",
  configured: Boolean(process.env.NGARISHA_LEAD_PROVIDER),
};

export function prepareLeadPayload(values, attribution, requestContext = {}) {
  return {
    values: { ...values },
    attribution: { ...attribution },
    submittedAt: new Date().toISOString(),
    requestContext: {
      landingPath: requestContext.landingPath || "",
      userAgent: requestContext.userAgent || "",
    },
  };
}

// Keep delivery explicit: adding a provider must include server-only
// credentials, duplicate handling, notification, and retention decisions.
export async function deliverLead() {
  return { configured: leadIntegration.configured, delivered: false };
}
