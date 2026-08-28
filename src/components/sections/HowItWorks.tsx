"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  {
    title: "El lead llega",
    body: "De WhatsApp, un portal o un formulario. Entra a un inbox unificado, sin importar el canal.",
  },
  {
    title: "Karva AI responde y califica",
    body: "En segundos, con datos reales del vehículo y del dealer. Extrae presupuesto, trade-in y urgencia.",
  },
  {
    title: "Se agenda el siguiente paso",
    body: "Una cita, una llamada o un seguimiento — programado, no perdido en un chat sin dueño.",
  },
  {
    title: "Tu equipo cierra, el dashboard mide",
    body: "Tiempo de respuesta, tasa de conversión y ROI por vendedor, visibles desde el primer día.",
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="como-funciona" className="bg-surface px-page py-section">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-brand">Cómo funciona</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            De lead a cita, sin que nadie lo empuje a mano.
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-16 max-w-2xl">
          <div className="absolute top-2 left-4 h-[calc(100%-2rem)] w-px bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-2 left-4 w-px bg-brand"
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="relative flex gap-6 pl-0"
              >
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-surface text-sm font-bold text-brand">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
