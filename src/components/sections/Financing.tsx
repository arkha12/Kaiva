import { DeviceFrame } from "@/components/motion/DeviceFrame";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

const states = [
  "Preparando",
  "Enviada",
  "En revisión",
  "Información requerida",
  "Aprobada",
];

const ACTIVE = 3;

const fields = [
  { label: "Entidad financiera", value: "Financiera del Norte" },
  { label: "Estatus de solicitud", value: "Información requerida" },
  { label: "Documentos requeridos", value: "1 pendiente" },
  { label: "Tiempo en espera", value: "4 días" },
  { label: "Pendientes", value: "Comprobante de ingresos actualizado" },
  { label: "Próxima acción", value: "Solicitar documento al cliente" },
];

export function Financing() {
  return (
    <section
      id="financiamiento"
      className="px-page py-section"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Menos fricción entre el cliente y su financiamiento."
          body="Karva organiza la información, documentación y estado de cada solicitud para que el equipo pueda identificar rápidamente dónde está detenida una operación."
        />

        <Reveal className="mt-16">
          <DeviceFrame variant="gradient" label="Karva Pro · Financiamiento">
            <div className="space-y-5 p-4 sm:p-6">
              <div className="overflow-x-auto">
                <ol className="flex min-w-[38rem] items-center gap-2">
                  {states.map((state, i) => (
                    <li key={state} className="flex-1">
                      <div
                        className={`h-1.5 rounded-full ${
                          i < ACTIVE
                            ? "bg-brand"
                            : i === ACTIVE
                              ? "bg-warning"
                              : "bg-surface-muted"
                        }`}
                      />
                      <p
                        className={`mt-2.5 text-xs font-medium whitespace-nowrap ${
                          i === ACTIVE
                            ? "text-warning"
                            : i < ACTIVE
                              ? "text-ink-muted"
                              : "text-ink-subtle"
                        }`}
                      >
                        {state}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <dl className="grid gap-x-8 gap-y-5 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 lg:grid-cols-3">
                {fields.map((field) => (
                  <div key={field.label}>
                    <dt className="text-xs font-medium text-ink-subtle">
                      {field.label}
                    </dt>
                    <dd className="mt-1 text-base font-medium text-ink">
                      {field.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </DeviceFrame>
        </Reveal>

        <Reveal>
          {/* Explícito y a propósito: Karva da seguimiento al proceso, no toma
              decisiones de crédito. Aparece también en el FAQ. */}
          <p className="mx-auto mt-10 max-w-2xl text-sm text-justified-center text-ink-subtle">
            Karva no aprueba financiamientos ni toma decisiones crediticias. Las
            decisiones de crédito corresponden a las instituciones financieras.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
