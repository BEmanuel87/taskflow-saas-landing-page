"use client";

import { motion } from "framer-motion";
import { Pill } from "./Pill";
import { cn } from "@/lib/utils";

export function SectionHeader({
  pill,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-16",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <Pill className="mb-5">{pill}</Pill>
      <h2 className="font-syne text-4xl font-extrabold tracking-tight leading-[1.1] lg:text-5xl mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface SectionHeaderProps {
  pill: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}
