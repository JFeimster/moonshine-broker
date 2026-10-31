import { acquisitionChannels, academyResources, customerMarkets, referralProfessions } from "@/content/toolkit";
import { launchWeeks } from "@/content/launch";
import { fundingCaveat, fundingFamilies } from "@/content/products";
import { problemPaths } from "@/content/operator-guides";

export type Channel = "Email" | "SMS" | "LinkedIn" | "Call" | "Voicemail";
export type Tone = "Warm" | "Direct" | "Educational";

const safe = (value: string | undefined, fallback: string) => value?.trim() || fallback;

export function generateOutreach(input: { audience: string; objective: string; tone: Tone; channel: Channel; name?: string; business?: string; context?: string }) {
  const name = safe(input.name, "[Name]");
  const business = safe(input.business, "[Business]");
  const context = safe(input.context, "the business goal you mentioned");
  const voice = input.tone === "Warm" ? "I hope things are going well" : input.tone === "Educational" ? "I wanted to share a practical starting point" : "I’m following up about";
  const subject = input.objective === "Appointment reminder" ? `Reminder: our conversation` : `A useful next step for ${business}`;
  const body = input.objective === "Appointment reminder"
    ? `Hi ${name}, a quick reminder about our conversation [day] at [time]. If anything has changed, let me know what works for you. We can discuss ${context} and any questions you want to cover. ${input.tone === "Warm" ? "Looking forward to catching up." : "Talk soon."}`
    : input.objective === "Responsible objection handling"
      ? `Hi ${name}, thanks for sharing your concerns about ${context}. It makes sense to compare the details carefully. I can help outline general funding categories and questions to ask, but a provider sets any terms and makes its own decisions. Would a short, no-pressure conversation be useful?`
      : input.objective === "Re-engagement"
        ? `Hi ${name}, ${voice.toLowerCase()} our earlier conversation about ${context}. If this is still relevant, I’d be glad to pick it back up. If priorities have changed, no problem—just let me know and I’ll close the loop.`
        : input.objective === "Follow-up"
          ? `Hi ${name}, I’m following up as agreed about ${context}. Here is the information I promised to share: [resource or answer]. If useful, we can clarify what questions remain and choose a next step that works for you. Provider availability and terms vary.`
        : input.objective === "Educational outreach"
          ? `Hi ${name}, ${voice.toLowerCase()} ${context}. A helpful first step is to clarify the intended use, timing, and approximate amount before exploring funding categories. Availability and terms depend on the provider. Would you like the short question checklist?`
          : input.audience === "Referral partner introduction"
            ? `Hi ${name}, I work with business owners who want to understand general funding paths for goals like ${context}. I’d value learning about the clients you serve and whether a permission-based introduction could be useful. No particular outcome is promised, and any client information would stay with their consent. Would you be open to a brief introduction?`
            : `Hi ${name}, ${voice.toLowerCase()} ${context} at ${business}. I help business owners clarify their goals, timing, and questions before they explore general funding categories. A provider determines availability, terms, and eligibility. Would it be useful to compare notes for 15 minutes?`;

  if (input.channel === "Email") return `Subject: ${subject}\n\n${body}\n\nBest,\n[Your name]\n\nIf you’d prefer not to receive follow-up, let me know.`;
  if (input.channel === "SMS") return `Hi ${name}, ${input.objective === "Appointment reminder" ? `reminder: we’re set for [day] at [time] to discuss ${context}. Reply if you need to reschedule.` : `following up about ${context}. Would a brief conversation be useful? No pressure—reply stop if you don’t want further texts.`}`;
  if (input.channel === "LinkedIn") return `Hi ${name} — ${input.audience === "Referral partner introduction" ? `I work with business owners exploring general funding paths around ${context}. I’d enjoy learning more about your practice and seeing whether a permission-based introduction could help your clients.` : `I noticed ${business} is focused on ${context}. I help owners clarify goals and timing before exploring general funding categories. Would a short exchange be useful?`} No outcomes or terms are guaranteed.`;
  if (input.channel === "Voicemail") return `Hi ${name}, this is [your name]. ${input.objective === "Responsible objection handling" ? `Thanks for sharing your concerns about ${context}. I can walk through general questions, while a provider determines terms and availability.` : `I’m calling about ${context}. I help business owners clarify the need and timing before looking at general funding categories.`} If a conversation would be useful, call me at [number]. Again, [number]. If now isn’t a good time, no need to call back.`;
  return `Hi ${name}, this is [your name]. ${input.objective === "Responsible objection handling" ? `Thanks for sharing your concerns about ${context}. I can help clarify general questions, but a provider determines any terms and availability.` : `I’m reaching out about ${context}. Before exploring anything, I’d like to understand the business goal, intended use, and timing. A provider determines availability and terms.`} Is now a good time, or should we find another time?`;
}

