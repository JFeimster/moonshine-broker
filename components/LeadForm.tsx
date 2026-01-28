"use client";

import { useMemo, useState } from "react";
import Button from "@/components/Button";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fields = useMemo(
    () => [
      { name: "name", label: "Full name", type: "text", placeholder: "Jordan Smith" },
      { name: "email", label: "Email", type: "email", placeholder: "you@domain.com" },
      { name: "phone", label: "Phone (optional)", type: "tel", placeholder: "555-123-4567" },
    ],
    []
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong.");
      }

      window.location.href = "/thanks";
    } catch (err: any) {
      setError(err.message || "Error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 ring-1 ring-zinc-200 shadow-soft">
      <div className="space-y-1">
        <h3 className="text-lg font-bold">Get the Broker Starter Kit</h3>
        <p className="text-sm text-zinc-600">
          Scripts, tracker, territory template, and the 7-Day Sprint plan. No fluff.
        </p>
      </div>

      <div className="mt-5 grid gap-4">
        {fields.map((f) => (
          <label key={f.name} className="grid gap-1 text-sm">
            <span className="font-semibold text-zinc-800">{f.label}</span>
            <input
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              required={f.name !== "phone"}
              className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-zinc-950"
            />
          </label>
        ))}

        {error ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : null}

        <Button type="submit" variant="primary" className="w-full">
          {loading ? "Sending..." : "Get the Broker Starter Kit"}
        </Button>

        <p className="text-xs text-zinc-500">
          No spam. If you hate it, unsubscribe. If you use it, you’ll get paid.
        </p>
      </div>
    </form>
  );
}
