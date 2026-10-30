export type FundingFamily = {
  name: string;
  useCase: string;
  note: string;
};

export const fundingFamilies: FundingFamily[] = [
  { name: "Working Capital", useCase: "Operating needs, inventory, payroll gaps, marketing, or an expansion opportunity.", note: "Product fit and eligibility depend on the provider's current criteria." },
  { name: "Lines of Credit", useCase: "A business that needs flexible access to capital over time.", note: "Structure and availability vary by client and provider." },
  { name: "Equipment Financing", useCase: "Purchasing or upgrading equipment tied to business operations.", note: "The asset, business use, and provider requirements shape the route." },
  { name: "Real Estate", useCase: "Commercial property, investment property, bridge, or construction needs.", note: "Real-estate requests follow their own underwriting and documentation paths." },
  { name: "Acquisition Financing", useCase: "A buyer evaluating capital options to purchase an existing business.", note: "The capital stack and documentation depend on the transaction." },
  { name: "Credit + Capital Strategy", useCase: "A business owner sorting through readiness, timing, and available capital paths.", note: "A discussion can clarify next steps; it does not establish approval or eligibility." },
];

export const fundingCaveat = "Funding availability, underwriting, pricing, timing, and qualification are determined by providers and can vary. Do not promise approval, terms, speed, or product availability.";
