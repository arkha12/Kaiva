"use client";

import { useEffect, useState } from "react";
import { KaivaMark } from "@/components/visuals/KaivaMark";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#trabajadores", label: "Trabajadores Digitales" },
  { href: "#como-funciona", label: "Tecnología" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#industrias", label: "Industrias" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // React descarta el setState si el valor no cambia, así que esto no
    // re-renderiza en cada evento de scroll.
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300",
        scrolled || menuOpen
          ? "bg-background/85 backdrop-blur-md border-outline-variant/40"
          : "bg-transparent border-transparent"
      )}
    >
      <nav className="max-w-container-max mx-auto px-margin-safe h-16 sm:h-20 flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2 shrink-0" onClick={close}>
          <KaivaMark className="w-8 h-8 text-primary" />
          <span className="font-headline-lg text-[26px] font-medium tracking-tighter text-on-background">KAIVA</span>
        </a>

        <ul className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-[15px] text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-on-primary transition-all hover:bg-[#2a2a2a] active:scale-[0.98]"
          >
            Agenda una consulta
          </a>
          <button
            type="button"
            className="xl:hidden -mr-2 w-11 h-11 flex items-center justify-center rounded-full text-primary transition-colors hover:bg-surface-container"
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined" aria-hidden="true">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="menu-movil"
          className="xl:hidden border-t border-outline-variant/40 bg-background px-margin-safe pb-6 max-h-[calc(100dvh-4rem)] overflow-y-auto"
        >
          <ul className="max-w-container-max mx-auto divide-y divide-outline-variant/40">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="flex items-center justify-between py-4 text-on-surface transition-colors hover:text-primary"
                >
                  {link.label}
                  <span className="material-symbols-outlined text-[18px] text-outline" aria-hidden="true">arrow_forward</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={close}
            className="sm:hidden mt-4 flex justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
          >
            Agenda una consulta
          </a>
        </div>
      )}
    </header>
  );
}
