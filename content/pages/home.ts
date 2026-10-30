import { site } from "../site";

export const home = {
  title: "Build a Funding Business. The Infrastructure Is Already Built.",
  description: site.description,
  hero: {
    eyebrow: "Moonshine Capital / Funding Agency",
    headline: ["Build a", "funding", "business."],
    subhead: "The infrastructure is already built.",
    body: "Bring the relationships and follow-through. Work from a connected system for finding clients, routing funding needs, and serving business owners.",
    mapLabel: "Operating sequence / 07",
    mapState: "System map",
  },
  problem: {
    eyebrow: "01 / The problem",
    title: "They need a machine.",
    lead: "Independent agents can find the conversation and still lose the thread.",
    body: "A funding business asks for more than a product list. Client pages, routing, attribution, follow-up, training, and production planning all need to work together. Moonshine puts those operating pieces in reach.",
    gaps: ["Scattered tools", "Unclear next step", "Lost follow-up", "No operating rhythm"],
  },
  loop: { eyebrow: "02 / Operating loop", title: "One useful next step.", body: "Build a repeatable way to serve a client from the first signal through follow-up and the next conversation.", steps: ["Prospect", "Identify need", "Route", "Follow up", "Fund", "Serve again", "Scale"] },
  system: { eyebrow: "03 / What you get", title: "Your desk is built.", body: "Core parts of a funding-agent operation, connected in one working ecosystem." },
  command: {
    eyebrow: "04 / Command center",
    title: "Partner Command.",
    body: "A look at the actual operating architecture: pipeline, follow-up, growth, learning, production, and team workflows in an authenticated workspace.",
    navItems: ["Overview", "Pipeline", "Growth", "Learn", "Production", "Team"],
  },
  audience: { eyebrow: "05 / Who this is for", title: "Built for people who build.", list: ["Sales professionals", "Consultants", "Entrepreneurs", "Referral partners", "Existing brokers", "Future team builders"] },
  solutions: { eyebrow: "06 / Funding solutions", title: "Start with the need.", body: "The Product Desk helps you explore a path after listening to the business owner." },
  launch: { eyebrow: "07 / Launch sequence", title: "Go from join to duplicate.", steps: ["Join", "Build", "Launch", "Talk", "Route", "Follow up", "Duplicate"] },
  economics: {
    eyebrow: "08 / Business economics",
    title: "Activity becomes a plan.",
    toolLabel: "Illustrative planning tool",
    caveat: "This tool shows only an editable activity illustration. It does not calculate compensation or predict results. Actual customer production, provider decisions, compensation terms, qualifications, conversion rates, and timing vary.",
  },
  final: {
    eyebrow: "09 / Your next move",
    title: "Stop collecting business ideas. Start operating one.",
    body: "See how the funding-agent model works, understand the responsibilities, and take the first step when you are ready.",
  },
} as const;
