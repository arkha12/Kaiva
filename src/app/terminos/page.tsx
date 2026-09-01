import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";

export const metadata: Metadata = {
  title: "Términos: Karva Pro",
  description: "Términos de servicio de Karva Pro, en preparación.",
};

export default function TerminosPage() {
  return (
    <SimplePage title="Términos">
      <p>
        Los términos de servicio de Karva están en preparación. Se publicarán
        aquí antes de abrir la plataforma más allá del programa inicial de
        dealers.
      </p>
      <p>
        Los dealers del programa inicial operan bajo el acuerdo firmado con
        ellos. Para cualquier duda, escríbenos a{" "}
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
