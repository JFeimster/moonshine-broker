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
      ? "bg-zinc-950 text-white hover:bg-zinc-800"
      : "bg-white text-zinc-950 ring-1 ring-zinc-200 hover:bg-zinc-50";

  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-soft transition";

  if (href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(base, styles, className)}
    >
      {children}
    </button>
  );
}
