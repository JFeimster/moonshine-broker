"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { launchWeeks, thirtyDayPlan } from "@/content/launch";

export default function LaunchChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [copyState, setCopyState] = useState("");
  const total = launchWeeks.reduce((sum, week) => sum + week.items.length, 0);
  const complete = Object.values(done).filter(Boolean).length;

  async function copyPlan() {
    try { await navigator.clipboard.writeText(thirtyDayPlan()); setCopyState("30-day plan copied."); }
    catch { setCopyState("Clipboard unavailable. Select and copy the plan below."); }
  }

  return <section aria-labelledby="roadmap-title" className="py-12 sm:py-16">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-black pb-6">
        <div><div className="command-label">Public activation roadmap</div><h2 id="roadmap-title" className="display-type mt-3 text-5xl sm:text-7xl">Your first 30 days.</h2><p className="mt-4 max-w-2xl text-sm leading-7">Work through the plan at your own pace. These are preparation activities; program access and participation depend on onboarding and current requirements.</p></div>
        <div className="min-w-44" role="status" aria-live="polite"><span className="command-label">{complete} / {total} steps complete</span><div className="mt-3 h-3 border-2 border-black bg-white" role="progressbar" aria-label="Roadmap progress" aria-valuenow={complete} aria-valuemin={0} aria-valuemax={total}><div className="h-full bg-[#f5d90a] transition-all" style={{ width: `${complete / total * 100}%` }} /></div></div>
      </div>
      <div className="mt-4 divide-y-2 divide-black border-b-2 border-black">
        {launchWeeks.map((week, weekIndex) => <div key={week.title} className="grid gap-5 py-7 lg:grid-cols-[.35fr_1fr]">
          <div><span className="command-label">0{weekIndex + 1} / 04</span><h3 className="mt-2 text-2xl font-black uppercase leading-tight">{week.title}</h3></div>
          <ul className="grid gap-2 sm:grid-cols-2">{week.items.map((item, itemIndex) => {
            const id = `${weekIndex}-${itemIndex}`;
            return <li key={id}><label className={`flex min-h-16 cursor-pointer items-start gap-3 border-2 border-black p-3 text-sm font-semibold leading-5 ${done[id] ? "bg-[#f5d90a]" : "bg-white/50 hover:bg-white"}`}><input type="checkbox" checked={Boolean(done[id])} onChange={(event) => setDone((current) => ({ ...current, [id]: event.target.checked }))} className="mt-0.5 h-4 w-4 accent-black" /><span className={done[id] ? "line-through decoration-2" : ""}>{item}</span></label></li>;
          })}</ul>
        </div>)}
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-4"><Button onClick={copyPlan}>Copy 30-Day Action Plan</Button><span className="text-xs font-semibold" role="status" aria-live="polite">{copyState || "Checklist progress stays in this tab only."}</span></div>
      {copyState.startsWith("Clipboard unavailable") && <pre className="mt-4 overflow-x-auto whitespace-pre-wrap border-2 border-black p-4 text-xs">{thirtyDayPlan()}</pre>}
    </div>
  </section>;
}
