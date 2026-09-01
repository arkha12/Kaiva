import { Reveal } from "@/components/motion/Reveal";
import { DeviceFrame } from "@/components/motion/DeviceFrame";
import { TwinCards } from "@/components/motion/TwinCards";
import { SectionHeader } from "@/components/sections/SectionHeader";

const stages = ["Lead", "Documentos", "Financiamiento", "Negociación", "Cierre"];

const ACTIVE = 2;

const detail = [
  { label: "Cliente", value: "Juan Pérez" },
  { label: "Vehículo", value: "Toyota Corolla 2023" },
  { label: "Etapa", value: "Financiamiento" },
  { label: "Responsable", value: "Alejandro" },
];

export function Deals() {
  return (
    <section id="deals" className="px-page py-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Sigue cada venta de principio a fin."
          body="Cada operación tiene un lugar dentro de Karva. Cliente, vehículo, vendedor, documentación, financiamiento, tareas y actividad permanecen conectados."
        />

        {/* Dos mockups lado a lado, el pipeline general y el detalle de un
            deal de ejemplo: el patrón "chat + card de perfil" de la sección
            "Build your AI team" de workos.com/atlas. */}
        <Reveal className="mt-16">
          <TwinCards
            left={
              <DeviceFrame variant="gradient" label="Karva Pro · Pipeline">
                <div className="p-4 sm:p-6">
                  <div className="overflow-x-auto">
                    <ol className="flex min-w-[26rem] items-center gap-2">
                      {stages.map((stage, i) => (
                        <li key={stage} className="flex flex-1 items-center gap-2">
                          <div className="flex-1">
                            <div
                              className={`h-1.5 rounded-full ${
                                i <= ACTIVE ? "bg-brand" : "bg-surface-muted"
                              }`}
                            />
                            <p
                              className={`mt-2.5 text-xs font-medium whitespace-nowrap ${
                                i === ACTIVE
                                  ? "text-brand"
                                  : i < ACTIVE
                                    ? "text-ink-muted"
                                    : "text-ink-subtle"
                              }`}
                            >
                              {stage}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
                      <span className="text-sm text-ink-muted">Deals activos</span>
                      <span className="text-sm font-semibold text-ink tabular-nums">7</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
                      <span className="text-sm text-ink-muted">En financiamiento</span>
                      <span className="text-sm font-semibold text-ink tabular-nums">3</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
                      <span className="text-sm text-ink-muted">Listos para cierre</span>
                      <span className="text-sm font-semibold text-success tabular-nums">2</span>
                    </div>
                  </div>
                </div>
              </DeviceFrame>
            }
            right={
              <DeviceFrame variant="gradient" label="Karva Pro · Detalle del deal">
                <div className="p-5">
                  <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {detail.map((item) => (
                      <div key={item.label}>
                        <dt className="text-xs font-medium text-ink-subtle">{item.label}</dt>
                        <dd className="mt-1 text-base font-medium text-ink">{item.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 border-t border-border pt-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm font-medium text-ink-muted">Expediente</span>
                      <span className="text-sm font-semibold text-ink tabular-nums">
                        87% completo
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-muted">
                      <div className="h-full w-[87%] rounded-full bg-brand" />
                    </div>
                    <p className="mt-3 text-sm text-warning">
                      Falta: comprobante de domicilio
                    </p>
                  </div>

                  <p className="mt-5 border-t border-border pt-5 text-sm text-ink-muted">
                    Próxima acción:{" "}
                    <span className="font-semibold text-brand">
                      solicitar documento actualizado
                    </span>
                  </p>
                </div>
              </DeviceFrame>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
