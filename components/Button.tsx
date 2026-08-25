import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  type = "button",
}: Props) {
  const styles =
    variant === "primary"
      ? "border-2 border-black bg-[#f5d90a] text-black shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000]"
      : "border-2 border-black bg-[#f2eedf] text-black shadow-[4px_4px_0_#000] hover:bg-white";

  const base =
    "inline-flex items-center justify-center px-5 py-3 text-xs font-black uppercase tracking-[0.08em] no-underline transition";

  if (href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(base, styles, className)}>
      {children}
    </button>
  );
}
