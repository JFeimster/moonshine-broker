import test from "node:test";
import assert from "node:assert/strict";
import { growthResources } from "../content/growth-resources";
import { buildActivityPlan, buildCampaign, buildGrowthPack, buildPartnerCampaignUrl, buildPromoSvg, buildReferralKit, defaultGrowthConfig, makeTrackedResourceUrl, resolveBrandCta, resolveCampaignDestination } from "../lib/growth";
import { destinations } from "../content/site";

test("campaign objectives generate distinct messaging and audience-correct destinations", () => {
  const owner = buildCampaign({ ...defaultGrowthConfig, objective: "Acquire business-owner conversations", audience: "Construction and trades" });
  const agents = buildCampaign({ ...defaultGrowthConfig, objective: "Recruit prospective funding agents" });
  const referral = buildCampaign({ ...defaultGrowthConfig, objective: "Develop professional referral relationships" });
  assert.match(owner.destination.url, /distilledfunding\.com\/lending/);
  assert.match(referral.destination.url, /distilledfunding\.com\/partners/);
  assert.equal(owner.destination.tracked, false);
  assert.equal(new URL(agents.destination.url).origin + new URL(agents.destination.url).pathname, destinations.application.current);
  assert.equal(agents.destination.tracked, true);
  assert.match(agents.destination.url, /utm_campaign=/);
  assert.match(referral.messages[0].body, /permission-based/);
  assert.match(owner.messages[0].body, /Construction and trades/);
  assert.equal(owner.messages.length, 3);
});

test("campaign channel sequence maps chosen channels and editable package has cadence and checklist", () => {
  const campaign = buildCampaign({ ...defaultGrowthConfig, channels: ["SMS", "Phone"], structure: "Five-touch sequence" });
  assert.deepEqual(campaign.messages.map((step) => step.channel), ["SMS", "Phone", "SMS", "Phone", "SMS"]);
  assert.equal(campaign.messages.length, 5);
  assert.match(campaign.messages[0].body, /reply stop/i);
  assert.match(campaign.messages[1].body, /this is \[your name\]/i);
});

test("referral kits personalize positioning, follow-up, and profession boundaries", () => {
  const accountant = buildReferralKit("accountant");
  const equipment = buildReferralKit("equipment");
  assert.match(accountant, /Accountants and bookkeepers/);
  assert.match(accountant, /client’s permission/i);
  assert.match(accountant, /Introductory email and follow-up/);
  assert.match(accountant, /Meeting agenda/);
  assert.match(equipment, /equipment purchase/);
  assert.notEqual(accountant, equipment);
  assert.doesNotMatch(accountant, /guaranteed commission|preferred lender/i);
});

test("marketing assets safely compose branded SVG copy", () => {
  const svg = buildPromoSvg({ title: "Retail & e-commerce", message: "Clarify <goals> & timing", agent: "A. Agent", business: "Example Co", layout: "Bold" });
  assert.match(svg, /<svg/);
  assert.match(svg, /MOONSHINE CAPITAL/);
  assert.match(svg, /Retail &amp; e-commerce/);
  assert.match(svg, /Clarify &lt;goals&gt; &amp; timing/);
  assert.match(svg, /No outcome is guaranteed/);
});

test("resource catalog contains verified routes and non-attributed links remain unchanged", () => {
  assert.ok(growthResources.some((item) => item.url === destinations.publicFundingInfo.current));
  assert.ok(growthResources.some((item) => item.url === "/toolkit/discovery"));
  assert.equal(makeTrackedResourceUrl("funding-guide", "campaign_a"), destinations.publicFundingInfo.current);
  assert.equal(makeTrackedResourceUrl("missing", "campaign_a"), null);
});

test("partner campaign attribution requires an existing referral URL and preserves existing parameters", () => {
  assert.equal(buildPartnerCampaignUrl(undefined, { campaign: "spring" }), "");
  const result = new URL(buildPartnerCampaignUrl("https://partner.example/ref?partner_id=p42&keep=yes&campaign=old", { campaign: "spring", utm_source: "agency" }));
  assert.equal(result.searchParams.get("partner_id"), "p42");
  assert.equal(result.searchParams.get("keep"), "yes");
  assert.equal(result.searchParams.get("campaign"), "spring");
  assert.equal(result.searchParams.get("utm_source"), "agency");
});

test("activity plan is repeatable and describes personal assumptions without forecasting outcomes", () => {
  const plan = buildActivityPlan(defaultGrowthConfig);
  assert.equal(plan, buildActivityPlan(defaultGrowthConfig));
  assert.match(plan, /Weekly review/);
  assert.match(plan, /planning assumption/);
  assert.match(plan, /does not predict leads, conversion, funding, income, or commissions/);
});

test("growth pack assembles edited outputs, resource URLs, schedule, and authenticated handoff boundary", () => {
  const campaign = buildCampaign(defaultGrowthConfig);
  const plan = buildActivityPlan(defaultGrowthConfig);
  const pack = buildGrowthPack(defaultGrowthConfig, "CUSTOM CAMPAIGN DRAFT", "REFERRAL KIT", "BRAND ASSETS", ["funding-guide"], plan);
  assert.match(pack, /CUSTOM CAMPAIGN DRAFT/);
  assert.match(pack, /REFERRAL KIT/);
  assert.match(pack, /BRAND ASSETS/);
  assert.match(pack, /https:\/\/www\.distilledfunding\.com\/lending/);
  assert.match(pack, /does not create partner identities/);
  assert.match(pack, /Weekly review/);
  assert.equal(campaign.messages.length, 3);
});

test("routing keeps business-owner funding education separate from agent application", () => {
  const owner = resolveCampaignDestination("Re-engage existing contacts");
  const agent = resolveCampaignDestination("Recruit prospective funding agents");
  assert.equal(owner.url, destinations.publicFundingInfo.current);
  assert.ok(agent.url.startsWith(destinations.application.current));
  assert.equal(new URL(agent.url).searchParams.get("email"), null);
});

test("brand CTAs accept only verified destinations compatible with campaign audience", () => {
  assert.equal(resolveBrandCta(destinations.application.current, "Acquire business-owner conversations"), destinations.publicFundingInfo.current);
  assert.equal(resolveBrandCta("/toolkit/discovery?email=private@example.com", "Acquire business-owner conversations"), "/toolkit/discovery");
  assert.equal(resolveBrandCta("https://unverified.example/offer", "Acquire business-owner conversations"), destinations.publicFundingInfo.current);
  assert.ok(resolveBrandCta(destinations.application.current, "Recruit prospective funding agents").startsWith(destinations.application.current));
});
