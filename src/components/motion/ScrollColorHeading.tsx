"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.3, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

/**
 * Encabezado cuyas palabras se iluminan progresivamente según el scroll —
 * patrón visto en outcrowd.io ("We prove, design...") y en quantara
 * ("The Core Platform Powering Tools"). No necesita pin: el propio scroll
 * del encabezado por el viewport basta para la transición.
 */
export function ScrollColorHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });
  const words = text.split(" ");

  return (
    <h2 ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1.2 / words.length;
        return (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h2>
  );
}
