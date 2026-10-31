import { customerMarkets, referralProfessions } from "@/content/toolkit";
import { growthResources } from "@/content/growth-resources";
import { destinations } from "@/content/site";
import { applicationTarget } from "@/lib/attribution";
import { generateMarketingAsset, generateOutreach, generateReferralSequence, type Channel } from "@/lib/toolkit";

export const campaignObjectives = ["Acquire business-owner conversations", "Develop professional referral relationships", "Promote an educational resource", "Re-engage existing contacts", "Recruit prospective funding agents"] as const;
export const campaignChannels = ["Email", "LinkedIn", "SMS", "Phone", "Social posts", "Referral introductions", "Educational events"] as const;
export const campaignStructures = ["Single-touch outreach", "Three-touch sequence", "Five-touch sequence", "Educational nurture sequence", "Referral introduction sequence"] as const;
export type CampaignObjective = typeof campaignObjectives[number];
export type GrowthConfig = { audience: string; objective: CampaignObjective; channels: string[]; structure: string; context: string; agentName: string; businessName: string; professionId: string; resourceIds: string[]; layout: "Professional" | "Bold" | "Minimal"; hours: number; sessions: number; conversations: number; followUps: number; relationships: number; durationWeeks: number; mode: "Part-time agent" | "Consistent weekly operator" | "Full-time agency builder" };

export const defaultGrowthConfig: GrowthConfig = { audience: customerMarkets[0], objective: campaignObjectives[0], channels: ["Email", "LinkedIn"], structure: campaignStructures[1], context: "planning a business goal and understanding general funding paths", agentName: "", businessName: "", professionId: "accountant", resourceIds: ["funding-guide", "discovery-workbench"], layout: "Professional", hours: 5, sessions: 3, conversations: 5, followUps: 5, relationships: 2, durationWeeks: 4, mode: "Part-time agent" };

export function resolveCampaignDestination(objective: CampaignObjective, campaignName = "growth_campaign") {
  if (objective === "Recruit prospective funding agents") {
    return { url: applicationTarget({ utm_source: "agency", utm_medium: "campaign", utm_campaign: campaignName, source: "agency", campaign: campaignName }).toString(), tracked: true, label: "Canonical agent application (supported attribution)" };
  }
  if (objective === "Develop professional referral relationships") {
    return { url: destinations.brokerEducation.current, tracked: false, label: "Public partner education (no referral attribution asserted)" };
  }
  return { url: destinations.publicFundingInfo.current, tracked: false, label: "Public funding education (no referral attribution asserted)" };
}

export function resolveBrandCta(candidate: string, objective: CampaignObjective) {
  const fallback = resolveCampaignDestination(objective).url;
  if (!candidate.trim()) return fallback;
  const recruitment = objective === "Recruit prospective funding agents";
  const allowed = growthResources.filter((resource) => recruitment
    ? resource.objectives.includes("Recruit prospective funding agents")
    : resource.objectives.includes("Acquire business-owner conversations") || resource.objectives.includes("Promote an educational resource") || resource.objectives.includes("Develop professional referral relationships"));
  const eligible = [...allowed.map((resource) => resource.url), ...(recruitment ? [destinations.application.current] : [])];
  try {
    const requested = new URL(candidate.trim(), "https://moonshine-broker.vercel.app");
    const approved = eligible.find((item) => {
      const allowedUrl = new URL(item, "https://moonshine-broker.vercel.app");
      return requested.origin === allowedUrl.origin && requested.pathname === allowedUrl.pathname ? item : undefined;
    });
    if (!approved) return fallback;
    const approvedUrl = new URL(approved, "https://moonshine-broker.vercel.app");
    return approvedUrl.toString().replace(/^https:\/\/moonshine-broker\.vercel\.app(?=\/)/, "");
  } catch { return fallback; }
}

