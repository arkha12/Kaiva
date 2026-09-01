"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export type InsightPill = {
  id: string;
  label: string;
  /** Posición absoluta respecto al contenedor, ej. "-top-4 -right-6". */
  position: string;
};

/**
 * Pills de anotación flotando junto a un mockup, como los callouts
 * "Preference / Shorthand" de la sección "Always learning, never guessing" de
 * workos.com/atlas: cada uno entra con un pequeño rebote y queda flotando muy
 * sutilmente. Se ocultan en móvil (`sm:block`) porque el posicionamiento
 * absoluto se sale del contenedor en pantallas angostas.
 */
export function InsightPills({
  pills,
  children,
  className,
}: {
  pills: InsightPill[];
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll<HTMLElement>("[data-pill]");
      if (!items.length) return;

      gsap.from(items, {
        opacity: 0,
        scale: 0.85,
        y: 12,
        duration: reduced ? 0.01 : 0.6,
        stagger: reduced ? 0 : 0.12,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
      });

      if (reduced) return;
      items.forEach((item, i) => {
        gsap.to(item, {
          y: "+=6",
          duration: 2.2 + i * 0.3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.6 + i * 0.2,
        });
      });
    },
    { scope: ref, dependencies: [reduced] },
  );

  return (
    <div ref={ref} className={cn("relative", className)}>
      {children}
      {pills.map((pill) => (
        <div
          key={pill.id}
          data-pill
          className={cn(
            "absolute z-20 hidden rounded-full border border-border bg-bg px-3.5 py-2 text-xs font-medium text-ink shadow-card sm:block",
            pill.position,
          )}
        >
          {pill.label}
        </div>
      ))}
    </div>
  );
}
