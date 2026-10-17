"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-white focus:bg-white/[0.07] focus:outline-none";
const labelClass = "text-xs font-medium tracking-wider text-white/70";

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  // TODO: el formulario todavía no envía nada a ningún lado; sólo simula el envío.
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  if (formStatus === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/[0.04] p-8 text-center">
        <span className="material-symbols-outlined mb-4 text-4xl text-emerald-400" aria-hidden="true">check_circle</span>
        <h3 className="font-headline-md text-xl">Mensaje Recibido</h3>
        <p className="mt-2 font-light text-white/75">Nuestro equipo analizará tus procesos y se pondrá en contacto pronto.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleContactSubmit}
      className="space-y-4 rounded-2xl border border-white/15 bg-white/[0.04] p-5 sm:p-8 text-left backdrop-blur-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className={labelClass}>Nombre</label>
          <input id="name" name="name" required type="text" autoComplete="name" className={inputClass} placeholder="Tu nombre" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className={labelClass}>Email Corporativo</label>
          <input id="email" name="email" required type="email" autoComplete="email" className={inputClass} placeholder="tu@empresa.com" />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="company" className={labelClass}>Empresa</label>
        <input id="company" name="company" required type="text" autoComplete="organization" className={inputClass} placeholder="Nombre de tu empresa" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className={labelClass}>¿Qué proceso te gustaría automatizar?</label>
        <textarea id="message" name="message" required rows={4} className={`${inputClass} resize-none`} placeholder="Describe brevemente el proceso..." />
      </div>
      <button
        type="submit"
        disabled={formStatus === "submitting"}
        className="group mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-medium text-primary transition-all hover:bg-white/90 active:scale-[0.99] disabled:opacity-70"
      >
        {formStatus === "submitting" ? (
          <>
            <span className="material-symbols-outlined animate-spin text-xl" aria-hidden="true">progress_activity</span>
            Enviando...
          </>
        ) : (
          <>
            Hablemos de tu proyecto
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              arrow_forward
            </span>
          </>
        )}
      </button>
    </form>
  );
}
