import type { Metadata } from "next";
import AgencyPage from "@/components/AgencyPage";

export const metadata: Metadata = { title: "Compensation" };

export default function Page() {
  return <AgencyPage
    eyebrow="Production economics"
    title="Compensation follows customer production."
    intro="The supplied DAC Compensation Plan explicitly prohibits income claims and states that no income is earned without acquiring customers. The mechanics below explain how the plan works; they are not earnings promises."
    sections={[
      { eyebrow: "Personal", title: "Funding bonus revenue", body: "The supplied plan shows a 40% base commission on Bonus Revenue from personal one-time bonus clients, with funding-specific Amp’d bonuses that can increase the share of Bonus Revenue up to 80% when the stated qualifications are met. Bonus Revenue is provider revenue—not the funded amount itself." },
      { eyebrow: "Personal", title: "Residual revenue", body: "For residual-revenue services, the supplied plan shows a 20% base personal residual commission with performance bonuses that can increase the total share of Personal Residual Revenue to 50%." },
      { eyebrow: "Team", title: "Enroller matching", body: "If you choose to build a team, the supplied plan provides matching compensation on the base commissions of personally enrolled agents when applicable qualifications are satisfied. The agreement is explicit: there is no compensation merely for recruiting a new agent." },
      { eyebrow: "Leadership", title: "Extended team pay", body: "Higher ranks can qualify for additional matching, leadership override, and coded-group compensation under the detailed plan. These mechanics depend on personal and group production plus the plan’s qualification rules." },
      { eyebrow: "Planning", title: "Illustrative production math", body: "The Game Plan sometimes uses example percentages and average funding assumptions to reverse-engineer a monthly activity target. Those examples are mathematical planning devices and should never be presented as typical or expected earnings." },
      { eyebrow: "Payment", title: "Timing varies", body: "The supplied plan describes different payment schedules by service and provider. Funding commissions are generally paid after DAC receives provider payment, but timing can vary. Residual commissions follow their own monthly schedule." },
      { eyebrow: "Compliance", title: "No income guarantee", items: ["No income is guaranteed", "No profit or success is assured", "Customer acquisition is required", "Products and compensation can change", "Qualification rules matter", "Illustrative examples are not expected results"] },
      { eyebrow: "Operator rule", title: "Track the right numbers", body: "Separate funded volume, provider Bonus Revenue, your commission, residual revenue, and team compensation. Mixing those numbers creates fake economics and bad decisions." },
    ]}
  />;
}
