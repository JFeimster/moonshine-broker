import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolkitWorkspace from "@/components/ToolkitWorkspace";
export const metadata: Metadata = { title: "Funding Discovery Workbench", description: "Organize business goals, intended use, timing, questions, and educational funding categories.", alternates: { canonical: "/toolkit/discovery" } };
export default function Page() { return <><Header /><ToolkitWorkspace tool="discovery" /><Footer /></>; }
