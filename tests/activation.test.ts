import assert from "node:assert/strict";
import test from "node:test";
import { assessReadiness, preparationPlan, questions, type Answers } from "../lib/readiness";
import { launchWeeks, thirtyDayPlan } from "../content/launch";
import { ctas } from "../content/ctas";
import { destinations } from "../content/site";
import { applicationTarget, captureAttribution, pickAttribution } from "../lib/attribution";

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
