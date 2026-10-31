import assert from "node:assert/strict";
import test from "node:test";
import { assessReadiness, preparationPlan, questions, type Answers } from "../lib/readiness";
import { launchWeeks, thirtyDayPlan } from "../content/launch";
import { ctas } from "../content/ctas";
import { destinations } from "../content/site";
import { applicationTarget, captureAttribution, pickAttribution } from "../lib/attribution";
import { buildDiscoverySummary, buildLaunchPack, generateMarketingAsset, generateOutreach, generateReferralSequence, mapDiscoveryCategories } from "../lib/toolkit";
import sitemap from "../app/sitemap";

const answers = (value: number): Answers => Object.fromEntries(questions.map(({ key }) => [key, value]));

test("readiness outcomes differ for materially different responses", () => {
  assert.equal(assessReadiness(answers(2)).status, "READY TO BUILD A PROSPECTING PLAN");
  assert.equal(assessReadiness(answers(1)).status, "FOUNDATIONS TO DEVELOP");
  assert.equal(assessReadiness(answers(0)).status, "EXPLORE THE ROLE BEFORE APPLYING");
});

test("operating expectations prevent a ready status and gaps change actions", () => {
  const base = answers(2);
  const weak = { ...base, expectations: 0, process: 0 };
  const result = assessReadiness(weak);
  assert.notEqual(result.status, "READY TO BUILD A PROSPECTING PLAN");
  assert.match(result.actions[0], /independent-role|prospect list/);
  assert.equal(result.actions.length, 3);
  assert.throws(() => assessReadiness({ audience: 1 }), /Answer all six/);
});

test("plans are deterministic and contain no personal responses", () => {
  const first = preparationPlan(answers(1));
  assert.equal(first, preparationPlan(answers(1)));
  assert.match(first, /educational guidance only/);
  assert.equal(thirtyDayPlan(), thirtyDayPlan());
  assert.equal(launchWeeks.length, 4);
  assert.equal(launchWeeks.reduce((sum, week) => sum + week.items.length, 0), 20);
  assert.match(thirtyDayPlan(), /Provider decisions/);
});

test("conversion destinations retain the canonical application and public command boundary", () => {
  assert.equal(ctas.howItWorks.href, "/how-it-works");
  assert.equal(ctas.readiness.href, "/start#agency-readiness");
  assert.equal(ctas.apply.href, "/apply");
  assert.equal(destinations.application.current, "https://tally.so/r/rjM6do");
  assert.equal(ctas.partnerCommand.href, "/system");
  assert.equal(destinations.partnerCommand.available, false);
  assert.equal(destinations.capitalPages.available, false);
});

test("Tally attribution retains supported identifiers and rejects unrelated query values", () => {
  const incoming = new URLSearchParams("utm_source=advisor&utm_medium=email&utm_campaign=fall&referral_code=abc&partner_id=p42&source=referral&campaign=launch&gclid=click123&fbclid=fb123&msclkid=ms123&email=private%40example.com");
  const target = applicationTarget(incoming);
  assert.equal(target.origin + target.pathname, destinations.application.current);
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "referral_code", "partner_id", "source", "campaign", "gclid", "fbclid", "msclkid"]) {
    assert.equal(target.searchParams.get(key), incoming.get(key));
  }
  assert.equal(target.searchParams.has("email"), false);
  assert.equal(pickAttribution(incoming).has("email"), false);
  assert.equal(applicationTarget({}).searchParams.get("utm_source"), "agency");
  assert.equal(captureAttribution(new URLSearchParams("utm_source=new"), new URLSearchParams("utm_source=old&gclid=stale")).toString(), "utm_source=new");
  assert.equal(captureAttribution(new URLSearchParams(), new URLSearchParams("utm_source=old&gclid=click")).toString(), "utm_source=old&gclid=click");
});

test("outreach templates adapt to audience, objective, tone, and channel", () => {
  const owner = generateOutreach({ audience: "Business owner", objective: "Initial introduction", tone: "Warm", channel: "Email", name: "Morgan", business: "Northstar HVAC", context: "replacing service vehicles" });
  const partner = generateOutreach({ audience: "Referral partner introduction", objective: "Initial introduction", tone: "Direct", channel: "LinkedIn", name: "Morgan", context: "equipment planning" });
  assert.match(owner, /Subject:/);
  assert.match(owner, /Northstar HVAC/);
  assert.match(owner, /provider determines availability/);
  assert.match(generateOutreach({ audience: "Business owner", objective: "Follow-up", tone: "Direct", channel: "Email", context: "the equipment quote" }), /following up as agreed/);
  assert.match(partner, /permission-based introduction/);
  assert.doesNotMatch(generateOutreach({ audience: "Business owner", objective: "Appointment reminder", tone: "Warm", channel: "SMS", name: "Morgan", context: "our planning call" }), /Subject:/);
  assert.match(generateOutreach({ audience: "Business owner", objective: "Responsible objection handling", tone: "Educational", channel: "Voicemail", context: "timing concerns" }), /provider determines terms/);
});

