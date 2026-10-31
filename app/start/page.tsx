import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ReadinessAssessment from "@/components/ReadinessAssessment";
import LaunchChecklist from "@/components/LaunchChecklist";
import { pages } from "@/content/pages";
import { ctas } from "@/content/ctas";

const content = pages.start;
export const metadata: Metadata = { title: content.title, description: content.description, alternates: { canonical: "/start" } };

export default function Page() { return <>
  <Header />
  <main>
    <section className="border-b-2 border-black bg-black py-12 text-[#f2eedf] sm:py-20">
      <Container>
        <div className="command-label text-[#f5d90a]">Assess fit / prepare for action</div>
        <h1 className="display-type mt-5 max-w-5xl text-6xl sm:text-8xl">Start with the work.</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">Explore the independent agent role, check your readiness, and build a practical first-month plan. You can use these public tools before applying.</p>
        <div className="mt-7 flex flex-wrap gap-3"><Button href="#agency-readiness">{ctas.readiness.label}</Button><Button href="/how-it-works" variant="secondary">{ctas.howItWorks.label}</Button></div>
        <a href="/toolkit/launch-pack" className="mt-5 inline-block text-xs font-black uppercase text-[#f5d90a] underline underline-offset-4">Build a first-month launch pack ↗</a>
      </Container>
    </section>
    <ReadinessAssessment />
    <LaunchChecklist />
    <section className="border-t-2 border-black bg-black py-12 text-[#f2eedf]">
      <Container><div className="flex flex-wrap items-end justify-between gap-7"><div><div className="command-label text-[#f5d90a]">When you are ready</div><h2 className="display-type mt-3 text-5xl sm:text-7xl">Review the application.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300">The team reviews applications and follows up about next steps. Participation and access are subject to current requirements; earnings are uncertain.</p></div><Button href={ctas.apply.href}>{ctas.apply.label}</Button></div></Container>
    </section>
  </main>
  <Footer />
</>; }
