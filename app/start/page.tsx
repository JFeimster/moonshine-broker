import type { Metadata } from "next";
import AgencyPage from "@/components/AgencyPage";

export const metadata: Metadata = { title: "First 30 Days" };

export default function Page() {
  return <AgencyPage
    eyebrow="Launch path"
    title="Your first 30 days should create motion."
    intro="The DAC launch materials emphasize fast orientation, core training, a personal game plan, early customer-acquisition activity, and daily accountability. This page turns that into a public startup path without recreating the full training library."
    sections={[
      { eyebrow: "Day 1", title: "Identity + system", items: ["Create your Funding Agent record", "Build your public profile", "Open Partner Command", "Confirm your Capital Page and attribution links", "Know where training, scripts, and tools live"] },
      { eyebrow: "Week 1", title: "Learn the business", items: ["Complete core getting-started material", "Understand the funding workflow", "Review compensation mechanics", "Build your Game Plan", "Choose initial audience and conversation targets"] },
      { eyebrow: "Week 2", title: "Start conversations", body: "Use your warm market, business-owner network, local relationships, or chosen niche. The goal is not to become a funding encyclopedia first. The goal is to begin doing the activity the business actually requires." },
      { eyebrow: "Week 3", title: "Build pipeline", body: "Track real conversations, applications, applicant actions, submissions, follow-up, and outcomes. If the pipeline only exists in your memory, it is not an operating system." },
      { eyebrow: "Week 4", title: "Create consistency", body: "Compare activity goals to actual activity. Identify the gap, learn from it, adjust your schedule, and repeat. The Game Plan explicitly treats the system—not motivation—as the controllable lever." },
      { eyebrow: "Daily", title: "Four operating questions", items: ["What was today’s activity goal?", "What actually happened?", "What accounts for the difference?", "What can be learned and adjusted?"] },
      { eyebrow: "Planning", title: "Use the Game Plan", body: "Reverse-engineer income and production targets into client and conversation goals using current compensation assumptions. These are planning models only; actual conversion rates, funding amounts, commissions, and timing vary." },
      { eyebrow: "Next", title: "Earn the right to scale", body: "Personal production comes first. Team building becomes more useful after you can model the behavior, explain the system, and help another agent follow it." },
    ]}
  />;
}
