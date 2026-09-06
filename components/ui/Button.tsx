import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-maroon text-white hover:bg-brand-maroon-dark focus-visible:outline-white",
  outline:
    "border border-brand-dark-2 text-brand-dark-2 hover:bg-brand-dark-2 hover:text-white",
  ghost: "text-white/90 hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
