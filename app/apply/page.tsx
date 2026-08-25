import { redirect } from "next/navigation";

const TALLY = "https://tally.so/r/rjM6do";
const allowed = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "ref",
  "referral_code",
  "source",
  "campaign",
] as const;

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const incoming = await searchParams;
  const target = new URL(TALLY);

  for (const key of allowed) {
    const value = incoming[key];
    if (typeof value === "string" && value) target.searchParams.set(key, value);
  }

  if (!target.searchParams.has("utm_source")) target.searchParams.set("utm_source", "agency");
  if (!target.searchParams.has("utm_medium")) target.searchParams.set("utm_medium", "website");
  if (!target.searchParams.has("utm_campaign")) target.searchParams.set("utm_campaign", "agency_property");
  if (!target.searchParams.has("source")) target.searchParams.set("source", "agency");
  if (!target.searchParams.has("campaign")) target.searchParams.set("campaign", "agency_property");

  redirect(target.toString());
}
