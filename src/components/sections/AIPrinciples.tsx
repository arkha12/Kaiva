"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, UserCheck, FileClock } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScrollColorHeading } from "@/components/motion/ScrollColorHeading";

const principles = [
  {
    icon: ShieldCheck,
    title: "Nunca inventa lo que importa",
    body: "Precio final, garantía, disponibilidad o un compromiso comercial siempre vienen de tus datos — o se muestran como no confirmados.",
  },
  {
    icon: UserCheck,
    title: "Tú decides qué se automatiza",
    body: "Modo sugerencia, semi-autónomo o automático, por acción y por dealer. La IA propone; el permiso es tuyo.",
  },
  {
    icon: FileClock,
    title: "Todo queda auditado",
    body: "Cada respuesta, cada tool call y cada aprobación humana quedan registradas — sin caja negra.",
  },
];

export function AIPrinciples() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-surface px-page py-section">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-ai">IA con supervisión</p>
          <ScrollColorHeading
            text="AI-native no significa sin control humano."
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {principles.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full rounded-2xl border border-ai/20 bg-ai-light/40 p-6">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-ai text-white">
                  {!reduced && (
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-xl bg-ai"
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  )}
                  <p.icon className="relative h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
