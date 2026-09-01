# KARVA PRO — landing (prototipo de diseño)

Rama dedicada a **Karva Pro**, el producto de software e IA para dealers de
autos. Esta rama arrancó **vacía** (`git checkout --orphan`), sin heredar
código de `main` ni de `feat/landing-ux-motion`: es un proyecto Next.js nuevo
dentro del mismo repositorio.

## Estado

Prototipo de diseño de la landing, en código real (no mockup estático). Etapa:
pre-seed. La estructura y el copy salen de un brief de producto
(`~/Descargas/message.txt`): 20 secciones que van del hero al formulario de
demo, contando una sola historia, "Karva conecta inventario, clientes, ventas,
documentos y operación, y su IA ayuda al equipo a decidir qué hacer a
continuación", con tres ideas que deben sentirse en toda la página: **menos
burocracia, ventas más rápidas, más rentabilidad**.

**Nombre de marca resuelto: Karva Pro.** El brief decía "Karvo Pro" y el
roadmap decía "Karva"; se unificó en Karva Pro (marca corta "Karva", el agente
es "Karva AI"). Ya no es un pendiente.

## Stack

Next.js 16 (App Router) + React 19 + Tailwind v4.

**Motion: GSAP, no framer-motion.** GSAP 3.15 (`ScrollTrigger`, `SplitText`,
`CustomEase`) + `@gsap/react` + **Lenis** para el smooth scroll. Todos los
plugins "bonus" de GSAP son gratuitos desde 3.13, así que `SplitText` y
`CustomEase` se usan sin licencia. `src/lib/gsap.ts` es el único punto de
registro: ahí viven los eases propios (`premium`, `premium-io`) y el
`gsap.defaults({ ease: "premium" })`.

**Sin 3D.** Hubo una escena three.js/react-three-fiber en el hero (un auto);
se quitó al rediseñar la landing sobre el patrón de workos.com/atlas (ver
"Rediseño sobre workos.com/atlas" más abajo), que es plano salvo por una
mascota que Karva no puede usar (el brief prohíbe "robots de IA"). El ancla
visual recurrente ahora es el mockup del producto (`DeviceFrame`), no una
escena 3D.

**Componentes: registry de Watermelon UI** (`https://registry.watermelon.sh`),
compatible con shadcn. Se instala con
`npx shadcn@latest add https://registry.watermelon.sh/r/<item>.json` y cae en
`src/components/ui/`. Instalados: `button`, `accordion`, `marquee`,
`text-gradient`. No se corrió `shadcn init` a propósito, habría reescrito el
`@theme` de Karva; `components.json` está escrito a mano y el puente de tokens
vive en `globals.css`.

**No se usó React Bits.** Sería una tercera fuente de componentes, con su
propio CLI, para efectos que los primitivos de `src/components/motion/` ya
cubren con GSAP. Si en algún momento hace falta, evaluar primero si el efecto
no sale de `SceneTransition` o de la escena R3F que ya está montada.

**Iconos:** `lucide-react` para los estáticos. `morphicons` + `lucide` (datos
crudos) **sólo donde el icono tiene dos estados reales** y por lo tanto algo a
lo que transformarse: el +/× del FAQ y el ☰/× del navbar. En una tarjeta con
un icono fijo no aporta nada y sólo suma dependencia.

Primitivos de motion en `src/components/motion/`: `Reveal` / `Stagger` /
`StaggerItem` (entradas one-shot, el default para revelar secciones),
`SplitHeading` (titular partido con `SplitText`, máscara por línea y entrada
palabra a palabra), `DeviceFrame` (chasis de mockup; `variant="gradient"` para
el borde marca→IA de los mockups protagonistas), `FloatingCard`, `CountUp`,
`PulsingDot`, `Preloader`, `SmoothScroll`. Los cuatro que se agregaron en el
rediseño sobre workos.com/atlas (ver más abajo): `LiveInsightPanel` (tabs que
disparan un estado "analizando…" antes de swapear el contenido del mockup),
`CardStack` (carrusel de cards apiladas con peek + paginación, avanza sola
cada segundo si hay más de un item), `InsightPills` (pills de anotación
flotando junto a un mockup), `TwinCards` (dos mockups lado a lado), e
`IntegrationCluster` (iconos de categoría dispersos convergiendo hacia la
marca). `SceneTransition` (la sección viaja en Z al entrar y salir del
viewport) sigue en el árbol pero ya no es el default de `page.tsx`: era el
acompañamiento visual del auto 3D, y Atlas revela cada sección con algo mucho
más discreto. Todo lo que anima en bucle respeta `useReducedMotion()`.

