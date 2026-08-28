import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-page py-16 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm text-ink-muted">
            El AI Dealer OS para dealers de autos usados. Empezamos por
            resolver un dolor: leads que se enfrían. La red que eso construye
            es la base de todo lo demás.
          </p>
        </div>

        <div className="flex gap-16 text-sm">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-ink">Producto</span>
            <a href="#producto" className="text-ink-muted hover:text-ink">
              Qué hace Karva
            </a>
            <a href="#como-funciona" className="text-ink-muted hover:text-ink">
              Cómo funciona
            </a>
            <a href="#roadmap" className="text-ink-muted hover:text-ink">
              Roadmap
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-ink">Contacto</span>
            <a
              href="mailto:hola@karva.com"
              className="text-ink-muted hover:text-ink"
            >
              hola@karva.com
            </a>
            <a href="#piloto" className="text-ink-muted hover:text-ink">
              Ser dealer piloto
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-page py-6 text-center text-xs text-ink-subtle">
        © {new Date().getFullYear()} Karva. Pre-seed / descubrimiento.
      </div>
    </footer>
  );
}
