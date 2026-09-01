import { cn } from "@/lib/utils";

export function PulsingDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-2 w-2", className)}>
      <span className="animate-pulse-dot absolute inset-0 rounded-full bg-current" />
      <span className="relative h-2 w-2 rounded-full bg-current" />
    </span>
  );
}
