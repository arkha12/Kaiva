"use client";

import { useSyncExternalStore } from "react";

let cached: boolean | null = null;

function detect(): boolean {
  if (cached !== null) return cached;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      (canvas.getContext("webgl2") as WebGLRenderingContext | null) ??
      (canvas.getContext("webgl") as WebGLRenderingContext | null);
    cached = gl !== null;
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    cached = false;
  }
  return cached;
}

const noop = () => () => {};

/**
 * `null` mientras no se sabe (primer render), luego `true`/`false`. Hay que
 * preguntar ANTES de montar el `<Canvas>`: si el equipo no puede crear
 * contexto WebGL, three.js falla dentro de una promesa y ningún error
 * boundary de React lo atrapa.
 */
export function useWebGLSupport(): boolean | null {
  return useSyncExternalStore<boolean | null>(noop, detect, () => null);
}
