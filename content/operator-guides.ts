export const problemPaths = [
  { problem: "Short-term operating gap or inventory purchase", path: "Working Capital", ask: "What creates the gap, and when does the business need funds?" },
  { problem: "Recurring or uneven cash needs", path: "Lines of Credit", ask: "Is the need ongoing, and how does cash move through the business?" },
  { problem: "Vehicle or equipment purchase", path: "Equipment Financing", ask: "What asset is being acquired, and how will it be used?" },
  { problem: "Commercial property or project", path: "Real Estate", ask: "What is the property, transaction stage, and intended use?" },
  { problem: "Purchase of an existing business", path: "Acquisition Financing", ask: "What is being acquired, and what is the transaction timeline?" },
  { problem: "Unclear options or timing", path: "Credit + Capital Strategy", ask: "What outcome is the owner trying to achieve before choosing a route?" },
] as const;

export const prospectingSteps = [
  { title: "Choose a segment", detail: "Start with business owners you understand or a local industry you can research. Keep the first list manageable." },
  { title: "Open a useful conversation", detail: "Ask about the business goal, use of funds, timeline, and whether the owner wants to explore options." },
  { title: "Record the next step", detail: "With permission, note the need, promised follow-up, responsible person, and date in an appropriate private tracker." },
  { title: "Route carefully", detail: "Use current product and provider information. Explain that underwriting, terms, and availability are provider decisions." },
  { title: "Close the loop", detail: "Follow up on pending questions and outcomes. Respect contact preferences and avoid repeated unsolicited messages." },
] as const;
