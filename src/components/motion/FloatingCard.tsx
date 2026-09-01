"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function FloatingCard({
  children,
  className,
  delay = 0,
  floatDuration = 6,
  floatDistance = 10,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  floatDuration?: number;
  floatDistance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 24, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay,
          ease: "power3.out",
          onComplete: () => {
            if (reduced || !ref.current) return;
            gsap.to(ref.current, {
              y: `-=${floatDistance}`,
              duration: floatDuration / 2,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          },
        },
      );
    },
    { scope: ref, dependencies: [delay, floatDuration, floatDistance, reduced] },
  );

  return (
    <div
      ref={ref}
      data-gsap
      className={cn(
        // Sin backdrop-blur: estas tarjetas se mueven con el scroll y un
        // backdrop-filter obliga a re-muestrear el fondo en cada frame.
        // Sobre el fondo casi plano del hero no aportaba nada visible.
        "panel rounded-2xl border border-border p-3 shadow-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}
