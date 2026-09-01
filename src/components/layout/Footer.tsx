import Link from "next/link";

const links = [
  { href: "#producto", label: "Producto" },
  { href: "#ia", label: "Karva AI" },
  { href: "#gerentes", label: "Para dealers" },
  { href: "#vendedores", label: "Para vendedores" },
  { href: "#demo", label: "Solicitar demo" },
  { href: "mailto:hola@karva.io", label: "Contacto" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-page py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
          <div className="max-w-sm">
            <p className="text-lg font-bold tracking-tight text-ink">Karva</p>
            <p className="mt-3 text-body text-ink-muted">
              AI infrastructure for automotive commerce.
            </p>
          </div>

          {/* Flujo libre, no rejilla fija: con celdas de ancho igual
              "Para vendedores" no cabía en la columna a 1024px. */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3.5 lg:max-w-md lg:justify-end">
            {links.map((link) =>
              link.href.startsWith("#") || link.href.startsWith("mailto:") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-body text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-sm text-ink-subtle">
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <p>
              © {new Date().getFullYear()} Karva. Todos los derechos
              reservados.
            </p>
            <p>Prototipo de diseño en etapa pre-seed.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
