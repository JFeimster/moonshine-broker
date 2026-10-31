import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrowthWorkspace from "@/components/growth/GrowthWorkspace";
export const metadata: Metadata = { title: "Referral Partnership Kit Builder", description: "Prepare profession-specific, permission-based referral relationship materials.", alternates: { canonical: "/toolkit/growth/referral-kits" } };
export default function Page() { return <><Header /><GrowthWorkspace view="referral-kits" /><Footer /></>; }
