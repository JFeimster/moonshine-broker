import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrowthWorkspace from "@/components/growth/GrowthWorkspace";
export const metadata: Metadata = { title: "Co-Branded Marketing Studio", description: "Create local, editable educational handouts, social graphics, invitations, and CTA assets.", alternates: { canonical: "/toolkit/growth/brand-studio" } };
export default function Page() { return <><Header /><GrowthWorkspace view="brand-studio" /><Footer /></>; }
