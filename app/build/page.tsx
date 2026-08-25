import type { Metadata } from "next";
import AgencyPage from "@/components/AgencyPage";

export const metadata: Metadata = { title: "Build an Agency" };

export default function Page() {
  return <AgencyPage
    eyebrow="Duplication + leadership"
    title="Production first. Leadership second. Duplication always."
    intro="The DAC leadership material describes a progression from client sales to team builder, local leader, regional leader, and national leader. The useful idea is not title collecting; it is increasing your ability to produce, support, teach, and duplicate the operating system."
    sections={[
      { eyebrow: "Stage 1", title: "Funding Agent", body: "Gather and support clients who need capital. Learn the client-acquisition process and become dependable at the work before trying to teach it." },
      { eyebrow: "Stage 2", title: "Consistent producer", body: "Turn outreach, follow-up, applications, and client service into a repeatable weekly operating rhythm. Your personal activity becomes the proof behind your coaching." },
      { eyebrow: "Stage 3", title: "Team builder", items: ["Enroll willing agents", "Support their onboarding", "Game plan against real goals", "Model customer activity", "Use shared training and events instead of reinventing everything"] },
      { eyebrow: "Stage 4", title: "Agency operator", body: "Run presentations, getting-started training, local support, activity reviews, and game plans. Your job expands from producing deals to creating a small operating environment in which other people can produce." },
      { eyebrow: "Stage 5", title: "Leader", body: "Develop other leaders who can run the same process without depending on you for every conversation. The DAC materials call this duplication: know the system, use the system, teach the system." },
      { eyebrow: "Selection", title: "Finders, not fixers", body: "Current team-building notes emphasize selecting for willingness, coachability, and actual activity. Support people who are moving; do not build the business around dragging inactive recruits." },
      { eyebrow: "3P", title: "Presentation → Project → Partner", body: "Share the overview broadly, identify the people who show real interest through action, then game plan quickly with the ones behaving like future partners." },
      { eyebrow: "KPI", title: "Activity before applause", body: "Early team-building metrics should stay boring and useful: conversations, invitations, attendance, follow-up, customer activity, and whether the person actually did what their game plan required." },
    ]}
  />;
}
