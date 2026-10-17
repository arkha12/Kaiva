import { ArrowIcon, IconTile, SectionHeader } from "./primitives";

const workers = [
  { icon: "shopping_cart", title: "Trabajador de Compras", description: "Gestiona solicitudes, cotizaciones, proveedores, órdenes y seguimiento." },
  { icon: "account_balance", title: "Trabajador Financiero", description: "Analiza facturas, órdenes, pagos, excepciones y aprobaciones." },
  { icon: "description", title: "Trabajador Documental", description: "Analiza documentos, identifica información relevante y detecta faltantes." },
  { icon: "precision_manufacturing", title: "Trabajador de Operaciones", description: "Coordina procesos, detecta bloqueos y da seguimiento a tareas." },
  { icon: "handshake", title: "Trabajador Comercial", description: "Investiga oportunidades, prospecta y da seguimiento a clientes." },
];

export function Solutions() {
  return (
    <section id="soluciones" className="px-margin-safe py-section-gap">
      <div data-reveal className="max-w-container-max mx-auto">
        <SectionHeader
          eyebrow="SOLUCIONES"
          title="Ejemplos de Trabajadores Digitales"
          aside="Los trabajadores se diseñan alrededor de los procesos específicos de cada empresa."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {workers.map((worker) => (
            <article
              key={worker.title}
              className="group flex flex-col rounded-2xl border border-outline-variant bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.35)]"
            >
              <IconTile icon={worker.icon} className="mb-8 group-hover:bg-primary group-hover:text-white" />
              <h3 className="font-headline-md text-xl">{worker.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-on-surface-variant">{worker.description}</p>
            </article>
          ))}

          <a
            href="#contacto"
            className="group flex flex-col justify-between rounded-2xl border border-dashed border-outline bg-surface-container-low p-6 sm:p-8 transition-colors hover:border-primary hover:bg-white"
          >
            <span className="flex w-12 h-12 items-center justify-center rounded-xl border border-dashed border-outline text-outline transition-colors group-hover:border-primary group-hover:text-primary">
              <span className="material-symbols-outlined" aria-hidden="true">add</span>
            </span>
            <span className="mt-8 block">
              <span className="block font-headline-md text-xl text-on-surface">A la medida</span>
              <span className="mt-2 flex items-center gap-1.5 text-[15px] text-on-surface-variant group-hover:text-primary">
                Adaptamos agentes a tus flujos
                <ArrowIcon />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
