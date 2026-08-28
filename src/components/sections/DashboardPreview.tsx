"use client";

import { animate, motion, useInView } from "framer-motion";
import { AlertTriangle, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function CountUp({
  to,
  prefix = "",
  duration = 1.4,
}: {
  to: number;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("es-MX")}
    </span>
  );
}

const stats = [
  { label: "Ventas potenciales hoy", value: 128450, prefix: "$", delta: "+18%" },
  { label: "Vehículos en riesgo de aging", value: 15, delta: "+3" },
];

const recommendations = [
  { title: "3 clientes listos para cerrar hoy", detail: "Alta intención, documentación completa" },
  { title: "5 vehículos necesitan repricing", detail: "Están por debajo del mercado" },
];

export function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl border border-border bg-surface p-4 shadow-[0_30px_80px_-40px_rgba(11,18,32,0.35)] sm:p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-ink-subtle">Buenos días</p>
          <p className="text-sm font-semibold text-ink">AutoPlus Motors</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand">
          AV
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            className="rounded-xl border border-border bg-bg p-3"
          >
            <p className="text-[11px] text-ink-subtle">{stat.label}</p>
            <p className="mt-1 text-lg font-bold text-ink">
              <CountUp to={stat.value} prefix={stat.prefix} />
            </p>
            <p className="mt-0.5 flex items-center gap-0.5 text-[11px] font-medium text-success">
              <ArrowUpRight className="h-3 w-3" />
              {stat.delta} vs ayer
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="mt-3 rounded-xl border border-ai/20 bg-gradient-to-br from-ai-light to-brand-light p-4"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <span className="text-xs font-semibold text-ai">Karva AI</span>
        </div>
        <div className="mt-3 flex flex-col gap-2.5">
          {recommendations.map((rec, i) => (
            <motion.div
              key={rec.title}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.12 }}
              className="rounded-lg bg-white/70 px-3 py-2"
            >
              <p className="text-xs font-semibold text-ink">{rec.title}</p>
              <p className="text-[11px] text-ink-muted">{rec.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.05 }}
        className="mt-3 flex items-center gap-2 rounded-xl border border-warning/30 bg-warning-bg px-3 py-2.5"
      >
        <AlertTriangle className="h-4 w-4 shrink-0 text-warning" />
        <p className="text-[11px] font-medium text-ink">
          Revenue en riesgo por inacción: <span className="font-bold">$46,780</span>
        </p>
      </motion.div>
    </motion.div>
  );
}
