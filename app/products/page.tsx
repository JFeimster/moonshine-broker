import type { Metadata } from "next";
import AgencyPage from "@/components/AgencyPage";

export const metadata: Metadata = { title: "Products" };

export default function Page() {
  return <AgencyPage
    eyebrow="Product desk"
    title="One client. More than one possible capital path."
    intro="The Agency model is strongest when the agent can identify the business problem and then use the product desk and provider infrastructure to explore the appropriate lane. Availability, underwriting, pricing, and provider access vary by client and can change over time."
    sections={[
      { title: "Working capital", body: "Shorter-term business capital for operating needs, inventory, marketing, payroll gaps, expansion, or time-sensitive opportunities. Eligibility is driven by the actual provider criteria." },
      { title: "Business line of credit", body: "Revolving-access structures can fit businesses that need flexible capital rather than a one-time lump sum. Product availability and qualification vary." },
      { title: "Equipment financing", body: "Capital tied to equipment purchases or upgrades. This can create a more specific financing conversation around the useful life and business value of the asset." },
      { title: "Acquisition financing", body: "For buyers pursuing an existing business, the capital stack may involve multiple financing lanes and more documentation than a simple working-capital request." },
      { title: "Real-estate capital", body: "Investment-property, commercial real estate, bridge, construction, and related real-estate financing live in their own underwriting lanes and should be routed accordingly." },
      { title: "Micro / fast funding", body: "Smaller-dollar capital products can provide a faster route for eligible businesses whose need is modest or whose profile fits a specialized provider." },
      { title: "Payments + residual services", body: "The supplied DAC materials also describe residual-revenue business services such as payment processing. These should be positioned only when they solve a real client need." },
      { title: "The operator rule", body: "Do not promise approvals, pricing, funding speed, or product availability. Diagnose the need, collect the right information, and let the actual provider process determine the offer." },
    ]}
  />;
}
