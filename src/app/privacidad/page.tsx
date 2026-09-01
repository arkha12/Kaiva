import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";

export const metadata: Metadata = {
  title: "Privacidad: Karva Pro",
  description: "Aviso de privacidad de Karva Pro, en preparación.",
};

export default function PrivacidadPage() {
  return (
    <SimplePage title="Privacidad">
      <p>
        El aviso de privacidad de Karva está en preparación y se publicará aquí
        antes de que la plataforma reciba datos de dealers fuera del programa
        inicial.
      </p>
      <p>
        Mientras tanto, la única información que recoge este sitio es la que
        escribes en el formulario de demo. Si quieres saber qué hacemos con
        ella, o pedir que la borremos, escríbenos a{" "}
        <a
          href="mailto:hola@karva.io"
          className="font-semibold text-brand hover:underline"
        >
          hola@karva.io
        </a>
        .
      </p>
    </SimplePage>
  );
}
