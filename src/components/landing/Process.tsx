import { SectionHeader } from "./primitives";

const steps = [
  { number: "01", title: "Entendemos el problema", description: "Analizamos tus procesos, herramientas y objetivos." },
  { number: "02", title: "Diseñamos la solución", description: "Definimos el alcance, la tecnología y los resultados que se medirán." },
  { number: "03", title: "Desarrollamos e integramos", description: "Construimos la solución y la conectamos con tus sistemas." },
  { number: "04", title: "Medimos y mejoramos", description: "Evaluamos el funcionamiento y optimizamos la implementación." },
];

export function Process() {
  return (
    <section id="como-trabajamos" className="px-margin-safe py-section-gap bg-surface-container-lowest border-y border-outline-variant/30">
      <div data-reveal className="max-w-container-max mx-auto">
        <SectionHeader align="center" eyebrow="NUESTRO ENFOQUE" title="Cómo trabajamos" />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step, i) => (
            <li key={step.number} className="relative">
              {/* En móvil, una línea vertical une los pasos; en escritorio, una horizontal */}
              {i < steps.length - 1 && (
                <>
                  <span className="absolute left-[22px] top-14 -bottom-10 w-px bg-outline-variant sm:hidden" aria-hidden="true" />
                  <span
                    className="absolute left-16 right-[-2rem] top-[22px] hidden h-px bg-gradient-to-r from-outline-variant to-outline-variant/0 lg:block"
                    aria-hidden="true"
                  />
                </>
              )}
              <div className="flex gap-5 sm:block">
                <span className="relative flex w-11 h-11 shrink-0 items-center justify-center rounded-full bg-primary font-mono-metric text-sm text-white">
                  {step.number}
                </span>
                <div className="sm:mt-6">
                  <h3 className="font-headline-md text-xl">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-on-surface-variant">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
