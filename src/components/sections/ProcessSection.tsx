"use client";

export interface Step {
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    title: "1. Descubrimos",
    description: "Identificamos procesos costosos y repetitivos.",
  },
  {
    title: "2. Diseñamos",
    description: "Definimos reglas, permisos e integraciones.",
  },
  {
    title: "3. Automatizamos",
    description: "Construimos el trabajador digital.",
  },
  {
    title: "4. Medimos",
    description: "Comparamos tiempo, costo, errores y capacidad.",
  },
  {
    title: "5. Escalamos",
    description: "Convertimos el proceso validado en producto.",
  },
];

export function ProcessSection() {
  return (
    <section className="px-margin-safe py-section-gap bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <span className="font-label-caps text-secondary mb-4 block">NUESTRO ENFOQUE</span>
          <h2 className="font-headline-lg text-4xl">De un problema real a un trabajador digital.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {STEPS.map((step) => (
            <div key={step.title} className="relative p-6 border border-outline-variant rounded-xl bg-white hover:-translate-y-2 transition-transform shadow-sm">
              <h4 className="font-bold mb-3">{step.title}</h4>
              <p className="text-sm text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
