"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
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

  const content = (
    <motion.span
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
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
