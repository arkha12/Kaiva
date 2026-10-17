@AGENTS.md

# KAIVA — landing

Landing de KAIVA (trabajadores digitales + servicios de automatización, IA y
software a medida). Next.js 16 (App Router) + React 19 + Tailwind v4.
`framer-motion` para lo animado con estado; `next/font` para Geist.

## Iconos: Material Symbols autoalojada

`src/app/fonts/material-symbols-outlined-300.woff2`, registrada con
`next/font/local` en `layout.tsx` (`next/font/google` no la tiene en su
catálogo). Es el archivo **estático** outlined, peso 300, sin relleno: 343 KB
contra 1.1 MB de la variable. `font-variation-settings` no hace nada con ella;
si algún día hace falta otro peso o el relleno, hay que bajar otro archivo.

La clase `.material-symbols-outlined` está definida a mano en `globals.css`
**dentro de `@layer base`**. No volver a cargar la hoja de Google con `<link>`:
sus reglas quedan fuera de toda capa y le ganan a cualquier utilidad de
Tailwind (que vive en `@layer utilities`), así que `text-[18px]` o `hidden` en
un icono dejan de funcionar. Tampoco sirve `@import url(...) layer(base)`: la
cadena de CSS de Next descarta los `@import` remotos sin avisar.

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
src/lib/contact.ts            Dirección de correo del formulario (CONTACT_EMAIL)
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

## Formulario de contacto: mailto

Con `output: "export"` no hay servidor que reciba el formulario. Se eligió
`mailto` frente a un servicio de formularios (Formspree), Firestore o pasar a
Vercel: al enviar, `ContactForm` arma asunto y cuerpo con los campos y abre el
programa de correo del visitante hacia `CONTACT_EMAIL` (`src/lib/contact.ts`).

Como la página no puede saber si el visitante envió el correo, **no se muestra
"mensaje recibido"**: tras abrirlo se muestra la dirección como respaldo. El
mensaje se limita a 1500 caracteres porque los clientes truncan URLs mailto
largas. Contra: quien no tiene un cliente de correo configurado depende de
copiar la dirección.

## Pendiente

- Páginas de Privacidad y Términos: se quitaron los enlaces del footer hasta
  tener el texto legal real (razón social, domicilio, correo para derechos
  ARCO). No inventar contenido legal.
