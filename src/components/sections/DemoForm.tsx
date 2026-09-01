"use client";

import { CheckCircle2 } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { requestDemo } from "@/app/actions";
import { initialDemoState } from "@/lib/demo";
import { cn } from "@/lib/utils";

const fields = [
  { name: "nombre", label: "Nombre", type: "text", autoComplete: "name" },
  { name: "empresa", label: "Empresa o dealer", type: "text", autoComplete: "organization" },
  { name: "ciudad", label: "Ciudad", type: "text", autoComplete: "address-level2" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "telefono", label: "Teléfono o WhatsApp", type: "tel", autoComplete: "tel" },
  {
    name: "inventario",
    label: "Vehículos en inventario, aproximado",
    type: "text",
    inputMode: "numeric" as const,
  },
  {
    name: "vendedores",
    label: "Número de vendedores",
    type: "text",
    inputMode: "numeric" as const,
  },
  {
    name: "software",
    label: "¿Qué software utilizan actualmente?",
    type: "text",
    full: true,
  },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-ink/15 bg-bg px-4 py-3 text-body text-ink outline-none transition-colors placeholder:text-ink-subtle focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Enviando..." : "Solicitar demo"}
    </button>
  );
}

export function DemoForm() {
  const [state, formAction] = useActionState(requestDemo, initialDemoState);

  return (
    <section id="demo" className="px-page py-section">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          title="Solicita una demo de Karva Pro."
          body="Cuéntanos cómo trabaja tu dealer y te mostramos la plataforma con tu caso en mente."
        />

        <Reveal className="mt-14">
          {state.status === "success" ? (
            <div
              role="status"
              className="rounded-2xl border border-success/30 bg-success-bg p-8 text-center sm:p-12"
            >
              <CheckCircle2 className="mx-auto h-9 w-9 text-success" />
              <p className="mx-auto mt-5 max-w-md text-lead text-justified-center text-ink">
                Gracias. Nuestro equipo se pondrá en contacto contigo para
                conocer tu operación y mostrarte Karva.
              </p>
            </div>
          ) : (
            <form
              action={formAction}
              noValidate
              className="panel rounded-2xl border border-border p-6 shadow-lift sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <div
                    key={field.name}
                    className={field.full ? "sm:col-span-2" : undefined}
                  >
                    <label
                      htmlFor={field.name}
                      className="text-sm font-medium text-ink"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      inputMode={field.inputMode}
                      autoComplete={field.autoComplete}
                      aria-invalid={Boolean(state.errors[field.name])}
                      aria-describedby={
                        state.errors[field.name]
                          ? `${field.name}-error`
                          : undefined
                      }
                      className={cn(
                        inputClass,
                        state.errors[field.name] &&
                          "border-danger focus-visible:border-danger focus-visible:ring-danger/20",
                      )}
                    />
                    {state.errors[field.name] && (
                      <p
                        id={`${field.name}-error`}
                        className="mt-1.5 text-sm text-danger"
                      >
                        {state.errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="problema"
                    className="text-sm font-medium text-ink"
                  >
                    ¿Cuál es el principal problema que quieren resolver?
                  </label>
                  <textarea
                    id="problema"
                    name="problema"
                    rows={4}
                    className={cn(inputClass, "resize-y")}
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <SubmitButton />
                <p className="text-sm text-ink-subtle">
                  Te respondemos en menos de 24 horas hábiles.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
