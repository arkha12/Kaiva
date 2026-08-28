"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  brand:
    "bg-brand text-white shadow-sm shadow-brand/30 hover:bg-brand-dark",
  light: "bg-white text-ink hover:bg-white/90",
} as const;

const shimmerClasses = {
  brand: "bg-white/25",
  light: "bg-ink/10",
} as const;

export function ShimmerButton({
  href,
  children,
  className,
  variant = "brand",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantClasses;
}) {
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");
  const reduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 20 });
  const y = useSpring(rawY, { stiffness: 300, damping: 20 });

  function handleMouseMove(e: MouseEvent<HTMLSpanElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    rawY.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  const content = (
    <motion.span
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={cn(
        "group relative inline-flex items-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors",
        variantClasses[variant],
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden
        variants={{
          hover: { x: "160%" },
        }}
        initial={{ x: "-160%" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12",
          shimmerClasses[variant],
        )}
      />
    </motion.span>
  );

  if (isExternal) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
