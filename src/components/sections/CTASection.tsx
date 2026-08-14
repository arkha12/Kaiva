"use client";

import { useState } from "react";

export function CTASection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <section id="contacto" className="px-margin-safe py-section-gap transition-all duration-700 opacity-100 translate-y-0">
      <div className="max-w-container-max mx-auto bg-primary rounded-xl p-16 md:p-24 text-center text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blueprint-grid"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="font-display-xl text-4xl md:text-5xl tracking-tight leading-tight">
            ¿Qué trabajo podría hacer KAIVA por tu empresa?
          </h2>
          <p className="text-lg opacity-80 max-w-xl mx-auto font-light">
            Cuéntanos qué proceso consume tiempo, personas o dinero. Analizaremos si puede convertirse en un trabajador digital.
          </p>
          <div className="pt-8 max-w-xl mx-auto">
            {formStatus === "success" ? (
              <div className="bg-white/10 border border-white/20 p-8 rounded-xl flex flex-col items-center">
                <span className="material-symbols-outlined text-4xl mb-4 text-green-400">check_circle</span>
                <h3 className="font-headline-md text-xl mb-2">Mensaje Recibido</h3>
                <p className="text-white/80 font-light">Nuestro equipo analizará tus procesos y se pondrá en contacto pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-label-caps text-white/70 tracking-wider">Nombre</label>
                    <input id="name" required type="text" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-label-caps text-white/70 tracking-wider">Email Corporativo</label>
                    <input id="email" required type="email" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors" placeholder="tu@empresa.com" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-label-caps text-white/70 tracking-wider">Empresa</label>
                  <input id="company" required type="text" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors" placeholder="Nombre de tu empresa" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-label-caps text-white/70 tracking-wider">¿Qué proceso te gustaría automatizar?</label>
                  <textarea id="message" required rows={3} className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none" placeholder="Describe brevemente el proceso..."></textarea>
                </div>
                <button type="submit" disabled={formStatus === "submitting"} className="w-full bg-white text-primary px-8 py-4 rounded-lg font-headline-md text-base hover:scale-[1.01] transition-transform active:scale-[0.99] disabled:opacity-70 flex justify-center items-center gap-2 mt-2">
                  {formStatus === "submitting" ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                      Enviando...
                    </>
                  ) : "Solicitar diagnóstico"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
