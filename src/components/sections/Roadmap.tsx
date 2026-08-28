"use client";

import { motion } from "framer-motion";
import {
  Car,
  Gavel,
  HeartHandshake,
  Network,
  Search,
  Sparkles,
} from "lucide-react";
import { DeviceFrame } from "@/components/motion/DeviceFrame";
import { PulsingDot } from "@/components/motion/PulsingDot";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollColorHeading } from "@/components/motion/ScrollColorHeading";
import { TiltCard } from "@/components/motion/TiltCard";

const phases = [
  {
    n: "01",
    title: "Dealer OS SaaS + IA",
    status: "Ahora",
    body: "El software que un dealer usa todos los días: leads, inventario y un agente de IA que responde. Foundation antes que crecimiento.",
    note: "3–5 design partners, no todos los dealers a la vez.",
    graphic: "dashboard",
    gradient: "from-brand to-ai",
  },
  {
    n: "02",
    title: "Dealer Network",
    status: "Después",
    body: "Cuando el Dealer OS ya genera valor, conectamos inventario y datos entre los dealers de la red — la base para un catálogo compartido.",
    note: "Se habilita sólo si la Fase 1 demuestra ROI real.",
    graphic: "network",
    gradient: "from-ai to-brand-dark",
  },
  {
    n: "03",
    title: "Karva.com Marketplace",
    status: "Después",
    body: "Catálogo unificado con un agente de IA para el comprador: entiende lo que busca, compara y agenda con el dealer correcto.",
    note: "Un mercado piloto, no lanzamiento nacional.",
    graphic: "catalog",
    gradient: "from-brand-dark to-ink",
  },
  {
    n: "04",
    title: "Sell to Karva",
    status: "Después",
    body: "El consumidor vende su auto y los dealers pujan por él en una ventana de tiempo — Karva facilita la subasta, no compra el inventario.",
    note: "Asset-light: sin balance propio de vehículos.",
    graphic: "auction",
    gradient: "from-warning to-brand",
  },
  {
    n: "05",
    title: "Ecosistema",
    status: "Después",
    body: "Financiamiento, seguros y servicios — sólo después de que la liquidez del marketplace esté probada, no antes.",
    note: "El modelo con más riesgo, el último en construirse.",
    graphic: "services",
    gradient: "from-success to-ai",
  },
] as const;

function PhaseGraphic({ type }: { type: (typeof phases)[number]["graphic"] }) {
  if (type === "dashboard") {
    return (
      <div className="flex h-full flex-col justify-center gap-3 p-6">
        <div className="rounded-xl bg-white/10 p-3">
          <p className="text-[10px] text-white/50">Lead Inbox</p>
          <p className="mt-1 text-sm font-semibold text-white">
            12 leads activos
          </p>
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <p className="text-[10px] text-white/50">Karva AI</p>
          <p className="mt-1 text-sm font-semibold text-white">
            3 respuestas enviadas hoy
          </p>
        </div>
      </div>
    );
  }

  if (type === "network") {
    return (
      <div className="relative flex h-full items-center justify-center">
        <Network className="h-16 w-16 text-white/80" strokeWidth={1.5} />
        <div className="absolute inset-0 flex items-center justify-center gap-10">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              className="h-2 w-2 rounded-full bg-white"
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === "catalog") {
    return (
      <div className="flex h-full flex-col justify-center gap-3 p-6">
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs text-white/60">
          <Search className="h-3.5 w-3.5" />
          Buscar Toyota Tacoma 2023...
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-lg bg-white/10"
            >
              <Car className="h-5 w-5 text-white/50" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "auction") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3">
        <Gavel className="h-12 w-12 text-white/80" strokeWidth={1.5} />
        <div className="flex gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
            $8,200
          </span>
          <span className="rounded-full bg-white text-ink px-3 py-1 text-xs font-semibold">
            $8,650
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center gap-6">
      <HeartHandshake className="h-10 w-10 text-white/70" strokeWidth={1.5} />
      <Sparkles className="h-10 w-10 text-white/70" strokeWidth={1.5} />
    </div>
  );
}

export function Roadmap() {
  return (
    <section id="roadmap" className="bg-ink px-page py-section">
      <div className="mx-auto max-w-5xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-glow">Hacia dónde vamos</p>
          <ScrollColorHeading
            text="Del AI Dealer OS al marketplace automotriz AI-native."
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          />
          <p className="mt-4 text-lg text-white/60">
            No construimos las cinco fases a la vez. Cada una sólo se habilita
            cuando la anterior demuestra valor real.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-28">
          {phases.map((phase) => (
            <div
              key={phase.n}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal>
                <span className="flex items-center gap-1.5 text-xs font-bold text-brand-glow">
                  {phase.status === "Ahora" && <PulsingDot />}
                  {phase.n} · {phase.status}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  {phase.title}
                </h3>
                <p className="mt-4 text-white/60">{phase.body}</p>
                <p className="mt-4 text-sm font-medium text-white/40">
                  {phase.note}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <TiltCard max={4}>
                  <DeviceFrame
                    className={`bg-gradient-to-br ${phase.gradient}`}
                  >
                    <div className="h-56">
                      <PhaseGraphic type={phase.graphic} />
                    </div>
                  </DeviceFrame>
                </TiltCard>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20">
          <p className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/60">
            <span className="font-semibold text-white">
              Principio rector:
            </span>{" "}
            no construimos marketplace antes de ganar distribución en
            dealers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
