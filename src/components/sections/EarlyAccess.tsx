import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

export function EarlyAccess() {
  return (
    <section id="precios" className="px-page py-section">
      <div className="mx-auto max-w-3xl text-center">
        {/* Todavía no se publica pricing: estamos validando con dealers antes
            de comprometernos con planes definitivos. */}
        <SectionHeader
          eyebrow="Early access"
          title="Sé uno de los primeros dealers en usar Karva."
          body="Estamos trabajando con un grupo limitado de dealers para desarrollar la próxima generación de software automotriz en Latinoamérica."
        />

        <Reveal className="mt-10">
          <ShimmerButton href="#demo" className="px-8 py-4 text-base">
            Solicitar acceso
          </ShimmerButton>
          <p className="mt-5 text-sm text-ink-subtle">
            Cupos limitados para el programa inicial.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
