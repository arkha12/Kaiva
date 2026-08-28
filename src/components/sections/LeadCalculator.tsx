"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollColorHeading } from "@/components/motion/ScrollColorHeading";
import { cn } from "@/lib/utils";

function estimateLossPercent(responseMinutes: number) {
  // Ilustrativo: entre más tarda la primera respuesta, más leads se enfrían.
  // No es un cálculo exacto para ningún dealer en particular.
  return Math.min(85, Math.round(responseMinutes * 0.55));
}

function riskBand(lossPercent: number) {
  if (lossPercent < 25) return { label: "Riesgo bajo", tone: "success" as const };
  if (lossPercent < 55) return { label: "Riesgo moderado", tone: "warning" as const };
  return { label: "Riesgo alto", tone: "danger" as const };
}

const toneClasses = {
  success: "bg-success-bg text-success",
  warning: "bg-warning-bg text-warning",
  danger: "bg-danger-bg text-danger",
};

export function LeadCalculator() {
  const [leadsPerMonth, setLeadsPerMonth] = useState(150);
  const [responseMinutes, setResponseMinutes] = useState(45);

  const lossPercent = useMemo(
    () => estimateLossPercent(responseMinutes),
    [responseMinutes],
  );
  const lostLeads = useMemo(
    () => Math.round((leadsPerMonth * lossPercent) / 100),
    [leadsPerMonth, lossPercent],
  );
  const risk = riskBand(lossPercent);

  return (
    <section className="px-page py-section">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-brand">
            ¿Cuánto te está costando ahora?
          </p>
          <ScrollColorHeading
            text="Calcula tu riesgo de leads perdidos"
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-10 rounded-3xl border border-border bg-surface p-6 sm:p-10"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block">
              <span className="flex items-baseline justify-between text-sm font-medium text-ink">
                Leads que recibes al mes
                <span className="text-brand">{leadsPerMonth}</span>
              </span>
              <input
                type="range"
                min={20}
                max={500}
                step={10}
                value={leadsPerMonth}
                onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                className="mt-3 w-full accent-brand"
              />
            </label>

            <label className="block">
              <span className="flex items-baseline justify-between text-sm font-medium text-ink">
                Minutos promedio en responder
                <span className="text-brand">{responseMinutes} min</span>
              </span>
              <input
                type="range"
                min={1}
                max={180}
                step={1}
                value={responseMinutes}
                onChange={(e) => setResponseMinutes(Number(e.target.value))}
                className="mt-3 w-full accent-brand"
              />
            </label>
          </div>

          <div className="mt-8 h-2 w-full overflow-hidden rounded-full bg-surface-muted">
            <motion.div
              animate={{ width: `${lossPercent}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className={cn(
                "h-full rounded-full",
                risk.tone === "success" && "bg-success",
                risk.tone === "warning" && "bg-warning",
                risk.tone === "danger" && "bg-danger",
              )}
            />
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 border-t border-border pt-8 text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={risk.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  toneClasses[risk.tone],
                )}
              >
                {risk.label}
              </motion.span>
            </AnimatePresence>

            <p className="flex items-baseline gap-2 text-4xl font-bold tracking-tight text-ink">
              ~
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={lostLeads}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  {lostLeads}
                </motion.span>
              </AnimatePresence>
              leads/mes
            </p>
            <p className="max-w-sm text-sm text-ink-muted">
              se enfrían antes de que alguien les responda, a este ritmo.
            </p>
          </div>

          <p className="mt-8 text-center text-xs text-ink-subtle">
            Estimación ilustrativa basada en la relación entre tiempo de
            respuesta y conversión — no un cálculo exacto para tu dealer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
