"use client";

import { motion, useReducedMotion } from "framer-motion";

/* Redondeado a 2 decimales: Math.cos/sin puede diferir en el último bit entre
   el motor de Node (SSR) y el del navegador, lo que rompe la hidratación. */
function round(n: number) {
  return Math.round(n * 100) / 100;
}

const DOTS = Array.from({ length: 10 }, (_, i) => {
  const angle = (i / 10) * Math.PI * 2;
  const radius = 34 + (i % 3) * 6;
  return {
    x: round(50 + Math.cos(angle) * radius),
    y: round(50 + Math.sin(angle) * radius * 0.6),
    delay: i * 0.35,
    ai: i % 3 === 0,
  };
});

/**
 * Versión SVG/CSS del mismo concepto (core de IA + leads orbitando) para
 * equipos sin WebGL. También es lo que se sirve en el HTML estático.
 */
export function HeroSceneFallback() {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      role="presentation"
      aria-hidden="true"
    >
      <motion.circle
        cx={50}
        cy={50}
        r={9}
        fill="none"
        stroke="url(#karva-core-gradient)"
        strokeWidth={0.6}
        animate={reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50px 50px" }}
      />
      <defs>
        <linearGradient id="karva-core-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2e5bff" />
          <stop offset="100%" stopColor="#6d5cff" />
        </linearGradient>
      </defs>
      {DOTS.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={0.8}
          fill={dot.ai ? "#6d5cff" : "#2e5bff"}
          animate={
            reduced
              ? undefined
              : { opacity: [0.3, 0.9, 0.3], scale: [1, 1.3, 1] }
          }
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
