import type { Metadata } from "next";
import AgencyPage from "@/components/AgencyPage";
import { pages } from "@/content/pages";

const content = pages.howItWorks;
export const metadata: Metadata = { title: content.title, description: content.description, alternates: { canonical: "/how-it-works" } };

export default function Page() { return <AgencyPage content={content} />; }
