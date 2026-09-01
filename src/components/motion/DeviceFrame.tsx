import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Chasis de aplicación web: barra de ventana clara y contenido debajo.
 * Es el envoltorio por defecto de todos los mockups de producto de la landing.
 *
 * `variant="gradient"` añade un borde degradado marca→IA (1px, vía padding +
 * fondo en gradiente en el wrapper) para los mockups protagonistas de una
 * sección, como hace workos.com/atlas con sus tarjetas de producto. El resto
 * de mockups secundarios usa el borde plano por defecto.
 */
export function DeviceFrame({
  children,
  className,
  label,
  variant = "flat",
}: {
  children: ReactNode;
  className?: string;
  /** Texto de la barra de título, a modo de breadcrumb del producto. */
  label?: string;
  variant?: "flat" | "gradient";
}) {
  const frame = (
    <div
      className={cn(
        "panel overflow-hidden rounded-2xl shadow-lift",
        variant === "flat" ? "border border-border" : "h-full",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        {label && (
          <span className="ml-3 truncate text-xs font-medium text-ink-subtle">
            {label}
          </span>
        )}
      </div>
      {children}
    </div>
  );

  if (variant === "flat") return frame;

  return (
    <div className="rounded-[1.1rem] bg-gradient-to-br from-brand via-ai to-brand-glow p-px shadow-lift">
      {frame}
    </div>
  );
}
