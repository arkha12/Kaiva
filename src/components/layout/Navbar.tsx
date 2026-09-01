"use client";

import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide";
import { MorphIcon } from "morphicons/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#producto", label: "Producto" },
  { href: "#gerentes", label: "Para dealers" },
  { href: "#vendedores", label: "Para vendedores" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#ia", label: "IA" },
  { href: "#precios", label: "Precios" },
];

export function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (reduced || !el) return;

      const slide = gsap.quickTo(el, "yPercent", {
        duration: 0.55,
        ease: "premium-io",
      });

      let direction = 0;
      const hide = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          // Bajando la barra estorba, subiendo el usuario busca navegar. Sólo
          // se dispara cuando el sentido cambia, no en cada frame. Con el menú
          // abierto no se esconde: dejaría el panel colgando solo.
          const next = self.scroll() < 120 || open ? -1 : self.direction;
          if (next !== direction) {
            direction = next;
            slide(next === 1 ? -140 : 0);
          }
        },
      });

      // El fondo se opaca al despegarse del hero.
      const solid = ScrollTrigger.create({
        start: 40,
        end: "max",
        onToggle: (self) => setScrolled(self.isActive),
      });

      return () => {
        hide.kill();
        solid.kill();
      };
    },
    { scope: ref, dependencies: [reduced, open] },
  );

  // Entrada del panel: escalonada, para que no aparezca de golpe.
  useGSAP(
    () => {
      if (!open || reduced || !panelRef.current) return;
      gsap.from(panelRef.current.querySelectorAll("[data-menu-item]"), {
        opacity: 0,
        y: 14,
        duration: 0.5,
        stagger: 0.05,
      });
    },
    { scope: panelRef, dependencies: [open, reduced] },
  );

  // Escape cierra el menú. No se bloquea el scroll de fondo a propósito: la
  // barra es `fixed`, así que el panel viaja con ella, y meter un overflow
  // hidden en <body> lo convertiría en contenedor de scroll y rompería el
  // `pin` de ScrollTrigger del que depende Ask Karva.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      ref={ref}
      className={cn(
        // Barra de ancho completo, no píldora: con seis enlaces más dos
        // acciones la versión centrada no cabía dentro del gutter de página.
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-border bg-bg/95 backdrop-blur-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-page py-3.5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0 text-lg font-bold tracking-tight text-ink"
        >
          Karva Pro
        </Link>

        {/* El menú completo arranca en `lg`: logo + 6 enlaces + 2 acciones
            miden ~900px y por debajo de 1024 la barra se apretaba contra los
            márgenes. De 0 a 1023 se usa el panel con hamburguesa. */}
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm whitespace-nowrap text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium whitespace-nowrap text-ink-muted transition-colors hover:text-ink sm:inline"
          >
            Iniciar sesión
          </Link>

          <ShimmerButton
            href="#demo"
            className="px-4 py-2.5 text-sm whitespace-nowrap sm:px-5"
          >
            {/* En 375px "Solicitar demo" partía en dos líneas. */}
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Solicitar demo</span>
          </ShimmerButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-muted lg:hidden"
          >
            <MorphIcon
              icon={open ? X : Menu}
              spring="snappy"
              reducedMotion="user"
              size={22}
              strokeWidth={1.75}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="menu-movil"
          ref={panelRef}
          className="border-t border-border bg-bg px-page pt-2 pb-5 lg:hidden"
        >
          <div className="mx-auto max-w-7xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-menu-item
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/login"
              data-menu-item
              onClick={() => setOpen(false)}
              className="block border-t border-border pt-4 text-lg font-medium text-ink-muted transition-colors hover:text-ink sm:hidden"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
