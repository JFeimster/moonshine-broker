import assert from "node:assert/strict";
import test from "node:test";
import { createCampaignHandoff, isCampaignHandoff, parseCampaignHandoff } from "../lib/campaign-handoff";
import { defaultGrowthConfig } from "../lib/growth";
import { growthResources } from "../content/growth-resources";

const sample = createCampaignHandoff({
  config: defaultGrowthConfig,
  campaign: { name: "Trades education", objective: defaultGrowthConfig.objective, audience: "Construction and trades", messages: [{ step: 1, channel: "Email", interval: "Day 1", body: "A sample outreach draft." }] },
  resources: growthResources.filter((resource) => defaultGrowthConfig.resourceIds.includes(resource.id)).map(({ id, title, url }) => ({ id, title, url: new URL(url, "https://moonshine-broker.vercel.app").toString() })),
  outreach: "Outreach draft", referralKit: "Referral kit", marketing: "Marketing draft", activityPlan: "Activity plan"
});

test("versioned campaign handoff round-trips without partner identity", () => {
  const text = JSON.stringify(sample);
  assert.deepEqual(parseCampaignHandoff(text), sample);
  assert.equal("partner_id" in sample.attribution, false);
  assert.equal("ref" in sample.attribution, false);
  assert.equal(isCampaignHandoff({ ...sample, partner_id: "untrusted" }), false);
});

test("rejects malformed, unsupported, oversized, and unapproved resource URLs", () => {
  assert.equal(parseCampaignHandoff("{"), null);
  assert.equal(parseCampaignHandoff(JSON.stringify({ ...sample, version: 2 })), null);
  assert.equal(parseCampaignHandoff(JSON.stringify({ ...sample, campaign: { ...sample.campaign, resources: [{ id: "bad", title: "Bad", url: "javascript:alert(1)" }] } })), null);
  assert.equal(parseCampaignHandoff(" ".repeat(256_001)), null);
});
