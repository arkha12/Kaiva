import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { cn } from "@/lib/utils";

/**
 * Eyebrow + titular + bajada. Se repite en casi todas las secciones del brief
 * (KARVA AI, DOCUMENT AI, EARLY ACCESS...), así que vive aquí en vez de
 * copiarse quince veces con espaciados que se van desincronizando.
 *
 * No tiene prop de tema a propósito: si se monta dentro de un `.panel`, los
 * tokens de color ya vienen volteados por herencia y el mismo `text-ink` sale
 * claro. Un prop `tone` sería una segunda fuente de verdad para lo mismo.
 */
export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "center",
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
  className?: string;
  children?: ReactNode;
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="text-eyebrow text-brand">{eyebrow}</p>
        </Reveal>
      )}

      <SplitHeading
        text={title}
        className={cn(eyebrow ? "mt-4" : "", "text-h2 font-bold text-ink")}
      />

      {body && (
        <Reveal>
          <p
            className={cn(
              "mt-6 text-lead text-ink-muted",
              centered ? "text-justified-center" : "text-justified",
            )}
          >
            {body}
          </p>
        </Reveal>
      )}

      {children}
    </div>
  );
}
