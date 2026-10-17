import { cn } from "@/lib/utils";
import { IconTile, SectionHeader } from "./primitives";

const results = [
  { icon: "timer", title: "Menos Tiempo", description: "Procesos que antes tardaban horas pueden ejecutarse mucho más rápido." },
  { icon: "autorenew", title: "Menos Trabajo Repetitivo", description: "Los equipos pueden dedicar tiempo a tareas de mayor valor estratégico." },
  { icon: "check_circle", title: "Menos Errores", description: "Procesos consistentes, trazables y 100% auditables en cada paso." },
  { icon: "trending_up", title: "Más Capacidad", description: "Las empresas pueden manejar más operaciones sin aumentar proporcionalmente su estructura." },
];

// Bordes internos de la rejilla 2×2 (una sola columna en móvil).
const cellBorders = [
  "border-b sm:border-r",
  "border-b",
  "border-b sm:border-b-0 sm:border-r",
  "",
];

export function Results() {
  return (
    <section className="px-margin-safe py-section-gap">
      <div data-reveal className="max-w-container-max mx-auto">
        <SectionHeader
          align="center"
          eyebrow="RESULTADOS"
          title="No automatizamos por automatizar."
          description="Automatizamos donde existe impacto económico."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-3xl border border-outline-variant bg-white">
          {results.map((result, i) => (
            <div
              key={result.title}
              className={cn(
                "group flex flex-col gap-6 border-outline-variant p-7 sm:p-10 transition-colors hover:bg-surface-container-low",
                cellBorders[i]
              )}
            >
              <IconTile icon={result.icon} className="group-hover:bg-primary group-hover:text-white" />
              <div>
                <h3 className="font-headline-md text-headline-md">{result.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-on-surface-variant">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
