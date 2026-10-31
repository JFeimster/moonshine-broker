import { campaignChannels, campaignObjectives, campaignStructures, type GrowthConfig } from "@/lib/growth";
import { growthResources } from "@/content/growth-resources";

export const campaignHandoffSchema = "moonshine.agency.campaign" as const;
export const campaignHandoffVersion = 1 as const;
export const campaignHandoffMaxBytes = 256_000;

export type CampaignHandoff = {
  schema: typeof campaignHandoffSchema;
  version: typeof campaignHandoffVersion;
  campaign: {
    config: GrowthConfig;
    name: string;
    objective: string;
    audience: string;
    channels: string[];
    sequence: { step: number; channel: string; interval: string; body: string }[];
    resources: { id: string; title: string; url: string }[];
    assets: { outreach: string; referralKit: string; marketing: string; activityPlan: string };
  };
  attribution: { status: "unassigned" };
};

export function createCampaignHandoff(input: {
  config: GrowthConfig;
  campaign: { name: string; objective: string; audience: string; messages: CampaignHandoff["campaign"]["sequence"] };
  resources: CampaignHandoff["campaign"]["resources"];
  outreach: string;
  referralKit: string;
  marketing: string;
  activityPlan: string;
}): CampaignHandoff {
  return {
    schema: campaignHandoffSchema,
    version: campaignHandoffVersion,
    campaign: {
      config: input.config,
      name: input.campaign.name,
      objective: input.campaign.objective,
      audience: input.campaign.audience,
      channels: [...input.config.channels],
      sequence: input.campaign.messages,
      resources: input.resources,
      assets: { outreach: input.outreach, referralKit: input.referralKit, marketing: input.marketing, activityPlan: input.activityPlan }
    },
    attribution: { status: "unassigned" }
  };
}

const isRecord = (value: unknown): value is Record<string, unknown> => Boolean(value && typeof value === "object" && !Array.isArray(value));
const boundedString = (value: unknown, max: number) => typeof value === "string" && value.length <= max;
const hasOnlyKeys = (value: Record<string, unknown>, keys: string[]) => Object.keys(value).every((key) => keys.includes(key));

export function isGrowthConfig(value: unknown): value is GrowthConfig {
  if (!isRecord(value)) return false;
  const stringFields = ["audience", "structure", "context", "agentName", "businessName", "professionId"] as const;
  const countFields = ["hours", "sessions", "conversations", "followUps", "relationships", "durationWeeks"] as const;
  return hasOnlyKeys(value, [...stringFields, "objective", "layout", "mode", ...countFields, "channels", "resourceIds"]) &&
    stringFields.every((key) => boundedString(value[key], key === "context" ? 500 : 120)) &&
    campaignObjectives.includes(value.objective as typeof campaignObjectives[number]) &&
    campaignStructures.includes(value.structure as typeof campaignStructures[number]) &&
    ["Professional", "Bold", "Minimal"].includes(String(value.layout)) &&
    ["Part-time agent", "Consistent weekly operator", "Full-time agency builder"].includes(String(value.mode)) &&
    countFields.every((key) => Number.isFinite(value[key]) && (value[key] as number) >= 0 && (value[key] as number) <= 1000) &&
    Array.isArray(value.channels) && value.channels.length <= campaignChannels.length && value.channels.every((item) => campaignChannels.includes(item as typeof campaignChannels[number])) &&
    Array.isArray(value.resourceIds) && value.resourceIds.length <= growthResources.length && value.resourceIds.every((item) => growthResources.some((resource) => resource.id === item));
}

export function isCampaignHandoff(value: unknown): value is CampaignHandoff {
  if (!isRecord(value) || !hasOnlyKeys(value, ["schema", "version", "campaign", "attribution"]) || value.schema !== campaignHandoffSchema || value.version !== campaignHandoffVersion || !isRecord(value.campaign) || !isRecord(value.campaign.assets) || !isRecord(value.attribution)) return false;
  const campaign = value.campaign as Record<string, unknown>;
  const assets = campaign.assets as Record<string, unknown>;
  if (!hasOnlyKeys(campaign, ["config", "name", "objective", "audience", "channels", "sequence", "resources", "assets"]) || !hasOnlyKeys(assets, ["outreach", "referralKit", "marketing", "activityPlan"]) || !hasOnlyKeys(value.attribution, ["status"]) || !isGrowthConfig(campaign.config) || value.attribution.status !== "unassigned") return false;
  const config = campaign.config as GrowthConfig;
  if (!["name", "objective", "audience"].every((key) => boundedString(campaign[key], 300))) return false;
  if (!Array.isArray(campaign.channels) || campaign.channels.length > campaignChannels.length || !campaign.channels.every((item) => campaignChannels.includes(item as typeof campaignChannels[number]))) return false;
  if (!Array.isArray(campaign.sequence) || campaign.sequence.length > 12 || !campaign.sequence.every((item) => isRecord(item) && hasOnlyKeys(item, ["step", "channel", "interval", "body"]) && Number.isInteger(item.step) && boundedString(item.channel, 80) && boundedString(item.interval, 120) && boundedString(item.body, 6000))) return false;
  if (!Array.isArray(campaign.resources) || campaign.resources.length > growthResources.length || !campaign.resources.every((item) => {
    if (!isRecord(item) || !hasOnlyKeys(item, ["id", "title", "url"]) || !boundedString(item.id, 80) || !boundedString(item.title, 200) || !boundedString(item.url, 2048)) return false;
    const resource = growthResources.find((candidate) => candidate.id === item.id);
    if (!resource || resource.title !== item.title) return false;
    try { return new URL(item.url as string, "https://moonshine-broker.vercel.app").href === new URL(resource.url, "https://moonshine-broker.vercel.app").href; }
    catch { return false; }
  })) return false;
  const resources = campaign.resources as CampaignHandoff["campaign"]["resources"];
  const channels = campaign.channels as string[];
  if (campaign.objective !== config.objective || channels.length !== config.channels.length || channels.some((channel, index) => channel !== config.channels[index])) return false;
  if (config.resourceIds.length !== resources.length || config.resourceIds.some((id) => !resources.some((resource) => resource.id === id))) return false;
  return ["outreach", "referralKit", "marketing", "activityPlan"].every((key) => boundedString(assets[key], 40_000));
}

export function parseCampaignHandoff(text: string): CampaignHandoff | null {
  if (new TextEncoder().encode(text).byteLength > campaignHandoffMaxBytes) return null;
  try {
    const value: unknown = JSON.parse(text);
    return isCampaignHandoff(value) ? value : null;
  } catch { return null; }
}
