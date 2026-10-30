import { site } from "../site";

export const home = {
  title: "Build a Funding Business | Moonshine Capital",
  description: site.description,
  hero: {
    eyebrow: "Moonshine Capital / Funding Agency",
    headline: ["Build a", "funding", "business."],
    subhead: "Understand the work. Build a practical operation.",
    body: "Bring the relationships and follow-through. Learn how to find clients, discuss funding needs, and serve business owners responsibly.",
    mapLabel: "Visitor journey / 07",
    mapState: "Public guide",
  },
  problem: {
    eyebrow: "01 / The problem",
    title: "They need a machine.",
    lead: "Independent agents can find the conversation and still lose the thread.",
    body: "A funding business takes more than a product list. Client development, responsible routing, follow-up, and learning all matter. Review the public guides and verify program access during onboarding.",
    gaps: ["Scattered tools", "Unclear next step", "Lost follow-up", "No operating rhythm"],
  },
  loop: { eyebrow: "02 / Operating loop", title: "One useful next step.", body: "Build a repeatable way to serve a client from the first signal through follow-up and the next conversation.", steps: ["Prospect", "Identify need", "Route", "Follow up", "Fund", "Serve again", "Scale"] },
  system: { eyebrow: "03 / Operating infrastructure", title: "See the system.", body: "Explore the public overview of funding-agent tools and the current status of each capability. Access depends on current onboarding and availability." },
  command: {
    eyebrow: "04 / Command center",
    title: "Partner Command.",
    body: "A public overview of planned pipeline, follow-up, growth, learning, production, and team workflows. Authenticated app access is in development.",
    navItems: ["Overview", "Pipeline", "Growth", "Learn", "Production", "Team"],
  },
  audience: { eyebrow: "05 / Who this is for", title: "Built for people who build.", list: ["Sales professionals", "Consultants", "Entrepreneurs", "Referral partners", "Existing brokers", "Future team builders"] },
  solutions: { eyebrow: "06 / Funding solutions", title: "Start with the need.", body: "The Product Desk helps you explore a path after listening to the business owner." },
  launch: { eyebrow: "07 / Launch sequence", title: "Plan the first month.", steps: ["Explore", "Assess", "Apply", "Prepare", "Prospect", "Follow up", "Review"] },
  economics: {
    eyebrow: "08 / Business economics",
    title: "Control the work. Review the results.",
    toolLabel: "",
    caveat: "Track conversations, referrals, follow-up, and what you learn. Funding decisions and compensation depend on customers, providers, and current program terms. No production or income is guaranteed.",
  },
  final: {
    eyebrow: "09 / Your next move",
    title: "Stop collecting business ideas. Start operating one.",
    body: "See how the funding-agent model works, understand the responsibilities, and take the first step when you are ready.",
  },
} as const;
