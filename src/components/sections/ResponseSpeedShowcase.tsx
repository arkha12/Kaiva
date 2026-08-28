"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import { CurvedMarqueeText } from "@/components/motion/CurvedMarqueeText";
import { PulsingDot } from "@/components/motion/PulsingDot";
import { Reveal } from "@/components/motion/Reveal";

const aiReply =
  "Hola Juan, vi que te interesa la F-150 XLT 2023. Tenemos 2 unidades disponibles, ¿agendamos una prueba de manejo mañana?";

export function ResponseSpeedShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["100%", "24rem"]);
  const radius = useTransform(scrollYProgress, [0, 1], [24, 48]);
  const compareOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[170vh] bg-ink">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-page py-20">
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-brand-light/80">
            La velocidad importa
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Karva responde en segundos, no en horas.
          </h2>
        </Reveal>

        <motion.div
          style={{ opacity: compareOpacity }}
          className="mt-8 flex items-center gap-10 sm:gap-16"
        >
          <div className="text-center">
            <p className="text-xs text-white/50">Respuesta manual</p>
            <p className="mt-1 text-3xl font-bold text-white/40 sm:text-4xl">
              ~45 min
            </p>
          </div>
          <div className="h-10 w-px bg-white/20" />
          <div className="text-center">
            <p className="text-xs text-brand-light/70">Karva AI</p>
            <p className="mt-1 text-3xl font-bold text-white sm:text-4xl">
              ~30 seg
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ width, borderRadius: radius }}
          className="relative mt-10 flex aspect-[4/5] max-w-full items-center justify-center overflow-hidden bg-gradient-to-br from-brand via-ai to-ink"
        >
          <CurvedMarqueeText
            text={aiReply}
            className="absolute inset-0 h-full w-full text-white/70"
          />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
            <PulsingDot className="absolute -top-1 -right-1 text-success" />
            <Sparkles className="h-6 w-6 text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
