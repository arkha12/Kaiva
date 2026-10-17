import { ContactForm } from "./ContactForm";
import { Eyebrow } from "./primitives";

export function Contact() {
  return (
    <section id="contacto" className="px-margin-safe py-section-gap">
      <div
        data-reveal
        className="relative max-w-container-max mx-auto overflow-hidden rounded-3xl bg-primary px-5 py-12 sm:p-12 lg:p-16 xl:p-20 text-white"
      >
        <div className="dot-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex flex-col">
            <Eyebrow tone="dark" className="self-start">CONTACTO</Eyebrow>
            <h2 className="mt-5 font-headline-lg text-headline-lg text-balance">
              ¿Tienes un proceso que debería funcionar mejor?
            </h2>
            <p className="mt-5 max-w-xl text-body-lg font-light text-white/70">
              Cuéntanos qué necesita tu empresa. Evaluaremos el problema y te propondremos una solución tecnológica acorde con tus objetivos.
            </p>

            <p className="mt-8 lg:mt-auto flex max-w-xl gap-3 border-t border-white/10 pt-6 text-sm font-light text-white/55">
              <span className="material-symbols-outlined mt-px shrink-0 text-[18px]" aria-hidden="true">info</span>
              Cada proyecto se define según su alcance, viabilidad técnica y objetivos. Las funcionalidades, integraciones y resultados se acuerdan antes de comenzar.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