function channelForGenerator(channel: string): Channel {
  if (channel === "Phone") return "Call";
  if (channel === "Social posts" || channel === "Referral introductions" || channel === "Educational events") return "LinkedIn";
  return channel as Channel;
}

export function buildCampaign(input: Pick<GrowthConfig, "audience" | "objective" | "channels" | "structure" | "context" | "agentName" | "businessName">) {
  const isRecruitment = input.objective === "Recruit prospective funding agents";
  const isReferral = input.objective === "Develop professional referral relationships" || input.structure === "Referral introduction sequence";
  const target = isRecruitment ? "prospective funding agents" : input.audience;
  const count = input.structure === "Single-touch outreach" ? 1 : input.structure === "Five-touch sequence" ? 5 : input.structure === "Educational nurture sequence" ? 4 : input.structure === "Referral introduction sequence" ? 3 : 3;
  const chosenChannels = input.channels.length ? input.channels : ["Email"];
  const destination = resolveCampaignDestination(input.objective);
  const value = isReferral ? "Offer a useful, permission-based funding education conversation that complements the professional’s existing service." : isRecruitment ? "Explore the independent agent role and practical preparation resources." : "Help business owners clarify goals, intended use, timing, and questions before exploring general funding categories.";
  const messages = Array.from({ length: count }, (_, index) => {
    const channel = chosenChannels[index % chosenChannels.length];
    const objective = index === 0 ? (isRecruitment ? "Educational outreach" : isReferral ? "Referral partner introduction" : "Educational outreach") : index === count - 1 ? "Follow-up" : "Re-engagement";
    const body = generateOutreach({ audience: isReferral ? "Referral partner introduction" : target, objective, tone: index === 0 ? "Educational" : "Warm", channel: channelForGenerator(channel), name: "[Name]", business: input.businessName || "[Business]", context: `${input.context} for ${target}` });
    const interval = index === 0 ? "Day 1" : index === 1 ? "After 4–7 days, if appropriate" : `After ${Math.min(index * 7, 21)} days, only if welcomed`;
    return { step: index + 1, channel, interval, body };
  });
  const marketing = generateMarketingAsset({ audience: target, problem: input.context, channel: "LinkedIn", objective: "Educate", tone: "Educational", destination: destination.url });
  const name = `${input.audience} ${input.objective}`;
  return { name, objective: input.objective, audience: target, value, destination, messages, marketing };
}

export function buildReferralKit(professionId: string) {
  const profession = referralProfessions.find((item) => item.id === professionId) ?? referralProfessions[0];
  const sequence = generateReferralSequence(profession.id);
  return [
    `# Referral Partnership Kit — ${profession.name}`,
    "\n## Partnership positioning\n", profession.positioning,
    "\n\n## Customer problems to listen for\n", ...profession.problems.map((problem) => `- ${problem}`),
    "\n## Discussion questions\n", ...profession.questions.map((question) => `- ${question}`),
    "\n## Introductory email and follow-up\n\n", sequence,
    "\n\n## LinkedIn connection\n\nHi [Name], I work with business owners who have questions about general funding paths. I would enjoy learning about your practice and whether permission-based educational resources could be useful to your clients.",
    "\n\n## Phone conversation outline\n\n1. Ask about the customers and goals you serve.\n2. Learn how you prefer outside resources to be introduced.\n3. Describe the educational conversation you can offer, without promising terms or outcomes.\n4. Agree on permission and confidentiality boundaries before any introduction.",
    "\n\n## Meeting agenda\n\n- Understand the professional’s customer context\n- Share the general educational role\n- Discuss client consent and preferred introduction process\n- Choose one resource to review\n- Confirm a follow-up date only if useful",
    "\n\n## Partnership overview\n\nAn optional resource for clients who ask about funding. No partnership or endorsement is assumed. Provider decisions and terms are independent.",
    "\n\n## Objection responses\n\n- **We already have a funding contact:** That makes sense. I can be an additional educational resource only when a client asks.\n- **I cannot share client details:** Please do not. A client can contact me directly if they choose.\n- **Are there referral payments?** No payment or compensation is represented here; any arrangement would require separate current approval and applicable review.",
    "\n\n## First referral conversation checklist\n\n- [ ] Client asked for help or agreed to hear about the resource\n- [ ] Explain roles and boundaries accurately\n- [ ] Obtain explicit permission before sharing details\n- [ ] Share only the approved minimum information\n- [ ] Confirm the client’s preferred next step\n- [ ] Respect opt-outs and confidentiality",
    "\n\n## Customer introduction script\n\n[Client], with your permission, I can introduce you to [Agent] for an educational conversation about general funding paths. You can decide whether to continue and share any details directly.",
    "\n\n## Suggested cadence\n\nInitial conversation; send the promised resource within the agreed timeframe; follow up once only if invited; pause if there is no interest.",
    "\n\n## Funding categories to discuss\n\nUse the current public funding guide to discuss general categories only. A provider determines availability, eligibility, terms, and required documents.",
    "\n\n## Important boundary\n\n", profession.reminder,
  ].join("");
}

