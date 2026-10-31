import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrowthWorkspace from "@/components/growth/GrowthWorkspace";
export const metadata: Metadata = { title: "Agency Activity & Growth Planner", description: "Build a practical weekly prospecting, follow-up, referral, and learning schedule.", alternates: { canonical: "/toolkit/growth/activity" } };
export default function Page() { return <><Header /><GrowthWorkspace view="activity" /><Footer /></>; }
