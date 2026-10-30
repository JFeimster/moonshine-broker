export type SystemModule = {
  number: string;
  name: string;
  summary: string;
  destination?: string;
};

export const systemModules: SystemModule[] = [
  { number: "01", name: "Funding Page", summary: "A public client-facing page with partner attribution and a clear path to explore funding.", destination: "https://capital.distilledfunding.com" },
  { number: "02", name: "Partner Command", summary: "An authenticated workspace for pipeline, follow-up, growth, production, learning, and team activity.", destination: "https://app.distilledfunding.com" },
  { number: "03", name: "Product Desk", summary: "A guided way to understand funding solution families and move a client into the appropriate process.", destination: "/products" },
  { number: "04", name: "Growth Engine", summary: "Tracking links, QR distribution, campaign assets, scripts, and outreach tools to support conversations." },
  { number: "05", name: "Training", summary: "Getting-started guidance, product education, scripts, and practical operating routines." },
  { number: "06", name: "Production Desk", summary: "Game Plans and activity tracking help agents plan, review, and adjust their business development work." },
  { number: "07", name: "Build", summary: "A path from personal production toward agent duplication, team support, and leadership.", destination: "/build" },
];

export const commandPrompts = [
  { question: "What needs attention?", answer: "See active conversations, applicant actions, and follow-ups that need a next step." },
  { question: "What happened?", answer: "Review activity and pipeline movement so client conversations do not disappear into memory." },
  { question: "What should I do next?", answer: "Use the workflow, training, and Game Plan to identify a practical action." },
] as const;

export const commandModules = [
  { name: "Capital", summary: "Public funding-page infrastructure and attribution." },
  { name: "Growth", summary: "Campaigns, links, scripts, and distribution." },
  { name: "Build", summary: "Launch paths and agency development." },
  { name: "Learn", summary: "Training and product education." },
  { name: "Earn", summary: "Production planning and documented compensation mechanics." },
  { name: "Team", summary: "Agent support and leadership activity." },
  { name: "Account", summary: "Profile and operating preferences." },
] as const;
