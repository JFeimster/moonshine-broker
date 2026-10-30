export const launchWeeks = [
  { title: "Week 1 — Understand & Prepare", items: ["Learn the independent business-development model", "Review funding product categories and provider boundaries", "Review compensation, compliance, and current program terms", "Define one initial customer segment", "Prepare a simple outreach list and follow-up tracker"] },
  { title: "Week 2 — Build the Pipeline", items: ["Identify potential business-owner conversations", "Develop relationships with owner-serving referral professionals", "Begin responsible prospecting with accurate claims", "Practice discovery questions about purpose and timing", "Set a date and next step for every follow-up"] },
  { title: "Week 3 — Execute & Improve", items: ["Review prospect conversations and unanswered questions", "Identify recurring capital needs without assuming product fit", "Improve discovery questions and documentation habits", "Track follow-up outcomes and pending actions", "List gaps that require current training or provider guidance"] },
  { title: "Week 4 — Review & Scale", items: ["Review outreach, conversations, and follow-up activity", "Refine the customer segment from what you learned", "Improve referral communication with permission", "Set next month's prospecting and learning blocks", "Decide what additional support or guidance you need"] },
] as const;

export function thirtyDayPlan() {
  return ["FIRST 30 DAYS — PERSONAL ACTION PLAN", "Adapt this public planning guide to your schedule. Access and program participation depend on current onboarding requirements.", ...launchWeeks.flatMap((week) => ["", week.title, ...week.items.map((item) => `□ ${item}`)]), "", "Review actual activity weekly. Provider decisions, customer production, and earnings are uncertain."].join("\n");
}
