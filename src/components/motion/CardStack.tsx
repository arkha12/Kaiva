"use client";

import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Carrusel de cards apiladas con peek de las siguientes detrás de la activa y
 * paginación por puntos + flechas. Replica el carrusel de hilos de chat de
 * "A coworker for the whole team" en workos.com/atlas.
 *
 * Avanza sola cada segundo cuando hay más de una card: se pausa mientras el
 * puntero está encima, para no pelear con quien la está navegando a mano.
 */
export function CardStack({
  items,
  className,
}: {
  items: { id: string; content: ReactNode }[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  function go(next: number) {
    setIndex((next + items.length) % items.length);
  }

  useEffect(() => {
    if (reduced || paused || items.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 1000);
    return () => window.clearInterval(id);
  }, [reduced, paused, items.length]);

  useGSAP(
    () => {
      if (reduced || !cardRef.current) return;
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
      );
    },
    { scope: cardRef, dependencies: [index, reduced] },
  );

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative pt-5">
        {/* Cards detrás, asomando arriba de la activa. */}
        {[2, 1].map((offset) => {
          if (items.length <= offset) return null;
          const peekItem = items[(index + offset) % items.length];
          return (
            <div
              key={`${peekItem.id}-peek-${offset}`}
              aria-hidden
              className="absolute inset-x-0 top-0 h-40 rounded-2xl border border-border bg-surface"
              style={{
                transform: `translateY(${(2 - offset) * 6}px) scale(${1 - offset * 0.035})`,
                opacity: 1 - offset * 0.32,
                zIndex: 10 - offset,
              }}
            />
          );
        })}

        <div
          ref={cardRef}
          className="relative z-10 overflow-hidden rounded-2xl border border-border bg-bg shadow-lift"
        >
          {items[index].content}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => go(index - 1)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink-subtle transition-colors hover:text-ink"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Ir al elemento ${i + 1}`}
              onClick={() => go(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-5 bg-brand" : "w-1.5 bg-border",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => go(index + 1)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink-subtle transition-colors hover:text-ink"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
