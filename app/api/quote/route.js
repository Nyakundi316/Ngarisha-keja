import { buildWhatsAppUrl, validateQuote } from "@/lib/quote";
import { allowQuoteAttempt } from "@/lib/rate-limit";

const noStoreHeaders = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" };

export async function POST(request) {
  const wantsJson = request.headers.get("accept")?.includes("application/json");
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 24_000) {
    return Response.json(
      { message: "That request is too large. Please shorten the details and try again." },
      { status: 413, headers: noStoreHeaders }
    );
  }
  const clientKey = (request.headers.get("x-forwarded-for") || "anonymous").split(",")[0].trim().slice(0, 80);
  if (!allowQuoteAttempt(clientKey)) {
    return Response.json(
      { message: "Please wait a few minutes before trying again." },
      { status: 429, headers: { ...noStoreHeaders, "Retry-After": "600" } }
    );
  }
  let input;

  try {
    input = Object.fromEntries((await request.formData()).entries());
  } catch {
    return Response.json(
      { message: "We could not read that request. Please try again." },
      { status: 400, headers: noStoreHeaders }
    );
  }

  const { values, attribution, errors } = validateQuote(input);
  if (Object.keys(errors).length) {
    if (wantsJson) {
      return Response.json(
        { message: "Check the highlighted fields and try again.", errors },
        { status: 400, headers: noStoreHeaders }
      );
    }
    return new Response("Please go back and complete the required quote fields.", {
      status: 400,
      headers: { ...noStoreHeaders, "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const whatsappUrl = buildWhatsAppUrl(values, attribution);
  if (wantsJson) {
    return Response.json({ whatsappUrl }, { headers: noStoreHeaders });
  }
  return Response.redirect(whatsappUrl, 303);
}
