import { ShieldCheck, UserCheck, FileClock } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const principles = [
  {
    icon: ShieldCheck,
    title: "Nunca inventa lo que importa",
    body: "Precio final, garantía, disponibilidad o un compromiso comercial siempre vienen de tus datos — o se muestran como no confirmados.",
  },
  {
    icon: UserCheck,
    title: "Tú decides qué se automatiza",
    body: "Modo sugerencia, semi-autónomo o automático, por acción y por dealer. La IA propone; el permiso es tuyo.",
  },
  {
    icon: FileClock,
    title: "Todo queda auditado",
    body: "Cada respuesta, cada tool call y cada aprobación humana quedan registradas — sin caja negra.",
  },
];

export function AIPrinciples() {
  return (
    <section className="bg-surface px-page py-section">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-ai">IA con supervisión</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            AI-native no significa sin control humano.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {principles.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full rounded-2xl border border-ai/20 bg-ai-light/40 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ai text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
