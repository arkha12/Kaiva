import { Eyebrow, IconTile } from "./primitives";

const controls = [
  { icon: "lock", title: "Permisos Limitados", description: "Cada trabajador tiene acceso restringido y limitado a su función." },
  { icon: "how_to_reg", title: "Aprobación Humana", description: "Las acciones sensibles requieren autorización explícita." },
  { icon: "history", title: "Auditoría Total", description: "Cada acción, decisión y consulta queda registrada." },
];

const previousEvents = [
  { time: "09:41:04", text: "Factura FAC-2291 validada" },
  { time: "09:41:05", text: "Orden #4821 conciliada con el ERP" },
];

const approvalMeta = [
  { label: "Monto", value: "$45,000.00" },
  { label: "Regla", value: "Pagos mayores a $40,000" },
  { label: "Solicita", value: "Trabajador Financiero" },
];

export function Security() {
  return (
    <section id="seguridad" className="px-margin-safe py-section-gap bg-surface-container-lowest border-y border-outline-variant/30">
      {/* 5fr/7fr en vez de 12 columnas: con gap-16, once huecos de 64px no caben en tablet */}
      <div data-reveal className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-center">
        <div>
          <Eyebrow>CONTROL EMPRESARIAL</Eyebrow>
          <h2 className="mt-5 font-headline-lg text-headline-lg text-balance">Automatización con control.</h2>
          <p className="mt-5 text-body-lg text-on-surface-variant">Autonomía donde aporta valor. Control humano donde importa.</p>

          <ul className="mt-10 space-y-6 border-t border-outline-variant pt-8">
            {controls.map((control) => (
              <li key={control.title} className="flex gap-4 items-start">
                <IconTile icon={control.icon} tone="solid" size="sm" />
                <div>
                  <h3 className="font-semibold">{control.title}</h3>
                  <p className="mt-1 text-sm text-on-surface-variant">{control.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mockup ilustrativo: los botones no son interactivos */}
        <div
          className="relative overflow-hidden rounded-3xl border border-outline-variant/40 bg-surface-container-low p-5 sm:p-10 lg:p-12"
          role="img"
          aria-label="Ejemplo de una solicitud de aprobación humana dentro del registro de KAIVA"
        >
          <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

          <div className="relative mx-auto max-w-md" aria-hidden="true">
            <ol className="mb-3 space-y-2">
              {previousEvents.map((event) => (
                <li
                  key={event.time}
                  className="flex items-center gap-3 rounded-xl border border-outline-variant/50 bg-white/70 px-4 py-3 text-sm text-on-surface-variant"
                >
                  <span className="material-symbols-outlined text-[18px] text-green-600">check_circle</span>
                  <span className="truncate">{event.text}</span>
                  <span className="ml-auto shrink-0 font-mono-metric text-xs text-outline">{event.time}</span>
                </li>
              ))}
            </ol>

            <div className="relative rounded-2xl border border-outline-variant/60 bg-white p-5 sm:p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.35)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono-metric text-xs text-on-surface-variant">LOG ID: 8943-KAIVA-EXEC</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-medium text-amber-800">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75 animate-ping motion-reduce:animate-none" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </span>
                  Requiere aprobación
                </span>
              </div>

              <h3 className="mt-5 font-headline-md text-xl">Aprobación Pendiente</h3>
              <p className="mt-2 text-sm text-on-surface-variant">
                El Trabajador Financiero solicita emitir pago de $45,000.00 a Proveedor Industrial S.A.
              </p>

              <dl className="mt-5 divide-y divide-outline-variant/40 rounded-xl border border-outline-variant/40 text-sm">
                {approvalMeta.map((meta) => (
                  <div key={meta.label} className="flex items-center justify-between gap-4 px-4 py-2.5">
                    <dt className="text-on-surface-variant">{meta.label}</dt>
                    <dd className="text-right font-medium text-on-surface">{meta.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex gap-2">
                <span className="flex-1 rounded-lg bg-primary py-2.5 text-center text-sm font-medium text-white">Aprobar</span>
                <span className="flex-1 rounded-lg border border-outline py-2.5 text-center text-sm font-medium text-primary">Rechazar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
