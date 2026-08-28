import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-7 w-7 shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="var(--color-brand)" />
        <path
          d="M11 8v16M11 16l7-8h4.5L15 16l7.5 8H18l-7-8Z"
          fill="white"
        />
      </svg>
      <span className="text-lg font-bold tracking-tight text-ink">Karva</span>
    </span>
  );
}
