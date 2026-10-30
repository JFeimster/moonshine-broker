import { ctas } from "./ctas";

export const navigation = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Get Clients", href: "/get-clients" },
  { label: "System", href: "/system" },
  { label: "Products", href: "/products" },
  { label: "First 30 Days", href: "/start" },
  { label: "Compensation", href: "/compensation" },
  { label: "Build", href: "/build" },
  { label: "FAQ", href: "/faq" },
] as const;

export const primaryNavigationCta = ctas.applyShort;
