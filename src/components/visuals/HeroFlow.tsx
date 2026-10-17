"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useCycle } from "@/hooks/use-cycle";
import { cn } from "@/lib/utils";
import { KaivaMark } from "./KaivaMark";

type NodeId = "erp" | "email" | "docs" | "core" | "execute" | "report";

const sources: { id: NodeId; icon: string; label: string; detail: string }[] = [
  { id: "erp", icon: "database", label: "ERP / CRM", detail: "Órdenes y clientes" },
  { id: "email", icon: "mail", label: "Email", detail: "Solicitudes entrantes" },
  { id: "docs", icon: "description", label: "Documentos", detail: "Facturas y contratos" },
];

const actions: { id: NodeId; icon: string; label: string; detail: string }[] = [
  { id: "execute", icon: "bolt", label: "Ejecuta", detail: "Orden #4821 actualizada" },
  { id: "report", icon: "summarize", label: "Reporta", detail: "Resumen enviado al equipo" },
];

// Cada línea del registro ilumina el nodo del diagrama que la produce.
const activity: { node: NodeId; time: string; tag: string; text: string; pending?: boolean }[] = [
  { node: "email", time: "09:41:02", tag: "Lectura", text: "3 facturas recibidas por email" },
  { node: "docs", time: "09:41:04", tag: "Extracción", text: "Datos extraídos de FAC-2291" },
  { node: "erp", time: "09:41:05", tag: "Validación", text: "Montos coinciden con la orden #4821" },
  { node: "core", time: "09:41:07", tag: "Aprobación", text: "Pago mayor a $40,000 enviado a revisión humana", pending: true },
  { node: "execute", time: "09:41:12", tag: "Ejecución", text: "Orden #4821 actualizada en el ERP" },
  { node: "report", time: "09:41:13", tag: "Reporte", text: "Resumen diario enviado a compras" },
];

// Geometría del diagrama de escritorio: 3 tarjetas de 64px con 16px de hueco
// (alto total 224px) a la izquierda y 2 tarjetas centradas a la derecha.
// Los conectores SVG usan exactamente esas coordenadas, por eso las alturas
// de las tarjetas son fijas.
const ROW_HEIGHT = 224;
const SOURCE_Y = [32, 112, 192];
const ACTION_Y = [72, 152];
const CENTER_Y = 112;
const CONNECTOR_W = 72;

const leftPaths = SOURCE_Y.map((y) => `M0 ${y} C${CONNECTOR_W / 2} ${y} ${CONNECTOR_W / 2} ${CENTER_Y} ${CONNECTOR_W} ${CENTER_Y}`);
const rightPaths = ACTION_Y.map((y) => `M0 ${CENTER_Y} C${CONNECTOR_W / 2} ${CENTER_Y} ${CONNECTOR_W / 2} ${y} ${CONNECTOR_W} ${y}`);

