import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Distilled Funding Agency | Build a Funding Business",
    template: "%s | Distilled Funding Agency",
  },
  description: site.description,
  metadataBase: new URL("https://agency.distilledfunding.com"),
  openGraph: {
    title: "Your Funding Agency. The Infrastructure Is Already Built.",
    description: site.description,
    type: "website",
    url: "https://agency.distilledfunding.com",
    siteName: "Distilled Funding Agency",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
