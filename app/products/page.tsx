import type { Metadata } from "next";
import AgencyPage from "@/components/AgencyPage";
import { pages } from "@/content/pages";

const content = pages.products;
export const metadata: Metadata = { title: content.title, description: content.description, alternates: { canonical: "/products" } };

export default function Page() { return <AgencyPage content={content} />; }
