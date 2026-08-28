"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

export function CTA() {
  const reduced = useReducedMotion();

  return (
    <section id="piloto" className="px-page py-section">
      <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-ink px-8 py-16 text-center sm:px-16">
        <motion.div
          aria-hidden
          animate={reduced ? undefined : { x: [0, 60, -30, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={reduced ? undefined : { x: [0, -50, 40, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-ai/30 blur-3xl"
        />

        <div className="relative">
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

          <div className="mt-8 flex justify-center">
            <ShimmerButton
              variant="light"
              href="mailto:hola@karva.com?subject=Quiero ser dealer piloto de Karva"
            >
              Escríbenos a hola@karva.com
            </ShimmerButton>
          </div>

          <div className="mx-auto mt-10 flex max-w-md items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              K
            </div>
            <p className="text-sm text-white/80">
              &ldquo;Somos un equipo chico construyendo esto con dealers
              reales, no para una demo de inversionistas. Si algo no
              funciona, queremos que nos lo digas antes que a nadie.&rdquo;
              <span className="mt-1 block text-xs font-semibold text-white/50">
                — Equipo fundador de Karva
              </span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
