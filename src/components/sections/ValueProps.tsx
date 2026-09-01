import { Gauge, TrendingUp, Workflow } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

const cards = [
  {
    icon: Workflow,
    title: "Menos burocracia",
    body: "Centraliza documentos, clientes, vehículos y operaciones. Karva detecta faltantes y mantiene cada expediente organizado.",
  },
  {
    icon: Gauge,
    title: "Ventas más rápidas",
    body: "Identifica qué clientes, operaciones y tareas necesitan atención para que tu equipo se enfoque en cerrar.",
  },
  {
    icon: TrendingUp,
    title: "Más rentabilidad",
    body: "Detecta inventario estancado, oportunidades comerciales y operaciones que podrían estar en riesgo.",
  },
];

export function ValueProps() {
  return (
    <section className="px-page py-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Menos administración. Más ventas." />

        {/* Fila de icono + texto sin card, como "Right where your team
            works" en workos.com/atlas: tres columnas desde `md`, no desde
            `sm`, porque a 640px cada columna quedaba en ~180px de ancho. */}
        <Stagger className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <card.icon className="h-6 w-6 text-brand" />
              <h3 className="mt-4 text-h3 font-semibold text-ink">
                {card.title}
              </h3>
              <p className="mt-2.5 text-body text-justified text-ink-muted">
                {card.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
