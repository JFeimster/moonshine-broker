import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AcademyWorkspace } from "@/components/ToolkitWorkspace";
export const metadata: Metadata = { title: "Agent Field Academy", description: "Search practical public lessons and copyable worksheets for responsible agency development.", alternates: { canonical: "/toolkit/academy" } };
export default function Page() { return <><Header /><AcademyWorkspace /><Footer /></>; }
