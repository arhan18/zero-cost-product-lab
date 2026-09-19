/* Dodo Shield webhook receiver — Cloudflare Pages Function → POST /webhooks/dodo
 * Alerts-first. Auto-refund ONLY when AUTO_REFUND_ENABLED=1 AND rule opted in AND under cap.
 * Zero deps. Secrets via Pages env (never in repo). */
export async function onRequest({ request, env, sellerId = "owner" }) {
  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json" } });

  if (request.method === "GET")
    return json({ ok: true, configured: !!env.DODO_WEBHOOK_SECRET, auto: env.AUTO_REFUND_ENABLED === "1" });
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  if (!env.DODO_WEBHOOK_SECRET) return json({ error: "webhook_secret_not_configured" }, 503);

  const raw = await request.text();
  const id = request.headers.get("webhook-id") || "";
  const sig = request.headers.get("webhook-signature") || "";
  const ts = request.headers.get("webhook-timestamp") || "";
  if (!(await verify(raw, id, sig, ts, env.DODO_WEBHOOK_SECRET)))
    return json({ error: "bad_signature" }, 401);

  let evt;
  try {
    evt = JSON.parse(raw);
  } catch {
    return json({ error: "bad_json" }, 400);
  }
  const type = evt.type || "";
  const d = evt.data || {};
  const paymentId = d.payment_id || d.paymentId || "";
  const email = (d?.customer?.email || d.email || d.customer_email || "").toLowerCase();
  const amount = pickAmount(d);

  // Idempotency first: one row per webhook-id.
  const claimed = await turso(env, [
    q("INSERT OR IGNORE INTO ds_events (webhook_id, type, payment_id, email, amount, raw, seller_id, created_at) VALUES (?,?,?,?,?,?,?,strftime('%Y-%m-%dT%H:%M:%SZ','now'))", [id, type, paymentId, email, amount, raw.slice(0, 4000), sellerId]),
  ]);
  if (claimed[0]?.rows_affected === 0) return json({ received: true, duplicate: true });

  await act(env, id, "received:" + type, (paymentId + " " + email).slice(0, 200));

  if (type === "payment.succeeded" && paymentId) {
    const rules = await loadRules(env);
    const hits = await evaluate(env, rules, { email, amount, paymentId });
    if (!hits.length) return json({ received: true, verdict: "clean" });
    await act(env, id, "alert", hits.map((h) => h.t).join(" + ").slice(0, 300));
    await sendMail(env, "Shield alert: " + paymentId, lines([
      "Suspicious payment flagged before any dispute was filed.",
      "Payment: " + paymentId + " · " + email + " · $" + amount,
      "Rules: " + hits.map((h) => h.t + (h.auto ? " [auto]" : " [manual]")).join(", "),
      "Review: https://app.dodopayments.com",
    ]));
    const autoFire = env.AUTO_REFUND_ENABLED === "1" && hits.some((h) => h.auto);
    if (autoFire) {
      const r = await refund(env, paymentId, "shield: " + hits.map((h) => h.t).join(" + ").slice(0, 200));
      await act(env, id, r.ok ? "auto_refund_fired" : "auto_refund_failed", (r.detail || "").slice(0, 300));
      return json({ received: true, verdict: "auto_refund", ok: r.ok });
    }
    return json({ received: true, verdict: "alert_manual" });
  }

  if (type.startsWith("dispute.")) {
    await sendMail(env, "Shield: dispute event " + type, lines([
      "Dispute update for payment " + (paymentId || "?") + ": " + type,
      "You have 10 days to respond via the Dodo dashboard / support@dodopayments.com.",
    ]));
  }
  return json({ received: true, verdict: "logged" });
}

/* ---------- rules ---------- */
const DISP = ["mailinator.com", "tempmail.com", "guerrillamail.com", "10minutemail.com", "yopmail.com", "trashmail.com", "temp-mail.org", "mohmal.com"];

function pickAmount(d) {
  for (const k of ["amount", "total_amount", "amount_total", "grand_total"]) {
    const v = d[k];
    if (typeof v === "number") return v > 1000 ? Math.round(v / 100) : v; // tolerate minor units
  }
  return 0;
}

async function loadRules(env) {
  const fb = { disp: { on: 1, auto: 0 }, vel: { on: 1, auto: 0, n: 3 }, cardtest: { on: 1, auto: 0, n: 2 }, highticket: { on: 1, auto: 0, n: 100 } };
  try {
    const [r] = await turso(env, [q("SELECT rule, enabled, auto, threshold FROM ds_rules", [])]);
    for (const row of r?.results?.[0]?.response?.result?.rows || []) {
      const [rule, en, au, th] = row.map((c) => ("value" in c ? c.value : c));
      if (fb[rule]) fb[rule] = { on: en ? 1 : 0, auto: au ? 1 : 0, n: th ?? fb[rule].n };
    }
  } catch { /* fall back to defaults */ }
  return fb;
}

