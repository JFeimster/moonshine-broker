import { prospectingSteps } from "@/content/operator-guides";

export default function ProspectingRail() {
  return <section className="border-b-2 border-black bg-[#f5d90a] py-10 sm:py-14" aria-labelledby="rail-title">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="command-label">Prospecting workflow / field guide</div>
      <h2 id="rail-title" className="display-type mt-3 text-4xl sm:text-6xl">From contact to next step.</h2>
      <ol className="mt-7 grid border-l-2 border-t-2 border-black sm:grid-cols-2 lg:grid-cols-5">{prospectingSteps.map((step, index) => <li key={step.title} className="border-b-2 border-r-2 border-black bg-[#f2eedf] p-4"><span className="command-label">0{index + 1}</span><h3 className="mt-3 text-lg font-black uppercase">{step.title}</h3><p className="mt-3 text-sm leading-6">{step.detail}</p></li>)}</ol>
      <p className="mt-5 text-xs leading-6">Use permitted channels and approved materials. Obtain consent where required, protect private information, and never promise funding or terms.</p>
    </div>
  </section>;
}
