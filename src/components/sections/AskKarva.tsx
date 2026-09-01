"use client";

import { useGSAP } from "@gsap/react";
import { Sparkles, User } from "lucide-react";
import { useRef, useState } from "react";
import { PulsingDot } from "@/components/motion/PulsingDot";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { MacFrame } from "@/components/system/MacFrame";
import { ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

type Message = { from: "user" | "karva"; text: string };

const script: Message[] = [
  { from: "user", text: "¿Qué ventas puedo cerrar hoy?" },
  {
    from: "karva",
    text: "Encontré 4 operaciones con alta prioridad. Dos tienen documentación completa y una ya cuenta con financiamiento aprobado.",
  },
  { from: "user", text: "¿Qué vehículos llevan más de 60 días?" },
  {
    from: "karva",
    text: "Hay 7 unidades por encima de 60 días. Estas 3 concentran el mayor capital inmovilizado.",
  },
];

const suggestions = [
  "¿Qué deals están bloqueados?",
  "¿Quién necesita seguimiento hoy?",
  "¿Qué cambió desde ayer?",
  "¿Qué vendedores tienen operaciones sin actividad?",
  "¿Qué inventario necesita atención?",
];

export function AskKarva() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  // Espejo del estado en refs: el scrub dispara ~60 veces por segundo y casi
  // todas las veces el valor no cambia. Sin este guardia React entra en fase de
  // render en cada frame de scroll.
  const visibleRef = useRef(0);
  const typingRef = useRef(false);
  const reduced = useReducedMotion();

  function commit(nextVisible: number, nextTyping: boolean) {
    if (visibleRef.current !== nextVisible) {
      visibleRef.current = nextVisible;
      setVisible(nextVisible);
    }
    if (typingRef.current !== nextTyping) {
      typingRef.current = nextTyping;
      setTyping(nextTyping);
    }
  }

  useGSAP(
    () => {
      if (!sectionRef.current || !pinRef.current) return;

      if (reduced) {
        commit(script.length, false);
        return;
      }

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center center",
        end: "+=150%",
        pin: pinRef.current,
        pinSpacing: true,
        scrub: 0.6,
        onUpdate: (self) => {
          // El último tramo del recorrido es un respiro con todo en pantalla.
          const talk = Math.min(self.progress / 0.82, 1);
          const raw = talk * script.length;
          const next = Math.min(Math.floor(raw), script.length);
          const frac = raw - next;
          commit(next, next < script.length && frac > 0.35);
        },
      });

      return () => trigger.kill();
    },
    { scope: sectionRef, dependencies: [reduced] },
  );

  return (
    <section ref={sectionRef} id="ask" className="px-page py-section">
      {/* Todo Ask Karva vive dentro de un solo contenedor negro: es el momento
          en que la página se apaga y sólo queda la conversación. */}
      <div className="panel mx-auto max-w-6xl rounded-[2rem] px-5 py-14 shadow-lift sm:px-10 sm:py-20">
        <SectionHeader
          eyebrow="Ask Karva"
          title="Pregunta. Karva entiende tu operación."
          body="Consulta la información de tu dealer en lenguaje natural y obtén respuestas basadas en tus propios datos."
        />

        <div ref={pinRef} className="mt-16">
          <MacFrame
            className="mx-auto max-w-3xl"
            screenClassName="bg-surface"
          >
            <div className="flex h-[clamp(19rem,44vh,27rem)] flex-col">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <PulsingDot className="text-ai" />
                <span className="text-sm font-medium text-ink-muted">
                  Ask Karva
                </span>
              </div>

              {/* Los mensajes se apilan desde abajo, como en un chat real: al
                  aparecer uno nuevo los anteriores suben en vez de que el
                  bloque entero se recoloque. */}
              <div className="flex flex-1 flex-col justify-end gap-3 overflow-hidden p-4 sm:p-5">
                {script.map((message, i) => (
                  <div
                    key={message.text}
                    className={cn(
                      "flex max-w-[85%] gap-2.5 transition-all duration-500 sm:max-w-[78%]",
                      message.from === "user" ? "self-end" : "self-start",
                      i < visible
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none absolute -z-10 translate-y-3 opacity-0",
                    )}
                    aria-hidden={i >= visible}
                  >
                    {message.from === "karva" && (
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ai/20">
                        <Sparkles className="h-3.5 w-3.5 text-ai" />
                      </span>
                    )}
                    <p
                      className={cn(
                        // Las burbujas no se justifican: el borde irregular es
                        // lo natural en un mensaje.
                        "rounded-2xl px-4 py-2.5 text-body",
                        message.from === "user"
                          ? "rounded-tr-sm bg-[#2e5bff] text-white"
                          : "rounded-tl-sm bg-surface-muted text-ink",
                      )}
                    >
                      {message.text}
                    </p>
                    {message.from === "user" && (
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <User className="h-3.5 w-3.5 text-ink-muted" />
                      </span>
                    )}
                  </div>
                ))}

                <div
                  className={cn(
                    "self-start transition-opacity duration-300",
                    typing ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden
                >
                  <span className="inline-flex gap-1 rounded-2xl rounded-tl-sm bg-surface-muted px-4 py-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-subtle" />
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-subtle" />
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-subtle" />
                  </span>
                </div>
              </div>
            </div>
          </MacFrame>
        </div>

        <Reveal className="mt-16">
          <p className="text-center text-sm font-medium text-ink-subtle">
            Otras preguntas sugeridas
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {suggestions.map((question) => (
              <span
                key={question}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink-muted"
              >
                {question}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
