"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  isCta?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Soluciones", href: "#soluciones", isExternal: false },
  { label: "Trabajadores Digitales", href: "#trabajadores", isExternal: false },
  { label: "Tecnología", href: "#tecnologia", isExternal: false },
  { label: "Seguridad", href: "#seguridad", isExternal: false },
  { label: "Industrias", href: "#industrias", isExternal: false },
  { label: "Contacto", href: "#contacto", isExternal: false, isCta: true },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface-elevated)]/80 backdrop-blur-lg border-b border-[var(--color-border-subtle)]/50"
      style={{ backgroundColor: "var(--color-surface-elevated)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between flex-col sm:flex-row gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 120 100" fill="currentColor" className="w-8 h-8 text-[var(--color-primary)] shrink-0">
            <rect x="16" y="15" width="20" height="70" rx="4" />
            <path d="M 46 50 L 81 15 H 106 L 71 50 L 106 85 H 81 Z" />
          </svg>
          <span className="text-[20px] font-semibold tracking-wider" style={{ color: "var(--color-primary)" }}>
            KAIVA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            item.isCta ? (
              <a
                key={item.label}
                href={item.href}
                className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-[0.98] transition-all"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors duration-200 text-[var(--color-on-surface)] hover:text-[var(--color-primary)]"
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="sm:inline-flex p-2 rounded-lg transition-colors hover:bg-[var(--color-border-subtle)]"
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40 flex items-center justify-center pt-24"
            >
              <div className="bg-[var(--color-surface)] rounded-lg p-8 w-full max-w-md text-center transform translate-y-[-100px] transition-all duration-300">
                <div className="mb-6">
                  <svg viewBox="0 0 120 100" fill="currentColor" className="w-12 h-12 mx-auto text-[var(--color-primary)]">
                    <rect x="16" y="15" width="20" height="70" rx="4" />
                    <path d="M 46 50 L 81 15 H 106 L 71 50 L 106 85 H 81 Z" />
                  </svg>
                </div>
                <h2 className="text-[24px] font-bold tracking-tight" style={{ color: "var(--color-primary)" }}>
                  KAIVA
                </h2>
                <p className="text-[16px] text-[var(--color-on-surface)] mb-8">
                  Trabajadores digitales para empresas.
                </p>
                <div className="space-y-3">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[var(--color-primary)] hover:text-white`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="mt-6 w-full py-2 rounded-md bg-[var(--color-primary)] text-white font-medium transition-colors hover:opacity-90"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}