import type { Metadata } from "next";
import AgencyPage from "@/components/AgencyPage";

export const metadata: Metadata = { title: "Get Clients" };

export default function Page() {
  return <AgencyPage
    eyebrow="Client acquisition"
    title="You do not need a lead-gen empire. You need conversations."
    intro="The DAC source material repeatedly comes back to the same practical advantage: build real relationships with business owners and professionals, become a useful local or industry resource, follow up, and let consistency compound."
    sections={[
      { title: "Warm market", body: "Tell the business owners and entrepreneurial people you already know what you do. The objective is not pressure. It is making sure your network knows who to call when a capital need appears." },
      { title: "Local business owners", body: "Become a genuine local resource. Frequent businesses, understand what they do, refer people when you can, and earn the right to be remembered as the funding person rather than another cold caller." },
      { title: "Referral professionals", items: ["CPAs", "business bankers", "real estate professionals", "insurance agents", "consultants", "business brokers", "bookkeepers", "other advisors serving owners"] },
      { title: "Industry focus", body: "Pick an industry, learn its operating rhythms and capital needs, and build credibility through specificity. A niche is often a faster route to trust than saying you fund everybody." },
      { title: "Online prospecting", body: "Use direct outreach, social content, educational posts, your Capital Page, tracking links, QR distribution, and useful tools to turn attention into a funding conversation." },
      { title: "Follow-up loop", body: "Many owners do not need capital on the day you meet them. Stay useful. Regular communication creates the chance to be called when timing changes." },
      { title: "Relationship asset", body: "The older DAC Client Relationship Sheet frames each supported client relationship as a local competitive advantage. Keep the principle; do not treat historical income examples as guaranteed economics." },
      { title: "Activity first", body: "The current Game Plan uses conversations as the primary controllable input and reverse-engineers activity from production goals. Your exact conversion rates will vary; the operating lesson is to measure activity instead of relying on mood." },
    ]}
  />;
}
