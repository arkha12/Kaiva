"use client";

import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-page pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -left-40 h-[28rem] w-[28rem] rounded-full bg-ai/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            AI Dealer OS · Etapa pre-seed
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Tus leads se enfrían mientras{" "}
            <span className="text-brand">alguien encuentra tiempo</span> para
            responder.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-ink-muted"
          >
            Karva conecta tu WhatsApp, tu inventario y tu equipo con un agente
            de IA que responde en segundos, califica cada lead y agenda el
            siguiente paso — sin que tengas que contratar a nadie más.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <ShimmerButton href="#piloto">Solicita ser dealer piloto</ShimmerButton>
            <a
              href="#como-funciona"
              className="text-sm font-semibold text-ink transition-colors hover:text-brand"
            >
              Ver cómo funciona →
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-xs text-ink-subtle"
          >
            Gratis durante el piloto · Sin contrato · Buscamos 3–5 dealers
            para construir esto junto a ustedes.
          </motion.p>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}
