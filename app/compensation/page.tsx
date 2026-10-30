import type { Metadata } from "next";
import AgencyPage from "@/components/AgencyPage";
import { pages } from "@/content/pages";

const content = pages.compensation;
export const metadata: Metadata = { title: content.title, description: content.description, alternates: { canonical: "/compensation" } };

export default function Page() { return <AgencyPage content={content} />; }
