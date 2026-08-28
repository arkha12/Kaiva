"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PulsingDot } from "@/components/motion/PulsingDot";
import { TiltCard } from "@/components/motion/TiltCard";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { DashboardPreview } from "./DashboardPreview";

const firstLine = ["Tus", "leads", "se", "enfrían"];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink px-page pt-36 pb-24 lg:pt-44 lg:pb-32">
      <motion.div
        aria-hidden
        animate={
          reduced
            ? undefined
            : { x: [0, 40, -20, 0], y: [0, -30, 20, 0] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={
          reduced
            ? undefined
            : { x: [0, -30, 30, 0], y: [0, 20, -20, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-20 -left-40 h-[28rem] w-[28rem] rounded-full bg-ai/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm"
          >
            <PulsingDot className="text-success" />
            AI Dealer OS · Etapa pre-seed
          </motion.div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden">
              {firstLine.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mr-3 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mr-3 inline-block"
              >
                mientras
              </motion.span>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block bg-gradient-to-r from-brand-glow to-ai-glow bg-clip-text text-transparent"
              >
                alguien encuentra tiempo
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                para responder.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 max-w-xl text-lg text-white/60"
          >
            Karva conecta tu WhatsApp, tu inventario y tu equipo con un agente
            de IA que responde en segundos, califica cada lead y agenda el
            siguiente paso — sin que tengas que contratar a nadie más.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <ShimmerButton href="#piloto">Solicita ser dealer piloto</ShimmerButton>
            <a
              href="#como-funciona"
              className="text-sm font-semibold text-white transition-colors hover:text-brand-glow"
            >
              Ver cómo funciona →
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 text-xs font-medium tracking-wider text-white/40 uppercase"
          >
            Gratis durante el piloto <span className="mx-2 text-white/20">·</span>
            Sin contrato <span className="mx-2 text-white/20">·</span>
            Buscamos 3–5 dealers piloto
          </motion.p>
        </div>

        <TiltCard max={6}>
          <DashboardPreview />
        </TiltCard>
      </div>

      <motion.a
        href="#producto"
        aria-label="Ver más"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1 },
          y: { duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/40 lg:block"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
