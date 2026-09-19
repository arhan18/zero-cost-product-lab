import { onRequest, onBilling, turso, q, act } from "./_logic.js";

export const PLANS = { testdrive: 100, solo: 2000, studio: 10000 };

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/webhooks/dodo" && request.method === "POST")
      return onRequest({ request, env, sellerId: "owner" });
    if (url.pathname.startsWith("/webhooks/dodo/") && request.method === "POST") {
      const token = url.pathname.split("/")[3] || "";
      const seller = await sellerByToken(env, token);
      if (!seller) return Response.json({ error: "unknown_seller" }, { status: 404 });
      if (seller.status !== "active") return Response.json({ error: "subscription_inactive" }, { status: 402 });
      const used = await quotaUsed(env, seller.id);
      const limit = PLANS[seller.plan] || PLANS.testdrive;
      if (used >= limit) {
        await act(env, "quota:" + seller.id, "quota_exceeded", used + "/" + limit);
        return Response.json({ received: true, verdict: "quota_exceeded" });
      }
      return onRequest({ request, env, sellerId: seller.id });
    }
    if (url.pathname === "/webhooks/dodo-billing" && request.method === "POST")
      return onBilling({ request, env });
    if (url.pathname === "/join" && request.method === "POST") return withCors(await join(request, env));
    if (url.pathname === "/join" && request.method === "OPTIONS")
      return new Response(null, { status: 204, headers: cors() });
    if (url.pathname === "/auth/request" && request.method === "POST") return withCors(await authRequest(request, env, url));
    if (url.pathname === "/auth/request" && request.method === "OPTIONS")
      return new Response(null, { status: 204, headers: cors() });
    if (url.pathname === "/auth/verify" && request.method === "GET") return authVerify(request, env);
    if (url.pathname === "/me" && request.method === "GET") return withCors(await me(request, env));
    if (url.pathname === "/" && request.method === "GET")
      return Response.json({ ok: true, service: "dodo-shield-api", webhook: "/webhooks/dodo" });
    return Response.json({ error: "not_found" }, { status: 404 });
  },
};

async function sellerByToken(env, token) {
  if (!token) return null;
  const [r] = await turso(env, [q("SELECT id, email, plan, status FROM ds_sellers WHERE hook_token=?", [token])]);
  const row = r?.results?.[0]?.response?.result?.rows?.[0];
  if (!row) return null;
  const v = (c) => (c && "value" in c ? c.value : c);
  return { id: v(row[0]), email: v(row[1]), plan: v(row[2]) || "testdrive", status: v(row[3]) || "active" };
}

async function quotaUsed(env, sellerId) {
  const [r] = await turso(env, [q("SELECT COUNT(*) FROM ds_events WHERE seller_id=? AND type='payment.succeeded' AND created_at > strftime('%Y-%m-%dT%H:%M:%SZ','now','-30 days')", [sellerId])]);
  const c = r?.results?.[0]?.response?.result?.rows?.[0]?.[0];
  return Number(c && "value" in c ? c.value : c) || 0;
}

async function me(request, env) {
  const seller = await sessionSeller(request, env);
  if (!seller) return Response.json({ error: "unauthorized" }, { status: 401 });
  const used = await quotaUsed(env, seller.id);
  const limit = PLANS[seller.plan] || PLANS.testdrive;
  const origin = new URL(request.url).origin;
  return Response.json({ email: seller.email, plan: seller.plan, status: seller.status, used, limit, period_end: seller.period_end || null, hook_url: origin + "/webhooks/dodo/" + seller.hook_token });
}

async function sessionSeller(request, env) {
  const m = (request.headers.get("cookie") || "").match(/(?:^|;\s*)ds_sess=([^;]+)/);
  if (!m) return null;
  const [r] = await turso(env, [q("SELECT s.id, s.email, s.plan, s.status, s.period_end, s.hook_token FROM ds_sessions t JOIN ds_sellers s ON s.id=t.seller_id WHERE t.token=? AND t.expires_at > strftime('%Y-%m-%dT%H:%M:%SZ','now')", [m[1]])]);
  const row = r?.results?.[0]?.response?.result?.rows?.[0];
  if (!row) return null;
  const v = (c) => (c && "value" in c ? c.value : c);
  return { id: v(row[0]), email: v(row[1]), plan: v(row[2]) || "testdrive", status: v(row[3]) || "active", period_end: v(row[4]), hook_token: v(row[5]) };
}

