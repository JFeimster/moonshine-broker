import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { default: "Build a Funding Business | Moonshine Capital", template: "%s | Moonshine Capital" },
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Build a Funding Business. The Infrastructure Is Already Built.",
    description: site.description,
    type: "website",
    url: site.url,
    siteName: "Moonshine Capital Funding Agency",
  },
  twitter: { card: "summary_large_image", title: "Build a Funding Business | Moonshine Capital", description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
