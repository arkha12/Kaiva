"use client";

import { Sparkles } from "lucide-react";
import { FloatingCard } from "@/components/motion/FloatingCard";
import { LiveInsightPanel, type InsightTab } from "@/components/motion/LiveInsightPanel";
import { PulsingDot } from "@/components/motion/PulsingDot";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

const kpis = [
  { label: "Ventas activas", value: "18", delta: "+4 esta semana", tone: "text-success" },
  { label: "Deals por cerrar", value: "7", delta: "3 con expediente completo", tone: "text-ink-subtle" },
  { label: "Documentos pendientes", value: "12", delta: "4 bloquean una operación", tone: "text-warning" },
  { label: "Unidades con aging", value: "5", delta: "más de 60 días", tone: "text-danger" },
];

const priorities = [
  { name: "Juan Pérez", car: "Mazda CX-5", next: "Solicitar comprobante", tone: "bg-warning" },
  { name: "María López", car: "Toyota Corolla", next: "Agendar cierre", tone: "bg-success" },
  { name: "Carlos Ramírez", car: "Kia Sportage", next: "Contactar cliente", tone: "bg-danger" },
];

const documents = [
  { name: "Juan Pérez", state: "94% completo", detail: "Falta la firma", tone: "text-warning" },
  { name: "María López", state: "100% completo", detail: "Listo para cierre", tone: "text-success" },
  { name: "Carlos Ramírez", state: "62% completo", detail: "Falta comprobante de domicilio", tone: "text-danger" },
];

const inventoryRows = [
  { car: "Kia Sportage 2022", detail: "68 días en inventario", tone: "text-danger" },
  { car: "Toyota Corolla 2023", detail: "31 días · en negociación", tone: "text-brand" },
  { car: "Mazda CX-5 2022", detail: "14 días · disponible", tone: "text-success" },
];

const followUps = [
  { name: "Carlos Ramírez", detail: "48 horas sin seguimiento", tone: "text-danger" },
  { name: "Elena Torres", detail: "Falta enviar propuesta", tone: "text-warning" },
  { name: "Sofía Márquez", detail: "Seguimiento agendado hoy", tone: "text-success" },
];

const tabs: InsightTab[] = [
  {
    id: "prioridades",
    label: "Prioridades de hoy",
    loadingLabel: "Analizando prioridades…",
    content: (
      <div className="space-y-4 p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-3">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-border bg-surface p-3.5">
              <p className="truncate text-xs font-medium text-ink-subtle">{kpi.label}</p>
              <p className="mt-1.5 text-2xl font-bold tracking-tight text-ink tabular-nums">
                {kpi.value}
              </p>
              <p className={`mt-0.5 truncate text-xs ${kpi.tone}`}>{kpi.delta}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2.5 rounded-xl border border-ai/30 bg-ai-light p-3.5">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-ai" />
          <p className="text-sm text-ink">
            <span className="font-semibold">Karva AI:</span> 4 clientes podrían
            cerrar hoy y 3 operaciones están detenidas por documentos.
          </p>
        </div>

        <div className="space-y-2">
          {priorities.map((row) => (
            <div
              key={row.name}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-2.5"
            >
              <span className={`h-2 w-2 shrink-0 rounded-full ${row.tone}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{row.name}</p>
                <p className="truncate text-xs text-ink-subtle">{row.car}</p>
              </div>
              <span className="min-w-0 truncate text-xs font-medium text-brand">
                {row.next}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "documentos",
    label: "Documentos pendientes",
    loadingLabel: "Revisando documentos…",
    content: (
      <div className="space-y-2.5 p-4 sm:p-5">
        {documents.map((doc) => (
          <div key={doc.name} className="rounded-xl border border-border bg-surface px-4 py-3">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium text-ink">{doc.name}</p>
              <p className={`text-xs font-medium tabular-nums ${doc.tone}`}>{doc.state}</p>
            </div>
            <p className="mt-1 text-xs text-ink-subtle">{doc.detail}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "inventario",
    label: "Inventario",
    loadingLabel: "Consultando inventario…",
    content: (
      <div className="space-y-2.5 p-4 sm:p-5">
        {inventoryRows.map((row) => (
          <div
            key={row.car}
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3"
          >
            <p className="truncate text-sm font-medium text-ink">{row.car}</p>
            <p className={`shrink-0 text-xs font-medium ${row.tone}`}>{row.detail}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "seguimientos",
    label: "Seguimientos",
    loadingLabel: "Buscando seguimientos…",
    content: (
      <div className="space-y-2.5 p-4 sm:p-5">
        {followUps.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3"
          >
            <p className="truncate text-sm font-medium text-ink">{row.name}</p>
            <p className={`shrink-0 text-xs font-medium ${row.tone}`}>{row.detail}</p>
          </div>
        ))}
      </div>
    ),
  },
];

export function Hero() {
  return (
    <section id="hero" className="relative px-page pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-ink-muted">
            <PulsingDot className="text-ai" />
            AI Operating System for Automotive Sales
          </span>
        </Reveal>

        <SplitHeading
          as="h1"
          onLoad
          text="Vende más autos. Más rápido. Con IA."
          className="mt-7 text-display font-bold text-ink"
        />

        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-xl text-lead text-justified-center text-ink-muted">
            Karva Pro centraliza inventario, clientes, ventas, documentos y
            operaciones en una sola plataforma, mientras la IA detecta qué
            necesita atención y qué hacer a continuación.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <ShimmerButton href="#demo" className="px-7 py-3.5 text-base">
            Solicitar demo
          </ShimmerButton>
          <ShimmerButton href="#como-funciona" variant="ghost" className="px-7 py-3.5 text-base">
            Ver cómo funciona
          </ShimmerButton>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-ink-subtle">
            Diseñado para dealers y equipos de venta de autos usados.
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 max-w-2xl">
        <LiveInsightPanel tabs={tabs} label="Karva Pro · Panel del dealer" />

        {/* Se oculta por debajo de `sm`: sobre un panel angosto la tarjeta
            flotante tapaba el contenido del panel. */}
        <div className="absolute -bottom-8 -left-6 hidden w-52 sm:block lg:-left-14">
          <FloatingCard>
            <p className="text-xs font-medium text-ink-subtle">Expediente Juan Pérez</p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-ink">94%</p>
            <p className="mt-0.5 text-xs text-warning">Falta la firma</p>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}
