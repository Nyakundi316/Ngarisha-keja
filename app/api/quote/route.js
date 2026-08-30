import { buildWhatsAppUrl, validateQuote } from "@/lib/quote";

const noStoreHeaders = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" };

export async function POST(request) {
  const wantsJson = request.headers.get("accept")?.includes("application/json");
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
