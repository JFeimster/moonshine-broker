import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolkitWorkspace from "@/components/ToolkitWorkspace";
export const metadata: Metadata = { title: "Agency Launch Pack", description: "Assemble and download a first-month prospecting, referral, discovery, and operating plan.", alternates: { canonical: "/toolkit/launch-pack" } };
export default function Page() { return <><Header /><ToolkitWorkspace tool="launch-pack" /><Footer /></>; }
