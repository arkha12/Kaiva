"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Título que entra palabra por palabra desde abajo, cada una rotando en 3D
 * detrás de la máscara de su propia línea.
 *
 * El corte lo hace SplitText en vez de un `text.split(" ")`: partir a mano
 * sólo da palabras, y la máscara tiene que ir por *línea* para que las
 * palabras suban desde el renglón y no desde su propia caja. `autoSplit`
 * además vuelve a cortar cuando cambia el ancho o termina de cargar Inter —
 * sin eso, el titular queda partido según una medición que ya no es cierta.
 */
export function SplitHeading({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  onLoad = false,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  /** Anima al montar (hero) en vez de esperar a entrar al viewport. */
  onLoad?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (reduced) {
        gsap.set(el, { opacity: 1 });
        return;
      }

      const split = SplitText.create(el, {
        type: "words,lines",
        mask: "lines",
        autoSplit: true,
        linesClass: "split-line-mask",
        onSplit: (self) =>
          gsap.from(self.words, {
            yPercent: 118,
            rotateX: -72,
            opacity: 0,
            duration: 1.15,
            delay,
            stagger: { each: 0.048 },
            transformOrigin: "50% 100%",
            transformPerspective: 800,
            force3D: true,
            // clearProps: al terminar, las palabras vuelven a ser texto normal
            // en lugar de quedarse como capas 3D promovidas el resto del rato.
            clearProps: "transform,opacity",
            scrollTrigger: onLoad
              ? undefined
              : { trigger: el, start: "top 85%", once: true },
          }),
      });

      return () => split.revert();
    },
    { scope: ref, dependencies: [reduced, text, delay, onLoad] },
  );

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={className}>
      {text}
    </Tag>
  );
}
