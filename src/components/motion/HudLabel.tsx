"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function HudLabel({
  icon: Icon,
  children,
  delay = 0,
  className,
}: {
  icon: LucideIcon;
  children: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={cn(
        "pointer-events-none absolute hidden flex-col items-center gap-1.5 text-white/30 md:flex",
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      <span className="text-[10px] font-medium tracking-[0.2em] uppercase">
        {children}
      </span>
    </motion.div>
  );
}
