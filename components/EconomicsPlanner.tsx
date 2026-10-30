"use client";

import { useMemo, useState } from "react";

const initial = { conversations: 40, needRate: 30, submissionRate: 50, fundedRate: 40, fundedAmount: 25000 };

export default function EconomicsPlanner() {
  const [values, setValues] = useState(initial);
  const results = useMemo(() => {
    const opportunities = Math.round(values.conversations * values.needRate / 100);
    const submissions = Math.round(opportunities * values.submissionRate / 100);
    const funded = Math.round(submissions * values.fundedRate / 100);
    const production = funded * values.fundedAmount;
    return [values.conversations, opportunities, submissions, funded, production];
  }, [values]);

  function update(key: keyof typeof initial, value: string, max: number) {
    const number = Number(value);
    setValues((current) => ({ ...current, [key]: Number.isFinite(number) ? Math.min(max, Math.max(0, number)) : 0 }));
  }

  const fields = [
    { key: "conversations", label: "Monthly conversations", max: 1000, suffix: "count" },
    { key: "needRate", label: "Conversations with a need", max: 100, suffix: "%" },
    { key: "submissionRate", label: "Needs that submit", max: 100, suffix: "%" },
    { key: "fundedRate", label: "Submissions that fund", max: 100, suffix: "%" },
    { key: "fundedAmount", label: "Illustrative funded amount", max: 1000000, suffix: "$ / client" },
  ] as const;

  return <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
    <div>
      <div className="command-label">Edit the assumptions</div>
      <p className="mt-3 max-w-md text-sm leading-6">Change the inputs to see how activity moves through a sample pipeline. These are illustrative planning assumptions, not typical results or a forecast.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map(({ key, label, max, suffix }) => <label key={key} className="grid gap-2 text-xs font-bold uppercase">
          <span>{label}</span>
          <span className="flex border-2 border-black bg-[#f2eedf]">
            <input type="number" min={0} max={max} value={values[key]} onChange={(event) => update(key, event.target.value, max)} className="min-w-0 flex-1 bg-transparent px-3 py-3 text-lg font-black tabular-nums outline-none focus:bg-white" />
            <span className="border-l-2 border-black px-3 py-3 text-zinc-500">{suffix}</span>
          </span>
        </label>)}
      </div>
    </div>
    <div className="grid grid-cols-2 border-2 border-black bg-[#f2eedf] sm:grid-cols-5">
      {["Conversations", "Opportunities", "Submissions", "Funded clients", "Production volume"].map((label, index) => <div key={label} className="flex min-h-32 flex-col justify-between border-b-2 border-r-2 border-black p-3 last:border-r-0 odd:bg-white/40 sm:border-b-0 sm:even:bg-white/40 sm:p-4">
        <span className="command-label">0{index + 1} / {label}</span>
        <span className="display-type text-4xl tabular-nums sm:text-5xl">{index === 4 ? `$${results[index].toLocaleString()}` : results[index]}</span>
      </div>)}
    </div>
  </div>;
}
