import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import LeadForm from "@/components/LeadForm";
import { AccordionItem } from "@/components/Accordion";

export default function Page() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                Build a Funding Agency. Not a “Side Hustle.”
              </h1>
              <p className="mt-5 text-lg leading-8 text-zinc-700">
                Join our broker team and get the scripts, systems, and support to connect real business owners with real
                capital—while you stack commissions like a professional.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#kit" variant="primary">Get the Broker Starter Kit</Button>
                <Button href="/book" variant="secondary">Book a 15-Min Fit Check</Button>
              </div>

              <p className="mt-4 text-sm text-zinc-500">
                No office. No license required for many products. Real work required. (If you want “passive income,” this isn’t it.)
              </p>
            </div>

            <div id="kit">
              <LeadForm />
            </div>
          </div>
        </Container>
      </section>

      {/* WHO THIS IS FOR */}
      <Section id="for" title="This is for operators.">
        <p className="max-w-3xl text-zinc-700">
          You don’t need a finance degree. You need follow-through, curiosity, and the ability to talk to business owners like a human.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-zinc-50 p-6 ring-1 ring-zinc-200">
            <h3 className="text-lg font-bold">For</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>Sales pros, consultants, freelancers, and networkers who want a <b>real</b> commission skill</li>
              <li>Entrepreneurs who can commit to <b>daily outreach</b> and consistent follow-up</li>
              <li>People who’d rather build a pipeline than chase “motivation”</li>
              <li>Anyone who wants to become <b>the funding person</b> in their town or niche</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 ring-1 ring-zinc-200">
            <h3 className="text-lg font-bold">Not for</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>“I’m just browsing opportunities”</li>
              <li>“I want passive income”</li>
              <li>“I’ll start once I feel ready”</li>
              <li>People allergic to tracking, follow-up, and basic professionalism</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* PROBLEM */}
      <Section title="Most affiliate teams fail you.">
        <div className="max-w-3xl space-y-4 text-zinc-700">
          <p>
            They hand you a link and a dream. No process. No standards. No feedback loop. Then they blame <i>you</i> when nothing closes.
          </p>
          <p>
            We do it the opposite way: systems first, skill second, commissions third (but steadily).
          </p>
        </div>
      </Section>

      {/* PROMISE */}
      <Section title="You get an Operating System—not “training videos.”">
        <p className="max-w-3xl text-zinc-700">Everything you need to start taking action immediately.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["Broker Scripts Library", "Cold outreach, warm follow-up, objection handling, and “book the call” language that doesn’t sound desperate."],
            ["Deal Triage Scorecard", "Know if a business is fundable in minutes—so you don’t waste your life."],
            ["Pipeline + Follow-Up System", "A simple CRM structure and daily routine that turns “maybe” into money."],
            ["Territory Commander Playbook", "Zip codes + niches + a 100-business starter ledger so you always know who to contact next."],
            ["Live Support + Deal Reviews", "Bring real deals. Get real feedback. Improve fast."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl bg-white p-6 ring-1 ring-zinc-200 shadow-soft">
              <h3 className="font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how" title="Start in 3 steps.">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["Step 1: Get the Broker Starter Kit", "Download the scripts + tracker + territory template."],
            ["Step 2: Book a 15-Minute Fit Check", "We’ll confirm you’re a match and map your first 7 days."],
            ["Step 3: Run the 7-Day Sprint", "Daily outreach, daily tracking, fast feedback. You’ll know quickly if this is your lane."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl bg-zinc-50 p-6 ring-1 ring-zinc-200">
              <h3 className="font-bold">{t}</h3>
              <p className="mt-2 text-sm text-zinc-700">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button href="#kit" variant="primary">Get the Starter Kit</Button>
        </div>
      </Section>

      {/* STANDARDS */}
      <Section id="standards" title="What we expect (so you actually win).">
        <div className="max-w-3xl space-y-5 text-zinc-700">
          <p>This isn’t complicated. It’s consistent.</p>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li><b>10 outreaches/day</b> (or a weekly equivalent if you batch)</li>
            <li>Track your pipeline (if it’s in your head, it’s fiction)</li>
            <li>Follow up like a professional (deals close after “no”)</li>
            <li>Learn the basics of fundability (we give you the scorecard)</li>
            <li>Bring questions, bring deals, bring honesty</li>
          </ul>

          <div className="rounded-3xl bg-zinc-950 p-6 text-white shadow-soft">
            <p className="text-sm leading-6">
              If you do the work, you’ll get support. If you don’t, you’ll get silence. That’s not harsh—it’s respectful.
            </p>
          </div>
        </div>
      </Section>

      {/* CREDIBILITY (Option A) */}
      <Section title="Real businesses need capital every day.">
        <div className="max-w-3xl text-zinc-700">
          <p>
            Most small businesses experience cash flow crunches, growth opportunities, or emergency expenses. They don’t need motivation—they need options.
          </p>

          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm">
            <li>Multi-product approach (not one-trick pony)</li>
            <li>Process-driven qualification</li>
            <li>Focus on speed + clarity + ethics</li>
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="Questions everyone asks (and pretends they didn’t).">
        <div className="grid gap-3">
          <AccordionItem
            q="Do I need a license?"
            a="Often no, depending on products and how you operate. We’ll guide you on best practices and staying clean."
          />
          <AccordionItem
            q="Is this part-time friendly?"
            a="Yes—if you’re consistent. The work can be batched. The follow-up can’t be “whenever.”"
          />
          <AccordionItem
            q="What if I don’t have a network?"
            a="Then you build one. We give you a territory plan + lead ledger template so you’re never guessing."
          />
          <AccordionItem
            q="How do I get paid?"
            a="Commissions vary by product and deal. We’ll show you the realistic timeline and what affects payout speed."
          />
          <AccordionItem
            q="What makes someone fail?"
            a="No outreach, no follow-up, no tracking. The “I’m learning” phase becomes a lifestyle."
          />
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="py-16">
        <Container>
          <div className="rounded-3xl bg-zinc-50 p-8 ring-1 ring-zinc-200">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to build your pipeline?</h2>
            <p className="mt-3 max-w-2xl text-zinc-700">
              Download the Broker Starter Kit, run the first week, and you’ll know exactly where you stand.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="#kit" variant="primary">Get the Broker Starter Kit</Button>
              <Button href="/book" variant="secondary">Book a 15-Min Fit Check</Button>
            </div>
            <p className="mt-4 text-sm text-zinc-600">We’re building a team of operators. If that’s you, welcome.</p>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
