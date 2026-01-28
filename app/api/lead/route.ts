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

  // TODO: send to your CRM/email provider here.
  console.log("[NEW LEAD]", { name, email, phone, ts: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
