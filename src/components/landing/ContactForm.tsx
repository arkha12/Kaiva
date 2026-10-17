"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/contact";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-white focus:bg-white/[0.07] focus:outline-none";
const labelClass = "text-xs font-medium tracking-wider text-white/70";

// Los navegadores y clientes de correo truncan URLs mailto muy largas.
const MESSAGE_MAX = 1500;

/**
 * La página es un export estático: no hay servidor que reciba el formulario.
 * Al enviar se abre el programa de correo del visitante con el mensaje
 * armado (mailto). No podemos saber si lo envió, así que tras abrirlo no se
 * muestra un "mensaje recibido" sino la dirección como respaldo.
 */
export function ContactForm() {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();

    const subject = `Proyecto de ${field("company")}`;
    const body = [
      `Nombre: ${field("name")}`,
      `Email: ${field("email")}`,
      `Empresa: ${field("company")}`,
      "",
      "¿Qué proceso te gustaría automatizar?",
      field("message"),
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <div className="space-y-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-white/15 bg-white/[0.04] p-4 sm:p-8 text-left backdrop-blur-sm"
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
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            maxLength={MESSAGE_MAX}
            className={`${inputClass} resize-none`}
            placeholder="Describe brevemente el proceso..."
          />
        </div>
        <button
          type="submit"
          className="group mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 sm:px-8 py-4 text-center text-[15px] font-medium text-primary transition-all hover:bg-white/90 active:scale-[0.99]"
        >
          Hablemos de tu proyecto
          <span className="material-symbols-outlined hidden text-[18px] transition-transform group-hover:translate-x-0.5 min-[400px]:inline" aria-hidden="true">
            arrow_forward
          </span>
        </button>
        <p className="text-center text-xs text-white/45">
          Se abrirá tu programa de correo con el mensaje listo para enviar.
        </p>
      </form>

      <p
        role="status"
        className={
          opened
            ? "flex gap-3 rounded-xl border border-white/15 bg-white/[0.06] p-4 text-sm text-white/80"
            : "px-1 text-sm text-white/55"
        }
      >
        {opened && (
          <span className="material-symbols-outlined mt-px shrink-0 text-[18px] text-emerald-400" aria-hidden="true">mail</span>
        )}
        <span>
          {opened ? "Si no se abrió tu programa de correo, escríbenos directamente a " : "¿Prefieres escribirnos directamente? "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="[overflow-wrap:anywhere] font-medium text-white underline underline-offset-4 hover:no-underline">
            {CONTACT_EMAIL}
          </a>
        </span>
      </p>
    </div>
  );
}
