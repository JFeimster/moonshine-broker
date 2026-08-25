import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { site } from "@/lib/site";

const operatingLoop = [
  ["01", "Find businesses that need capital"],
  ["02", "Help them access funding options"],
  ["03", "Get paid when customer production occurs"],
  ["04", "Build repeat + referral relationships"],
  ["05", "Scale into a real agency"],
];

const system = [
  ["Capital Page", "Your public client-facing funding identity and lead-capture surface."],
  ["Partner Command", "The authenticated operating desk for pipeline, growth, learning, production, and team activity."],
  ["Product Desk", "A clearer way to navigate funding solutions instead of pretending one product fits every borrower."],
  ["Growth Kit", "Tracking links, QR distribution, campaigns, scripts, marketing assets, and practical outreach tools."],
  ["Training + Sprint", "Launch guidance, scripts, production planning, activity tracking, and a first-30-days operating rhythm."],
  ["Agency Path", "Move from personal production to consistent producer, team builder, operator, and leader."],
];

const fits = [
  "Sales professionals who can turn conversations into follow-up",
  "Entrepreneurs who want a low-overhead service business",
  "CPAs, consultants, lenders, insurance, real estate, and business professionals",
  "Part-time builders willing to work a consistent activity plan",
  "Existing funding brokers who need better infrastructure",
  "Future team builders who want to learn a repeatable operating system",
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b-2 border-black py-14 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
              <div>
                <div className="command-label">Distilled Funding / Agency</div>
                <h1 className="display-type mt-5 max-w-6xl text-7xl sm:text-8xl lg:text-[8.5rem]">
                  Build a <span className="marker">funding business.</span>
                </h1>
                <p className="mt-7 max-w-3xl text-xl font-bold leading-8 sm:text-2xl">
                  The products. The technology. The training. The operating infrastructure. Already built.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={site.applyUrl}>Start Your Funding Agency</Button>
                  <Button href="/how-it-works" variant="secondary">See How It Works</Button>
                </div>
              </div>

              <aside className="brutal-card-dark p-7">
                <div className="command-label text-[#f5d90a]">The deal</div>
                <p className="mt-5 text-2xl font-black uppercase leading-tight">
                  You bring relationships, prospecting, conversations, client acquisition, and follow-up.
                </p>
                <div className="my-6 border-t border-zinc-700" />
                <p className="text-sm leading-6 text-zinc-300">
                  The ecosystem supplies products, provider access, submission infrastructure, a public funding page, lead attribution, Partner Command, tools, training, scripts, marketing assets, and agency-building systems.
                </p>
              </aside>
            </div>
          </Container>
        </section>

        <section className="border-b-2 border-black bg-[#f5d90a] py-10">
          <Container>
            <div className="grid gap-0 border-2 border-black bg-[#f2eedf] lg:grid-cols-5">
              {operatingLoop.map(([number, label], index) => (
                <div key={number} className={`p-5 ${index < operatingLoop.length - 1 ? "border-b-2 border-black lg:border-b-0 lg:border-r-2" : ""}`}>
                  <div className="command-label">{number}</div>
                  <div className="mt-3 text-lg font-black uppercase leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-24">
          <Container>
            <div className="max-w-4xl">
              <div className="command-label">The business model</div>
              <h2 className="display-type mt-4 text-6xl sm:text-8xl">You do not need to become the bank.</h2>
              <p className="mt-7 text-lg leading-8">
                Your job is business development: identify a capital need, start the conversation, connect the client to the right funding process, keep communication moving, and build the relationship after funding. Provider and platform specialists handle the parts that should not depend on a brand-new agent becoming an underwriter overnight.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[['PROSPECT', 'Talk to business owners and referral partners.'], ['ROUTE', 'Move a real funding need into the appropriate application and provider path.'], ['RELATIONSHIP', 'Follow up, serve the client, and create repeat + referral business.']].map(([t,d]) => (
                <div className="brutal-card p-7" key={t}>
                  <div className="command-label">{t}</div>
                  <p className="mt-4 text-xl font-black uppercase leading-tight">{d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y-2 border-black bg-black py-16 text-[#f2eedf] sm:py-24">
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="command-label text-[#f5d90a]">Your operating system</div>
                <h2 className="display-type mt-4 max-w-5xl text-6xl sm:text-8xl">Infrastructure beats improvisation.</h2>
              </div>
              <Button href="/system" variant="secondary">See the System</Button>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {system.map(([title, body]) => (
                <article key={title} className="border-2 border-[#f2eedf] p-6">
                  <h3 className="text-xl font-black uppercase">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">{body}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="command-label">First 30 days</div>
                <h2 className="display-type mt-4 text-6xl sm:text-8xl">Launch before you overthink it.</h2>
                <div className="mt-8 grid gap-3">
                  {[
                    ["Day 1", "Identity + system"],
                    ["Week 1", "Learn the business"],
                    ["Week 2", "Start conversations"],
                    ["Week 3", "Build pipeline"],
                    ["Week 4", "Create consistency"],
                  ].map(([when, action]) => (
                    <div className="flex items-center justify-between border-t-2 border-black py-4" key={when}>
                      <span className="command-label">{when}</span>
                      <span className="text-xl font-black uppercase">{action}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7"><Button href="/start" variant="secondary">See the 30-Day Path</Button></div>
              </div>

              <div className="brutal-card p-7 sm:p-9">
                <div className="command-label">Who this fits</div>
                <h3 className="mt-4 text-4xl font-black uppercase tracking-[-.04em]">People willing to build a pipeline, not collect motivational screenshots.</h3>
                <ul className="mt-7 grid gap-4 text-sm font-semibold">
                  {fits.map((fit) => <li key={fit} className="border-t border-black pt-4">→ {fit}</li>)}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t-2 border-black bg-[#f5d90a] py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="command-label">Start</div>
                <h2 className="display-type mt-3 max-w-5xl text-6xl sm:text-8xl">Your agency does not need another logo. It needs its first conversation.</h2>
                <p className="mt-6 max-w-2xl text-lg font-semibold">Join, create your Funding Agent record, then move into profile provisioning and the launch workflow.</p>
              </div>
              <Button href={site.applyUrl} variant="secondary">Start Your Funding Agency</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
