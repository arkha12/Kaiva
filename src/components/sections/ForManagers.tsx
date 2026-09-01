import { DeviceFrame } from "@/components/motion/DeviceFrame";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

const sellers = [
  { name: "Alejandro M.", sales: 9, conversion: 32, bar: 100 },
  { name: "Daniela R.", sales: 7, conversion: 28, bar: 78 },
  { name: "Sergio V.", sales: 4, conversion: 17, bar: 45 },
  { name: "Paola C.", sales: 3, conversion: 14, bar: 33 },
];

const signals = [
  { label: "Deals estancados", value: "6", tone: "text-warning" },
  { label: "Leads sin atender", value: "11", tone: "text-danger" },
  { label: "Tiempo de respuesta", value: "3h 12m", tone: "text-ink" },
  { label: "Tareas vencidas", value: "9", tone: "text-warning" },
  { label: "Inventario envejecido", value: "5", tone: "text-danger" },
  { label: "Pipeline comercial", value: "$4.8M", tone: "text-success" },
];

export function ForManagers() {
  return (
    <section
      id="gerentes"
      className="px-page py-section"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Karva Manager"
          title="Ve dónde se están ganando, y perdiendo, las ventas."
          body="Dale a gerentes y directores una visión completa del equipo, inventario y pipeline comercial."
        />

        <Reveal className="mt-16">
          <DeviceFrame variant="gradient" label="Karva Manager · Desempeño del equipo">
            <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="text-xs font-semibold tracking-wide text-ink-subtle uppercase">
                  Ventas y conversión por vendedor
                </p>
                <div className="mt-5 space-y-4">
                  {sellers.map((seller) => (
                    <div key={seller.name}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="truncate text-sm font-medium text-ink">
                          {seller.name}
                        </span>
                        <span className="shrink-0 text-sm text-ink-muted tabular-nums">
                          {seller.sales} ventas · {seller.conversion}%
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-muted">
                        <div
                          className="h-full rounded-full bg-brand"
                          style={{ width: `${seller.bar}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                {signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-xl border border-border bg-surface p-4"
                  >
                    <p
                      className={`text-2xl font-bold tracking-tight tabular-nums ${signal.tone}`}
                    >
                      {signal.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-ink-subtle">
                      {signal.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </DeviceFrame>
        </Reveal>
      </div>
    </section>
  );
}
