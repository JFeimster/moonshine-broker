import type { Metadata } from "next";
import AgencyPage from "@/components/AgencyPage";

export const metadata: Metadata = { title: "The System" };

export default function Page() {
  return <AgencyPage
    eyebrow="Operating infrastructure"
    title="Your agency should have an operating system."
    intro="The point of Distilled Funding Agency is not to hand you a referral link and wish you luck. The public funding page, Partner Command, product navigation, tools, training, scripts, and production systems are meant to function as one operating stack."
    sections={[
      { eyebrow: "Public", title: "Capital Page", body: "Your client-facing co-branded funding page at capital.distilledfunding.com/<partner-slug>. It gives prospects a consistent place to understand funding, take action, and preserve partner attribution." },
      { eyebrow: "Operate", title: "Partner Command", body: "Your authenticated command desk at app.distilledfunding.com. It is the operating surface for client pipeline, growth, learning, production planning, and team activity." },
      { eyebrow: "Navigate", title: "Product Desk", body: "Funding is not one product. The system should help you understand the available solution lanes and route a capital need without turning you into a walking lender spreadsheet." },
      { eyebrow: "Distribute", title: "Growth", body: "Tracking links, QR codes, campaigns, scripts, and marketing assets give you repeatable ways to create conversations and preserve source attribution." },
      { eyebrow: "Build", title: "Tools + AI", body: "Public tools and calculators live at tools.distilledfunding.com. Agency uses them as conversation starters and operating utilities rather than burying them inside another dashboard." },
      { eyebrow: "Learn", title: "Training + Sprint", body: "Launch material, scripts, product training, activity planning, and the 30-Day Sprint are federated into the workflow instead of duplicated as giant document dumps." },
      { eyebrow: "Earn", title: "Production planning", body: "Use the current compensation mechanics plus activity assumptions to reverse-engineer a production plan. Examples are planning math, not promises." },
      { eyebrow: "Scale", title: "Team + leadership", body: "Once personal activity becomes consistent, the system supports duplication: onboarding agents, game planning, activity accountability, and leader development." },
    ]}
  />;
}
