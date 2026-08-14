"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-20 px-margin-safe max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-outline-variant/30 bg-surface-container-lowest">
      <div className="md:col-span-4 space-y-6">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 120 100" fill="currentColor" className="w-8 h-8 text-primary shrink-0">
            <rect x="16" y="15" width="20" height="70" rx="4" />
            <path d="M 46 50 L 81 15 H 106 L 71 50 L 106 85 H 81 Z" />
          </svg>
          <span className="font-headline-lg text-headline-lg-mobile text-on-background tracking-tighter">
            KAIVA
          </span>
        </div>
        <p className="text-on-surface-variant font-body-sm max-w-xs">
          Trabajadores digitales para empresas.
        </p>
        <p className="text-on-surface-variant text-xs opacity-50 pt-4">
          © {new Date().getFullYear()} KAIVA. Todos los derechos reservados.
        </p>
      </div>

      <div className="md:col-span-2">
        <h5 className="font-label-caps text-primary mb-6">SOLUCIONES</h5>
        <ul className="space-y-4 font-body-sm text-on-surface-variant">
          <li><Link href="#" className="hover:text-primary transition-colors">Trabajadores Digitales</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Automatización Empresarial</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Integraciones</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Automatización de Procesos</Link></li>
        </ul>
      </div>

      <div className="md:col-span-2">
        <h5 className="font-label-caps text-primary mb-6">INDUSTRIAS</h5>
        <ul className="space-y-4 font-body-sm text-on-surface-variant">
          <li><Link href="#" className="hover:text-primary transition-colors">Construcción</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Manufactura</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Logística</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Energía</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Infraestructura</Link></li>
        </ul>
      </div>

      <div className="md:col-span-2">
        <h5 className="font-label-caps text-primary mb-6">EMPRESA</h5>
        <ul className="space-y-4 font-body-sm text-on-surface-variant">
          <li><Link href="#" className="hover:text-primary transition-colors">Nosotros</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Tecnología</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Seguridad</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Contacto</Link></li>
        </ul>
      </div>

      <div className="md:col-span-2">
        <h5 className="font-label-caps text-primary mb-6">LEGAL</h5>
        <ul className="space-y-4 font-body-sm text-on-surface-variant">
          <li><Link href="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
          <li><Link href="#" className="hover:text-primary transition-colors">Términos</Link></li>
        </ul>
      </div>
    </footer>
  );
}
