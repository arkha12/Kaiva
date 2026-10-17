"use client";

import { useRef } from "react";
import { useCycle } from "@/hooks/use-cycle";
import { cn } from "@/lib/utils";

const steps = [
  { icon: "visibility", label: "ENTIENDE" },
  { icon: "query_stats", label: "ANALIZA" },
  { icon: "alt_route", label: "DECIDE" },
  { icon: "how_to_reg", label: "PIDE APROBACIÓN", human: true },
  { icon: "bolt", label: "EJECUTA" },
  { icon: "summarize", label: "REPORTA" },
];

export function WorkerSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const { index: active } = useCycle(steps.length, 1300, ref);
  const progress = `${(active / (steps.length - 1)) * 100}%`;

  const nodeClass = (i: number, human?: boolean) =>
    cn(
      "flex items-center justify-center rounded-full border transition-all duration-500",
      i < active && "bg-primary border-primary text-white",
      i === active &&
        (human
          ? "bg-amber-400 border-amber-400 text-black ring-8 ring-amber-400/20"
          : "bg-primary border-primary text-white ring-8 ring-primary/10"),
      i > active && "bg-white border-outline text-on-surface-variant"
    );

  return (
    <div ref={ref}>
      {/* Escritorio: línea horizontal con progreso */}
      <div className="relative max-w-5xl mx-auto hidden md:block">
        <div className="absolute top-7 left-[8.333%] right-[8.333%] h-px bg-outline-variant/70" aria-hidden="true">
          <div className="h-full bg-primary transition-[width] duration-700 ease-out" style={{ width: progress }} />
        </div>
        <ol className="relative grid grid-cols-6">
          {steps.map((step, i) => (
            <li key={step.label} className="flex flex-col items-center text-center">
              <span className={cn("w-14 h-14", nodeClass(i, step.human), i === active && "scale-110")}>
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">{step.icon}</span>
              </span>
              <span className="mt-5 font-mono-metric text-[11px] text-outline">{`0${i + 1}`}</span>
              <span
                className={cn(
                  "mt-1 font-label-caps text-xs tracking-[0.08em] max-w-[110px] transition-colors duration-500",
                  i === active ? "text-primary" : "text-on-surface-variant"
                )}
              >
                {step.label}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Móvil: la misma secuencia en vertical */}
      <div className="relative max-w-sm mx-auto md:hidden">
        <div className="absolute left-5 top-5 bottom-5 w-px -translate-x-1/2 bg-outline-variant/70" aria-hidden="true">
          <div className="w-full bg-primary transition-[height] duration-700 ease-out" style={{ height: progress }} />
        </div>
        <ol className="relative space-y-3">
          {steps.map((step, i) => (
            <li key={step.label} className="flex items-center gap-4">
              <span className={cn("w-10 h-10 shrink-0", nodeClass(i, step.human))}>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{step.icon}</span>
              </span>
              <span className="font-mono-metric text-[11px] text-outline">{`0${i + 1}`}</span>
              <span
                className={cn(
                  "font-label-caps text-xs tracking-[0.08em] transition-colors duration-500",
                  i === active ? "text-primary" : "text-on-surface-variant"
                )}
              >
                {step.label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