export function makeTrackedResourceUrl(resourceId: string, campaign: string) {
  const resource = growthResources.find((item) => item.id === resourceId);
  if (!resource) return null;
  if (!resource.attributionSupported) return resource.url;
  const url = new URL(resource.url);
  url.searchParams.set("utm_source", "agency");
  url.searchParams.set("utm_medium", "campaign");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}

export function buildPartnerCampaignUrl(referralUrl: string | undefined, fields: { campaign: string; utm_source?: string; utm_medium?: string; utm_campaign?: string; utm_content?: string; utm_term?: string }) {
  if (!referralUrl) return "";
  try {
    const url = new URL(referralUrl);
    for (const key of ["campaign", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const) {
      const value = fields[key]?.trim();
      if (value) url.searchParams.set(key, value);
    }
    return url.toString();
  } catch { return ""; }
}

export function buildActivityPlan(config: Pick<GrowthConfig, "audience" | "channels" | "hours" | "sessions" | "conversations" | "followUps" | "relationships" | "durationWeeks" | "mode">) {
  const hours = Math.max(1, Math.min(60, Math.round(config.hours)));
  const sessions = Math.max(1, Math.min(7, Math.round(config.sessions)));
  const weeks = Math.max(1, Math.min(12, Math.round(config.durationWeeks)));
  const blocks = Math.max(1, Math.floor(hours / sessions));
  const work = ["Prepare one useful outreach message and review its accuracy", `Prospect in ${config.audience} through ${config.channels.join(", ") || "one selected channel"}`, `${Math.max(1, Math.round(config.relationships / sessions))} referral relationship check-in(s), with permission`, `Complete up to ${Math.max(1, Math.round(config.followUps / sessions))} agreed follow-up(s)`, "Share one existing educational resource where it fits", "Review what was useful and choose one adjustment for next week"];
  const lines = [`# ${config.mode} — ${weeks}-week activity plan`, `\nAvailable time: ${hours} hours/week (planning assumption)`, `Prospecting sessions: ${sessions}/week`, `Conversation practice target: ${Math.max(0, Math.round(config.conversations))}/week (a personal activity target, not an outcome forecast)`, `Follow-up capacity: ${Math.max(0, Math.round(config.followUps))}/week`, "", "## Weekly schedule (adapt days and block length to your calendar)"];
  for (let i = 0; i < sessions; i++) lines.push(`\n### Session ${i + 1} — ${blocks} hour${blocks === 1 ? "" : "s"}`, ...work.map((task) => `- [ ] ${task}`));
  lines.push("\n## Daily checklist", "- [ ] Confirm channel rules and contact preference before outreach", "- [ ] Send only messages that are appropriate and welcomed", "- [ ] Record the agreed next action privately in your existing workflow", "- [ ] Stop or adjust when asked", "\n## Weekly review", "- Which conversations or resources were useful?", "- What follow-ups did I promise, and when?", "- What should change about the segment, message, or schedule?", "- What will I test next week?", "\nPlanning assumptions only. This schedule does not predict leads, conversion, funding, income, or commissions.");
  return lines.join("\n");
}

export function buildGrowthPack(config: GrowthConfig, campaignDraft: string, referralKit: string, brandCopy: string, resourceIds: string[], activityPlan: string) {
  const resources = resourceIds.map((id) => growthResources.find((item) => item.id === id)).filter((item): item is (typeof growthResources)[number] => Boolean(item));
  return ["# Growth Campaign Pack", "", `Generated locally: ${new Date().toISOString().slice(0, 10)}`, `Target: ${config.audience}`, `Objective: ${config.objective}`, `Channels: ${config.channels.join(", ") || "Not selected"}`, `Cadence: ${config.structure}`, `Context: ${config.context}`, "", "## Campaign and outreach", campaignDraft, "", "## Referral partnership resources", referralKit, "", "## Branded marketing draft", brandCopy, "", "## Educational resources", ...resources.map((item) => `- [${item.title}](${item.url}) — ${item.description} ${item.attributionSupported ? "Supported campaign attribution." : "Educational link; referral attribution is not verified."}`), "", "## Activity schedule", activityPlan, "", "## Follow-up checklist", "- [ ] Confirm permission and channel rules", "- [ ] Personalize placeholders and verify the selected destination", "- [ ] Send only when appropriate and welcomed", "- [ ] Complete the next step that was agreed", "- [ ] Review the plan weekly", "", "## Partner Command handoff", "Use authenticated Partner Command features only through the existing partner account workflow. This public workspace does not create partner identities, referral URLs, or CRM records. See the public system overview: /system", "", "## Training", "- Agent Field Academy: /toolkit/academy", "- Public funding information: https://www.distilledfunding.com/lending", "", "Draft for independent agent use. Not an officially approved Moonshine Capital asset. No funding outcome, provider terms, or compensation is promised."].join("\n");
}

export function escapeSvgText(value: string) { return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]!); }

