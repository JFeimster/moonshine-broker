import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolkitWorkspace from "@/components/ToolkitWorkspace";
export const metadata: Metadata = { title: "Referral Partner Builder", description: "Prepare a personalized, permission-based referral introduction for owner-serving professionals.", alternates: { canonical: "/toolkit/referrals" } };
export default function Page() { return <><Header /><ToolkitWorkspace tool="referrals" /><Footer /></>; }
