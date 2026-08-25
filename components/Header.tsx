import Container from "@/components/Container";
import Button from "@/components/Button";
import { nav, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-[#f2eedf]/95 backdrop-blur">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-5 py-3">
          <a href="/" className="no-underline">
            <div className="leading-none">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">Distilled Funding</div>
              <div className="mt-1 text-lg font-black uppercase tracking-[-0.04em]">Agency</div>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-xs font-bold uppercase tracking-[0.08em] xl:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="no-underline hover:underline">
                {label}
              </a>
            ))}
          </nav>

          <Button href={site.applyUrl} variant="primary" className="px-4 py-2">
            Start Your Agency
          </Button>
        </div>
      </Container>
    </header>
  );
}
