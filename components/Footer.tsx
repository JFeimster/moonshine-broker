import Container from "@/components/Container";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-black py-10 text-[#f2eedf]">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="command-label text-[#f5d90a]">Distilled Funding / Agency</div>
            <p className="mt-3 max-w-md text-sm text-zinc-300">
              Public acquisition property for independent Funding Agents building a client-acquisition and business-development practice around business capital.
            </p>
          </div>
          <div className="grid gap-4 text-xs text-zinc-400 sm:grid-cols-2">
            <p>
              Independent agents are not employees, franchisees, or legal owners of DAC. Compensation is performance-based and requires actual customer production; no income or profit is guaranteed.
            </p>
            <p>
              Products, providers, compensation mechanics, and availability may change. Agents are responsible for complying with applicable laws, licenses, permits, telemarketing rules, and program policies.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-5 border-t border-zinc-700 pt-6 text-xs uppercase tracking-wider text-zinc-400">
          <a href={site.brokersUrl}>Broker education</a>
          <a href={site.toolsUrl}>Public tools</a>
          <a href={site.partnerCommandUrl}>Partner Command</a>
          <span>© {new Date().getFullYear()} Moonshine Capital / Distilled Funding</span>
        </div>
      </Container>
    </footer>
  );
}
