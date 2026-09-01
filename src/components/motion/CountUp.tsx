"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CountUp({
  to,
  suffix = "",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (reduced) {
        el.textContent = `${to}${suffix}`;
        return;
      }
      const counter = { value: 0 };
      gsap.to(counter, {
        value: to,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = `${Math.round(counter.value)}${suffix}`;
        },
      });
    },
    { scope: ref, dependencies: [to, suffix, reduced] },
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
