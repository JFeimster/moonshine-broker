import { destinations } from "../content/site";

export const attributionKeys = [
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term",
  "ref", "referral_code", "source", "campaign", "partner_id", "partner_slug",
  "gclid", "fbclid", "msclkid",
] as const;

export function pickAttribution(incoming: URLSearchParams | Record<string, string | string[] | undefined>) {
  const result = new URLSearchParams();
  for (const key of attributionKeys) {
    const value = incoming instanceof URLSearchParams ? incoming.get(key) : incoming[key];
    if (typeof value === "string" && value.trim()) result.set(key, value.trim());
  }
  return result;
}

export function captureAttribution(incoming: URLSearchParams, stored = new URLSearchParams()) {
  const current = pickAttribution(incoming);
  return current.size ? current : pickAttribution(stored);
}

export function applicationTarget(incoming: URLSearchParams | Record<string, string | string[] | undefined>) {
  const target = new URL(destinations.application.current);
  pickAttribution(incoming).forEach((value, key) => target.searchParams.set(key, value));
  if (!target.searchParams.has("utm_source")) target.searchParams.set("utm_source", "agency");
  if (!target.searchParams.has("utm_medium")) target.searchParams.set("utm_medium", "website");
  if (!target.searchParams.has("utm_campaign")) target.searchParams.set("utm_campaign", "agency_property");
  if (!target.searchParams.has("source")) target.searchParams.set("source", "agency");
  if (!target.searchParams.has("campaign")) target.searchParams.set("campaign", "agency_property");
  return target;
}
