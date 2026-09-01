import { Sparkles } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

const traditional = [
  "Registra información",
  "Muestra dashboards",
  "Depende de búsquedas manuales",
  "El usuario decide qué revisar",
];

const karva = [
  "Entiende la operación",
  "Detecta lo importante",
  "Prioriza oportunidades",
  "Recomienda la próxima acción",
];

export function Differentiation() {
  return (
    <section
      id="diferencia"
      className="px-page py-section"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="El software tradicional registra. Karva piensa contigo." />

        <Stagger step={0.12} className="mt-16 grid gap-4 md:grid-cols-2">
          <StaggerItem>
            <div className="h-full rounded-2xl border border-border bg-bg p-7 shadow-card sm:p-8">
              <p className="text-eyebrow text-ink-subtle">
                Software tradicional
              </p>
              <ul className="mt-6 space-y-4">
                {traditional.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-subtle" />
                    <span className="text-lead text-ink-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="panel relative h-full overflow-hidden rounded-2xl border border-brand/25 p-7 shadow-lift sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_0%_0%,rgba(46,91,255,0.3),transparent_65%)]"
              />
              <p className="relative flex items-center gap-2 text-eyebrow text-brand">
                <Sparkles className="h-3.5 w-3.5" />
                Karva
              </p>
              <ul className="relative mt-6 space-y-4">
                {karva.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span className="text-lead font-medium text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
