import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * `tailwind-merge` no conoce las utilidades propias de Karva y las clasificaba
 * mal: veía `text-h2` o `text-lead` y, como no están en su grupo de tamaños,
 * las metía en el grupo de **color**. Al encontrarse luego un `text-ink` en el
 * mismo `cn()` decidía que había conflicto y borraba la primera, así que los
 * titulares de sección salían a 16px. Silencioso, porque la clase simplemente
 * desaparecía del DOM.
 *
 * Aquí se declaran los dos grupos propios para que las resuelva bien: la
 * escala tipográfica (`text-eyebrow` incluido, que también fija tamaño) y la
 * justificación de texto corrido.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["display", "h2", "h3", "lead", "body", "eyebrow"] },
      ],
      "text-alignment": [{ text: ["justified", "justified-center"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
