import { cn } from "@/lib/utils";
import { SectionHeader } from "./primitives";

const industries = [
  { icon: "construction", name: "Construcción", focus: true },
  { icon: "precision_manufacturing", name: "Manufactura" },
  { icon: "local_shipping", name: "Logística" },
  { icon: "bolt", name: "Energía" },
  { icon: "foundation", name: "Infraestructura" },
  { icon: "business_center", name: "Servicios Empresariales" },
];

export function Industries() {
  return (
    <section id="industrias" className="relative overflow-hidden px-margin-safe py-section-gap bg-primary text-white">
      <div className="dot-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] max-w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.10),transparent_70%)]"
        aria-hidden="true"
      />

      <div data-reveal className="relative max-w-container-max mx-auto">
        <SectionHeader
          tone="dark"
          eyebrow="INDUSTRIAS"
          title="Construcción es el comienzo."
          description="Construimos trabajadores digitales para industrias donde los procesos complejos todavía dependen de trabajo manual."
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-[1400px]:grid-cols-6 gap-3">
          {industries.map((industry) => (
            <li
              key={industry.name}
              className={cn(
                "flex min-h-36 flex-col justify-between gap-6 rounded-2xl border p-5 sm:p-6 transition-colors",
                industry.focus
                  ? "border-white bg-white text-black"
                  : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]"
              )}
            >
              <span
                className={cn("material-symbols-outlined text-[26px]", industry.focus ? "text-black" : "text-white/70")}
                aria-hidden="true"
              >
                {industry.icon}
              </span>
              <div>
                {industry.focus && (
                  <span className="mb-2 inline-block rounded-full bg-black px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white">
                    ENFOQUE ACTUAL
                  </span>
                )}
                <h3 className="font-headline-md text-lg leading-snug">{industry.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
