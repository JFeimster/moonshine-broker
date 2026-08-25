import type { Metadata } from "next";
import AgencyPage from "@/components/AgencyPage";

export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return <AgencyPage
    eyebrow="Common questions"
    title="Know what you are joining."
    intro="This is not an employment offer, franchise sale, guaranteed-income program, or shortcut around doing business development. The supplied DAC agreement and training materials define an independent, customer-production-based agent model."
    sections={[
      { title: "Is this a job?", body: "No. The supplied Independent Affiliate Agreement describes the agent as an independent contractor responsible for their own business activities and taxes, not an employee or legal owner of DAC." },
      { title: "Am I buying a franchise?", body: "No. The supplied agreement explicitly says the relationship is not a franchise or business-opportunity purchase. The site uses operating-system language to describe infrastructure, not franchise ownership." },
      { title: "Do I get paid for recruiting agents?", body: "Not merely for recruiting. The agreement states that compensation is based on Bonus Revenue or Residual Revenue generated from end clients. Team compensation follows customer production and qualification rules." },
      { title: "Is income guaranteed?", body: "No. The agreement and compensation materials explicitly state that income, profit, or success is not guaranteed. Customer acquisition and actual production are required." },
      { title: "Can I start part-time?", body: "The training materials position the model as part-time friendly, but part-time is not the same as passive. Consistent outreach, follow-up, and pipeline management are still required." },
      { title: "Do I need finance experience?", body: "You need enough product and process knowledge to communicate responsibly and route a client correctly, but the operating model is designed so provider and platform experts handle specialized funding work rather than requiring every new agent to become an underwriter." },
      { title: "Do I need a license?", body: "Licensing and solicitation requirements vary by product, activity, and jurisdiction. The agreement requires agents to comply with applicable laws, licenses, permits, telemarketing policies, and program rules. Do not rely on a blanket no-license claim." },
      { title: "Can I build a team?", body: "Yes, under the supplied plan. The leadership materials describe a progression from personal client production into team building and leader development, with support obligations for enrolled agents." },
    ]}
  />;
}
