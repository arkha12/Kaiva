"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { type RefObject, useEffect, useState } from "react";

/**
 * Índice que avanza en bucle (0 → length-1 → 0) cada `intervalMs`.
 * Sólo corre mientras `ref` está en pantalla, para no gastar renders en
 * secciones que nadie ve, y se queda quieto si el usuario pidió
 * reducir el movimiento en su sistema operativo.
 */
export function useCycle(length: number, intervalMs: number, ref: RefObject<Element | null>) {
  const [index, setIndex] = useState(0);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % length), intervalMs);
    return () => window.clearInterval(id);
  }, [inView, reduceMotion, length, intervalMs]);

  return { index, inView, reduceMotion };
}
