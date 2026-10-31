import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolkitWorkspace from "@/components/ToolkitWorkspace";
export const metadata: Metadata = { title: "Marketing Asset Composer", description: "Create reusable educational social, referral, newsletter, and follow-up assets.", alternates: { canonical: "/toolkit/marketing" } };
export default function Page() { return <><Header /><ToolkitWorkspace tool="marketing" /><Footer /></>; }
