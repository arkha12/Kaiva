import {
  BarChart3,
  Car,
  CheckSquare,
  FileText,
  Handshake,
  Package,
  Sparkles,
  Users,
} from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

const modules = [
  {
    icon: Package,
    title: "Inventory",
    body: "Administra y entiende tu inventario.",
  },
  {
    icon: Users,
    title: "Sales",
    body: "Organiza leads, clientes y seguimientos.",
  },
  {
    icon: Handshake,
    title: "Deals",
    body: "Sigue cada operación hasta el cierre.",
  },
  {
    icon: FileText,
    title: "Documents",
    body: "Automatiza expedientes con IA.",
  },
  {
    icon: CheckSquare,
    title: "Tasks",
    body: "Mantén al equipo enfocado.",
  },
  {
    icon: Sparkles,
    title: "Karva AI",
    body: "Convierte información en próximas acciones.",
    ai: true,
  },
  {
    icon: BarChart3,
    title: "Analytics",
    body: "Entiende el desempeño del negocio.",
  },
  {
    icon: Car,
    title: "Vehicle Intelligence",
    body: "Centraliza información estructurada del vehículo.",
  },
];

export function ProductSystem() {
  return (
    <section id="producto" className="px-page py-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Un sistema. Todo conectado." />

        <Stagger
          step={0.06}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {modules.map((module) => (
            <StaggerItem key={module.title}>
              <div className="panel h-full rounded-2xl border border-border p-6 shadow-card">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    module.ai ? "bg-ai-light" : "bg-brand-light"
                  }`}
                >
                  <module.icon
                    className={`h-5 w-5 ${module.ai ? "text-ai" : "text-brand"}`}
                  />
                </span>
                <h3 className="mt-5 text-h3 font-semibold text-ink">
                  {module.title}
                </h3>
                <p className="mt-2.5 text-body text-ink-muted">{module.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
