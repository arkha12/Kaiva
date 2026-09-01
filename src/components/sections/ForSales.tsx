import { CheckCircle2 } from "lucide-react";
import { CardStack } from "@/components/motion/CardStack";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

const priorities = [
  {
    name: "Juan Pérez",
    car: "Mazda CX-5",
    state: "Financiamiento pendiente",
    detail: "Falta comprobante de domicilio",
    next: "Solicitar documento",
    tone: "border-warning/30 bg-warning-bg text-warning",
  },
  {
    name: "María López",
    car: "Toyota Corolla",
    state: "Documentación completa",
    detail: null,
    next: "Agendar cierre",
    tone: "border-success/30 bg-success-bg text-success",
  },
  {
    name: "Carlos Ramírez",
    car: "Kia Sportage",
    state: "48 horas sin seguimiento",
    detail: null,
    next: "Contactar cliente",
    tone: "border-danger/30 bg-danger-bg text-danger",
  },
];

const features = [
  "Mis leads",
  "Mis clientes",
  "Mis deals",
  "Mis tareas",
  "Seguimientos",
  "Documentos",
  "Financiamiento",
  "Karva AI",
];

export function ForSales() {
  return (
    <section id="vendedores" className="px-page py-section">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Karva Sales"
              title="Cada vendedor sabe exactamente qué hacer después."
              body="Karva organiza clientes, seguimientos, operaciones y tareas para que los vendedores dediquen menos tiempo administrando y más tiempo vendiendo."
            />

            <Stagger step={0.05} className="mt-10 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                    <span className="text-body text-ink-muted">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-ink-subtle uppercase">
              Tus prioridades de hoy
            </p>
            {/* Carrusel de cards apiladas: la prioridad de cada vendedor se ve
                una a la vez, con las siguientes asomando detrás, como el
                carrusel de hilos de "A coworker for the whole team" de
                workos.com/atlas. */}
            <CardStack
              items={priorities.map((item) => ({
                id: item.name,
                content: (
                  <div className="p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <p className="text-base font-semibold text-ink">{item.name}</p>
                      <p className="text-sm text-ink-subtle">{item.car}</p>
                    </div>

                    <span
                      className={`mt-3 inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${item.tone}`}
                    >
                      {item.state}
                    </span>

                    {item.detail && (
                      <p className="mt-2.5 text-sm text-ink-muted">{item.detail}</p>
                    )}

                    <p className="mt-3 border-t border-border pt-3 text-sm text-ink-muted">
                      Próxima acción:{" "}
                      <span className="font-semibold text-brand">{item.next}</span>
                    </p>
                  </div>
                ),
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
