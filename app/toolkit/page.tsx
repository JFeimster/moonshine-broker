import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToolkitDirectory } from "@/components/ToolkitWorkspace";
export const metadata: Metadata = { title: "Agency Activation Toolkit", description: "Practical public tools for outreach, referral development, funding discovery, marketing, field learning, and first-month planning.", alternates: { canonical: "/toolkit" } };
export default function Page() { return <><Header /><ToolkitDirectory /><Footer /></>; }
