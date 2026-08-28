# KARVA — landing (prototipo de diseño)

Rama dedicada a **Karva**, un producto distinto a KAIVA (AI Dealer OS para
dealers de autos usados; ver roadmap completo pegado en el historial de
conversación de esta rama). Esta rama arrancó **vacía** (`git checkout
--orphan`), sin heredar código de `main` ni de `feat/landing-ux-motion`: es
un proyecto Next.js nuevo dentro del mismo repositorio.

## Estado

Prototipo de diseño de la landing page, en código real (no mockup estático).
Etapa: pre-seed / descubrimiento. La página vende el wedge de Fase 1 (Dealer
OS MVP) y muestra el roadmap completo como visión, sin prometer fechas.

## Stack

Next.js 16 (App Router) + React 19 + Tailwind v4 + `framer-motion`.
**Sin GSAP y sin three.js**: a diferencia de KAIVA, aquí no hay escena 3D ni
scroll-scrubbing que lo justifique; todo el motion (entradas, stagger, línea
de progreso de `HowItWorks`) se resuelve con `framer-motion` (`whileInView`,
`useScroll`/`useTransform`). No sumar una librería nueva mientras
`framer-motion` siga cubriendo el caso.

`next.config.ts` no tiene `output: "export"` todavía — no se ha definido
plataforma de despliegue para Karva (KAIVA usa Firebase Hosting por una
decisión específica de ese proyecto; no asumir que aplica aquí).

## Arquitectura

```text
src/app/page.tsx          Server Component; sólo ensambla secciones
src/components/layout/    Navbar, Footer, Logo
src/components/motion/    Reveal, Stagger, StaggerItem (framer-motion)
src/components/sections/  Una sección por archivo
```

## Paleta

Tokens en `src/app/globals.css` vía `@theme` (Tailwind v4), extraídos del
mockup de referencia del dashboard "Karvo Pro" que dio origen a este diseño:

- `--color-brand` (#2e5bff): acento primario — CTAs, links, estado activo.
- `--color-ai` (#6d5cff): todo lo que hace o toca el agente de IA. Ver
  `DashboardPreview` y `AIPrinciples` para el patrón de uso.
- `--color-success` / `--color-warning` / `--color-danger`: estados
  semánticos (aging de inventario, revenue at risk, deltas positivos).
- `--color-bg` / `--color-surface` / `--color-border` / `--color-ink*`:
  neutrales. Fondo frío (#f6f7fb), no blanco puro.

Tipografía: `next/font/google` con Inter (`--font-inter` → `--font-sans`).
Deliberadamente distinta a Geist (que usa KAIVA) para no confundir las dos
marcas si ambas rama se ven una junto a otra.

## Verificación

`npm run build`, `npm run lint` y `npx tsc --noEmit` pasan limpios. No se
pudo verificar visualmente en navegador real en esta sesión (extensión de
Chrome no conectada) — pendiente antes de dar el prototipo por validado.

## Pendiente / no resuelto en este prototipo

- Definir si Karva se despliega en Vercel o Firebase Hosting (afecta
  `next.config.ts`).
- El formulario de "dealer piloto" es un `mailto:`, no un formulario real —
  no hay backend ni integración con ningún CRM/waitlist todavía.
- Falta decidir nombre de marca definitivo: el roadmap dice "Karva", el
  mockup de referencia decía "Karvo Pro". Se usó "Karva" por ser el nombre
  repetido en el documento de producto.
