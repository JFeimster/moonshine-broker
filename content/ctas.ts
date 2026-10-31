import { destinations } from "./site";

export const ctas = {
  apply: { label: "Start Your Funding Agency", href: "/apply" },
  applyShort: { label: "Start Your Agency", href: "/apply" },
  howItWorks: { label: "See How the Agency Works", href: "/how-it-works" },
  readiness: { label: "Check My Agency Readiness", href: "/start#agency-readiness" },
  system: { label: "Explore the System", href: "/system" },
  partnerCommand: { label: "Sign in to Partner Command", href: `${destinations.partnerCommand.current}/auth/login` },
  products: { label: "Explore Funding Paths", href: "/products" },
  clients: { label: "Build Your Pipeline", href: "/get-clients" },
  start: { label: "See the First 30 Days", href: "/start" },
  compensation: { label: "Understand Compensation", href: "/compensation" },
  faq: { label: "Read the FAQs", href: "/faq" },
} as const;