test("referral profiles and follow-up sequences vary by profession and preserve consent boundaries", () => {
  const accountant = generateReferralSequence("accountant", "Jordan");
  const dealer = generateReferralSequence("equipment", "Jordan");
  assert.match(accountant, /tax and accounting advice/);
  assert.match(dealer, /equipment purchase/);
  assert.notEqual(accountant, dealer);
  assert.match(accountant, /permission/);
  assert.match(accountant, /Do not imply a referral fee/);
});

test("discovery mapping returns educational categories and a safe conversation summary", () => {
  assert.deepEqual(mapDiscoveryCategories({ objective: "Replace a truck", use: "Equipment and vehicle purchase" }).map((item) => item.name), ["Equipment Financing"]);
  assert.deepEqual(mapDiscoveryCategories({ objective: "Buy an existing business", use: "Acquisition" }).map((item) => item.name), ["Acquisition Financing"]);
  assert.deepEqual(mapDiscoveryCategories({ objective: "Plan ahead", use: "Unclear" }).map((item) => item.name), ["Credit + Capital Strategy"]);
  const summary = buildDiscoverySummary({ industry: "Construction", objective: "Growth", use: "Purchase equipment", timeline: "60 days", amount: "$50k–$100k", context: "Seasonal operations" });
  assert.match(summary, /CATEGORIES TO INVESTIGATE/);
  assert.match(summary, /What asset is being acquired/);
  assert.match(summary, /invoice, asset details/);
  assert.match(summary, /Do not include SSNs, bank credentials/);
  assert.doesNotMatch(summary, /approval odds|eligible/);
});

test("marketing assets use selected channel and avoid guarantees or unsupported rates", () => {
  const linkedin = generateMarketingAsset({ audience: "Retail owners", problem: "seasonal inventory", channel: "LinkedIn", objective: "Educate", tone: "Educational", destination: "Read the guide" });
  const referral = generateMarketingAsset({ audience: "CPAs", problem: "client expansion plans", channel: "Referral campaign", objective: "Invite a referral", tone: "Warm", destination: "Start a conversation" });
  assert.match(linkedin, /#SmallBusiness/);
  assert.match(linkedin, /providers determine availability/);
  assert.match(generateMarketingAsset({ audience: "Retail owners", problem: "inventory planning", channel: "Educational caption", objective: "Educate", tone: "Educational", destination: "Review the guide" }), /Clarify the goal, use, and timing/);
  assert.match(referral, /Touch 1 — Introduce/);
  assert.match(referral, /permission/);
  assert.doesNotMatch(`${linkedin} ${referral}`, /guaranteed rate|approved today|guaranteed funding/i);
});

test("launch pack includes chosen market, channel, referral, discovery, month plan, and canonical apply route", () => {
  const pack = buildLaunchPack({ market: "Construction and trades", channels: ["Owner referrals", "LinkedIn"], professionId: "equipment" });
  assert.match(pack, /Construction and trades/);
  assert.match(pack, /Owner referrals, LinkedIn/);
  assert.match(pack, /Equipment dealers/);
  assert.match(pack, /30-day execution plan/);
  assert.match(pack, /tally\.so\/r\/rjM6do/);
  assert.match(pack, /\[Funding categories\]\(\/products\)/);
});

test("sitemap preserves existing public routes and includes toolkit and growth utilities", () => {
  const routes = sitemap().map((item) => new URL(item.url).pathname);
  for (const existing of ["/", "/start", "/get-clients", "/products", "/how-it-works", "/apply"]) assert.ok(routes.includes(existing));
  for (const toolkit of ["/toolkit", "/toolkit/outreach", "/toolkit/referrals", "/toolkit/discovery", "/toolkit/marketing", "/toolkit/academy", "/toolkit/launch-pack", "/toolkit/growth", "/toolkit/growth/campaigns", "/toolkit/growth/referral-kits", "/toolkit/growth/brand-studio", "/toolkit/growth/distribution", "/toolkit/growth/activity"]) assert.ok(routes.includes(toolkit));
});
