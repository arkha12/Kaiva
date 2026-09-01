import { AlertTriangle, Check, FileSearch, Signature, Sparkles, UploadCloud } from "lucide-react";
import { DeviceFrame } from "@/components/motion/DeviceFrame";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TwinCards } from "@/components/motion/TwinCards";
import { SectionHeader } from "@/components/sections/SectionHeader";

const documents = [
  { name: "Identificación", ok: true },
  { name: "Comprobante de domicilio", ok: true },
  { name: "Información del vehículo", ok: true },
  { name: "Comprobante de ingresos", ok: true },
  { name: "Firma", ok: false },
];

const activity = [
  { icon: UploadCloud, text: "Karva clasificó 4 documentos nuevos" },
  { icon: FileSearch, text: "Extrajo los datos de identificación automáticamente" },
  { icon: AlertTriangle, text: "Detectó una inconsistencia en el comprobante de domicilio" },
  { icon: Signature, text: "Solicitó al cliente la firma faltante" },
];

const capabilities = [
  "Carga de PDF e imágenes",
  "Clasificación automática",
  "Extracción de datos",
  "Detección de documentos faltantes",
  "Detección de inconsistencias",
  "Validación humana cuando sea necesaria",
];

export function DocumentAI() {
  return (
    <section id="documentos" className="px-page py-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          align="left"
          eyebrow="Document AI"
          title="Los expedientes dejan de ser trabajo manual."
          body="Sube documentos y deja que Karva los organice, extraiga información y detecte posibles faltantes o inconsistencias."
        />

        <Stagger step={0.05} className="mt-10 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
          {capabilities.map((item) => (
            <StaggerItem key={item}>
              <div className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-ai" />
                <span className="text-body text-ink-muted">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Feed de actividad de IA junto al expediente que produce: el patrón
            "chat + card de perfil" de "Build your AI team" en
            workos.com/atlas, adaptado a lo que Document AI hace de verdad. */}
        <Reveal className="mt-14">
          <TwinCards
            left={
              <DeviceFrame variant="gradient" label="Document AI · Actividad">
                <div className="space-y-2.5 p-4 sm:p-5">
                  {activity.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ai-light text-ai">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <p className="text-sm text-ink">{item.text}</p>
                    </div>
                  ))}
                </div>
              </DeviceFrame>
            }
            right={
              <DeviceFrame variant="gradient" label="Document AI · Expediente">
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-semibold tracking-wide text-ink-subtle uppercase">
                    Expediente, Juan Pérez
                  </p>

                  <div className="mt-3.5 space-y-2">
                    {documents.map((doc) => (
                      <div
                        key={doc.name}
                        className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
                      >
                        <span
                          className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                            doc.ok
                              ? "bg-success-bg text-success"
                              : "bg-warning-bg text-warning"
                          }`}
                        >
                          {doc.ok ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <AlertTriangle className="h-3.5 w-3.5" />
                          )}
                        </span>
                        <span className="text-body text-ink">{doc.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-ai/25 bg-ai-light/60 p-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="flex items-center gap-1.5 text-sm font-medium text-ink-muted">
                        <Sparkles className="h-3.5 w-3.5 text-ai" />
                        Expediente
                      </span>
                      <span className="text-sm font-semibold text-ink tabular-nums">
                        94% completo
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
                      <div className="h-full w-[94%] rounded-full bg-ai" />
                    </div>
                  </div>
                </div>
              </DeviceFrame>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
