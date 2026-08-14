"use client";

export function CTASection() {
  return (
    <section
      className="py-24 md:py-32 bg-[var(--color-primary)] relative overflow-hidden"
    >
      <div className="absolute inset-0"></div>
      <div className="max-w-[1440px] mx-auto px-6 text-center relative">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Listos para transformar tu presencia digital?
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
          Agenda una consulta gratuita y descubre cómo podemos ayudar a hacer crecer tu negocio.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/contacto"
            className="bg-[var(--color-on-background)] text-[var(--color-primary)] px-8 py-4 rounded-full font-medium transition-colors duration-300 hover:opacity-90"
            style={{ backgroundColor: "var(--color-on-background)", color: "var(--color-primary)" }}
          >
            Reserva tu espacio
          </a>
          <a
            href="https://wa.me/521234567890"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 hover:opacity-80"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}