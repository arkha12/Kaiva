import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/layout/SimplePage";

export const metadata: Metadata = {
  title: "Iniciar sesión: Karva Pro",
  description:
    "El acceso a Karva Pro está abierto sólo para los dealers del programa inicial.",
};

export default function LoginPage() {
  return (
    <SimplePage title="Iniciar sesión">
      <p>
        Karva Pro está en acceso anticipado privado. Por ahora la plataforma se
        abre sólo a los dealers del programa inicial, así que todavía no hay
        registro público.
      </p>
      <p>
        Si tu dealer ya forma parte del programa, tu contacto en Karva te envía
        el acceso directo. Si aún no, puedes{" "}
        <Link href="/#demo" className="font-semibold text-brand hover:underline">
          solicitar una demo
        </Link>{" "}
        y platicamos si encajas en el grupo inicial.
      </p>
    </SimplePage>
  );
}
