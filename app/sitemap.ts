import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const publicRoutes = ["", "/how-it-works", "/system", "/products", "/get-clients", "/compensation", "/build", "/start", "/faq", "/apply", "/toolkit", "/toolkit/outreach", "/toolkit/referrals", "/toolkit/discovery", "/toolkit/marketing", "/toolkit/academy", "/toolkit/launch-pack", "/toolkit/growth", "/toolkit/growth/campaigns", "/toolkit/growth/referral-kits", "/toolkit/growth/brand-studio", "/toolkit/growth/distribution", "/toolkit/growth/activity"];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({ url: `${site.url}${route}`, changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
