import { NextResponse } from "next/server";

function isEmail(v: unknown) {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));

  const name = String(body?.name || "").trim();
  const email = String(body?.email || "").trim();
  const phone = String(body?.phone || "").trim();

  if (!name || !isEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid name and email." },
      { status: 400 }
    );
  }

  // Canonical partner CRM, trusted server-side only. No public credential exposure.
  const endpoint = process.env.PARTNER_CRM_INGEST_URL;
  const secret = process.env.PARTNER_CRM_INGEST_TOKEN;
  if (!endpoint || !secret) {
    return NextResponse.json({ error: "Partner intake is temporarily unavailable." }, { status: 503 });
  }
  const submissionId = typeof body.submission_id === "string" && body.submission_id
    ? body.submission_id
    : crypto.randomUUID();
  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${secret}` },
      body: JSON.stringify({ source: "moonshine-broker", submission_id: submissionId, email, name, applicant_type: "broker", answers: { phone } }),
      cache: "no-store",
      signal: AbortSignal.timeout(7000)
    });
    if (!upstream.ok) return NextResponse.json({ error: "Unable to save application." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to save application." }, { status: 502 });
  }
}
