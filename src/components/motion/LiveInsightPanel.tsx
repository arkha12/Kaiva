"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState, type ReactNode } from "react";
import { DeviceFrame } from "@/components/motion/DeviceFrame";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export type InsightTab = {
  id: string;
  label: string;
  loadingLabel: string;
  content: ReactNode;
};

/**
 * Pestañas de caso de uso sobre un mockup de producto, con un estado de
 * "analizando…" antes de mostrar el contenido nuevo. Es el patrón central del
 * hero de workos.com/atlas: elegir una pestaña hace que el mockup responda
 * como si estuviera ocurriendo en vivo, en vez de saltar directo al cambio.
 */
export function LiveInsightPanel({
  tabs,
  label,
  className,
}: {
  tabs: InsightTab[];
  label?: string;
  className?: string;
}) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  function selectTab(id: string) {
    if (id === activeId || loadingId) return;
    if (reduced) {
      setActiveId(id);
      return;
    }
    setLoadingId(id);
  }

  useGSAP(
    () => {
      if (!loadingId) return;
      const timer = window.setTimeout(() => {
        setActiveId(loadingId);
        setLoadingId(null);
      }, 700);
      return () => window.clearTimeout(timer);
    },
    { dependencies: [loadingId] },
  );

  useGSAP(
    () => {
      if (reduced || !panelRef.current) return;
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      );
    },
    { scope: panelRef, dependencies: [activeId, reduced] },
  );

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-1.5 rounded-full border border-border bg-surface p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => selectTab(tab.id)}
            className={cn(
              "flex-1 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
              tab.id === (loadingId ?? activeId)
                ? "bg-bg text-ink shadow-card"
                : "text-ink-subtle hover:text-ink-muted",
            )}
          >
            {tab.id === loadingId ? tab.loadingLabel : tab.label}
          </button>
        ))}
      </div>

      <DeviceFrame variant="gradient" label={label} className="mt-4">
        <div ref={panelRef}>
          {loadingId ? (
            <div className="space-y-3 p-5">
              <div className="h-3 w-1/3 animate-pulse rounded-full bg-surface-muted" />
              <div className="h-20 animate-pulse rounded-xl bg-surface-muted" />
              <div className="h-3 w-2/3 animate-pulse rounded-full bg-surface-muted" />
            </div>
          ) : (
            active.content
          )}
        </div>
      </DeviceFrame>
    </div>
  );
}
