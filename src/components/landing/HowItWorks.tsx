import { SystemPipeline } from "@/components/visuals/SystemPipeline";
import { SectionHeader } from "./primitives";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative px-margin-safe py-section-gap bg-surface-container-lowest border-y border-outline-variant/30"
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div data-reveal className="relative max-w-container-max mx-auto">
        <SectionHeader
          align="center"
          eyebrow="ARQUITECTURA"
          title="Cómo funciona KAIVA"
          description="KAIVA funciona con la infraestructura tecnológica que tu empresa ya utiliza. No somos otro ERP."
        />
        <SystemPipeline />
      </div>
    </section>
  );
}
