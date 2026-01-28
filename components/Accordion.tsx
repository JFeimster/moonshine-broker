"use client";

import { useState } from "react";

export function AccordionItem({
  q,
  a,
}: {
  q: string;
  a: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl ring-1 ring-zinc-200 bg-white">
      <button
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold">{q}</span>
        <span className="text-zinc-500">{open ? "–" : "+"}</span>
      </button>
      {open ? (
        <div className="px-5 pb-5 text-sm leading-6 text-zinc-700">{a}</div>
      ) : null}
    </div>
  );
}
