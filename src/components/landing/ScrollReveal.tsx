"use client";

import { useEffect } from "react";

/**
 * Revela al hacer scroll todo lo marcado con `data-reveal`. Las clases se
 * añaden desde aquí y no en el HTML, así que sin JavaScript el contenido se
 * ve normal en vez de quedarse invisible.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // threshold 0 + rootMargin, no un porcentaje: en móvil un bloque apilado
    // puede medir varias pantallas y un 10% de él nunca estar visible a la vez.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("opacity-0", "translate-y-8");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.classList.add("transition-all", "duration-700", "ease-out", "opacity-0", "translate-y-8");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
