"use client";

import { motion, useReducedMotion } from "framer-motion";

const modules = [
  "Lead Inbox",
  "Karva AI Sales Agent",
  "Inventory Lite",
  "Tasks & Follow-ups",
  "Dashboard ROI",
  "Audit Log",
];

export function ModuleMarquee() {
  const reduced = useReducedMotion();
  const items = [...modules, ...modules];

  return (
    <div className="overflow-hidden border-y border-border bg-surface py-4">
      <motion.div
        className="flex w-max items-center gap-10 text-sm font-medium text-ink-subtle"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduced
            ? undefined
            : { duration: 26, repeat: Infinity, ease: "linear" }
        }
      >
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {m}
            <span className="text-brand" aria-hidden>
              •
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
