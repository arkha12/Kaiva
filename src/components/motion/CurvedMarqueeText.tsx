"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export function CurvedMarqueeText({
  text,
  className,
  pathD = "M 30 230 C 30 110, 170 20, 260 90 S 450 250, 470 70",
  viewBox = "0 0 500 280",
}: {
  text: string;
  className?: string;
  pathD?: string;
  viewBox?: string;
}) {
  const reduced = useReducedMotion();
  const textPathRef = useRef<SVGTextPathElement>(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    if (reduced) return;
    let raf: number;
    const loop = () => {
      offsetRef.current -= 0.045;
      if (offsetRef.current <= -100) offsetRef.current = 0;
      textPathRef.current?.setAttribute("startOffset", `${offsetRef.current}%`);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const repeated = `${text}   •   ${text}   •   `;

  return (
    <svg viewBox={viewBox} className={className} aria-hidden>
      <path id="curved-marquee-path" d={pathD} fill="none" />
      <text fontSize="15" fontWeight={600} fill="currentColor">
        <textPath ref={textPathRef} href="#curved-marquee-path" startOffset="0%">
          {repeated}
        </textPath>
      </text>
    </svg>
  );
}
