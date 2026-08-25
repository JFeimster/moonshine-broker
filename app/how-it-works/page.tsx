import type { Metadata } from "next";
import AgencyPage from "@/components/AgencyPage";

export const metadata: Metadata = { title: "How It Works" };

export default function Page() {
  return <AgencyPage
    eyebrow="Operating model"
    title="How the funding business works."
    intro="This is a client-acquisition and relationship business wrapped around funding infrastructure. Your job is to create and manage the conversation; the system helps move a qualified capital need through application, provider fit, follow-up, and funding."
    sections={[
      { title: "Prospect", body: "Start with business owners, your existing network, local professionals, or a focused industry. The first operating requirement is not a giant lead-generation machine. It is consistent conversations." },
      { title: "Identify the need", body: "Listen for timing, use of funds, revenue, urgency, and the actual business problem capital needs to solve. The objective is not to force every owner into an application." },
      { title: "Application + route", body: "When there is a real fit, move the client into the appropriate funding process. Product and provider selection belong inside the operating infrastructure, not in random browser tabs and spreadsheets." },
      { title: "Follow-up", body: "Keep the applicant moving when documents, bank connections, decisions, or clarification are required. Consistent follow-up is part of the value you provide." },
      { title: "Funding + compensation", body: "Compensation is tied to actual customer production under the current DAC Compensation Plan. Recruiting alone does not create compensation." },
      { title: "Repeat + referral", body: "Treat every funded client as the start of a relationship. The long game is becoming the person business owners and referral partners call when capital needs appear again." },
      { title: "Scale", body: "After you can produce personally, the model can expand into team building and leadership. The sequence matters: learn the system, use it, then teach it." },
      { title: "One operating loop", items: ["Prospect", "Conversation", "Funding need", "Application", "Provider fit", "Submission", "Follow-up", "Funding", "Compensation", "Referral / repeat", "Team / agency scale"] },
    ]}
  />;
}
