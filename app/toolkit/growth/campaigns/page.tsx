import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrowthWorkspace from "@/components/growth/GrowthWorkspace";
export const metadata: Metadata = { title: "Campaign Launch Builder", description: "Create an editable, multi-channel campaign and export its full execution package.", alternates: { canonical: "/toolkit/growth/campaigns" } };
export default function Page() { return <><Header /><GrowthWorkspace view="campaigns" /><Footer /></>; }