export function HeroFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { index, inView, reduceMotion } = useCycle(activity.length, 2200, ref);
  const active = activity[index].node;
  const animate = inView && !reduceMotion;

  // Las tres últimas líneas, la más reciente abajo.
  const visibleLog = [2, 1, 0].map((back) => (index - back + activity.length) % activity.length);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-black/80 bg-[#0e0e0e] text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]"
    >
      <div className="dot-grid-dark absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Barra de ventana */}
      <div className="relative flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b border-white/10">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono-metric text-xs text-white/45 truncate">kaiva / flujo-de-compras</span>
        </div>
        <span className="flex items-center gap-2 text-xs text-white/70 shrink-0">
          <span className="relative flex w-2 h-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:animate-none" />
            <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          En ejecución
        </span>
      </div>

      {/* Diagrama, escritorio */}
      <div className="relative hidden md:grid grid-cols-[minmax(0,1fr)_72px_auto_72px_minmax(0,1fr)] items-center px-6 lg:px-10 py-10">
        <ul className="space-y-4" aria-label="Fuentes de información">
          {sources.map((s) => (
            <NodeCard key={s.id} {...s} active={active === s.id} />
          ))}
        </ul>

        <Connector paths={leftPaths} animate={animate} />
        <Core active={active === "core"} />
        <Connector paths={rightPaths} animate={animate} />

        <ul className="space-y-4" aria-label="Acciones">
          {actions.map((a) => (
            <NodeCard key={a.id} {...a} active={active === a.id} done />
          ))}
        </ul>
      </div>

      {/* Diagrama, móvil: el mismo flujo en vertical */}
      <div className="relative md:hidden flex flex-col items-center px-4 py-8">
        <ul className="grid grid-cols-3 gap-2 w-full" aria-label="Fuentes de información">
          {sources.map((s) => (
            <li
              key={s.id}
              className={cn(
                "flex flex-col items-center gap-1.5 rounded-lg border px-2 py-3 text-center transition-colors duration-500",
                active === s.id ? "border-white/40 bg-white/10" : "border-white/10 bg-white/[0.03]"
              )}
            >
              <span className="material-symbols-outlined text-[20px] text-white/80" aria-hidden="true">{s.icon}</span>
              <span className="text-[11px] leading-tight text-white/80">{s.label}</span>
            </li>
          ))}
        </ul>
        <VerticalConnector />
        <Core active={active === "core"} compact />
        <VerticalConnector />
        <ul className="grid grid-cols-2 gap-2 w-full" aria-label="Acciones">
          {actions.map((a) => (
            <li
              key={a.id}
              className={cn(
                "flex items-center gap-2 rounded-lg border px-3 py-3 transition-colors duration-500",
                active === a.id ? "border-white/40 bg-white/10" : "border-white/10 bg-white/[0.03]"
              )}
            >
              <span className="material-symbols-outlined text-[18px] text-emerald-400" aria-hidden="true">{a.icon}</span>
              <span className="text-xs text-white/85">{a.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Registro de actividad */}
      <div className="relative border-t border-white/10 bg-black/30 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold tracking-[0.18em] text-white/40">ACTIVIDAD</span>
          <span className="font-mono-metric text-[11px] text-white/35">en vivo</span>
        </div>
        <ul className="relative h-[5.5rem] overflow-hidden space-y-2" aria-live="off">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleLog.map((i, position) => {
              const entry = activity[i];
              const latest = position === visibleLog.length - 1;
              return (
                <motion.li
                  key={i}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: latest ? 1 : 0.45, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 h-6 text-xs sm:text-[13px]"
                >
                  <span className="font-mono-metric text-white/35 shrink-0 hidden sm:inline">{entry.time}</span>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-white/80 shrink-0">{entry.tag}</span>
                  <span className="text-white/75 truncate min-w-0">{entry.text}</span>
                  <span
                    className={cn(
                      "material-symbols-outlined text-[16px] shrink-0 ml-auto",
                      entry.pending ? "text-amber-400" : "text-emerald-400"
                    )}
                    aria-hidden="true"
                  >
                    {entry.pending ? "hourglass_top" : "check_circle"}
                  </span>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}

function NodeCard({
  icon,
  label,
  detail,
  active,
  done,
}: {
  icon: string;
  label: string;
  detail: string;
  active: boolean;
  done?: boolean;
}) {
  return (
    <li
      className={cn(
        "flex h-16 items-center gap-3 rounded-xl border px-3 lg:px-4 transition-all duration-500",
        active ? "border-white/40 bg-white/10 shadow-[0_0_0_4px_rgba(255,255,255,0.04)]" : "border-white/10 bg-white/[0.03]"
      )}
    >
      <span
        className={cn(
          "flex w-9 h-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-500",
          active ? "bg-white text-black" : "bg-white/10 text-white/80"
        )}
      >
        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{icon}</span>
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-white truncate">{label}</span>
        <span className="block text-xs text-white/45 truncate">{detail}</span>
      </span>
      {done && (
        <span
          className={cn(
            "material-symbols-outlined ml-auto text-[18px] shrink-0 transition-colors duration-500 hidden lg:inline",
            active ? "text-emerald-400" : "text-white/20"
          )}
          aria-hidden="true"
        >
          check_circle
        </span>
      )}
    </li>
  );
}

function Connector({ paths, animate }: { paths: string[]; animate: boolean }) {
  return (
    <svg
      viewBox={`0 0 ${CONNECTOR_W} ${ROW_HEIGHT}`}
      width={CONNECTOR_W}
      height={ROW_HEIGHT}
      fill="none"
      aria-hidden="true"
    >
      {paths.map((d) => (
        <path
          key={d}
          d={d}
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1"
          className="[stroke-dasharray:4_5] animate-flow-dash motion-reduce:animate-none"
        />
      ))}
      {/* Paquetes de datos viajando por cada conector */}
      {animate &&
        paths.map((d, i) => (
          <circle key={`p-${d}`} r="2.5" fill="#fff">
            <animateMotion dur="1.8s" begin={`${i * 0.45}s`} repeatCount="indefinite" path={d} />
          </circle>
        ))}
    </svg>
  );
}

function VerticalConnector() {
  return (
    <div className="relative h-10 w-px my-1 border-l border-dashed border-white/25" aria-hidden="true">
      <span className="absolute -left-[3.5px] w-1.5 h-1.5 rounded-full bg-white animate-travel-y motion-reduce:hidden" />
    </div>
  );
}

function Core({ active, compact }: { active: boolean; compact?: boolean }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center shrink-0",
        compact ? "w-28 h-28" : "w-32 h-32 lg:w-40 lg:h-40"
      )}
    >
      <div
        className="absolute inset-0 rounded-full border border-dashed border-white/25 animate-[spin_24s_linear_infinite] motion-reduce:animate-none"
        aria-hidden="true"
      />
      <div
        className={cn(
          "absolute inset-3 rounded-full border transition-all duration-500",
          active ? "border-amber-400/60 bg-amber-400/10" : "border-white/15 bg-white/[0.06]"
        )}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center text-center">
        <KaivaMark className="w-6 h-6 text-white mb-1" />
        <span className="text-sm font-semibold tracking-[0.2em]">KAIVA</span>
        <span className="mt-0.5 text-[10px] tracking-wider text-white/50">
          {active ? "EN REVISIÓN" : "WORKER"}
        </span>
      </div>
    </div>
  );
}
