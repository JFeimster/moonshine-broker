import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { pages } from "@/content/pages";
import { applicationTarget } from "@/lib/attribution";

export const metadata: Metadata = { title: pages.apply.title, description: pages.apply.description, alternates: { canonical: "/apply" } };

export default async function ApplyPage({ searchParams }: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const incoming = await searchParams;
  const target = applicationTarget(incoming);

  return <>
    <Header />
    <main>
      <section className="apply-hero border-b-2 border-black py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <div className="command-label">{pages.apply.eyebrow} / Moonshine Capital</div>
              <h1 className="display-type mt-5 max-w-5xl text-5xl sm:text-7xl lg:text-8xl">Start building your funding business.</h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-7 sm:text-lg sm:leading-8">{pages.apply.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={target.toString()}>Continue to the Application <span aria-hidden="true">↗</span></Button>
                <Button href="/how-it-works" variant="secondary">Review How It Works</Button>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide">Opens our existing secure Tally application</p>
            </div>
            <aside className="border-2 border-black bg-[#f2eedf] p-6 shadow-[6px_6px_0_#000] sm:p-8">
              <div className="command-label">Before you apply</div>
              <h2 className="mt-4 text-2xl font-black uppercase tracking-tight">A business development role. A real operating system.</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6">
                <li className="border-t border-black/40 pt-3">Independent agent participation, subject to onboarding and current program requirements.</li>
                <li className="border-t border-black/40 pt-3">Customer acquisition and client follow-through are part of the work.</li>
                <li className="border-t border-black/40 pt-3">Income, funding approval, terms, and success are not guaranteed.</li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>
      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {pages.apply.sections[0].items?.map((item, index) => <div key={item} className="border-t-2 border-black pt-4">
              <div className="command-label">Step 0{index + 1}</div>
              <p className="mt-3 text-lg font-black uppercase leading-tight">{item}</p>
            </div>)}
          </div>
        </Container>
      </section>
    </main>
    <Footer />
  </>;
}
