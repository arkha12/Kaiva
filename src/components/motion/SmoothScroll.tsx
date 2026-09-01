"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    // En móvil la barra de URL entra y sale al hacer scroll: sin esto cada
    // cambio de alto dispara un refresh que recalcula todos los triggers a
    // media pasada y se ve como un salto.
    ScrollTrigger.config({ ignoreMobileResize: true });

    const lenis = new Lenis({
      autoRaf: false,
      anchors: true,
      // 0.075 dejaba la página persiguiendo al dedo demasiado tiempo: aunque
      // el frame rate estuviera bien, el retraso se percibe como que "se
      // traba". 0.12 mantiene la suavidad sin ese arrastre.
      lerp: 0.12,
      wheelMultiplier: 1,
      // El scroll táctil nativo ya es suave y corre fuera del hilo principal;
      // interceptarlo sólo le añade latencia.
      syncTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Los triggers se miden antes de que Inter termine de cargar; sin este
    // refresh los start/end quedan corridos respecto al layout final y los
    // scrubs arrancan a destiempo.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return children;
}
