"use client";

import { motion } from "framer-motion";
import {
  Check,
  Inbox,
  ListChecks,
  ScrollText,
  Sparkles,
  TrendingUp,
  Warehouse,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { TiltCard } from "@/components/motion/TiltCard";

const modules = [
  {
    icon: Inbox,
    title: "Lead Inbox",
    body: "Todos los leads en un solo lugar, sin importar el canal de origen.",
    bullets: ["Origen, vehículo y estado en una vista", "Búsqueda y filtros por dueño"],
    accent: "brand",
  },
  {
    icon: Sparkles,
    title: "Karva AI Sales Agent",
    body: "Conversa, califica intención y propone la siguiente acción.",
    bullets: ["Extrae presupuesto, trade-in y urgencia", "Aprobación humana en lo sensible"],
    accent: "ai",
  },
  {
    icon: Warehouse,
    title: "Inventory Lite",
    body: "Alta e importación de vehículos, con aging visible.",
    bullets: ["Alta por VIN o placa, con fotos", "Aging por unidad, antes del problema"],
    accent: "brand",
  },
  {
    icon: ListChecks,
    title: "Tasks & Follow-ups",
    body: "Recordatorios y una cola de lo que necesita atención.",
    bullets: ["SLA de respuesta configurable", "Cadencias sin recordarlas a mano"],
    accent: "brand",
  },
  {
    icon: TrendingUp,
    title: "Dashboard ROI",
    body: "El número que justifica pagar por esto, desde el día uno.",
    bullets: ["Tiempo de primera respuesta", "Pipeline y resultado por vendedor"],
    accent: "success",
  },
  {
    icon: ScrollText,
    title: "Audit Log",
    body: "Qué hizo la IA y qué aprobó un humano. Sin caja negra.",
    bullets: ["Quién o qué cambió cada dato", "Errores y reintentos registrados"],
    accent: "ink",
  },
] as const;

const accentClasses: Record<string, string> = {
  brand: "bg-brand-light text-brand",
  ai: "bg-ai-light text-ai",
  success: "bg-success-bg text-success",
  ink: "bg-surface-muted text-ink",
};

export function ProductGrid() {
  return (
    <section className="bg-ink px-page py-section">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-glow">El producto</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Un Dealer OS, no seis herramientas sueltas.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Los módulos que un dealer usa a diario, sobre un mismo modelo de
            datos — no un CRM genérico con IA pegada encima.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <StaggerItem key={mod.title}>
              <TiltCard max={5} className="h-full">
                <SpotlightCard className="h-full rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-ink/5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentClasses[mod.accent]}`}
                  >
                    <mod.icon className="h-5 w-5" />
                  </motion.div>
                  <h3 className="mt-4 font-semibold text-ink">{mod.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{mod.body}</p>
                  <ul className="mt-4 flex flex-col gap-1.5 border-t border-border pt-4">
                    {mod.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-xs text-ink-muted"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
