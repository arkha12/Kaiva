"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

type Preset = "fade" | "3d";

const from: Record<Preset, gsap.TweenVars> = {
  fade: { opacity: 0, y: 24 },
  "3d": {
    opacity: 0,
    y: 110,
    z: -300,
    rotateX: -40,
    scale: 0.86,
    transformPerspective: 900,
    transformOrigin: "50% 100%",
    force3D: true,
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  preset = "fade",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  preset?: Preset;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.from(ref.current, {
        ...from[preset],
        duration: preset === "3d" ? 1.3 : 0.7,
        delay,
        ease: preset === "3d" ? "expo.out" : "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [delay, preset] },
  );

  return (
    <div ref={ref} data-gsap className={className}>
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
  step = 0.1,
  preset = "fade",
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  preset?: Preset;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll("[data-gsap]");
      gsap.from(items, {
        ...from[preset],
        duration: preset === "3d" ? 1.2 : 0.6,
        ease: preset === "3d" ? "expo.out" : "power3.out",
        stagger: step,
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [step, preset] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-gsap className={className}>
      {children}
    </div>
  );
}
