import Link from "next/link";
import { HeroFlow } from "@/components/visuals/HeroFlow";
import { ArrowIcon, Eyebrow, btnPrimary, btnSecondary } from "./primitives";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-margin-safe pt-28 sm:pt-36 lg:pt-40 pb-section-gap">
      <div
        className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 h-[720px] [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
        aria-hidden="true"
      />

      <div className="relative max-w-container-max mx-auto">
        <Eyebrow>AUTOMATIZACIÓN · IA · SOFTWARE A MEDIDA</Eyebrow>

        <h1 className="mt-6 max-w-5xl font-display-xl text-display-xl text-balance">
          Soluciones tecnológicas para empresas que quieren avanzar
        </h1>

        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter">
          <div className="lg:col-span-7 max-w-2xl space-y-4 text-body-lg text-on-surface-variant">
            <p>
              Ayudamos a las empresas a automatizar procesos, conectar sus sistemas y desarrollar soluciones de inteligencia artificial que convierten tareas manuales en operaciones más eficientes.
            </p>
            <p>
              Diseñamos e implementamos tecnología adaptada a las necesidades de cada negocio, desde automatizaciones puntuales hasta sistemas de software completos.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-6 lg:border-l lg:border-outline-variant lg:pl-10">
            <p className="font-headline-md text-headline-md text-balance">
              Menos trabajo manual.{" "}
              <span className="text-on-surface-variant">Más capacidad para crecer.</span>
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <Link href="#contacto" className={btnPrimary}>
                Agenda una consulta
                <ArrowIcon />
              </Link>
              <Link href="#servicios" className={btnSecondary}>
                Explora nuestros servicios
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-20">
          <HeroFlow />
        </div>
      </div>
    </section>
  );
}
