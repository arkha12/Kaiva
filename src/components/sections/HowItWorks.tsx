import { Brain, Plug, Target } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

const steps = [
  {
    icon: Plug,
    title: "Conecta tu operación",
    body: "Agrega inventario, clientes, operaciones y documentos.",
  },
  {
    icon: Brain,
    title: "Karva analiza",
    body: "La plataforma organiza la información y detecta pendientes, riesgos y oportunidades.",
  },
  {
    icon: Target,
    title: "Tu equipo actúa",
    body: "Cada usuario recibe prioridades y próximas acciones según su función.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-page py-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="De datos dispersos a decisiones claras." />

        <div className="relative mt-16">
          {/* La línea que une los tres pasos sólo existe cuando están en fila. */}
          <div
            aria-hidden
            className="absolute top-6 right-[16.67%] left-[16.67%] hidden h-px bg-border md:block"
          />

          <Stagger step={0.12} className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <StaggerItem key={step.title} className="md:text-center">
                <div className="flex items-center gap-4 md:flex-col md:gap-0">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-base font-semibold text-brand md:mx-auto">
                    {i + 1}
                  </span>
                  <step.icon className="h-6 w-6 text-ai md:mt-6" />
                </div>
                <h3 className="mt-5 text-h3 font-semibold text-ink md:mt-4">
                  {step.title}
                </h3>
                <p className="mt-3 text-body text-ink-muted md:mx-auto md:max-w-xs">
                  {step.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
