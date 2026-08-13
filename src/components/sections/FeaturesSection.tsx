"use client";

import { motion } from "framer-motion";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const FEATURES: Feature[] = [
  {
    id: "diseño-experiencia",
    title: "Diseño de experiencia",
    description: "Transformamos tu visión en interfaces intuitivas y visualmente impactantes que conectan con tu audiencia."
  },
  {
    id: "desarrollo-tecnologico",
    title: "Desarrollo tecnológico",
    description: "Soluciones robustas y escalables construidas sobre tecnologías modernas, desde Next.js hasta bases de datos personalizadas."
  },
  {
    id: "crecimiento-digital",
    title: "Crecimiento digital",
    description: "Estrategias integrales de posicionamiento, conversión y presencia digital que impulsan tus objetivos de negocio."
  },
];

export function FeaturesSection() {
  return (
    <section
      className="py-24 md:py-32 bg-[var(--color-surface)] [&>:*>:first-child]:mt-0 [&>:*>:last-child]:mb-0"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group bg-[var(--color-surface-elevated)] rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border border-[var(--color-border-subtle)]"
            >
              <h3 className="text-[24px] font-bold tracking-tight my-4 transition-colors duration-300 group-hover:text-[var(--color-primary)]" style={{ color: "var(--color-on-surface)" }}>
                {feature.title}
              </h3>
              <p className="text-[16px] text-[var(--color-on-surface)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}