import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Dos mockups lado a lado con el mismo tratamiento visual: una card de
 * conversación/actividad junto a una card de estado o resumen. Replica el
 * patrón "chat + card de perfil" de la sección "Build your AI team" de
 * workos.com/atlas.
 */
export function TwinCards({
  left,
  right,
  className,
}: {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 lg:grid-cols-2", className)}>
      {/* `min-w-0`: un grid item vale `min-width: auto` por defecto, que
          toma el min-content del contenido. Sin esto, el pipeline de Deals
          (con su propio `overflow-x-auto` interno) empujaba el ancho mínimo
          de esta columna más allá del viewport en vez de scrollear dentro de
          su caja. */}
      <div className="min-w-0">{left}</div>
      <div className="min-w-0">{right}</div>
    </div>
  );
}
