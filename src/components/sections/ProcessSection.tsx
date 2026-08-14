"use client";

import { motion } from "framer-motion";

export interface Step {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const STEPS: Step[] = [
  {
    id: "descubrimiento",
    title: "Descubrimiento",
    description: "Entendemos tu negocio, audiencia y objetivos para definir la estrategia correcta."
  },
  {
    id: "diseño",
    title: "Diseño",
    description: "Creamos experiencias visuales únicas con enfoque en usabilidad y conversión."
  },
  {
    id: "desarrollo",
    title: "Desarrollo",
    description: "Construimos soluciones robustas y escalables con tecnologías modernas."
  },
  {
    id: "lanzamiento",
    title: "Lanzamiento",
    description: "Deploy y optimización continua para asegurar resultados óptimos."
  },
];

export function ProcessSection() {
  return (
    <section
      className="py-24 md:py-32 bg-[var(--color-background)] [&>:*>:first-child]:mt-0 [&>:*>:last-child]:mb-0"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border-subtle)] transition-all duration-300 hover:bg-[var(--color-surface-elevated)] hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </div>
              <h3 className="text-[20px] font-medium tracking-tight my-2 transition-colors duration-300 group-hover:text-[var(--color-primary)]" style={{ color: "var(--color-on-surface)" }}>
                {step.title}
              </h3>
              <p className="text-[15px] text-[var(--color-on-surface)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}