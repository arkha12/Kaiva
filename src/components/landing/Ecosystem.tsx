import { KaivaMark } from "@/components/visuals/KaivaMark";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./primitives";

// Alturas escalonadas en escritorio: cada capa hace más que la anterior.
const layers = [
  { icon: "inventory_2", title: "ERP", description: "Organiza y registra.", height: "md:min-h-56" },
  { icon: "apps", title: "Software Empresarial", description: "Gestiona información y procesos.", height: "md:min-h-64" },
  { title: "KAIVA", description: "Ejecuta el trabajo.", height: "md:min-h-72", highlight: true },
];

export function Ecosystem() {
  return (
    <section className="px-margin-safe py-section-gap">
      <div data-reveal className="max-w-container-max mx-auto">
        <SectionHeader align="center" eyebrow="POSICIONAMIENTO" title="El Ecosistema" />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 items-end gap-4">
          {layers.map((layer, i) => (
            <div
              key={layer.title}
              className={cn(
                "relative flex flex-col justify-between gap-10 overflow-hidden rounded-2xl border p-6 sm:p-8",
                layer.height,
                layer.highlight ? "border-primary bg-primary text-white" : "border-outline-variant bg-white"
              )}
            >
              {layer.highlight && <div className="dot-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />}
              <div className="relative flex items-center justify-between">
                {layer.highlight ? (
                  <KaivaMark className="w-9 h-9" />
                ) : (
                  <span className="material-symbols-outlined text-[28px] text-on-surface-variant" aria-hidden="true">
                    {layer.icon}
                  </span>
                )}
                <span className={cn("font-mono-metric text-xs", layer.highlight ? "text-white/40" : "text-outline")}>
                  {`0${i + 1}`}
                </span>
              </div>
              <div className="relative">
                <h3 className="font-headline-md text-2xl">{layer.title}</h3>
                <p className={cn("mt-2 text-body-lg font-medium", layer.highlight ? "text-white/80" : "text-on-surface-variant")}>
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="max-w-3xl mx-auto mt-14 md:mt-20 text-center font-headline-md text-xl sm:text-2xl font-light leading-relaxed text-on-surface text-balance">
          KAIVA no busca reemplazar los sistemas que ya funcionan. Busca hacerlos más útiles al ejecutar el trabajo que todavía realizan personas.
        </p>
      </div>
    </section>
  );
}
