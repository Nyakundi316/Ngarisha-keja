import { notFound } from "next/navigation";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  // No authentication provider is configured. Never expose an admin shell.
  notFound();
}
