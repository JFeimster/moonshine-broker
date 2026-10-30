"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { navigation, primaryNavigationCta } from "@/content/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-[#f2eedf]">
      <Container>
        <div className="flex min-h-[4.25rem] items-center justify-between gap-3 py-2">
          <Link href="/" className="shrink-0 no-underline" aria-label="Moonshine Capital Funding Agency home">
            <div className="leading-none">
              <div className="font-mono text-[9px] uppercase tracking-[0.24em] text-zinc-600">Moonshine Capital</div>
              <div className="mt-1 text-lg font-black uppercase tracking-[-0.04em]">Funding Agency</div>
            </div>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-4 text-[10px] font-bold uppercase tracking-[0.08em] 2xl:flex">
            {navigation.map(({ label, href }) => <a key={href} href={href} className="underline-offset-4 hover:underline">{label}</a>)}
          </nav>
          <div className="ml-auto flex items-center gap-2 2xl:ml-0">
            <Button href={primaryNavigationCta.href} variant="primary" className="hidden px-3 py-2 sm:inline-flex">{primaryNavigationCta.label}</Button>
            <button type="button" className="border-2 border-black bg-[#f5d90a] px-3 py-2 text-xs font-black uppercase sm:px-4 2xl:hidden" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <nav id="mobile-navigation" aria-label="Mobile navigation" className={`${menuOpen ? "grid" : "hidden"} border-t-2 border-black py-2 sm:grid-cols-2 2xl:hidden`}>
          {navigation.map(({ label, href }) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-black/20 py-3 text-xs font-black uppercase tracking-wider no-underline hover:bg-[#f5d90a]">{label}<span className="float-right pr-3" aria-hidden="true">↗</span></a>)}
          <a href={primaryNavigationCta.href} onClick={() => setMenuOpen(false)} className="mt-2 border-2 border-black bg-[#f5d90a] px-3 py-3 text-xs font-black uppercase sm:col-span-2">{primaryNavigationCta.label} <span aria-hidden="true">↗</span></a>
        </nav>
      </Container>
    </header>
  );
}
