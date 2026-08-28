import { cn } from "@/lib/utils";

const VERTICAL_COUNT = 7;
const HORIZONTAL_ROWS = [12, 32, 52, 72, 92];

/**
 * Piso de grid con horizonte curvo, look "HUD sci-fi" (referencia:
 * sign-quantara.webflow.io). Puro SVG — sin WebGL, así que corre incluso
 * donde la escena 3D no tiene soporte.
 */
export function PerspectiveGrid({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      {Array.from({ length: VERTICAL_COUNT }, (_, i) => {
        const x = ((i + 1) / (VERTICAL_COUNT + 1)) * 100;
        const bow = (x - 50) * 0.06;
        return (
          <path
            key={`v-${i}`}
            d={`M ${x - bow} 0 Q ${x} 50 ${x + bow} 100`}
            fill="none"
            stroke="white"
            strokeOpacity={0.08}
            strokeWidth={0.12}
          />
        );
      })}
      {HORIZONTAL_ROWS.map((y, i) => {
        const distFromCenter = (y - 50) / 50;
        const bow = distFromCenter * 6;
        return (
          <path
            key={`h-${i}`}
            d={`M 0 ${y} Q 50 ${y - bow} 100 ${y}`}
            fill="none"
            stroke="white"
            strokeOpacity={0.1}
            strokeWidth={0.12}
          />
        );
      })}
    </svg>
  );
}
