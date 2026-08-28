import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PulsingDot } from "@/components/motion/PulsingDot";

const phases = [
  {
    n: "01",
    title: "Dealer OS SaaS + IA",
    body: "El software que un dealer usa a diario. Aquí estamos hoy.",
    status: "now",
  },
  {
    n: "02",
    title: "Dealer Network",
    body: "Inventario y datos conectados entre dealers de la red.",
    status: "next",
  },
  {
    n: "03",
    title: "Karva.com Marketplace",
    body: "Catálogo unificado con un agente de IA para el comprador.",
    status: "next",
  },
  {
    n: "04",
    title: "Sell to Karva",
    body: "Subasta C2D: el consumidor vende, los dealers pujan.",
    status: "next",
  },
  {
    n: "05",
    title: "Ecosistema",
    body: "Financiamiento y servicios, sobre la liquidez ya probada.",
    status: "next",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="px-page py-section">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-brand">Hacia dónde vamos</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Del AI Dealer OS al marketplace automotriz AI-native.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            No construimos las cinco fases a la vez. Cada una sólo se habilita
            cuando la anterior demuestra valor real.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {phases.map((phase) => (
            <StaggerItem key={phase.n}>
              <div
                className={`h-full rounded-2xl border p-5 transition-transform hover:-translate-y-1 ${
                  phase.status === "now"
                    ? "border-brand bg-brand-light"
                    : "border-border bg-surface"
                }`}
              >
                <span
                  className={`flex items-center gap-1.5 text-xs font-bold ${
                    phase.status === "now" ? "text-brand" : "text-ink-subtle"
                  }`}
                >
                  {phase.status === "now" && <PulsingDot />}
                  {phase.n}
                  {phase.status === "now" && " · Ahora"}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-ink">
                  {phase.title}
                </h3>
                <p className="mt-1.5 text-xs text-ink-muted">{phase.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-8">
          <p className="rounded-xl border border-border bg-surface px-5 py-4 text-sm text-ink-muted">
            <span className="font-semibold text-ink">
              Principio rector:
            </span>{" "}
            no construimos marketplace antes de ganar distribución en
            dealers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
