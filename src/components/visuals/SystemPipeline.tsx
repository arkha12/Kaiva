"use client";

import { useRef } from "react";
import { useCycle } from "@/hooks/use-cycle";
import { cn } from "@/lib/utils";
import { KaivaMark } from "./KaivaMark";

const systems = [
  { icon: "database", label: "ERP" },
  { icon: "table_chart", label: "Excel / PDFs" },
  { icon: "mail", label: "Email" },
];

const capabilities = ["Analiza", "Decide", "Ejecuta"];

const results = [
  { icon: "task_alt", label: "Tareas Listas", dot: "bg-green-500" },
  { icon: "sync", label: "Datos Actualizados", dot: "bg-blue-500" },
];

export function SystemPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { index: activeCapability } = useCycle(capabilities.length, 1400, ref);

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-center justify-center">
      {/* 1. Tus sistemas */}
      <div className="w-full max-w-sm lg:flex-1 rounded-2xl border border-outline-variant bg-white p-5 sm:p-6 shadow-sm">
        <StageHeader icon="hub" label="TUS SISTEMAS" />
        <ul className="space-y-2">
          {systems.map((s) => (
            <li key={s.label} className="flex items-center gap-3 rounded-lg bg-surface-container-low px-3 py-2.5">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant" aria-hidden="true">{s.icon}</span>
              <span className="text-sm text-on-surface">{s.label}</span>
              <span className="ml-auto flex items-center gap-1.5 text-[11px] text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
                Conectado
              </span>
            </li>
          ))}
        </ul>
      </div>

      <FlowLink />

      {/* 2. KAIVA */}
      <div className="relative w-full max-w-sm lg:flex-1 overflow-hidden rounded-2xl bg-primary p-6 sm:p-8 text-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)]">
        <div className="dot-grid-dark absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-1">
            <KaivaMark className="w-7 h-7" />
            <span className="font-headline-md text-headline-md tracking-tight">KAIVA</span>
          </div>
          <div className="font-label-caps text-[11px] tracking-[0.15em] text-white/50 mb-6">TRABAJADOR DIGITAL</div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {capabilities.map((c, i) => (
              <span
                key={c}
                className={cn(
                  "rounded-md py-2 text-center transition-colors duration-500",
                  i === activeCapability ? "bg-white text-black" : "bg-white/10 text-white/70"
                )}
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2" aria-hidden="true">
            {capabilities.map((c, i) => (
              <span key={c} className="h-0.5 rounded-full bg-white/10 overflow-hidden">
                <span
                  className={cn(
                    "block h-full bg-white transition-[width] duration-[1300ms] ease-linear",
                    i <= activeCapability ? "w-full" : "w-0"
                  )}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      <FlowLink />

      {/* 3. Resultados */}
      <div className="w-full max-w-sm lg:flex-1 rounded-2xl border border-outline-variant bg-white p-5 sm:p-6 shadow-sm">
        <StageHeader icon="verified" label="RESULTADOS" />
        <ul className="space-y-2">
          {results.map((r) => (
            <li key={r.label} className="flex items-center gap-3 rounded-lg border border-outline-variant/50 px-3 py-2.5">
              <span className={cn("w-2 h-2 rounded-full shrink-0", r.dot)} aria-hidden="true" />
              <span className="text-sm text-on-surface">{r.label}</span>
              <span className="material-symbols-outlined ml-auto text-[18px] text-on-surface-variant" aria-hidden="true">{r.icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StageHeader({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="flex w-8 h-8 items-center justify-center rounded-lg bg-surface-container text-primary">
        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{icon}</span>
      </span>
      <span className="font-label-caps text-xs tracking-[0.12em] text-primary">{label}</span>
    </div>
  );
}

/** Conector con un pulso viajando: horizontal en escritorio, vertical apilado. */
function FlowLink() {
  return (
    <>
      <div className="relative hidden lg:block w-10 xl:w-16 h-px shrink-0 border-t border-dashed border-outline" aria-hidden="true">
        <span className="absolute -top-[3.5px] w-1.5 h-1.5 rounded-full bg-primary animate-travel-x motion-reduce:hidden" />
      </div>
      <div className="relative lg:hidden h-10 w-px border-l border-dashed border-outline" aria-hidden="true">
        <span className="absolute -left-[3.5px] w-1.5 h-1.5 rounded-full bg-primary animate-travel-y motion-reduce:hidden" />
      </div>
    </>
  );
}
