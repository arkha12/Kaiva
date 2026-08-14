"use client";

export interface Solution {
  title: string;
  description: string;
  icon: string;
}

export const SOLUTIONS: Solution[] = [
  {
    title: "Trabajador de Compras",
    description: "Gestiona solicitudes, cotizaciones, proveedores, órdenes y seguimiento.",
    icon: "shopping_cart",
  },
  {
    title: "Trabajador Financiero",
    description: "Analiza facturas, órdenes, pagos, excepciones y aprobaciones.",
    icon: "account_balance",
  },
  {
    title: "Trabajador Documental",
    description: "Analiza documentos, identifica información relevante y detecta faltantes.",
    icon: "description",
  },
  {
    title: "Trabajador de Operaciones",
    description: "Coordina procesos, detecta bloqueos y da seguimiento a tareas.",
    icon: "manufacturing",
  },
  {
    title: "Trabajador Comercial",
    description: "Investiga oportunidades, prospecta y da seguimiento a clientes.",
    icon: "handshake",
  },
];

export function SolutionsSection() {
  return (
    <section id="soluciones" className="px-margin-safe py-section-gap max-w-container-max mx-auto">
      <div className="mb-16 md:flex justify-between items-end">
        <div>
          <span className="font-label-caps text-secondary mb-4 block">SOLUCIONES</span>
          <h2 className="font-headline-lg text-4xl font-medium">Ejemplos de Trabajadores Digitales</h2>
        </div>
        <p className="text-on-surface-variant text-sm max-w-xs mt-4 md:mt-0 pb-2 border-b border-outline-variant">
          Los trabajadores se diseñan alrededor de los procesos específicos de cada empresa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SOLUTIONS.map((solution) => (
          <div key={solution.title} className="border border-outline-variant p-8 rounded-xl bg-white hover:border-primary transition-all group">
            <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">{solution.icon}</span>
            </div>
            <h3 className="font-headline-md text-xl mb-3">{solution.title}</h3>
            <p className="text-on-surface-variant font-body-sm">{solution.description}</p>
          </div>
        ))}

        <div className="border border-dashed border-outline p-8 rounded-xl bg-surface/50 flex flex-col items-center justify-center text-center">
          <span className="material-symbols-outlined text-outline mb-2">add</span>
          <h3 className="font-headline-md text-lg text-on-surface-variant">A la medida</h3>
          <p className="text-outline font-body-sm mt-2">Adaptamos agentes a tus flujos</p>
        </div>
      </div>
    </section>
  );
}