`next.config.ts` no tiene `output: "export"` todavía. Tampoco puede tenerlo sin
pensarlo: el formulario de demo usa un Server Action, así que un export
estático lo rompería.

## Arquitectura

```text
src/app/page.tsx          Server Component; sólo ensambla secciones
src/app/actions.ts        Server Action del formulario de demo
src/app/{login,privacidad,terminos}/  Páginas sueltas, para que no haya enlaces muertos
src/lib/gsap.ts           Único registro de plugins GSAP + eases propios
src/lib/utils.ts          `cn()`, con tailwind-merge extendido (ver abajo, importa)
src/lib/demo.ts           Tipo y estado inicial del formulario
src/components/layout/    Navbar, Footer, Container, SimplePage
src/components/motion/    Primitivos de animación (GSAP)
src/components/sections/  Una sección por archivo + SectionHeader
src/components/system/    MacFrame (chasis de MacBook)
src/components/ui/        Componentes del registry de Watermelon UI
```

## Página clara, contenedores oscuros

La decisión visual que manda sobre todo lo demás: **el fondo de la página es
blanco y todo lo que es una caja (tarjeta, mockup, panel, formulario) es
negro.** No hay bandas de sección alternas ni líneas divisorias entre
secciones; el ritmo lo dan los contenedores negros y las transiciones 3D.

Eso se implementa con la utilidad **`panel`** en `globals.css`, que **redefine
los tokens de color en el propio elemento**. Como las utilidades de Tailwind v4
compilan a `var(--color-…)`, todo lo que cuelga debajo hereda la versión
oscura sin cambiar una sola clase: un `text-ink-muted` dentro de un panel sale
gris claro, y fuera sigue saliendo gris oscuro. Los acentos también se
recalibran, no sólo los neutrales: el azul marca a #2e5bff sobre negro se
hunde, así que dentro del panel sube a su variante `glow`.

**Para hacer oscuro un contenedor nuevo, añádele `panel` y ya.** No cambies las
clases de su contenido.

Tokens en `src/app/globals.css` vía `@theme`:

