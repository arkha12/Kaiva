"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

const links = [
  { href: "#producto", label: "Producto" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#roadmap", label: "Roadmap" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border/70 bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-page">
        <Link href="#" aria-label="Karva — inicio">
          <motion.span
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Logo />
          </motion.span>
        </Link>

        <nav
          onMouseLeave={() => setHovered(null)}
          className="hidden items-center gap-1 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHovered(link.href)}
              className="relative px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <span className="relative z-10">{link.label}</span>
              {hovered === link.href && (
                <motion.span
                  layoutId="nav-hover"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-surface shadow-sm"
                />
              )}
            </a>
          ))}
        </nav>

        <ShimmerButton href="#piloto" className="px-4 py-2 text-sm">
          Solicita acceso
        </ShimmerButton>
      </div>
    </header>
  );
}
