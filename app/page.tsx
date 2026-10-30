import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import EconomicsPlanner from "@/components/EconomicsPlanner";
import { ctas } from "@/content/ctas";
import { home } from "@/content/pages/home";
import { fundingFamilies, fundingCaveat } from "@/content/products";
import { site } from "@/content/site";
import { commandPrompts, systemModules } from "@/content/system";

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <>
    <Header />
    <main>
      <section className="home-hero relative overflow-hidden border-b-2 border-black bg-black text-[#f2eedf]">
        <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <Container>
          <div className="relative grid min-h-[min(690px,calc(100svh-4.25rem))] items-center gap-9 py-10 sm:py-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
            <div className="hero-enter">
              <div className="command-label text-[#f5d90a]">{home.hero.eyebrow}</div>
              <h1 className="display-type mt-5 max-w-4xl text-6xl leading-[.86] sm:text-8xl lg:text-[7.6rem]">{home.hero.headline[0]}<br />{home.hero.headline[1]}<br /><span className="text-[#f5d90a]">{home.hero.headline[2]}</span></h1>
              <p className="mt-5 max-w-xl text-lg font-black uppercase leading-snug sm:text-2xl">{home.hero.subhead}</p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-300 sm:text-base">{home.hero.body}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={ctas.apply.href}>{ctas.apply.label}</Button>
                <Button href={ctas.howItWorks.href} variant="secondary">{ctas.howItWorks.label}</Button>
              </div>
            </div>
            <div className="hero-console border-y-2 border-[#f2eedf] py-5 lg:ml-6 lg:border-2 lg:p-6">
              <div className="flex items-center justify-between border-b border-zinc-600 pb-4">
                <span className="command-label">{home.hero.mapLabel}</span>
                <span className="flex items-center gap-2 command-label text-[#f5d90a]"><span className="h-2 w-2 rounded-full bg-[#f5d90a]" /> {home.hero.mapState}</span>
              </div>
              <div className="mt-2">
                {home.loop.steps.map((step, index) => <div key={step} className="loop-line flex items-center gap-4 border-b border-zinc-700 py-3" style={{ animationDelay: `${index * 90}ms` }}>
                  <span className="font-mono text-xs text-[#f5d90a]">0{index + 1}</span>
                  <span className="text-sm font-black uppercase tracking-wide sm:text-base">{step}</span>
                  <span className="ml-auto text-zinc-500" aria-hidden="true">{index < home.loop.steps.length - 1 ? "↓" : "↗"}</span>
                </div>)}
              </div>
              <div className="mt-4 flex justify-between gap-3 command-label text-zinc-400"><span>CLIENT DEVELOPMENT</span><span>PRODUCTION / RELATIONSHIPS</span></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-black bg-[#f5d90a] py-10 sm:py-14">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div><div className="command-label">{home.problem.eyebrow}</div><h2 className="display-type mt-4 max-w-2xl text-5xl sm:text-7xl">{home.problem.title}</h2></div>
            <div className="grid gap-5 border-t-2 border-black pt-5 sm:grid-cols-2 lg:border-l-2 lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-lg font-black uppercase leading-snug">{home.problem.lead}</p>
              <p className="text-sm font-medium leading-7">{home.problem.body}</p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 border-2 border-black sm:grid-cols-4">
            {home.problem.gaps.map((item, index) => <div key={item} className={`min-h-24 border-b-2 border-r-2 border-black p-4 text-sm font-black uppercase sm:border-b-0 ${index % 2 === 1 ? "bg-[#f2eedf]" : "bg-white/30"}`}><span className="command-label">Gap / 0{index + 1}</span><div className="mt-3">{item}</div></div>)}
          </div>
        </Container>
      </section>

      <section className="bg-[#f2eedf] py-12 sm:py-16">
        <Container>
          <div className="flex flex-col justify-between gap-5 border-b-2 border-black pb-5 sm:flex-row sm:items-end">
            <div><div className="command-label">{home.loop.eyebrow}</div><h2 className="display-type mt-3 text-5xl sm:text-7xl">{home.loop.title}</h2></div>
            <p className="max-w-md text-sm leading-6">{home.loop.body}</p>
          </div>
          <div className="mt-7 grid grid-cols-2 border-l-2 border-t-2 border-black sm:grid-cols-4 lg:grid-cols-7">
            {home.loop.steps.map((step, index) => <div key={step} className="loop-tile flex min-h-28 flex-col justify-between border-b-2 border-r-2 border-black p-3 sm:min-h-36 sm:p-4">
              <span className="command-label text-zinc-600">0{index + 1}</span><span className="text-sm font-black uppercase leading-tight sm:text-base">{step}</span>
            </div>)}
          </div>
        </Container>
      </section>

      <section className="border-y-2 border-black bg-black py-12 text-[#f2eedf] sm:py-16">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr]">
            <div><div className="command-label text-[#f5d90a]">{home.system.eyebrow}</div><h2 className="display-type mt-4 text-5xl sm:text-7xl">{home.system.title}</h2><p className="mt-5 max-w-sm text-sm leading-7 text-zinc-300">{home.system.body}</p><a href="/system" className="mt-6 inline-block command-label text-[#f5d90a] underline underline-offset-4">See the whole system ↗</a></div>
            <div className="divide-y divide-zinc-600 border-y border-zinc-600">
              {systemModules.slice(0, 6).map((module) => <a key={module.number} href={module.destination || "/system"} className="module-row grid grid-cols-[3rem_1fr] gap-3 py-4 no-underline sm:grid-cols-[4rem_.7fr_1.3fr] sm:gap-5">
                <span className="command-label text-[#f5d90a]">{module.number}</span><span className="text-lg font-black uppercase">{module.name}</span><span className="hidden text-sm leading-6 text-zinc-300 sm:block">{module.summary}</span>
              </a>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div><div className="command-label">{home.command.eyebrow}</div><h2 className="display-type mt-4 text-5xl sm:text-7xl">{home.command.title}</h2><p className="mt-5 max-w-lg text-sm leading-7">{home.command.body}</p><a href={site.partnerCommandUrl} className="mt-6 inline-block border-b-2 border-black pb-1 text-xs font-black uppercase">Open Partner Command ↗</a></div>
            <div className="command-showcase border-2 border-black bg-[#f2eedf] shadow-[7px_7px_0_#f5d90a]">
              <div className="flex items-center justify-between border-b-2 border-black bg-[#f5d90a] px-4 py-3"><span className="command-label">Partner Command / Workspace</span><span className="flex gap-1.5" aria-hidden="true"><i className="h-2.5 w-2.5 rounded-full border border-black"/><i className="h-2.5 w-2.5 rounded-full border border-black"/><i className="h-2.5 w-2.5 rounded-full border border-black"/></span></div>
              <div className="grid sm:grid-cols-[8rem_1fr]">
                <div className="hidden border-r-2 border-black bg-black p-4 text-[#f2eedf] sm:block"><div className="command-label text-[#f5d90a]">Workspace</div><div className="mt-5 grid gap-4 text-[10px] font-bold uppercase">{home.command.navItems.map((item) => <span key={item}>{item}</span>)}</div></div>
                <div className="grid divide-y-2 divide-black">
                  {commandPrompts.map((prompt, index) => <div key={prompt.question} className="grid gap-3 p-4 sm:grid-cols-[2rem_1fr] sm:p-5"><span className="command-label text-zinc-500">0{index + 1}</span><div><h3 className="text-lg font-black uppercase">{prompt.question}</h3><p className="mt-2 text-sm leading-6">{prompt.answer}</p></div></div>)}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y-2 border-black bg-[#f5d90a] py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
            <div><div className="command-label">{home.audience.eyebrow}</div><h2 className="display-type mt-4 text-5xl sm:text-7xl">{home.audience.title}</h2></div>
            <div className="grid grid-cols-2 border-l-2 border-t-2 border-black sm:grid-cols-3">
              {home.audience.list.map((audience, index) => <div key={audience} className="flex min-h-24 flex-col justify-between border-b-2 border-r-2 border-black p-4"><span className="command-label">0{index + 1}</span><span className="text-sm font-black uppercase leading-tight sm:text-base">{audience}</span></div>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[.65fr_1.35fr]">
            <div><div className="command-label">{home.solutions.eyebrow}</div><h2 className="display-type mt-4 text-5xl sm:text-7xl">{home.solutions.title}</h2><p className="mt-5 max-w-md text-sm leading-7">{home.solutions.body}</p></div>
            <div className="grid grid-cols-1 border-l-2 border-t-2 border-black sm:grid-cols-2 lg:grid-cols-3">
              {fundingFamilies.map((product, index) => <a key={product.name} href="/products" className="group min-h-28 border-b-2 border-r-2 border-black p-4 no-underline hover:bg-[#f5d90a]"><div className="flex justify-between gap-3"><span className="command-label">Path / 0{index + 1}</span><span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span></div><h3 className="mt-5 text-sm font-black uppercase">{product.name}</h3></a>)}
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-zinc-600">{fundingCaveat}</p>
        </Container>
      </section>

      <section className="border-y-2 border-black bg-[#f2eedf] py-12 sm:py-16">
        <Container>
          <div className="flex flex-col justify-between gap-5 border-b-2 border-black pb-5 sm:flex-row sm:items-end"><div><div className="command-label">{home.launch.eyebrow}</div><h2 className="display-type mt-3 text-5xl sm:text-7xl">{home.launch.title}</h2></div><a href="/start" className="command-label underline underline-offset-4">First 30 days ↗</a></div>
          <div className="mt-7 grid grid-cols-2 border-l-2 border-t-2 border-black sm:grid-cols-4 lg:grid-cols-7">
            {home.launch.steps.map((step, index) => <div key={step} className="flex min-h-28 flex-col justify-between border-b-2 border-r-2 border-black bg-white/40 p-4"><span className="command-label text-zinc-500">STEP 0{index + 1}</span><span className="text-base font-black uppercase">{step}</span></div>)}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-black bg-[#f5d90a] py-12 sm:py-16">
        <Container>
          <div className="mb-8 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end"><div><div className="command-label">{home.economics.eyebrow}</div><h2 className="display-type mt-3 text-5xl sm:text-7xl">{home.economics.title}</h2></div><span className="border-2 border-black px-3 py-2 command-label">{home.economics.toolLabel}</span></div>
          <EconomicsPlanner />
          <p className="mt-6 max-w-4xl border-t border-black/50 pt-4 text-xs leading-5">{home.economics.caveat} See the <a className="font-black underline" href="/compensation">current compensation explanation</a> and governing plan.</p>
        </Container>
      </section>

      <section className="final-cta border-b-2 border-black bg-black py-14 text-[#f2eedf] sm:py-20">
        <Container>
          <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><div className="command-label text-[#f5d90a]">{home.final.eyebrow}</div><h2 className="display-type mt-4 max-w-5xl text-5xl leading-[.9] sm:text-7xl lg:text-8xl">{home.final.title}</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300">{home.final.body}</p></div>
            <Button href={ctas.apply.href}>{ctas.apply.label}</Button>
          </div>
        </Container>
      </section>
    </main>
    <Footer />
  </>;
}
