"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export type ClusterIcon = {
  id: string;
  /** Ya renderizado por quien llama: un Server Component no puede pasar un
      componente de ícono (una función) como prop a este Client Component,
      sólo el elemento ya resuelto. */
  icon: ReactNode;
  /** Posición en porcentaje del contenedor (0-100). */
  top: number;
  left: number;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
} as const;

/**
 * Iconos de categoría dispersos en posiciones orgánicas (no grid), conectados
 * por líneas finas que convergen hacia la marca del producto. Replica la
 * sección de integraciones de workos.com/atlas con iconos genéricos: el
 * brief prohíbe mostrar logos de terceros como si fueran partners
 * confirmados, así que nunca son marcas reales.
 */
export function IntegrationCluster({
  icons,
  className,
}: {
  icons: ClusterIcon[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll<HTMLElement>(
        "[data-cluster-icon]",
      );
      const lines = ref.current.querySelectorAll<SVGLineElement>(
        "[data-cluster-line]",
      );

      gsap.from(items, {
        opacity: 0,
        scale: 0.6,
        duration: reduced ? 0.01 : 0.5,
        stagger: reduced ? 0 : 0.06,
        ease: "back.out(1.8)",
        scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
      });
      gsap.from(lines, {
        opacity: 0,
        duration: reduced ? 0.01 : 0.8,
        delay: reduced ? 0 : 0.3,
        scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
      });

      if (reduced) return;
      items.forEach((item, i) => {
        gsap.to(item, {
          y: "+=8",
          duration: 2.4 + (i % 3) * 0.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.15,
        });
      });
    },
    { scope: ref, dependencies: [reduced] },
  );

  return (
    <div
      ref={ref}
      className={cn("relative h-[clamp(16rem,28vw,22rem)] w-full", className)}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {icons.map((item) => (
          <line
            key={item.id}
            data-cluster-line
            x1={item.left}
            y1={item.top}
            x2={50}
            y2={100}
            stroke="var(--color-border)"
            strokeWidth={0.3}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {icons.map((item) => {
        const size = item.size ?? "md";
        return (
          <div
            key={item.id}
            data-cluster-icon
            className={cn(
              "absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-border bg-bg shadow-card",
              sizeClasses[size],
            )}
            style={{ top: `${item.top}%`, left: `${item.left}%` }}
          >
            {item.icon}
          </div>
        );
      })}

      <div className="absolute bottom-0 left-1/2 flex h-14 w-14 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-2xl bg-brand text-lg font-bold text-white shadow-lift">
        K
      </div>
    </div>
  );
}
