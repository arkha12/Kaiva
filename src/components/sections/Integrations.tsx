import { Car, Database, Landmark, MessageCircle, Store, Webhook } from "lucide-react";
import { IntegrationCluster, type ClusterIcon } from "@/components/motion/IntegrationCluster";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

const iconSizePx = { sm: 15, md: 18, lg: 21 } as const;

function clusterIcon(
  id: string,
  Icon: typeof MessageCircle,
  top: number,
  left: number,
  size: "sm" | "md" | "lg" = "md",
): ClusterIcon {
  return {
    id,
    top,
    left,
    size,
    icon: (
      <Icon
        className="text-ink-muted"
        style={{ width: iconSizePx[size], height: iconSizePx[size] }}
      />
    ),
  };
}

// Categorías, no logos: no se muestran marcas de terceros como si fueran
// partners mientras no exista un acuerdo firmado con ellas.
const icons: ClusterIcon[] = [
  clusterIcon("whatsapp", MessageCircle, 12, 20, "lg"),
  clusterIcon("dms", Database, 8, 55, "md"),
  clusterIcon("marketplaces", Store, 30, 82, "md"),
  clusterIcon("financieras", Landmark, 45, 10, "sm"),
  clusterIcon("vehiculos", Car, 38, 45, "lg"),
  clusterIcon("apis", Webhook, 20, 68, "sm"),
];

const categories = [
  "WhatsApp",
  "DMS / CRM",
  "Marketplaces",
  "Financieras",
  "Datos de vehículos",
  "APIs",
];

export function Integrations() {
  return (
    <section id="integraciones" className="px-page py-section">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            align="left"
            title="Karva se conecta con tu operación."
            body="Estamos construyendo integraciones para reducir captura duplicada y conectar Karva con las herramientas que ya utilizan los dealers."
          />

          {/* Iconos de categoría dispersos convergiendo hacia la marca, en vez
              de una rejilla: el patrón de "Connected to all your tools" de
              workos.com/atlas. */}
          <Reveal>
            <IntegrationCluster icons={icons} />
          </Reveal>
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-sm font-medium text-ink-subtle">
            {categories.join(" · ")}
          </p>
          <p className="mt-2 text-sm text-ink-subtle">Integraciones en desarrollo.</p>
        </Reveal>
      </div>
    </section>
  );
}
