"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PulsingDot({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <span className={cn("relative inline-flex h-2 w-2", className)}>
      {!reduced && (
        <motion.span
          className="absolute inset-0 rounded-full bg-current opacity-60"
          animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span className="relative h-2 w-2 rounded-full bg-current" />
    </span>
  );
}
