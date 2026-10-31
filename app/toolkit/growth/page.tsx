import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrowthWorkspace from "@/components/growth/GrowthWorkspace";
export const metadata: Metadata = { title: "Agency Growth & Distribution Engine", description: "Coordinate editable campaigns, referral kits, educational marketing assets, verified resources, and local activity plans.", alternates: { canonical: "/toolkit/growth" } };
export default function Page() { return <><Header /><GrowthWorkspace /><Footer /></>; }
