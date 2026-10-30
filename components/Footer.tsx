import Container from "@/components/Container";
import { destinations } from "@/content/site";
import { ctas } from "@/content/ctas";

export default function Footer() {
  return <footer className="border-t-2 border-black bg-black py-10 text-[#f2eedf]">
    <Container>
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="command-label text-[#f5d90a]">Moonshine Capital / Funding Agency</div>
          <p className="mt-3 max-w-md text-sm text-zinc-300">Infrastructure for independent Funding Agents building a client-acquisition and business-development practice around business capital.</p>
        </div>
        <div className="grid gap-4 text-xs leading-6 text-zinc-400 sm:grid-cols-2">
          <p>Independent agents are not employees, franchisees, or legal owners of DAC. Compensation is performance-based and requires qualifying customer production; no income or profit is guaranteed.</p>
          <p>Products, providers, compensation mechanics, and availability may change. Agents are responsible for complying with applicable laws, licenses, permits, solicitation rules, and program policies.</p>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-zinc-700 pt-6 text-xs uppercase tracking-wider text-zinc-400">
        <a href={destinations.brokerEducation.current}>Broker education</a>
        <a href={destinations.publicTools.current}>Public tools</a>
        <a href={destinations.publicFundingInfo.current}>Public funding options</a>
        <a href={ctas.partnerCommand.href}>{ctas.partnerCommand.label}</a>
        <span>© {new Date().getFullYear()} Moonshine Capital</span>
      </div>
    </Container>
  </footer>;
}