export function getReferralProfile(id: string) {
  return referralProfessions.find((item) => item.id === id) ?? referralProfessions[0];
}

export function generateReferralSequence(id: string, contactName = "[Name]") {
  const item = getReferralProfile(id);
  const name = safe(contactName, "[Name]");
  return [
    `INTRODUCTION\nSubject: A useful resource for ${item.name.toLowerCase()}\n\nHi ${name},\n\n${item.positioning} I’d like to learn how you support clients and whether a permission-based introduction would be helpful. Would you be open to a brief conversation?\n\nBest,\n[Your name]`,
    `FOLLOW-UP (after 4–7 days, if appropriate)\nHi ${name},\n\nI’m following up once on my note about supporting business owners who have funding questions. If it is not relevant, no reply is needed and I won’t keep reaching out.\n\nBest,\n[Your name]`,
    `AFTER A CONVERSATION\nThanks for sharing how you work with clients. If a client asks about funding, please ask whether they want an introduction first. I’ll keep the conversation educational and follow your preferred handoff process.`,
    `BOUNDARY\n${item.reminder}`,
  ].join("\n\n");
}

export type DiscoveryInput = { industry: string; objective: string; use: string; timeline: string; amount: string; context: string };

export function mapDiscoveryCategories(input: Pick<DiscoveryInput, "objective" | "use">) {
  const text = `${input.objective} ${input.use}`.toLowerCase();
  const matches: string[] = [];
  if (/equipment|vehicle|machinery|technology|truck/.test(text)) matches.push("Equipment Financing");
  if (/property|real estate|construction project|building|renovation/.test(text)) matches.push("Real Estate");
  if (/acqui|buy a business|purchase a business|buyout/.test(text)) matches.push("Acquisition Financing");
  if (/line of credit|recurring|seasonal|cash flow|flexible access/.test(text)) matches.push("Lines of Credit");
  if (/inventory|payroll|operating|working capital|marketing|expan|hire|materials/.test(text)) matches.push("Working Capital");
  if (!matches.length) matches.push("Credit + Capital Strategy");
  return [...new Set(matches)].map((name) => fundingFamilies.find((family) => family.name === name)).filter((family): family is (typeof fundingFamilies)[number] => Boolean(family));
}

export function buildDiscoverySummary(input: DiscoveryInput) {
  const categories = mapDiscoveryCategories(input);
  const leadCategory = categories[0]?.name;
  const guideQuestion = problemPaths.find((path) => path.path === leadCategory)?.ask;
  const questions = [
    `What specific outcome should the funding support? (${safe(input.objective, "clarify objective")})`,
    `How will funds be used, and what is the expected timing? (${safe(input.use, "clarify intended use")}; ${safe(input.timeline, "timeline not stated")})`,
    `What approximate range is being considered? (${safe(input.amount, "not stated")})`,
    `How long has the business operated, and what context should a provider understand? (${safe(input.context, "not stated")})`,
  ];
  const docs = /equipment|vehicle|machinery/.test(input.use.toLowerCase()) ? "A quote or invoice, asset details, and intended business use may be useful to ask about." : /property|real estate|construction/.test(input.use.toLowerCase()) ? "Property details, transaction stage, project budget, and timeline may be useful to ask about." : /acqui|business purchase/.test(`${input.objective} ${input.use}`.toLowerCase()) ? "Purchase agreement status, transaction summary, buyer contribution context, and timeline may be useful to ask about." : "A summary of the business goal, use of funds, amount range, and timing may help guide the next conversation.";
  return [
    "FUNDING DISCOVERY SUMMARY — EDUCATIONAL ONLY",
    `Industry: ${safe(input.industry, "Not provided")}`,
    `Objective: ${safe(input.objective, "Not provided")}`,
    `Intended use: ${safe(input.use, "Not provided")}`,
    `Timeline: ${safe(input.timeline, "Not provided")}`,
    `Approximate amount: ${safe(input.amount, "Not provided")}`,
    `Operating context: ${safe(input.context, "Not provided")}`,
    "",
    "CATEGORIES TO INVESTIGATE (not recommendations)",
    ...categories.map((family) => `• ${family.name}: ${family.useCase}`),
    "",
    "FOLLOW-UP QUESTIONS",
    ...(guideQuestion ? [`• ${guideQuestion} (from the existing conversation map)`] : []),
    ...questions.map((question) => `• ${question}`),
    "",
    `DOCUMENTATION CONSIDERATIONS: ${docs}`,
    "Additional information may be needed because provider criteria, transaction details, operating history, use of funds, and timing differ. A provider decides availability, eligibility, terms, and required documentation.",
    `${fundingCaveat} Do not include SSNs, bank credentials, or sensitive documents in this public tool.`,
  ].join("\n");
}

