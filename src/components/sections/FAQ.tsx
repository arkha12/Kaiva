"use client";

import { Plus, X } from "lucide";
import { MorphIcon } from "morphicons/react";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es Karva Pro?",
    answer:
      "Karva Pro es una plataforma de software e inteligencia artificial diseñada para ayudar a dealers de autos a administrar ventas, inventario, clientes, documentos y operaciones desde un solo lugar.",
  },
  {
    question: "¿Karva reemplaza mi DMS?",
    answer:
      "Karva está diseñado inicialmente para complementar y conectar los workflows comerciales del dealer, no para sustituir todas las funciones administrativas de un DMS.",
  },
  {
    question: "¿Karva sirve para vendedores?",
    answer:
      "Sí. Cada vendedor puede administrar sus clientes, deals, tareas, documentos y seguimientos mientras Karva ayuda a identificar qué necesita atención.",
  },
  {
    question: "¿Karva utiliza inteligencia artificial?",
    answer:
      "Sí. La IA ayuda a analizar información, documentos y actividad operativa para detectar pendientes y generar recomendaciones.",
  },
  {
    question: "¿Karva aprueba financiamientos?",
    answer:
      "No. Las decisiones de crédito corresponden a las instituciones financieras. Karva ayuda a organizar y dar seguimiento al proceso.",
  },
  {
    question: "¿Puedo probar Karva?",
    answer:
      "Estamos abriendo acceso gradualmente a dealers seleccionados. Puedes solicitar una demo o acceso anticipado.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<string>("");

  return (
    <section id="faq" className="px-page py-section">
      <div className="mx-auto max-w-3xl">
        <SplitHeading
          text="Preguntas frecuentes"
          className="text-center text-h2 font-bold text-ink"
        />

        <Reveal className="mt-14">
          {/* Accordion de Watermelon UI (Radix por debajo): a diferencia del
              truco de grid-template-rows que había antes, trae el manejo de
              teclado, aria-expanded y el alto animado ya resueltos. */}
          <Accordion
            type="single"
            collapsible
            value={open}
            onValueChange={setOpen}
            className="w-full"
          >
            {faqs.map((faq, i) => {
              const id = `faq-${i}`;
              return (
                <AccordionItem
                  key={faq.question}
                  value={id}
                  className="border-border"
                >
                  <AccordionTrigger className="gap-4 py-6 text-left sm:gap-6 text-h3 font-medium text-ink hover:no-underline [&>svg:last-child]:hidden">
                    <span className="flex-1">{faq.question}</span>
                    {/* Morphicons sí gana aquí: el ícono tiene dos estados
                        reales, así que el + se dobla en × en vez de saltar. */}
                    <MorphIcon
                      icon={open === id ? X : Plus}
                      spring="smooth"
                      reducedMotion="user"
                      size={22}
                      strokeWidth={1.75}
                      className="mt-1 shrink-0 text-ink-subtle"
                    />
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="max-w-2xl text-body text-justified text-ink-muted">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
