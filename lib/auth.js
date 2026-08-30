// Authentication boundary for a future protected admin surface. It deliberately
// returns no session until the owner configures a real identity provider.
export async function getAdminSession() {
  return null;
}

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session?.isAdmin) return null;
  return session;
}

export const adminAuthStatus = {
  configured: false,
  provider: "",
};