async function evaluate(env, R, { email, amount, paymentId }) {
  const hits = [];
  const cap = Number(env.AUTO_CAP_USD || 100);
  const dom = (email.split("@")[1] || "").toLowerCase();
  const autoOk = (k) => R[k].auto === 1 && amount <= cap;
  if (R.disp.on && DISP.includes(dom)) hits.push({ t: "disposable-email", auto: autoOk("disp") });
  if (email) {
    const [v] = await turso(env, [q("SELECT COUNT(*) FROM ds_events WHERE email=? AND created_at > strftime('%Y-%m-%dT%H:%M:%SZ','now','-30 minutes')", [email])]);
    const n = num(v);
    if (R.vel.on && n > (R.vel.n ?? 3)) hits.push({ t: `velocity ${n}/${R.vel.n ?? 3}`, auto: autoOk("vel") });
    const [f] = await turso(env, [q("SELECT COUNT(*) FROM ds_events WHERE email=? AND type='payment.failed' AND created_at > strftime('%Y-%m-%dT%H:%M:%SZ','now','-60 minutes')", [email])]);
    const nf = num(f);
    if (R.cardtest.on && nf >= (R.cardtest.n ?? 2)) hits.push({ t: `card-test ${nf} fails→success`, auto: autoOk("cardtest") });
  }
  if (R.highticket.on && amount >= (R.highticket.n ?? 100)) hits.push({ t: `high-ticket $${amount}`, auto: autoOk("highticket") });
  return hits;
}

/* ---------- integrations ---------- */
async function refund(env, paymentId, reason) {
  try {
    const r = await fetch((env.DODO_API_BASE || "https://live.dodopayments.com") + "/refunds", {
      method: "POST",
      headers: { Authorization: "Bearer " + env.DODO_API_KEY, "content-type": "application/json" },
      body: JSON.stringify({ payment_id: paymentId, reason }),
    });
    const t = await r.text();
    return { ok: r.ok, detail: r.status + " " + t.slice(0, 200) };
  } catch (e) {
    return { ok: false, detail: "network: " + String(e).slice(0, 200) };
  }
}

async function sendMail(env, subject, text) {
  if (!env.RESEND_API_KEY || !env.SELLER_EMAIL) return { skipped: true };
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + env.RESEND_API_KEY, "content-type": "application/json" },
      body: JSON.stringify({ from: env.RESEND_FROM || "onboarding@resend.dev", to: env.SELLER_EMAIL, subject: "[dodo-shield] " + subject, text }),
    });
  } catch { /* alert mail must never break the webhook */ }
  return { sent: true };
}

