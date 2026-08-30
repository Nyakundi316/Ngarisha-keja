import { NextResponse } from "next/server";

const productionHost = "www.ngarisha.co.ke";
const redirectHosts = new Set([
  "ngarisha.co.ke",
  "ngarishakeja.co.ke",
  "www.ngarishakeja.co.ke",
]);

function productionRedirect(request) {
  const url = request.nextUrl.clone();
  url.protocol = "https";
  url.hostname = productionHost;
  url.port = "";
  return NextResponse.redirect(url, 308);
}

export function middleware(request) {
  // Behind a reverse proxy, nextUrl can contain the internal listener host.
  // The incoming Host header retains the public hostname used by the visitor.
  const hostHeader = request.headers.get("host") || request.nextUrl.hostname;
  const host = hostHeader.trim().toLowerCase().split(":")[0];

  if (host === productionHost) return NextResponse.next();

  if (redirectHosts.has(host)) return productionRedirect(request);

  if (host.endsWith(".vercel.app") && process.env.VERCEL_ENV === "production") {
    return productionRedirect(request);
  }

  if (process.env.VERCEL_ENV === "preview" || host.endsWith(".vercel.app")) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
