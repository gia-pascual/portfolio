import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-paper-50 hover:bg-navy-800 border border-navy-900",
  secondary:
    "bg-transparent text-navy-900 border border-navy-900/25 hover:border-navy-900 hover:bg-navy-900/5",
  ghost:
    "bg-transparent text-gold-600 border border-gold-500/40 hover:border-gold-500 hover:bg-gold-500/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-150 ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
