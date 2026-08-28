import { Reveal } from "@/components/motion/Reveal";

export function CTA() {
  return (
    <section id="piloto" className="px-page py-section">
      <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-ink px-8 py-16 text-center sm:px-16">
        <p className="text-sm font-semibold text-brand-light/80">
          Buscamos 3–5 dealers piloto
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Úsalo gratis durante el piloto. A cambio, nos dices qué no sirve.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          No estamos vendiendo una demo terminada. Estamos construyendo el
          producto junto a los dealers que lo van a usar todos los días.
        </p>
        <a
          href="mailto:hola@karva.com?subject=Quiero ser dealer piloto de Karva"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Escríbenos a hola@karva.com
        </a>
      </Reveal>
    </section>
  );
}
