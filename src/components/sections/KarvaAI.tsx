import { Flame, AlertTriangle, Car, PhoneCall, Wallet } from "lucide-react";
import { DeviceFrame } from "@/components/motion/DeviceFrame";
import { InsightPills } from "@/components/motion/InsightPills";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

const recommendations = [
  {
    icon: Flame,
    text: "4 clientes podrían cerrar hoy",
    accent: "bg-danger-bg text-danger",
  },
  {
    icon: AlertTriangle,
    text: "3 operaciones están detenidas por documentos",
    accent: "bg-warning-bg text-warning",
  },
  {
    icon: Car,
    text: "5 vehículos requieren atención por aging",
    accent: "bg-surface-muted text-ink-muted",
  },
  {
    icon: PhoneCall,
    text: "7 clientes necesitan seguimiento",
    accent: "bg-brand-light text-brand",
  },
  {
    icon: Wallet,
    text: "Hay oportunidades comerciales que requieren acción",
    accent: "bg-ai-light text-ai",
  },
];

const pills = [
  { id: "aging", label: "🚘 5 unidades con aging", position: "-top-3 -right-4 sm:-right-10" },
  { id: "seguimiento", label: "📞 7 seguimientos pendientes", position: "top-1/3 -left-6 sm:-left-14" },
  { id: "oportunidad", label: "💰 Oportunidad detectada", position: "-bottom-3 -right-2 sm:-right-8" },
];

export function KarvaAI() {
  return (
    <section id="ia" className="px-page py-section">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Karva AI"
            title="No necesitas otro dashboard. Necesitas saber qué hacer."
            body="Karva analiza la actividad de tu operación y convierte datos dispersos en acciones concretas para tu equipo."
          />
          <Reveal className="mt-9">
            <ShimmerButton href="#producto" className="px-6 py-3 text-base">
              Ver Karva AI
            </ShimmerButton>
          </Reveal>
        </div>

        <InsightPills pills={pills}>
          <DeviceFrame label="Karva AI · Qué necesita tu atención">
            <Stagger step={0.08} className="space-y-2.5 p-4 sm:p-5">
              {recommendations.map((item) => (
                <StaggerItem key={item.text}>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5">
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.accent}`}
                    >
                      <item.icon className="h-4 w-4" />
                    </span>
                    <p className="text-body text-ink">{item.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </DeviceFrame>
        </InsightPills>
      </div>
    </section>
  );
}