export function buildPromoSvg(input: { title: string; message: string; agent: string; business: string; layout: GrowthConfig["layout"]; logo?: string }) {
  const dark = input.layout !== "Minimal";
  const bg = dark ? "#111111" : "#f2eedf";
  const fg = dark ? "#f2eedf" : "#111111";
  const lines = [input.title, input.message].flatMap((value) => value.match(/.{1,34}(?:\s|$)/g) ?? [value]).slice(0, 6);
  const logo = input.logo ? `<image href="${input.logo.replace(/"/g, "&quot;")}" x="850" y="80" width="130" height="100" preserveAspectRatio="xMidYMid meet"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080"><rect width="1080" height="1080" fill="${bg}"/><rect x="52" y="52" width="976" height="976" fill="none" stroke="#f5d90a" stroke-width="14"/><text x="100" y="150" fill="#f5d90a" font-family="Arial,sans-serif" font-size="28" font-weight="700">MOONSHINE CAPITAL · EDUCATIONAL DRAFT</text>${logo}${lines.map((line, i) => `<text x="100" y="${300 + i * 92}" fill="${fg}" font-family="Arial,sans-serif" font-size="${i === 0 ? 58 : 38}" font-weight="${i === 0 ? 700 : 400}">${escapeSvgText(line.trim())}</text>`).join("")}<text x="100" y="900" fill="${fg}" font-family="Arial,sans-serif" font-size="28">Prepared by ${escapeSvgText(input.agent || "[Agent name]")} · ${escapeSvgText(input.business || "[Business name]")}</text><text x="100" y="950" fill="${fg}" font-family="Arial,sans-serif" font-size="22">Provider availability, terms, and decisions vary. No outcome is guaranteed.</text></svg>`;
}

export function getGrowthAudiences() { return customerMarkets; }
