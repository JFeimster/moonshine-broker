import { destinations } from "./site";

export type SystemModule = {
  number: string;
  name: string;
  summary: string;
  destination?: string | null;
};

export const systemModules: SystemModule[] = [
  { number: "01", name: "Funding Page", summary: "Partner-attributed client pages are part of the planned Capital layer and are still in development.", destination: destinations.capitalPages.current },
  { number: "02", name: "Partner Command", summary: "Planned authenticated workspace for pipeline, follow-up, growth, production, learning, and team activity. App access is in development.", destination: destinations.partnerCommand.current },
  { number: "03", name: "Product Desk", summary: "A guided way to understand funding solution families and move a client into the appropriate process.", destination: "/products" },
  { number: "04", name: "Growth Engine", summary: "Planned tracking links, campaign assets, scripts, and outreach tools to support conversations." },
  { number: "05", name: "Training", summary: "Planned getting-started guidance, product education, scripts, and practical operating routines." },
  { number: "06", name: "Production Desk", summary: "Planned Game Plans and activity tracking for reviewing business-development work." },
  { number: "07", name: "Build", summary: "A path from personal production toward agent duplication, team support, and leadership.", destination: "/build" },
];

export const commandPrompts = [
  { question: "What needs attention?", answer: "See active conversations, applicant actions, and follow-ups that need a next step." },
  { question: "What happened?", answer: "Review activity and pipeline movement so client conversations do not disappear into memory." },
  { question: "What should I do next?", answer: "Use the workflow, training, and Game Plan to identify a practical action." },
] as const;

export const commandModules = [
  { name: "Capital", summary: "Planned partner-attributed public funding pages; still in development." },
  { name: "Growth", summary: "Planned campaigns, tracking links, scripts, and distribution tools." },
  { name: "Build", summary: "Planned launch guidance and agency development tools." },
  { name: "Learn", summary: "Planned training and product education access." },
  { name: "Earn", summary: "Planned production planning; current governing documents determine compensation." },
  { name: "Team", summary: "Planned agent-support and leadership workflows." },
  { name: "Account", summary: "Planned profile and operating preferences." },
] as const;
