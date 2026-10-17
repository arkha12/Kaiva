import Link from "next/link";
import { KaivaMark } from "@/components/visuals/KaivaMark";

const columns = [
  {
    title: "SOLUCIONES",
    links: [
      { href: "#trabajadores", label: "Trabajadores Digitales" },
      { href: "#servicios", label: "Automatización Empresarial" },
      { href: "#servicios", label: "Integraciones" },
      { href: "#servicios", label: "Automatización de Procesos" },
    ],
  },
  {
    title: "INDUSTRIAS",
    links: ["Construcción", "Manufactura", "Logística", "Energía", "Infraestructura"].map((label) => ({ href: "#industrias", label })),
  },
  {
    title: "EMPRESA",
    links: [
      { href: "#", label: "Nosotros" },
      { href: "#como-funciona", label: "Tecnología" },
      { href: "#seguridad", label: "Seguridad" },
      { href: "#contacto", label: "Contacto" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/40 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-safe pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2">
              <KaivaMark className="w-8 h-8 text-primary" />
              <span className="font-headline-lg text-[26px] font-medium tracking-tighter text-on-background">KAIVA</span>
            </div>
            <p className="max-w-xs text-on-surface-variant">Trabajadores digitales para empresas.</p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h2 className="mb-5 text-[11px] font-semibold tracking-[0.16em] text-primary">{column.title}</h2>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-outline-variant/40 pt-8 text-xs text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KAIVA. Todos los derechos reservados.</p>
          <ul className="flex gap-6">
            <li><Link href="#" className="transition-colors hover:text-primary">Privacidad</Link></li>
            <li><Link href="#" className="transition-colors hover:text-primary">Términos</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
