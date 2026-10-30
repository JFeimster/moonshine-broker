import { problemPaths } from "@/content/operator-guides";
import { fundingCaveat } from "@/content/products";

export default function ProductMatrix() {
  return <section className="border-b-2 border-black bg-[#f5d90a] py-10 sm:py-14" aria-labelledby="matrix-title">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="command-label">Discovery desk / conversation map</div>
      <h2 id="matrix-title" className="display-type mt-3 text-4xl sm:text-6xl">Start with the problem.</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7">These are discussion paths, not product recommendations or eligibility decisions. Ask what the owner needs before exploring a category.</p>
      <div className="mt-7 overflow-x-auto border-2 border-black bg-[#f2eedf]">
        <table className="w-full min-w-[650px] border-collapse text-left text-sm">
          <thead className="bg-black text-[#f5d90a]"><tr><th scope="col" className="p-4">Customer problem</th><th scope="col" className="p-4">Potential category</th><th scope="col" className="p-4">First discovery question</th></tr></thead>
          <tbody>{problemPaths.map((row) => <tr key={row.problem} className="border-t-2 border-black align-top"><th scope="row" className="p-4 font-black uppercase">{row.problem}</th><td className="p-4 font-bold">{row.path}</td><td className="p-4">{row.ask}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="mt-4 text-xs leading-6">{fundingCaveat}</p>
    </div>
  </section>;
}
