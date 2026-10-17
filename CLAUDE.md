@AGENTS.md

# KAIVA — landing

Landing de KAIVA (trabajadores digitales + servicios de automatización, IA y
software a medida). Next.js 16 (App Router) + React 19 + Tailwind v4.
`framer-motion` para lo animado con estado; `next/font` para Geist; iconos con
Material Symbols (fuente cargada en `layout.tsx`).

## Despliegue

`next.config.ts` tiene `output: "export"`: el build es HTML estático en `out/`.
**Un push a `main` despliega a producción**: `.github/workflows/firebase-hosting-merge.yml`
corre `npm ci` + `npm run build` y publica en el canal `live` de Firebase
Hosting (proyecto `kaiva-876e2`). Los PR despliegan a un canal de preview.
Como es export estático, no hay Server Actions ni rutas de API disponibles.

## Arquitectura

```text
src/app/page.tsx              Server Component; sólo ensambla secciones
src/components/landing/       Una sección por archivo + primitives.tsx
src/components/visuals/       Diagramas animados (HeroFlow, SystemPipeline, WorkerSteps)
src/hooks/use-cycle.ts        Índice en bucle para los diagramas
src/components/sections/      Restos de la plantilla "Homi", NO se usan
```

- **Sólo lo interactivo es `"use client"`**: Navbar, ContactForm, ScrollReveal
  y los visuales. El resto se renderiza en el servidor (en build, por el export).
- `primitives.tsx` tiene `Eyebrow`, `SectionHeader`, `IconTile` y los estilos
  de botón. Usarlos en secciones nuevas en vez de repetir clases.
- **Reveal al hacer scroll**: se marca con `data-reveal` el contenedor interno
  de cada sección (no el hero, que es lo primero que se ve). `ScrollReveal`
  añade las clases desde JS, así que sin JS el contenido se ve igual.
- **Animaciones en bucle** (`useCycle`): se pausan fuera de pantalla
  (`useInView`) y se apagan con `prefers-reduced-motion`. Las animaciones CSS
  llevan `motion-reduce:animate-none` / `motion-reduce:hidden`.

## Responsive

Fluido con `clamp()` en los tokens de `globals.css` (`--spacing-margin-safe`,
`--spacing-section-gap`, `--text-display-xl`, `--text-headline-lg`,
`--text-headline-md`), no por breakpoint. Los `sm:`/`lg:` se reservan para
cambios de composición. En Tailwind v4 un `@theme` dentro de `@media` no
funciona, por eso la escala vive en el valor.

Decisiones que ya costaron un overflow:

- **Rejillas de 12 columnas con `gap` grande**: once huecos de 64px no caben
  en tablet. Para dos columnas desiguales usar `grid-cols-[5fr_7fr]`.
- **Industrias en 6 columnas sólo desde 1400px**: a 1280 "Infraestructura" no
  cabe en el tile.
- **Navbar completo desde `xl`**: 6 enlaces + CTA no caben en `lg`. Debajo,
  hamburguesa.
- **Diagrama del hero**: dos versiones (`md:` horizontal con conectores SVG de
  geometría fija, vertical en móvil). Las tarjetas miden 64px fijos porque los
  conectores usan esas coordenadas; si cambian, cambiar `SOURCE_Y`/`ACTION_Y`.

Verificación: barrido con Chrome headless (`puppeteer-core` fuera del
proyecto) comparando `scrollWidth` del documento con el viewport a
320/360/390/430/768/820/1024/1280/1440/1920, y `scrollWidth > clientWidth`
por elemento.

## Pendiente

- **El formulario de contacto no envía nada**: `ContactForm` simula el envío
  con un `setTimeout` y muestra "Mensaje Recibido". Con `output: "export"` no
  hay Server Action posible; hace falta un servicio externo (o quitar el
  export).
- Los enlaces "Nosotros", "Privacidad" y "Términos" del footer apuntan a `#`.
- `layout.tsx` todavía tiene el título y la descripción de "Homi Systems".
