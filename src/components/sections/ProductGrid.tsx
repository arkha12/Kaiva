"use client";

import { motion } from "framer-motion";
import {
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
    body: "Todos los leads en un solo lugar: origen, vehículo, dueño, último contacto y próxima acción.",
    accent: "brand",
  },
  {
    icon: Sparkles,
    title: "Karva AI Sales Agent",
    body: "Conversa, califica intención y propone la siguiente acción — con aprobación humana cuando importa.",
    accent: "ai",
  },
  {
    icon: Warehouse,
    title: "Inventory Lite",
    body: "Alta e importación de vehículos, con aging visible antes de que se vuelva un problema de margen.",
    accent: "brand",
  },
  {
    icon: ListChecks,
    title: "Tasks & Follow-ups",
    body: "Recordatorios, cadencias y una cola de 'necesita atención' que nadie tiene que recordar a mano.",
    accent: "brand",
  },
  {
    icon: TrendingUp,
    title: "Dashboard ROI",
    body: "Leads atendidos, tiempo de respuesta, citas y conversión — el número que justifica pagar por esto.",
    accent: "success",
  },
  {
    icon: ScrollText,
    title: "Audit Log",
    body: "Qué hizo la IA, qué aprobó un humano y qué falló. Sin caja negra en decisiones comerciales.",
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
    <section className="px-page py-section">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-brand">El producto</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Un Dealer OS, no seis herramientas sueltas.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
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
                </SpotlightCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
