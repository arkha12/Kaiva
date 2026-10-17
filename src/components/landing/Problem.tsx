import { Eyebrow, IconTile } from "./primitives";

const tasks = [
  { icon: "picture_as_pdf", label: "Extraer datos de PDFs y correos" },
  { icon: "database", label: "Actualizar el ERP automáticamente" },
  { icon: "rule", label: "Validar reglas de negocio complejas" },
  { icon: "edit_document", label: "Preparar borradores para aprobación" },
];

export function Problem() {
  return (
    <section className="px-margin-safe py-section-gap">
      <div data-reveal className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <Eyebrow>EL PROBLEMA</Eyebrow>
          <h2 className="mt-5 font-headline-lg text-headline-lg text-balance">
            Las empresas ya tienen software.{" "}
            <span className="text-on-surface-variant">Lo que todavía falta es capacidad para ejecutar.</span>
          </h2>
          <div className="mt-8 space-y-5 text-body-lg text-on-surface-variant">
            <p>Ya utilizas ERPs, Excel, correo electrónico, documentos, CRMs, y plataformas operativas.</p>
            <p>
              Pero muchas personas todavía tienen que mover información entre sistemas, revisar documentos, perseguir aprobaciones, preparar órdenes, hacer seguimiento y coordinar procesos.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-primary p-7 sm:p-10 lg:p-12 text-white">
          <div className="dot-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)]"
            aria-hidden="true"
          />
          <div className="relative">
            <h3 className="font-headline-md text-2xl sm:text-3xl leading-tight text-balance">
              KAIVA se ocupa del trabajo que todavía requiere personas.
            </h3>
            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {tasks.map((task) => (
                <li key={task.label} className="flex items-center gap-4 py-4">
                  <IconTile icon={task.icon} tone="dark" size="sm" />
                  <span className="text-white/85">{task.label}</span>
                  <span className="material-symbols-outlined ml-auto shrink-0 text-[20px] text-emerald-400" aria-hidden="true">
                    check_circle
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
