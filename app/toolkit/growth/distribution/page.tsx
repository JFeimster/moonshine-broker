import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrowthWorkspace from "@/components/growth/GrowthWorkspace";
export const metadata: Metadata = { title: "Educational Resource Distribution", description: "Find verified public resources and prepare education-first campaign links and copy.", alternates: { canonical: "/toolkit/growth/distribution" } };
export default function Page() { return <><Header /><GrowthWorkspace view="distribution" /><Footer /></>; }
