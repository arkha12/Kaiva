import { cn } from "@/lib/utils";
import { IconTile, SectionHeader } from "./primitives";

type Service = {
  number: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
};

const services: Service[] = [
  {
    number: "01",
    icon: "auto_mode",
    title: "Automatización de procesos con IA",
    description:
      "Automatizamos tareas repetitivas para que tu equipo dedique menos tiempo a procesos manuales y más a actividades de valor.",
    items: [
      "Automatización de tareas administrativas y operativas.",
      "Procesamiento de documentos y extracción de datos.",
      "Clasificación de información y generación de reportes.",
      "Flujos de trabajo automatizados entre herramientas.",
      "Agentes de IA para ejecutar tareas específicas.",
    ],
  },
  {
    number: "02",
    icon: "support_agent",
    title: "Agentes de IA para empresas",
    description:
      "Desarrollamos asistentes inteligentes que ayudan a los equipos a acceder a información, atender solicitudes y ejecutar tareas dentro de sus procesos de trabajo.",
    items: [
      "Asistentes empresariales conectados a documentos y bases de conocimiento.",
      "Agentes para atención al cliente y soporte interno.",
      "Automatización de seguimiento comercial.",
      "Asistentes para ventas y operaciones.",
      "Integración de modelos de IA en sistemas existentes.",
    ],
  },
  {
    number: "03",
    icon: "code",
    title: "Desarrollo de software a medida",
    description:
      "Convertimos necesidades empresariales en productos digitales diseñados para resolver problemas reales.",
    items: [
      "Aplicaciones web y plataformas empresariales.",
      "Portales para clientes y proveedores.",
      "Paneles administrativos y sistemas internos.",
      "MVP para startups y nuevos productos digitales.",
      "Desarrollo de APIs y servicios backend.",
    ],
  },
  {
    number: "04",
    icon: "hub",
    title: "Integración de sistemas y APIs",
    description:
      "Conectamos las herramientas que tu empresa ya utiliza para reducir la duplicación de información y mejorar el flujo de trabajo entre sistemas.",
    items: [
      "Integración de CRM, ERP y plataformas comerciales.",
      "Conexiones entre aplicaciones mediante APIs.",
      "Sincronización de datos entre sistemas.",
      "Automatización de procesos entre múltiples herramientas.",
      "Integración de servicios de terceros.",
    ],
  },
  {
    number: "05",
    icon: "forum",
    title: "Automatización comercial y atención al cliente",
    description:
      "Ayudamos a los equipos comerciales a responder más rápido, organizar sus oportunidades y mantener un seguimiento consistente.",
    items: [
      "Captura y clasificación de prospectos.",
      "Seguimientos automatizados por correo y otros canales compatibles.",
      "Asignación y actualización de oportunidades en el CRM.",
      "Automatización de agendas y recordatorios.",
      "Reportes de actividad y rendimiento comercial.",
    ],
  },
  {
    number: "06",
    icon: "insights",
    title: "Consultoría e implementación de IA",
    description:
      "Identificamos oportunidades reales para aplicar inteligencia artificial y acompañamos su implementación, desde la evaluación inicial hasta la puesta en producción.",
    items: [
      "Diagnóstico de procesos y oportunidades de automatización.",
      "Diseño de soluciones de IA.",
      "Selección e integración de herramientas tecnológicas.",
      "Desarrollo de pruebas de concepto.",
      "Implementación, evaluación y mejora de soluciones.",
    ],
  },
];

// Bento: el primero destacado a doble ancho, el último a lo ancho de la fila.
// En xl (3 columnas): [1 1 2] [3 4 5] [6 6 6]. En md (2 columnas): [1 1] [2 3] [4 5] [6 6].
const layout = (i: number) =>
  i === 0 ? "featured" : i === services.length - 1 ? "wide" : "default";

export function Services() {
  return (
    <section id="servicios" className="px-margin-safe py-section-gap">
      <div data-reveal className="max-w-container-max mx-auto">
        <SectionHeader
          eyebrow="SERVICIOS"
          title="Nuestros servicios"
          aside="Desde automatizaciones puntuales hasta sistemas de software completos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} variant={layout(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, variant }: { service: Service; variant: "featured" | "wide" | "default" }) {
  const dark = variant === "featured";
  const wide = variant === "wide";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-6 sm:p-8 transition-all duration-300",
        dark
          ? "md:col-span-2 border-primary bg-primary text-white"
          : "border-outline-variant bg-white hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.35)]",
        wide && "md:col-span-2 xl:col-span-3",
        (dark || wide) && "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-12"
      )}
    >
      {dark && <div className="dot-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />}
      <span
        className={cn(
          "absolute right-6 top-6 sm:right-8 sm:top-8 font-mono-metric text-sm",
          dark ? "text-white/40" : "text-outline"
        )}
      >
        {service.number}
      </span>

      <div className="relative flex flex-col">
        <IconTile
          icon={service.icon}
          tone={dark ? "dark" : "muted"}
          className={cn("mb-8", !dark && "group-hover:bg-primary group-hover:text-white")}
        />
        <h3 className="font-headline-md text-headline-md text-balance">{service.title}</h3>
        <p className={cn("mt-3 text-[15px] leading-relaxed", dark ? "text-white/65" : "text-on-surface-variant")}>
          {service.description}
        </p>
      </div>

      <ul
        className={cn(
          "relative mt-6 space-y-2.5 border-t pt-6 text-sm",
          dark ? "border-white/15 text-white/85" : "border-outline-variant/60 text-on-surface",
          (dark || wide) && "lg:mt-0 lg:self-end lg:border-t-0 lg:pt-0 lg:border-l lg:pl-12",
          (dark || wide) && "sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2.5 sm:space-y-0 lg:grid-cols-1"
        )}
      >
        {service.items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              className={cn("material-symbols-outlined mt-px text-[18px] shrink-0", dark ? "text-emerald-400" : "text-primary")}
              aria-hidden="true"
            >
              check
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
