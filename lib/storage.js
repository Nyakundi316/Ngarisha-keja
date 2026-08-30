/**
 * Provider-neutral persistence boundary. The public quote flow remains truthful
 * until a durable database is configured and a provider implementation is wired.
 */
export const storageConfig = Object.freeze({
  configured: Boolean(process.env.DATABASE_URL),
  provider: process.env.NGARISHA_STORAGE_PROVIDER || "postgresql",
});

export function storageStatus() {
  return { ...storageConfig };
}

export async function persistLead() {
  return { configured: storageConfig.configured, persisted: false };
}
