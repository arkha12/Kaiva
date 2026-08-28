"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Clock3, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { DeviceFrame } from "@/components/motion/DeviceFrame";
import { FloatingCard } from "@/components/motion/FloatingCard";
import { PulsingDot } from "@/components/motion/PulsingDot";
import { TiltCard } from "@/components/motion/TiltCard";
import { HeroSceneFallback } from "@/components/three/HeroSceneFallback";
import { SceneBoundary } from "@/components/three/SceneBoundary";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { DashboardPreview } from "./DashboardPreview";

/* three.js pesa ~600KB: se carga aparte y sólo en cliente. Hasta que baja el
   chunk se ve el fallback en SVG. */
const KarvaHeroScene = dynamic(() => import("@/components/three/KarvaHeroScene"), {
  ssr: false,
});

const firstLine = ["Tus", "leads", "se", "enfrían"];

export function Hero() {
  const webgl = useWebGLSupport();
  const pinRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1.18]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section className="relative overflow-hidden bg-ink px-page pt-32 lg:pt-40">
      <div
        aria-hidden
        role="presentation"
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
      >
        {webgl ? (
          <SceneBoundary fallback={<HeroSceneFallback />}>
            <KarvaHeroScene />
          </SceneBoundary>
        ) : (
          <HeroSceneFallback />
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
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
          </span>
          <span className="block overflow-hidden">
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
          className="mx-auto mt-6 max-w-xl text-lg text-white/60"
        >
          Karva conecta tu WhatsApp, tu inventario y tu equipo con un agente
          de IA que responde en segundos, califica cada lead y agenda el
          siguiente paso — sin que tengas que contratar a nadie más.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
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

      <motion.a
        href="#producto"
        aria-label="Ver más"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.5 },
          y: { duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
        }}
        className="relative z-10 mt-16 flex justify-center text-white/40"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>

      {/* Pin-and-zoom: el mockup crece con el scroll mientras las mini-stats se
          quedan fijas en pantalla — mismo patrón de outcrowd.io. */}
      <div ref={pinRef} className="relative z-10 mt-8 h-[180vh]">
        <div className="sticky top-24 mx-auto flex h-[65vh] max-w-3xl items-center justify-center">
          <motion.div style={{ scale }} className="w-full">
            <TiltCard max={4}>
              <DeviceFrame>
                <DashboardPreview />
              </DeviceFrame>
            </TiltCard>
          </motion.div>

          <motion.div style={{ opacity: badgeOpacity }}>
            <FloatingCard
              delay={0}
              floatDuration={7}
              className="absolute -top-8 -left-6 hidden w-44 md:block lg:-left-24"
            >
              <p className="text-[11px] text-white/50">Ventas potenciales hoy</p>
              <p className="mt-1 text-lg font-bold text-white">$128,450</p>
              <p className="mt-0.5 text-[11px] font-medium text-success">
                ↑ 18% vs ayer
              </p>
            </FloatingCard>

            <FloatingCard
              delay={0.15}
              floatDuration={8}
              className="absolute -top-4 -right-6 hidden w-40 md:block lg:-right-20"
            >
              <p className="text-[11px] text-white/50">Vehículos en riesgo</p>
              <p className="mt-1 text-lg font-bold text-white">15</p>
              <p className="mt-0.5 text-[11px] font-medium text-warning">
                ↑ 3 vs ayer
              </p>
            </FloatingCard>

            <FloatingCard
              delay={0.3}
              floatDuration={6.5}
              className="absolute -bottom-6 -left-10 hidden items-center gap-2 md:flex lg:-left-28"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <Clock3 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] text-white/50">Karva responde en</p>
                <p className="text-sm font-bold text-white">~30 seg</p>
              </div>
            </FloatingCard>

            <FloatingCard
              delay={0.45}
              floatDuration={7.5}
              className="absolute -right-8 -bottom-10 hidden items-center gap-2 md:flex lg:-right-24"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ai text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] text-white/50">Buscamos</p>
                <p className="text-sm font-bold text-white">3–5 dealers piloto</p>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
