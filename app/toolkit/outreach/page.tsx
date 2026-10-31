import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolkitWorkspace from "@/components/ToolkitWorkspace";
export const metadata: Metadata = { title: "Outreach Studio", description: "Compose editable, responsible outreach for business-owner and referral conversations.", alternates: { canonical: "/toolkit/outreach" } };
export default function Page() { return <><Header /><ToolkitWorkspace tool="outreach" /><Footer /></>; }
