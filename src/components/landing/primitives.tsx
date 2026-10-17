import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

export const btnPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-medium text-on-primary transition-all hover:bg-[#2a2a2a] active:scale-[0.98]";
export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-outline-variant bg-white px-7 py-3.5 text-[15px] font-medium text-primary transition-all hover:border-primary active:scale-[0.98]";

/** Flecha que se desplaza al hacer hover sobre un `group`. */
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn("material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5", className)}
      aria-hidden="true"
    >
      arrow_forward
    </span>
  );
}

export function Eyebrow({ children, tone = "light", className }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.16em]",
        tone === "dark" ? "border-white/15 bg-white/5 text-white/70" : "border-outline-variant bg-white text-on-surface-variant",
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", tone === "dark" ? "bg-white" : "bg-primary")} aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  aside,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  aside?: ReactNode;
  align?: "left" | "center";
  tone?: Tone;
}) {
  const centered = align === "center";
  return (
    <div className={cn("mb-12 md:mb-16", aside && "md:flex md:items-end md:justify-between md:gap-12")}>
      <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2 className="mt-5 font-headline-lg text-headline-lg text-balance">{title}</h2>
        {description && (
          <p
            className={cn(
              "mt-5 text-body-lg",
              tone === "dark" ? "text-white/65" : "text-on-surface-variant",
              centered && "mx-auto max-w-2xl text-balance"
            )}
          >
            {description}
          </p>
        )}
      </div>
      {aside && (
        <p className="mt-6 md:mt-0 max-w-xs shrink-0 border-outline-variant text-sm text-on-surface-variant md:border-b md:pb-2">
          {aside}
        </p>
      )}
    </div>
  );
}

export function IconTile({
  icon,
  tone = "muted",
  size = "md",
  className,
}: {
  icon: string;
  tone?: "muted" | "solid" | "dark";
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
        size === "sm" ? "w-9 h-9" : "w-12 h-12",
        tone === "muted" && "bg-surface-container text-primary",
        tone === "solid" && "bg-primary text-white",
        tone === "dark" && "bg-white/10 text-white",
        className
      )}
    >
      <span className={cn("material-symbols-outlined", size === "sm" ? "text-[18px]" : "text-[22px]")} aria-hidden="true">
        {icon}
      </span>
    </span>
  );
}
