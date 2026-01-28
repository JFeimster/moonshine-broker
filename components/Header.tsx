import Container from "@/components/Container";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-zinc-950" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-bold">{site.name}</div>
              <div className="text-xs text-zinc-500">Broker Recruitment</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
            <a href="#for">Who it’s for</a>
            <a href="#how">How it works</a>
            <a href="#standards">Standards</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#kit" variant="primary" className="px-4 py-2">
              Get the Starter Kit
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
