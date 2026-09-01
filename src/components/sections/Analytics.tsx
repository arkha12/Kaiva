import { DeviceFrame } from "@/components/motion/DeviceFrame";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

const funnel = [
  { stage: "Leads", value: 100 },
  { stage: "Contactados", value: 74 },
  { stage: "Con cita", value: 41 },
  { stage: "Negociación", value: 23 },
  { stage: "Cerrados", value: 12 },
];

const losses = [
  { reason: "Precio", share: 34 },
  { reason: "Financiamiento no aprobado", share: 26 },
  { reason: "Sin seguimiento", share: 21 },
  { reason: "Compró en otro lado", share: 19 },
];

const aging = [
  { bucket: "0 a 30 días", count: 38, tone: "bg-success" },
  { bucket: "31 a 60 días", count: 21, tone: "bg-warning" },
  { bucket: "más de 60 días", count: 5, tone: "bg-danger" },
];

const reports = [
  "Conversión de leads",
  "Deals por etapa",
  "Tiempo promedio de cierre",
  "Motivos de pérdida",
  "Aging de inventario",
  "Desempeño comercial",
  "Tareas pendientes",
  "Documentos bloqueados",
];

export function Analytics() {
  return (
    <section id="analytics" className="px-page py-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Entiende qué está impulsando tus ventas."
          body="Karva convierte la actividad diaria de tu equipo en información que los gerentes pueden utilizar para tomar mejores decisiones."
        />

        <Reveal className="mt-16">
          <DeviceFrame variant="gradient" label="Karva Pro · Analytics">
            <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="text-xs font-semibold tracking-wide text-ink-subtle uppercase">
                  Conversión de leads
                </p>
                <div className="mt-5 space-y-3">
                  {funnel.map((step) => (
                    <div key={step.stage}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm text-ink-muted">
                          {step.stage}
                        </span>
                        <span className="text-sm font-medium text-ink tabular-nums">
                          {step.value}
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-muted">
                        <div
                          className="h-full rounded-full bg-brand"
                          style={{ width: `${step.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="text-xs font-semibold tracking-wide text-ink-subtle uppercase">
                  Motivos de pérdida
                </p>
                <div className="mt-5 space-y-4">
                  {losses.map((loss) => (
                    <div key={loss.reason}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm text-ink-muted">
                          {loss.reason}
                        </span>
                        <span className="shrink-0 text-sm font-medium text-ink tabular-nums">
                          {loss.share}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-muted">
                        <div
                          className="h-full rounded-full bg-ai"
                          style={{ width: `${loss.share}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 border-t border-border pt-4 text-sm text-ink-muted">
                  Tiempo promedio de cierre:{" "}
                  <span className="font-semibold text-ink">11 días</span>
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="text-xs font-semibold tracking-wide text-ink-subtle uppercase">
                  Aging de inventario
                </p>
                <div className="mt-5 space-y-4">
                  {aging.map((bucket) => (
                    <div key={bucket.bucket}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm text-ink-muted">
                          {bucket.bucket}
                        </span>
                        <span className="text-sm font-medium text-ink tabular-nums">
                          {bucket.count}
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-muted">
                        <div
                          className={`h-full rounded-full ${bucket.tone}`}
                          style={{ width: `${(bucket.count / 64) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4">
                  <div>
                    <dt className="text-xs text-ink-subtle">Tareas pendientes</dt>
                    <dd className="mt-1 text-xl font-bold text-ink tabular-nums">
                      23
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-subtle">
                      Documentos bloqueados
                    </dt>
                    <dd className="mt-1 text-xl font-bold text-warning tabular-nums">
                      4
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </DeviceFrame>
        </Reveal>

        <Stagger
          step={0.05}
          className="mt-12 grid gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reports.map((report) => (
            <StaggerItem key={report}>
              <div className="border-t border-border pt-3.5 text-body text-ink-muted">
                {report}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
