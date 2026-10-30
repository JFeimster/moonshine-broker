import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const publicRoutes = ["", "/how-it-works", "/system", "/products", "/get-clients", "/compensation", "/build", "/start", "/faq", "/apply"];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({ url: `${site.url}${route}`, changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
