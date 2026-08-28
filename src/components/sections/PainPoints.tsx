"use client";

import { motion } from "framer-motion";
import { Clock, MessageCircleWarning, PackageSearch, Repeat } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScrollColorHeading } from "@/components/motion/ScrollColorHeading";
import { PerspectiveGrid } from "@/components/three/PerspectiveGrid";

const pains = [
  {
    icon: MessageCircleWarning,
    title: "Leads sin respuesta",
    body: "Cada minuto que un lead espera es un minuto que tiene para escribirle al dealer de al lado.",
  },
  {
    icon: Clock,
    title: "Tiempo de respuesta inconsistente",
    body: "Depende de quién esté libre en ese momento, no de un proceso que puedas medir ni mejorar.",
  },
  {
    icon: Repeat,
    title: "Seguimientos que se pierden",
    body: "Sin un sistema que los recuerde, un cliente interesado se vuelve un chat olvidado en WhatsApp.",
  },
  {
    icon: PackageSearch,
    title: "Inventario que envejece",
    body: "Un auto que lleva semanas en el lote pierde margen cada día que nadie lo nota a tiempo.",
  },
];

export function PainPoints() {
  return (
    <section id="producto" className="relative overflow-hidden bg-ink px-page py-section">
      <PerspectiveGrid className="pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-glow">El problema</p>
          <ScrollColorHeading
            text="No es falta de inventario. Es falta de velocidad."
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          />
          <p className="mt-4 text-lg text-white/60">
            Antes de construir un marketplace, Karva resuelve lo que un dealer
            siente todos los días.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((pain) => (
            <StaggerItem key={pain.title}>
              <div className="group h-full rounded-2xl border border-border bg-bg p-6 transition-transform hover:-translate-y-1">
                <motion.div
                  whileHover={{ scale: 1.12, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-danger-bg text-danger"
                >
                  <pain.icon className="h-5 w-5" />
                </motion.div>
                <h3 className="mt-4 font-semibold text-ink">{pain.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{pain.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
