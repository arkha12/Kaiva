import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Chasis de MacBook: tapa con pantalla + bisagra y base. */
export function MacFrame({
  children,
  className,
  screenClassName,
  trafficLights = true,
}: {
  children: ReactNode;
  className?: string;
  /** Fondo del área de pantalla — el contenido decide si es claro u oscuro. */
  screenClassName?: string;
  /** Barra superior con los tres botones de macOS. */
  trafficLights?: boolean;
}) {
  return (
    <div className={cn("select-none", className)}>
      {/* Tapa */}
      <div className="rounded-[20px] border border-white/15 bg-gradient-to-b from-[#26272d] to-[#141519] p-[10px] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)]">
        <div
          className={cn(
            "relative overflow-hidden rounded-[12px] ring-1 ring-black/60",
            screenClassName ?? "bg-white",
          )}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 z-20 h-[18px] w-[130px] -translate-x-1/2 rounded-b-xl bg-[#141519]" />
          {/* Reflejo diagonal del cristal */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.07)_0%,transparent_38%)]"
          />

          {/* Barra de menú: los botones a la izquierda y el notch encima, que
              es como se ve realmente una MacBook con la muesca en medio. */}
          {trafficLights && (
            <div className="relative flex h-9 items-center gap-2 border-b border-white/[0.06] px-4">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.25)]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.25)]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.25)]" />
            </div>
          )}

          {children}
        </div>
      </div>

      {/* Bisagra y base */}
      <div className="relative mx-auto h-[12px] w-[104%] rounded-b-[12px] bg-gradient-to-b from-[#3d3f47] to-[#1a1b20] shadow-[0_18px_30px_-12px_rgba(0,0,0,0.9)]">
        <div className="absolute top-0 left-1/2 h-[5px] w-[110px] -translate-x-1/2 rounded-b-md bg-[#0e0f13]" />
      </div>
      {/* Sombra de contacto con la mesa */}
      <div
        aria-hidden
        className="mx-auto h-6 w-[86%] rounded-[50%] bg-black/50 blur-xl"
      />
    </div>
  );
}
