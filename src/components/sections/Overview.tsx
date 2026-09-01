import { Sparkles } from "lucide-react";
import { CountUp } from "@/components/motion/CountUp";
import { DeviceFrame } from "@/components/motion/DeviceFrame";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

const metrics = [
  { label: "Ventas activas", value: 18, suffix: "" },
  { label: "Deals por cerrar", value: 7, suffix: "" },
  { label: "Documentos pendientes", value: 12, suffix: "" },
  { label: "Inventario disponible", value: 64, suffix: "" },
  { label: "Vehículos con aging", value: 5, suffix: "" },
  { label: "Tareas pendientes", value: 23, suffix: "" },
];

const activity = [
  { time: "09:12", text: "Alejandro subió el comprobante de ingresos de Juan Pérez" },
  { time: "08:47", text: "María López pasó a etapa de cierre" },
  { time: "08:30", text: "Nueva solicitud de financiamiento enviada a la entidad" },
  { time: "Ayer", text: "Kia Sportage 2022 cumplió 60 días en inventario" },
];

const opportunities = [
  "2 clientes con expediente completo y sin cita agendada",
  "1 unidad con margen alto y sin actividad hace 10 días",
  "3 leads sin primer contacto en las últimas 24 horas",
];

export function Overview() {
  return (
    <section className="px-page py-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Toda tu operación en una sola vista."
          body="Entiende qué está pasando en tu dealer sin revisar diferentes hojas de cálculo, chats y sistemas."
        />

        <Reveal className="mt-16">
          <DeviceFrame variant="gradient" label="Karva Pro · Overview">
            <div className="space-y-4 p-4 sm:space-y-5 sm:p-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-border bg-surface p-4"
                  >
                    {/* tabular-nums evita que el ancho baile mientras CountUp corre. */}
                    <p className="text-3xl font-bold tracking-tight text-ink tabular-nums">
                      <CountUp to={metric.value} suffix={metric.suffix} />
                    </p>
                    <p className="mt-1 text-xs font-medium text-ink-subtle">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-2">
                <div className="rounded-xl border border-border bg-surface p-5">
                  <p className="text-xs font-semibold tracking-wide text-ink-subtle uppercase">
                    Actividad reciente
                  </p>
                  <ul className="mt-4 space-y-3.5">
                    {activity.map((item) => (
                      <li key={item.text} className="flex gap-3">
                        <span className="w-12 shrink-0 text-xs text-ink-subtle tabular-nums">
                          {item.time}
                        </span>
                        <span className="text-sm text-ink-muted">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-ai/25 bg-ai-light/60 p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-ai uppercase">
                    <Sparkles className="h-3.5 w-3.5" />
                    Oportunidades detectadas por Karva
                  </p>
                  <ul className="mt-4 space-y-3.5">
                    {opportunities.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ai" />
                        <span className="text-sm text-ink-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </DeviceFrame>
        </Reveal>
      </div>
    </section>
  );
}
