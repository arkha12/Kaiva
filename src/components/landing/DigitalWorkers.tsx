import { WorkerSteps } from "@/components/visuals/WorkerSteps";
import { IconTile, SectionHeader } from "./primitives";

export function DigitalWorkers() {
  return (
    <section id="trabajadores" className="px-margin-safe py-section-gap bg-surface-container-lowest border-y border-outline-variant/30">
      <div data-reveal className="max-w-container-max mx-auto">
        <SectionHeader
          align="center"
          eyebrow="CAPACIDAD LABORAL DIGITAL"
          title="Más que automatización."
          description="Un Trabajador Digital es un sistema de IA diseñado para ejecutar procesos empresariales completos, no solamente responder preguntas."
        />

        <WorkerSteps />

        <div className="mt-14 md:mt-20 max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 rounded-2xl border border-outline-variant/60 bg-surface-container-low p-6 sm:p-8">
          <IconTile icon="shield_person" tone="solid" />
          <p className="text-on-surface">
            <strong className="font-semibold">Las decisiones críticas permanecen bajo control humano.</strong>
            <span className="mt-1 block text-on-surface-variant">
              KAIVA ejecuta dentro de permisos, reglas y procesos definidos por la empresa.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
