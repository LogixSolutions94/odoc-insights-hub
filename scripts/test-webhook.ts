// Simule un webhook DB Supabase sur la fonction sitemap-refresh
// Usage : npx tsx scripts/test-webhook.ts

const EDGE_URL =
  process.env.EDGE_URL ??
  "https://api.odocpilot.com/functions/v1/sitemap-refresh";

const payload = {
  type: "INSERT",
  table: "blog_posts",
  schema: "public",
  record: {
    slug: "test-article-webhook",
    status: "published",
    updated_at: new Date().toISOString(),
  },
  old_record: null,
};

console.log(`[test] POST ${EDGE_URL}`);
console.log("[test] Payload:", JSON.stringify(payload, null, 2));

const res = await fetch(EDGE_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

const text = await res.text();
console.log(`[test] Status: ${res.status}`);
console.log(`[test] Response: ${text}`);

if (res.status === 200) {
  console.log("[test] ✓ Webhook OK — Google ping envoyé");
} else {
  console.error("[test] ✗ Échec — vérifie les logs de l'Edge Function");
  process.exit(1);
}
