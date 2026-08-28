"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FloatingCard({
  children,
  className,
  delay = 0,
  floatDuration = 6,
  floatDistance = 10,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  floatDuration?: number;
  floatDistance?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: reduced ? 0 : [0, -floatDistance, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: reduced
          ? { duration: 0.6, delay }
          : {
              duration: floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 0.6,
            },
      }}
      className={cn(
        "rounded-2xl border border-white/10 bg-ink/80 p-3 shadow-xl shadow-black/40 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
