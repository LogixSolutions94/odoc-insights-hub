const SITEMAP_URL = "https://odocpilot.com/sitemap.xml";

Deno.serve(async (req) => {
  // Supabase DB webhooks send OPTIONS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  let body: { type?: string; record?: { status?: string; slug?: string } };
  try {
    body = await req.json();
  } catch {
    return new Response("invalid json", { status: 400 });
  }

  // Only react to INSERT / UPDATE events
  if (!["INSERT", "UPDATE"].includes(body.type ?? "")) {
    return new Response("skip: wrong event type", { status: 200 });
  }

  // Only ping Google when the article is published
  if (body.record?.status !== "published") {
    return new Response("skip: not published", { status: 200 });
  }

  // Ping Google Search Console
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  try {
    const pingRes = await fetch(pingUrl);
    console.log(`[sitemap-refresh] Google ping → ${pingRes.status} for slug="${body.record.slug}"`);
  } catch (e) {
    console.error("[sitemap-refresh] Google ping failed:", e);
  }

  return new Response(
    JSON.stringify({ ok: true, slug: body.record?.slug, pinged: SITEMAP_URL }),
    { headers: { "Content-Type": "application/json" } }
  );
});
