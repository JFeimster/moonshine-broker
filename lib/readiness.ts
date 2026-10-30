export type Dimension = "development" | "audience" | "time" | "process" | "learning" | "expectations";
export type Answers = Partial<Record<Dimension, number>>;

export const questions: { key: Dimension; title: string; help: string; options: readonly [string, string, string] }[] = [
  { key: "development", title: "Business development", help: "How comfortable are you starting useful conversations?", options: ["I need to learn how to initiate them", "I can start conversations with a plan", "I already develop relationships consistently"] },
  { key: "audience", title: "Audience access", help: "Where could your first conversations come from?", options: ["I have not identified a segment", "I have a defined local or industry segment", "I have existing owner or referral relationships"] },
  { key: "time", title: "Time commitment", help: "What can you reliably give to prospecting and follow-through?", options: ["I cannot commit a weekly block yet", "I can protect a few consistent hours weekly", "I can schedule recurring outreach and follow-up blocks"] },
  { key: "process", title: "Sales process", help: "How will you keep track of next steps?", options: ["I do not have a follow-up habit", "I can use a simple list and calendar", "I already track prospects and follow up consistently"] },
  { key: "learning", title: "Product learning", help: "How will you handle product limits and provider decisions?", options: ["I need to learn the basic boundaries", "I will review current guidance before discussing options", "I routinely verify details and avoid promises"] },
  { key: "expectations", title: "Operating expectations", help: "Which statement matches your expectations?", options: ["I need clarity on independent, uncertain outcomes", "I understand compensation depends on qualifying production", "I understand the work, costs, uncertainty, and current plan govern outcomes"] },
];

const actionByDimension: Record<Dimension, string> = {
  development: "Practice a short discovery conversation with a business owner or advisor you know.",
  audience: "Name one customer segment and list ten people or organizations you could responsibly approach.",
  time: "Reserve recurring weekly time for prospecting, learning, and follow-up.",
  process: "Create a simple prospect list with contact date, need, next step, and follow-up date.",
  learning: "Review the product categories and write down questions that require current provider guidance.",
  expectations: "Read the independent-role and compensation explanation; list the assumptions you need to verify.",
};

export type ReadinessStatus = "READY TO BUILD A PROSPECTING PLAN" | "FOUNDATIONS TO DEVELOP" | "EXPLORE THE ROLE BEFORE APPLYING";

export function assessReadiness(answers: Answers) {
  if (questions.some(({ key }) => answers[key] === undefined)) throw new Error("Answer all six questions before assessing readiness.");
  const total = questions.reduce((sum, { key }) => sum + (answers[key] ?? 0), 0);
  const low = questions.filter(({ key }) => (answers[key] ?? 0) < 2).sort((a, b) => (answers[a.key] ?? 0) - (answers[b.key] ?? 0));
  const status: ReadinessStatus = total >= 9 && (answers.expectations ?? 0) > 0
    ? "READY TO BUILD A PROSPECTING PLAN"
    : total >= 5 && (answers.expectations ?? 0) > 0
      ? "FOUNDATIONS TO DEVELOP"
      : "EXPLORE THE ROLE BEFORE APPLYING";
  const explanation = status === "READY TO BUILD A PROSPECTING PLAN"
    ? "Your answers suggest you have a workable starting base. Turn it into a specific outreach and follow-up routine."
    : status === "FOUNDATIONS TO DEVELOP"
      ? "You have a starting point. Strengthen the gaps below before relying on this as a business activity."
      : "Learn the independent role and establish time, audience, and follow-up basics before deciding whether to apply.";
  const segment = answers.audience === 2 ? "Business owners or owner-serving advisors already in your network" : answers.audience === 1 ? "One local business community or industry you can learn and serve" : "A small local business segment you can research before outreach";
  const actions = low.slice(0, 3).map(({ key }) => actionByDimension[key]);
  for (const action of [actionByDimension.audience, actionByDimension.time, actionByDimension.process]) {
    if (actions.length === 3) break;
    if (!actions.includes(action)) actions.push(action);
  }
  const resources = status === "EXPLORE THE ROLE BEFORE APPLYING"
    ? [{ label: "How the agency works", href: "/how-it-works" }, { label: "Compensation and expectations", href: "/compensation" }, { label: "Funding categories", href: "/products" }]
    : [{ label: "Get clients", href: "/get-clients" }, { label: "Funding categories", href: "/products" }, { label: "First 30 days", href: "/start" }];
  return { status, explanation, segment, actions, resources, total };
}

export function preparationPlan(answers: Answers) {
  const result = assessReadiness(answers);
  return [`AGENCY PREPARATION PLAN`, `Status: ${result.status} (educational guidance only)`, `First customer segment: ${result.segment}`, ...result.actions.map((action, index) => `${index + 1}. ${action}`), `Review: ${result.resources.map((resource) => resource.label).join(", ")}`, `Revisit the current program agreement and compensation plan before applying. No acceptance, earnings, or funding outcome is guaranteed.`].join("\n");
}
