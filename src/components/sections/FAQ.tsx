"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ScrollColorHeading } from "@/components/motion/ScrollColorHeading";

const faqs = [
  {
    q: "¿Tengo que dejar mi CRM o mi WhatsApp actual?",
    a: "No. Karva se conecta a lo que ya usas — WhatsApp, portales, hojas de cálculo. El objetivo es ganar tu confianza primero, no obligarte a migrar todo desde el día uno.",
  },
  {
    q: "¿La IA puede prometer un precio o una garantía sin que yo lo sepa?",
    a: "No. La IA nunca inventa precio final, condición mecánica, garantía o disponibilidad. Esos datos vienen de lo que tú cargas, o se muestran como \"no confirmado\" hasta que un humano lo confirme.",
  },
  {
    q: "¿Cuánto cuesta durante el piloto?",
    a: "Nada. El piloto es gratis a cambio de que lo uses de verdad y nos digas semanalmente qué no sirve. Hablamos de precio cuando el producto ya te esté generando resultado.",
  },
  {
    q: "¿Qué pasa con mis datos si dejo de usar Karva?",
    a: "Puedes exportarlos o pedir que se eliminen cuando quieras. No construimos esto para dejarte atrapado.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface px-page py-section">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-brand">Preguntas frecuentes</p>
          <ScrollColorHeading
            text="Lo que suelen preguntarnos los dealers"
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          />
        </Reveal>

        <Stagger className="mt-10 flex flex-col gap-3" step={0.06}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-border bg-bg"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-ink">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-ink-subtle"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-ink-muted">{faq.a}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
