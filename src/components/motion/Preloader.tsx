"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Cortina de entrada con el logo, como la intro de outcrowd.io. */
export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      if (reduced) {
        setGone(true);
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          setGone(true);
          // Los triggers se midieron con la cortina encima; al desmontarse
          // conviene recalcular antes de que el usuario llegue a scrollear.
          ScrollTrigger.refresh();
        },
      });
      tl.from("[data-preloader-logo]", {
        opacity: 0,
        scale: 0.85,
        duration: 0.7,
        ease: "expo.out",
      })
        .to("[data-preloader-logo]", {
          opacity: 0,
          scale: 1.15,
          duration: 0.5,
          ease: "power2.in",
        }, "+=0.35")
        .to(ref.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "expo.inOut",
        }, "-=0.15");
    },
    { scope: ref, dependencies: [reduced] },
  );

  if (gone) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
    >
      <span
        data-preloader-logo
        className="text-4xl font-bold tracking-tight text-ink"
      >
        Karva Pro
      </span>
    </div>
  );
}
