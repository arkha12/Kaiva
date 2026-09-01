import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

export function FinalCTA() {
  return (
    <section className="px-page pt-8 pb-24">
      {/* El último contenedor negro de la página, con el halo azul de marca
          detrás. El gradiente se rasteriza una vez; nada de filter aquí. */}
      <div className="panel relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-20 text-center shadow-lift sm:px-12 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(46,91,255,0.28),transparent_70%)]"
        />

        <div className="relative mx-auto max-w-3xl">
          <SplitHeading
            text="Tu próximo crecimiento no debería requerir más burocracia."
            className="text-h2 font-bold text-ink"
          />

          <Reveal>
            <p className="mx-auto mt-7 max-w-2xl text-lead text-justified-center text-ink-muted">
              Dale a tu equipo las herramientas y la inteligencia para vender
              más autos con menos fricción.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
            <ShimmerButton
              href="#demo"
              variant="light"
              className="px-8 py-4 text-base"
            >
              Solicitar demo
            </ShimmerButton>
            <a
              href="mailto:hola@karva.io?subject=Quiero%20hablar%20con%20Karva"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-surface"
            >
              Hablar con Karva
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
