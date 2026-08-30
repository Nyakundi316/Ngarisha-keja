const version = (process.env.VERCEL_GIT_COMMIT_SHA || process.env.NEXT_PUBLIC_BUILD_VERSION || "local").slice(0, 40);

export function GET() {
  return Response.json(
    { version, framework: "Next.js 14.2.35" },
    { headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" } }
  );
}
