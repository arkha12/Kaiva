"use client";

import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const variantClasses = {
  brand: "bg-brand text-white shadow-sm shadow-brand/25 hover:bg-brand-dark",
  /** Sobre los paneles negros (Ask Karva, CTA final). */
  light: "bg-white text-[#070a14] hover:bg-white/90",
  /** Secundario sobre fondo claro: contorno, no relleno. */
  ghost: "border border-border bg-bg text-ink hover:border-ink-subtle",
} as const;

const shimmerClasses = {
  brand: "bg-white/25",
  light: "bg-black/10",
  ghost: "bg-ink/[0.06]",
} as const;

export function ShimmerButton({
  href,
  children,
  className,
  variant = "brand",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantClasses;
}) {
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");
  const reduced = useReducedMotion();

  const rootRef = useRef<HTMLSpanElement>(null);
  const shimmerRef = useRef<HTMLSpanElement>(null);
  const quickRef = useRef<{
    x: ReturnType<typeof gsap.quickTo>;
    y: ReturnType<typeof gsap.quickTo>;
  } | null>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      quickRef.current = {
        x: gsap.quickTo(rootRef.current, "x", { duration: 0.3, ease: "power3" }),
        y: gsap.quickTo(rootRef.current, "y", { duration: 0.3, ease: "power3" }),
      };
      gsap.set(shimmerRef.current, { xPercent: -160 });
    },
    { scope: rootRef },
  );

  function handleMouseMove(e: MouseEvent<HTMLSpanElement>) {
    if (reduced || !quickRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    quickRef.current.x((e.clientX - rect.left - rect.width / 2) * 0.25);
    quickRef.current.y((e.clientY - rect.top - rect.height / 2) * 0.25);
  }

  function handleMouseLeave() {
    quickRef.current?.x(0);
    quickRef.current?.y(0);
    gsap.to(shimmerRef.current, { xPercent: -160, duration: 0.01 });
  }

  function handleMouseEnter() {
    gsap.fromTo(
      shimmerRef.current,
      { xPercent: -160 },
      { xPercent: 160, duration: 0.9, ease: "power2.inOut" },
    );
  }

  const content = (
    <span
      ref={rootRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative inline-flex items-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors active:scale-[0.97]",
        variantClasses[variant],
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <span
        ref={shimmerRef}
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12",
          shimmerClasses[variant],
        )}
      />
    </span>
  );

  if (isExternal) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
