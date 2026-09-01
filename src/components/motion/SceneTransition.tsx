"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Transición entre secciones con profundidad real: la sección llega desde el
 * fondo del espacio, se endereza al centro del viewport y se aleja al salir
 * por arriba. No es un fade, es un movimiento en Z.
 *
 * Reglas de rendimiento que trae incorporadas, aprendidas a la mala en esta
 * rama:
 *
 * - **Sólo `transform` y `opacity`.** Nada que obligue a recalcular layout.
 * - **`will-change` sólo mientras el trigger está activo.** Promover a capa una
 *   sección entera de texto y dejarla promovida el resto de la página cuesta
 *   memoria de GPU y vuelve borroso el texto en algunos navegadores.
 * - **Un solo scrub por sección**, con un timeline de dos tramos, en vez de
 *   dos triggers por sección.
 */
export function SceneTransition({
  children,
  className,
  /** Cuánto se hunde en Z, en px. Sube para las secciones protagonistas. */
  depth = 380,
  /** Grados de inclinación al entrar y salir. */
  tilt = 11,
}: {
  children: ReactNode;
  className?: string;
  depth?: number;
  tilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el || reduced) return;

      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        el,
        { z: -depth, rotateX: tilt, opacity: 0.25, scale: 0.94 },
        { z: 0, rotateX: 0, opacity: 1, scale: 1, ease: "none", duration: 1 },
      ).to(el, {
        z: -depth * 0.72,
        rotateX: -tilt * 0.75,
        opacity: 0.25,
        scale: 0.96,
        ease: "none",
        duration: 1,
      });

      const trigger = ScrollTrigger.create({
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
        animation: tl,
        onToggle: (self) => {
          el.style.willChange = self.isActive ? "transform, opacity" : "auto";
        },
      });

      return () => {
        trigger.kill();
        tl.kill();
        gsap.set(el, { clearProps: "all" });
      };
    },
    { scope: ref, dependencies: [reduced, depth, tilt] },
  );

  return (
    <div ref={ref} className={cn("[perspective:1600px]", className)}>
      <div ref={innerRef} data-gsap className="[transform-style:preserve-3d]">
        {children}
      </div>
    </div>
  );
}
