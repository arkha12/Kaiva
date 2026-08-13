"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/", isExternal: false },
  { label: "Nosotros", href: "/nosotros", isExternal: false },
  { label: "Servicios", href: "/servicios", isExternal: false },
  { label: "Portafolio", href: "/portafolio", isExternal: false },
  { label: "Contacto", href: "/contacto", isExternal: false },
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
          <svg
            className="w-8 h-8 text-[var(--color-primary)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M12 10v8l4-4" />
          </svg>
          <span className="text-[20px] font-semibold tracking-wider" style={{ color: "var(--color-primary)" }}>
            Kaiva
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:block flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                scrollPos > 100 ? "text-[var(--color-on-surface)]" : "text-[var(--color-on-background)]"
              } hover:${item.isExternal ? "no-underline" : "hover:text-[var(--color-primary)]"}`}
            >
              {item.label}
            </a>
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
                  <svg
                    className="w-12 h-12 mx-auto text-[var(--color-primary)] margin-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </div>
                <h2 className="text-[24px] font-bold tracking-tight" style={{ color: "var(--color-primary)" }}>
                  Kaiva
                </h2>
                <p className="text-[16px] text-[var(--color-on-surface)] mb-8">
                  Agencia de diseño y desarrollo premium
                </p>
                <div className="space-y-3">
                  {NAV_ITEMS.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className={`block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[var(--color-primary)] hover:text-white ${
                        item.isExternal ? "no-underline" : ""
                      }`}
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