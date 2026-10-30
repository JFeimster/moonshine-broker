"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { captureAttribution } from "@/lib/attribution";

const AttributionContext = createContext("");
const storageKey = "moonshine-agency-attribution";

export function AttributionProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    try {
      const stored = new URLSearchParams(sessionStorage.getItem(storageKey) || "");
      const safe = captureAttribution(new URLSearchParams(window.location.search), stored).toString();
      if (safe) sessionStorage.setItem(storageKey, safe);
      setQuery(safe);
    } catch { setQuery(captureAttribution(new URLSearchParams(window.location.search)).toString()); }
  }, []);
  return <AttributionContext.Provider value={query}>{children}</AttributionContext.Provider>;
}

export function useApplyHref(href: string) {
  const query = useContext(AttributionContext);
  if (href !== "/apply" || !query) return href;
  return `${href}?${query}`;
}