/* ---------- shared plumbing (imported by index.js) ---------- */
export function q(sql, args) {
  return { type: "execute", stmt: { sql, args: args.map((a) => ({ type: "text", value: String(a ?? "") })) } };
}
function num(res) {
  try {
    const rows = res?.results?.[0]?.response?.result?.rows;
    const c = rows?.[0]?.[0];
    return Number(c && "value" in c ? c.value : c) || 0;
  } catch { return 0; }
}
export async function turso(env, requests) {
  const base = (env.TURSO_URL || "").replace(/^libsql:\/\//, "https://").replace(/\/$/, "");
  const r = await fetch(base + "/v2/pipeline", {
    method: "POST",
    headers: { Authorization: "Bearer " + env.TURSO_TOKEN, "content-type": "application/json" },
    body: JSON.stringify({ requests }),
  });
  const j = await r.json();
  return (j.results || []).map((x) => ({ rows_affected: x?.response?.result?.rows_affected ?? 1, results: [x] }));
}
export async function act(env, wid, action, detail) {
  try {
    await turso(env, [q("INSERT INTO ds_actions (webhook_id, action, detail, created_at) VALUES (?,?,?,strftime('%Y-%m-%dT%H:%M:%SZ','now'))", [wid, action, detail])]);
  } catch { /* logging must never break the webhook */ }
}
function lines(a) { return a.join("\n"); }

async function verify(raw, id, sigHeader, ts, secret) {
  if (!id || !sigHeader || !ts) return false;
  const now = Math.floor(Date.now() / 1000);
  const t = Number(ts);
  if (!t || Math.abs(now - t) > 300) return false;
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = await crypto.subtle.sign("HMAC", key, enc.encode(`${id}.${ts}.${raw}`));
  const want = btoa(String.fromCharCode(...new Uint8Array(mac)));
  return sigHeader.split(" ").some((p) => {
    const v = p.startsWith("v1,") ? p.slice(3) : p.startsWith("v1=") ? p.slice(3) : "";
    return v && v.length === want.length && timingSafe(v, want);
  });
}
function timingSafe(a, b) {
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

/* ---------- billing: our own Dodo products → seller entitlements ----------
 * Dodo is the source of truth. Owner creates $19/$49 subscription products and
 * registers the billing endpoint for them; we map events to ds_sellers by email. */
export async function onBilling({ request, env }) {
  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json" } });
  if (!env.DODO_WEBHOOK_SECRET) return json({ error: "webhook_secret_not_configured" }, 503);
  const raw = await request.text();
  const ok = await verify(raw, request.headers.get("webhook-id") || "", request.headers.get("webhook-signature") || "", request.headers.get("webhook-timestamp") || "", env.DODO_WEBHOOK_SECRET);
  if (!ok) return json({ error: "bad_signature" }, 401);
  let evt;
  try { evt = JSON.parse(raw); } catch { return json({ error: "bad_json" }, 400); }
  const type = evt.type || "";
  const id = "bill_" + (evt.data?.subscription_id || evt.data?.payment_id || Date.now());
  const claimed = await turso(env, [q("INSERT OR IGNORE INTO ds_events (webhook_id, type, payment_id, email, amount, raw, seller_id, created_at) VALUES (?,?,?,?,?,?,?,strftime('%Y-%m-%dT%H:%M:%SZ','now'))", [id, "billing:" + type, evt.data?.payment_id || "", findEmail(evt.data), 0, raw.slice(0, 2000), "billing"])]);
  if (claimed[0]?.rows_affected === 0) return json({ received: true, duplicate: true });

  const email = findEmail(evt.data);
  const ids = findIds(evt.data);
  const solo = (env.DODO_PRODUCT_SOLO || "").split(",").filter(Boolean);
  const studio = (env.DODO_PRODUCT_STUDIO || "").split(",").filter(Boolean);
  const plan = ids.some((x) => solo.includes(x)) ? "solo" : ids.some((x) => studio.includes(x)) ? "studio" : null;

  if (/subscription\.(active|created|renewed|updated)|payment\.succeeded/.test(type) && email && plan) {
    const end = evt.data?.current_period_end || evt.data?.renews_at || null;
    await turso(env, [q("INSERT INTO ds_sellers (id, email, plan, status, period_start, period_end, hook_token, created_at) VALUES (?,?,?,'active',strftime('%Y-%m-%dT%H:%M:%SZ','now'),?,(SELECT hook_token FROM ds_sellers WHERE email=?),strftime('%Y-%m-%dT%H:%M:%SZ','now')) ON CONFLICT(email) DO UPDATE SET plan=excluded.plan, status='active', period_end=COALESCE(excluded.period_end, ds_sellers.period_end)", ["sel_" + email.replace(/[^a-z0-9]/gi, "").slice(0, 20), email, plan, end])]);
    await act(env, id, "entitlement:" + plan, email);
    return json({ received: true, entitlement: plan });
  }
  if (/subscription\.(cancelled|expired)/.test(type) && email) {
    await turso(env, [q("UPDATE ds_sellers SET status='cancelled' WHERE email=?", [email])]);
    await act(env, id, "entitlement:cancelled", email);
    return json({ received: true, entitlement: "cancelled" });
  }
  if (/past_due|payment\.failed/.test(type) && email) {
    await turso(env, [q("UPDATE ds_sellers SET status='past_due' WHERE email=?", [email])]);
    await act(env, id, "entitlement:past_due", email);
  }
  if (email && !plan && /subscription|payment/.test(type))
    await act(env, id, "entitlement:unmapped", (email + " ids:" + ids.join(",")).slice(0, 200));
  return json({ received: true });
}

function findEmail(d, depth = 0) {
  if (!d || depth > 3) return "";
  if (typeof d === "object") {
    for (const k of ["email", "customer_email"]) if (typeof d[k] === "string" && d[k].includes("@")) return d[k].toLowerCase();
    if (d.customer && typeof d.customer === "object") {
      const e = findEmail(d.customer, depth + 1);
      if (e) return e;
    }
    for (const v of Object.values(d)) {
      if (v && typeof v === "object") { const e = findEmail(v, depth + 1); if (e) return e; }
    }
  }
  return "";
}
function findIds(d, out = new Set(), depth = 0) {
  if (!d || depth > 3) return [...out];
  if (typeof d === "object") {
    for (const k of ["product_id", "price_id", "plan_id", "productId", "priceId"]) {
      const v = d[k];
      if (typeof v === "string" && v) out.add(v);
      if (Array.isArray(v)) v.forEach((x) => typeof x === "string" && out.add(x));
    }
    for (const v of Object.values(d)) if (v && typeof v === "object") findIds(v, out, depth + 1);
  }
  return [...out];
}
