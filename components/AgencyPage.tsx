import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import type { AgencyPageContent } from "@/content/pages/types";

export default function AgencyPage({ content, children }: { content: AgencyPageContent; children?: React.ReactNode }) {
  const isFaq = content.title === "Frequently Asked Questions";
  return <>
    <Header />
    <main>
      <section className="page-hero border-b-2 border-black py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_15rem] lg:items-end">
            <div className="max-w-5xl">
              <div className="command-label">{content.eyebrow}</div>
              <h1 className="display-type mt-5 text-5xl sm:text-7xl lg:text-8xl">{content.title}</h1>
              <p className="mt-6 max-w-3xl text-base font-medium leading-7 sm:text-lg sm:leading-8">{content.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={content.nextAction.href}>{content.nextAction.label}</Button>
                <Button href="/how-it-works" variant="secondary">How It Works</Button>
              </div>
              <a href="/toolkit" className="mt-5 inline-block text-xs font-black uppercase underline underline-offset-4">Use the Agency Toolkit ↗</a>
            </div>
            <div className="hidden border-l-2 border-black pl-5 lg:block">
              <div className="command-label">Moonshine Capital</div>
              <p className="mt-3 text-sm font-bold uppercase leading-6">Independent funding-agent infrastructure</p>
              <div className="mt-5 flex items-center gap-2"><span className="h-3 w-3 animate-pulse rounded-full bg-[#f5d90a] ring-2 ring-black" /><span className="command-label">Business development / client service</span></div>
            </div>
          </div>
        </Container>
      </section>
      {children}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="mb-5 flex items-end justify-between border-b-2 border-black pb-3">
            <div className="command-label">Field notes / {content.title}</div>
            <div className="command-label">{String(content.sections.length).padStart(2, "0")} entries</div>
          </div>
          <div className="divide-y-2 divide-black">
            {content.sections.map((section, index) => <article key={`${section.title}-${index}`} className="page-row grid gap-4 py-7 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-9">
              <div className="command-label pt-1 text-zinc-600">{section.eyebrow || String(index + 1).padStart(2, "0")}</div>
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,.85fr)] lg:gap-12">
                <div>
                  {isFaq ? <details className="faq-row group" open={index === 0}>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-2xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-3xl">
                      <span>{section.title}</span><span className="font-mono text-xl group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    {section.body && <p className="mt-4 max-w-3xl text-sm leading-7 sm:text-base">{section.body}</p>}
                  </details> : <>
                    <h2 className="max-w-3xl text-2xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-3xl">{section.title}</h2>
                    {section.body && <p className="mt-4 max-w-3xl text-sm leading-7 sm:text-base">{section.body}</p>}
                  </>}
                </div>
                {section.items && <ul className="grid content-start gap-0 text-sm font-semibold">
                  {section.items.map((item) => <li key={item} className="border-t border-black/40 py-3 first:border-t-0 first:pt-0"><span className="mr-2 text-zinc-500" aria-hidden="true">↗</span>{item}</li>)}
                </ul>}
                {section.callout && <p className="border-l-4 border-[#f5d90a] bg-black px-5 py-4 text-sm font-bold leading-6 text-[#f2eedf]">{section.callout}</p>}
              </div>
            </article>)}
          </div>
        </Container>
      </section>
      <section className="border-t-2 border-black bg-[#f5d90a] py-12 sm:py-14">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div><div className="command-label">Next move / Moonshine Capital</div><h2 className="display-type mt-3 max-w-4xl text-5xl sm:text-7xl">Take the next operating step.</h2></div>
            <Button href={content.nextAction.href} variant="secondary">{content.nextAction.label}</Button>
          </div>
        </Container>
      </section>
    </main>
    <Footer />
  </>;
}
