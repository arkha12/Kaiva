import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Un único ancho de contenido para toda la landing.
 *
 * Antes cada sección elegía el suyo (`max-w-3xl`, `5xl`, `6xl`, `7xl`) y los
 * bordes de las tarjetas no coincidían de una sección a la siguiente: al hacer
 * scroll la página parecía respirar de lado. Ahora todo cuelga de `wide`, y
 * `narrow` es sólo para columnas de texto que no deben pasar de la medida
 * legible.
 */
export function Container({
  children,
  className,
  size = "wide",
}: {
  children: ReactNode;
  className?: string;
  size?: "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        size === "wide" ? "max-w-6xl" : "max-w-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