async function authRequest(request, env, url) {
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "bad_json" }, { status: 400 }); }
  const email = String(body.email || "").trim().toLowerCase().slice(0, 160);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return Response.json({ error: "bad_email" }, { status: 400 });
  const sid = "sel_" + rand(12), hook = "hk_" + rand(20), tok = "ml_" + rand(32);
  await turso(env, [
    q("INSERT OR IGNORE INTO ds_sellers (id, email, plan, status, hook_token, created_at) VALUES (?,?,?,?,?,strftime('%Y-%m-%dT%H:%M:%SZ','now'))", [sid, email, "testdrive", "active", hook]),
    q("INSERT INTO ds_sessions (token, seller_id, expires_at) SELECT ?, id, strftime('%Y-%m-%dT%H:%M:%SZ','now','+1 day') FROM ds_sellers WHERE email=?", [tok, email]),
  ]);
  const link = url.origin + "/auth/verify?token=" + tok;
  await sendMagicLink(env, email, link); // best-effort; needs verified Resend domain
  return Response.json({ ok: true });
}

async function sendMagicLink(env, email, link) {
  if (!env.RESEND_API_KEY) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + env.RESEND_API_KEY, "content-type": "application/json" },
      body: JSON.stringify({ from: env.RESEND_FROM || "onboarding@resend.dev", to: email, subject: "[dodo-shield] Sign in", text: "Sign in to Dodo Shield:\n\n" + link + "\n\nExpires in 24 hours." }),
    });
  } catch { /* best-effort */ }
}

async function authVerify(request, env) {
  const tok = new URL(request.url).searchParams.get("token") || "";
  const [r] = await turso(env, [q("UPDATE ds_sessions SET expires_at=strftime('%Y-%m-%dT%H:%M:%SZ','now','+30 days') WHERE token=? AND expires_at > strftime('%Y-%m-%dT%H:%M:%SZ','now') RETURNING token", [tok])]);
  const ok = (r?.results?.[0]?.response?.result?.rows?.length || 0) > 0;
  if (!ok) return new Response("Link invalid or expired.", { status: 401 });
  // host-only cookie (workers.dev is a public suffix — no Domain attr); SameSite=None so the pages.dev fetch carries it
  return new Response(null, { status: 302, headers: { location: "https://dodo-shield.pages.dev/dash.html", "set-cookie": `ds_sess=${tok}; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=None` } });
}

function rand(n) {
  const a = "abcdefghijklmnopqrstuvwxyz0123456789";
  let s = "";
  const b = crypto.getRandomValues(new Uint8Array(n));
  for (const x of b) s += a[x % a.length];
  return s;
}

function cors() {
  return { "access-control-allow-origin": "https://dodo-shield.pages.dev", "access-control-allow-methods": "POST, OPTIONS", "access-control-allow-headers": "content-type" };
}
function withCors(res) {
  const h = new Headers(res.headers);
  Object.entries(cors()).forEach(([k, v]) => h.set(k, v));
  return new Response(res.body, { status: res.status, headers: h });
}
/* POST /join {email, plan} — test-list capture. Stored only; no mail sent yet
 * (subscriber-facing mail needs a verified Resend domain — owner action). */
async function join(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "bad_json" }, { status: 400 });
  }
  const email = String(body.email || "").trim().toLowerCase().slice(0, 160);
  const plan = String(body.plan || "solo").slice(0, 20);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    return Response.json({ error: "bad_email" }, { status: 400 });
  const base = (env.TURSO_URL || "").replace(/^libsql:\/\//, "https://").replace(/\/$/, "");
  try {
    await fetch(base + "/v2/pipeline", {
      method: "POST",
      headers: { Authorization: "Bearer " + env.TURSO_TOKEN, "content-type": "application/json" },
      body: JSON.stringify({ requests: [
        { type: "execute", stmt: { sql: "INSERT OR IGNORE INTO ds_waitlist (email, plan, created_at) VALUES (?,?,strftime('%Y-%m-%dT%H:%M:%SZ','now'))", args: [{ type: "text", value: email }, { type: "text", value: plan }] } },
        { type: "execute", stmt: { sql: "INSERT INTO ds_actions (webhook_id, action, detail, created_at) VALUES (?,?,?,strftime('%Y-%m-%dT%H:%M:%SZ','now'))", args: [{ type: "text", value: "join:" + email }, { type: "text", value: "waitlist" }, { type: "text", value: plan }] } },
      ] }),
    });
  } catch {
    return Response.json({ error: "store_failed" }, { status: 500 });
  }
  return Response.json({ ok: true });
}

