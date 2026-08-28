import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "#producto", label: "Producto" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#roadmap", label: "Roadmap" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-page">
        <Link href="#" aria-label="Karva — inicio">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#piloto"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Solicita acceso
        </a>
      </div>
    </header>
  );
}
