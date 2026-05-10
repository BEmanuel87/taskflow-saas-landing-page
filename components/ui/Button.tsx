"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "grad-bg text-white font-semibold shadow-[0_0_40px_rgba(108,99,255,0.3)] hover:shadow-[0_0_60px_rgba(108,99,255,0.5)] hover:opacity-90",
  outline:
    "border border-white/10 text-[var(--color-text)] font-medium hover:border-white/25 hover:bg-white/[0.04]",
  ghost:
    "text-[var(--color-muted)] font-medium border border-white/7 hover:text-[var(--color-text)] hover:border-white/20",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  arrow,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center gap-2 rounded-full transition-all duration-200 cursor-pointer select-none font-syne",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}
