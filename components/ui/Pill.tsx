import { cn } from "@/lib/utils";

export function Pill({ children, className }: PillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[rgba(108,99,255,0.25)] bg-[rgba(108,99,255,0.1)] px-3.5 py-1.5",
        "font-syne text-[11px] font-semibold uppercase tracking-widest text-accent",
        className,
      )}
    >
      <span className="text-[8px]">●</span>
      {children}
    </div>
  );
}

interface PillProps {
  children: React.ReactNode;
  className?: string;
}