export type MarketingInput = { audience: string; problem: string; channel: string; objective: string; tone: string; destination: string };
export function generateMarketingAsset(input: MarketingInput) {
  const audience = safe(input.audience, "business owners");
  const problem = safe(input.problem, "planning a business purchase");
  const action = safe(input.destination, "a short educational conversation");
  const opener = input.tone === "Direct" ? "A clear first step:" : input.tone === "Warm" ? "Every business has a different path." : "Before exploring funding, clarify three things:";
  const core = `${opener} the business goal, intended use, and timing. If you’re ${problem}, start by organizing those details and questions. Funding categories are worth exploring only when they fit the conversation; providers determine availability, terms, and eligibility.`;
  if (input.channel === "Educational caption") return `${audience}: Clarify the goal, use, and timing before exploring funding for ${problem}. Providers determine availability and terms. ${action}.`;
  if (input.channel === "LinkedIn") return `${audience}: ${core}\n\n${input.objective === "Educate" ? "A thoughtful conversation starts with context—not a promise." : "Save this checklist for your next planning conversation."}\n\n${action}\n\n#SmallBusiness #BusinessFunding`;
  if (input.channel === "Facebook") return `${core}\n\nHave a question about ${problem}? ${action}. No guaranteed outcomes or one-size-fits-all answers.`;
  if (input.channel === "Newsletter") return `A practical starting point for ${audience}\n\n${core}\n\nIn this issue: questions to clarify, information to organize, and when to seek current provider guidance. ${action}.`;
  if (input.channel === "Video hook") return `“Before you look for funding for ${problem}, answer these three questions: What will it support? When is it needed? What information is still missing?”\n\n${core}`;
  if (input.channel === "Lead magnet") return `Headline: A practical planning checklist for ${problem}\nDescription: A short, educational worksheet for ${audience} to organize goals, intended use, timing, and questions before exploring general funding categories. ${action}.`;
  if (input.channel === "Referral campaign") return `Campaign: A useful funding conversation for ${audience}\n\nTouch 1 — Introduce: I support business owners who are ${problem} by helping them organize the goal and timing before exploring general categories. Would this resource help your clients?\n\nTouch 2 — Follow up once: If a client asks about funding, offer an introduction only after receiving their permission. No approval, terms, or compensation are implied.\n\nCTA: ${action}`;
  if (input.channel === "Client follow-up") return `Hi [Name], I’m checking in about ${problem}. Is this still a priority? If so, we can clarify the intended use, timing, and open questions. A provider determines any options and terms. If priorities changed, no problem—let me know and I’ll close the loop.\n\n${action}`;
  return `${audience}: ${core}\n\n${action}\n\n#SmallBusiness #Planning`;
}

export function buildLaunchPack(input: { market: string; channels: string[]; professionId?: string }) {
  const market = safe(input.market, customerMarkets[0]);
  const channels = input.channels.length ? input.channels : [acquisitionChannels[0]];
  const partner = getReferralProfile(input.professionId ?? "accountant");
  const outreach = generateOutreach({ audience: market, objective: "Business-owner introduction", tone: "Warm", channel: "Email", context: `a funding question connected to ${market}` });
  const discovery = buildDiscoverySummary({ industry: market, objective: "Clarify the business goal", use: "Working capital, equipment, property, or acquisition needs", timeline: "Ask the owner", amount: "Ask for an approximate range", context: "Ask about operating history and relevant business context" });
  return [
    `# FIRST-MONTH AGENCY LAUNCH PACK\n\n## Target market\n${market}\n\n## Prospecting approach\nUse ${channels.join(", ")} to identify owner-serving conversations. Choose a small, relevant audience; lead with a useful question; record agreed follow-ups; honor preferences and stop requests.`,
    `## Outreach template\n${outreach}`,
    `## Referral strategy — ${partner.name}\n${partner.positioning}\n\n${generateReferralSequence(partner.id)}`,
    `## Discovery checklist\n${discovery}`,
    `## Follow-up sequence\n1. Send the resource or answer you agreed to provide.\n2. Confirm the owner’s preferred next step and timing.\n3. Follow up once at the agreed time; stop if asked.\n4. Record only a minimal, permission-based summary in an appropriate system.`,
    `## 30-day execution plan\n${launchWeeks.map((week) => `### ${week.title}\n${week.items.map((item) => `- [ ] ${item}`).join("\n")}`).join("\n\n")}`,
    `## Recommended resources\n${academyResources.map((resource) => `- [${resource.label}](${resource.href})`).join("\n")}\n- [Public product categories](/products)`,
    `## Operating boundaries\nEducational planning only. Do not promise approval, pricing, eligibility, timing, or compensation. Provider decisions vary. Do not collect SSNs, credentials, or sensitive documents in these public tools. Apply only through the canonical Tally application at https://tally.so/r/rjM6do.`,
  ].join("\n\n");
}

export function buildDownloadName(market: string) {
  return `agency-launch-pack-${safe(market, "business").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "business"}.md`;
}
