import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DeviceFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-2 shadow-2xl shadow-black/50",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div className="overflow-hidden rounded-2xl">{children}</div>
    </div>
  );
}