- `--color-brand` (#2e5bff): acento primario, CTAs, links, estado activo.
- `--color-ai` (#6d5cff): todo lo que hace o toca el agente de IA.
- `--color-success` / `--color-warning` / `--color-danger`: estados semánticos
  (aging de inventario, expedientes incompletos, deltas). Calibrados sobre
  blanco; `panel` los sube a sus versiones brillantes.
- `--color-bg` / `--color-surface` / `--color-border` / `--color-ink*`:
  neutrales de la página, claro-primero.
- `--shadow-card` / `--shadow-lift`: sombras teñidas de navy. Sobre blanco una
  sombra negra pura se ve sucia.

Tipografía: `next/font/google` con Inter (`--font-inter` → `--font-sans`).
Deliberadamente distinta a Geist (que usa KAIVA) para no confundir las marcas.

### Tres trampas de configuración que ya costaron caro

**1. `tailwind-merge` se come las utilidades tipográficas propias.** No conoce
`text-h2`, `text-lead`, `text-eyebrow` ni `text-justified`, así que las mete en
el grupo de **color**; al ver un `text-ink` en el mismo `cn()` decide que hay
conflicto y **borra la clase del DOM**. El síntoma fue que todos los titulares
de sección salían a 16px. Está resuelto en `src/lib/utils.ts` con
`extendTailwindMerge`. **Si añades una utilidad tipográfica nueva, regístrala
ahí también.**

**2. No cierres ciclos entre `@theme` y `@theme inline`.** Había
`:root { --border: var(--color-border) }` y `@theme inline { --color-border:
var(--border) }`. Las dos variables quedan inválidas, `border-border` pierde su
valor y CSS cae a `currentColor`: todos los bordes tomaban el color del texto y
dentro de un panel oscuro salían blancos. Por eso `--color-border` es el único
token del puente shadcn que **no** se remapea.

**3. Nunca anidar `@theme` dentro de `@media` en Tailwind v4.** No funciona:
las variables se emiten en `:root` sin la condición y gana la última
declaración. Así vivía `--spacing-page`, que acabó valiendo 4rem en todos los
anchos. Ahora es `clamp()`.

### Copy sin guiones y texto justificado

El copy no usa rayas ni guiones largos (`—`): donde había una raya va una coma,
un punto o dos puntos. Al escribir copy nuevo, respetarlo. El brief traía una
raya en el título de la sección de gerentes y se convirtió en comas.

El texto corrido va justificado con `text-justified` (bloques a la izquierda) y
`text-justified-center` (centrados, sólo la última línea se centra). Ambas
fijan `hyphens: none`. **No aplicarlas a los titulares** (`text-display`,
`text-h2`, `text-h3`): traen `text-wrap: balance`, y balancear y luego
justificar deja huecos enormes. Las burbujas del chat tampoco se justifican.

Escala tipográfica fluida en utilidades propias (`text-display`, `text-h2`,
`text-h3`, `text-lead`, `text-body`, `text-eyebrow`): `clamp()` en vez de saltos
por breakpoint. Usarlas en vez de `text-3xl sm:text-4xl` sueltos.

## Rediseño sobre workos.com/atlas

La landing se reconstruyó (sin borrar el copy, que sigue saliendo del brief)
para seguir la estructura de información, el diseño y las animaciones de
workos.com/atlas, adaptados a Karva:

- **Se tomó la estructura y el motion de Atlas, no su theme.** Atlas es de
  fondo blanco casi toda la página, con una sola sección oscura de nivel
  confianza (equivalente a `AskKarva`, que ya era "premium/oscura" por el
  brief). Esto coincide con el sistema `panel` que Karva ya tenía, así que los
  tokens no se tocaron.
- **Se mantuvieron las 20 secciones del brief**, sólo se les cambió la
  composición visual: no se condensaron en menos secciones.
- **Sin mascota.** Atlas usa un robot 3D como hilo visual recurrente; el
  brief de Karva prohíbe "robots de IA", así que el hilo recurrente es el
  mockup del producto (`DeviceFrame`), no un personaje. El auto 3D que había
  antes en el hero se quitó por completo (ver historial de commits si hace
  falta recuperar el approach).
- **Sin scroll-jacking entre secciones.** `page.tsx` ya no envuelve cada
  sección en `SceneTransition`: Atlas revela cada sección con algo mucho más
  discreto (`Reveal`/`Stagger`, one-shot) y pone el "wow" en las interacciones
  de cada mockup, no en un pin de sección.
- **Interacciones nuevas, ver arriba** en la lista de primitivos:
  `LiveInsightPanel` (tabs con estado "analizando…", el patrón central del
  hero de Atlas), `CardStack` (carrusel de hilos, auto-avanza cada segundo),
  `InsightPills`, `TwinCards` e `IntegrationCluster`.

**Gotcha de `TwinCards`:** sus dos hijos son *grid items* (`grid
lg:grid-cols-2`), que por defecto valen `min-width: auto`, es decir, el
min-content de su contenido. Un mockup con su propio `overflow-x-auto` interno
(el pipeline de `Deals`) no basta para evitar que ese min-content empuje el
ancho del grid item más allá del viewport en móvil: hace falta `min-w-0`
explícito en el grid item, que es justamente lo que trae `TwinCards`. Si se
arma un layout nuevo con `grid`/`flex` y algo adentro tiene `min-w-[...]` u
`overflow-x-auto`, revisar que el item directo del grid/flex tenga `min-w-0`.

## Responsive

Todo el layout es **fluido, no por breakpoint**, salvo donde cambia la
estructura. Los saltos de tamaño viven en `clamp()` dentro de `@theme` o de las
utilidades propias; los `sm:`/`lg:` se reservan para cambios reales de
composición.

- `--spacing-page: clamp(1.5rem, 6.25vw, 4rem)`.
- `--spacing-section: clamp(5rem, 8.5vw, 9rem)`.

Decisiones de composición por breakpoint:

- **Navbar**: el menú completo arranca en `lg`. Con logo + 6 enlaces + 2
  acciones la barra mide ~900px y por debajo de 1024 se aprieta contra los
  márgenes. Abajo, panel con hamburguesa. El CTA acorta a "Demo" bajo `sm`.
- **Hero**: la tarjeta flotante del expediente se oculta bajo `sm`; sobre un
  panel de ~340px tapaba la fila de prioridades.
- **ForSales**: la lista de features es de una columna bajo `sm`. A 320px dos
  columnas dejan celdas de 124px y "Financiamiento" no cabe.
- **Footer**: los enlaces van en `flex-wrap`, no en rejilla de 4 columnas. Con
  celdas de ancho igual "Para vendedores" no cabía a 1024px.
- **Tablas y pipelines**: viven dentro de su propio `overflow-x-auto`, para que
  el documento nunca scrollee en horizontal.

**Cuidado con `flex-shrink` + `truncate`.** `truncate` trae
`white-space: nowrap`; un item con `shrink-0` aporta su ancho completo al
min-content de la fila. Así el panel del hero se salía 25px de su columna a
320px. Si un texto truncado no debe encoger, revisar que la fila sí pueda.

## Verificación

`npm run build`, `npm run lint` y `npx tsc --noEmit` pasan limpios.

Para el barrido responsive se usa Chrome headless por CDP (`puppeteer-core`
instalado **fuera** del proyecto, en el scratchpad). Dos comprobaciones que
valen más que mirar capturas: `scrollWidth` del documento contra el viewport a
320/360/390/430/768/820/1024/1280/1440, y `el.scrollWidth > el.clientWidth` por
elemento para cazar texto que se sale de su caja.

Recordar que hay recortes intencionales que sí aparecen en el barrido: el anillo
del `PulsingDot`, los `.truncate`, y la bisagra `w-[104%]` del `MacFrame` (que
se propaga al `pin-spacer` de Ask Karva).

**Cuidado con Turbopack + `.next`:** borrar `.next` mientras el dev server sigue
corriendo corrompe su caché persistente y lo deja sirviendo 500 hasta
reiniciarlo. Matar el proceso primero, luego borrar, luego levantar.

## Pendiente / no resuelto

- **El formulario de demo no persiste nada.** `src/app/actions.ts` valida y
  devuelve OK, con el `TODO` marcado donde va el envío real. No hay backend,
  CRM ni waitlist conectados. Se prefirió eso a fingir que se guardó.
- Definir plataforma de despliegue. Ojo: el Server Action descarta un export
  estático, así que la decisión ya no es libre.
- `/login`, `/privacidad` y `/terminos` son páginas honestas pero vacías de
  contenido legal: existen para que el footer y el navbar no tengan enlaces
  muertos.
- No hay logos de integraciones reales, sólo categorías. **No poner marcas de
  terceros como si fueran partners mientras no haya acuerdo firmado**, es una
  instrucción explícita del brief.
- El copy nunca dice que Karva aprueba créditos. La sección de Financiamiento y
  el FAQ lo niegan explícitamente. Mantenerlo así.

## Rendimiento de scroll (aprendido a la mala)

- **Nunca `scroll-behavior: smooth` con Lenis.** Los dos mueven `scrollTop` en
  el mismo frame y pelean; se siente como tirones.
- **`backdrop-filter` sobre algo que se mueve en cada frame es carísimo.** Un
  navbar `fixed` con `backdrop-blur` re-muestrea su fondo durante todo el
  scroll y el coste crece con el radio.
- **`filter: blur()` grande y animado se sustituye por un `radial-gradient`.**
  El gradiente se rasteriza una vez; el filtro se recalcula cada frame.
- **Animar `scale` sobre una sección entera re-rasteriza todo su texto.** Por
  eso `SceneTransition` promueve a capa con `will-change` *sólo mientras el
  trigger está activo* y la suelta al salir.
- **Los ScrollTrigger de entrada llevan `once: true`.** Si no, siguen
  evaluándose en cada frame para siempre.
- **`onUpdate` de un scrub no debe llamar `setState` sin comparar antes.**
  `AskKarva` guarda un espejo en refs y sólo re-renderiza cuando el valor
  cambia de verdad.
- **`gsap.quickTo` en vez de un `gsap.to` por evento de `pointermove`.**
- **Lo que anima en bucle se pausa fuera de pantalla** con un
  `IntersectionObserver` (aplicaba también al canvas 3D del hero antiguo,
  antes del rediseño sobre Atlas).
- **`lerp` de Lenis en 0.12, no 0.075.** Más bajo no es "más suave": la página
  persigue al dedo demasiado tiempo y se percibe como que se traba.
