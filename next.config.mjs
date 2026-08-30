/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    const version = (process.env.VERCEL_GIT_COMMIT_SHA || process.env.NEXT_PUBLIC_BUILD_VERSION || "local").slice(0, 40);
    return [{
      source: "/((?!_next/static|_next/image|favicon.ico).*)",
      headers: [{ key: "X-Ngarisha-Version", value: version }],
    }];
  },
};
export default nextConfig;
