# wickz.dev — Portfolio

> Portfolio personal de **Santiago Grimán**, desarrollador full-stack.
> Construido con **Astro 7** + **React 19** + **Tailwind CSS 4** + **shadcn/ui**.

---

## 🏗️ Arquitectura: Astro Islands + Feature-Slice

El proyecto sigue la arquitectura **Astro Islands** combinada con **Feature-Slice Design**:

```
src/
├── components/
│   ├── icons/          # Íconos SVG como Astro components (zero JS)
│   ├── react/          # Componentes React interactivos ("use client")
│   └── ui/             # shadcn/ui primitives + Astro wrappers
├── config/             # Datos de configuración y contenido estático
├── content/            # Colecciones de contenido (Markdown/MDX)
├── i18n/
│   ├── dicts/          # Diccionarios de traducción (JSON)
│   └── utils.ts        # Utilidades de internacionalización
├── interfaces/         # Definiciones de tipos TypeScript
├── layouts/            # Plantillas reutilizables
├── lib/                # Utilidades compartidas y constantes
├── pages/              # Rutas (file-based routing de Astro)
│   └── [lang]/         # Rutas dinámicas por idioma
├── sections/           # Secciones de página (Hero, Footer, etc.)
└── styles/             # Estilos globales (un solo archivo)
```

### 🌊 Flujo de Renderizado (Astro Islands)

```
Solicitud HTTP
  │
  ▼
[Astro SSG] ──► HTML estático pre-renderizado
  │               (zero JS por defecto)
  │
  ├── Componentes Astro (.astro) → HTML en build time
  ├── Componentes React con client:visible → hidratados al entrar en viewport
  └── Componentes React con client:load → hidratados inmediatamente
```

### 🔑 Principios Clave

| Principio | Implementación |
|-----------|---------------|
| **Zero JS por defecto** | Todo es HTML/CSS estático. Solo los acordeones y toggles cargan JS. |
| **Islas de interactividad** | `client:visible` en WorkAccordion, FeaturedProjects cards. |
| **i18n estática** | `getStaticPaths()` genera `/es/` y `/en/` en build time. |
| **Traducciones tipadas** | `useTranslations(lang, namespace)` selecciona el diccionario correcto. |
| **CSS atómico** | Tailwind 4 con `@theme` y CSS variables de shadcn. |
| **Componentes server-first** | Astro components para todo lo que no necesita JS. |

---

## 🚀 Stack Tecnológico

| Tecnología | Uso |
|-----------|-----|
| **Astro 7** | SSG, routing, i18n nativa |
| **React 19** | Islas interactivas (acordeones, hover effects) |
| **Tailwind CSS 4** | Utility-first CSS con `@theme` y `oklch()` |
| **shadcn/ui** | Primitivos de UI (Card, Button, Accordion, Separator) |
| **Radix UI** | Headless UI primitives accesibles |
| **Lucide React** | Íconos para componentes React |
| **Biome** | Linting + formateo |
| **Sharp** | Optimización de imágenes en build |

---

## 🌐 Internacionalización (i18n)

```
Estrategia: Rutas por prefijo (/es/ y /en/) con SSG.
```

- **Traducciones**: `src/i18n/dicts/{lang}.json`
- **Utilidades**: `src/i18n/utils.ts` → `useTranslations(lang, namespace)`
- **Idiomas**: `es` (default), `en` — definidos en `src/lib/constants.ts`
- **Toggle**: `src/components/ui/language-toggle.astro` — alterna entre `/es/` y `/en/`

### Agregar un nuevo idioma:
1. Crear `src/i18n/dicts/{lang}.json` con las mismas keys
2. Agregar el locale en `SUPPORTED_LANGUAGES` en `src/lib/constants.ts`
3. Agregarlo en `getStaticPaths()` en `src/pages/[lang]/index.astro`

---

## ⚡ Optimizaciones de Rendimiento

| Técnica | Dónde |
|---------|-------|
| **SSG (Static Site Generation)** | `astro build` genera HTML puro |
| **Prefetch on hover** | `astro.config.mjs` → `prefetch: { defaultStrategy: "hover" }` |
| **CSS minificado con LightningCSS** | `vite.build.cssMinify: "lightningcss"` |
| **HTML comprimido** | `compressHTML: true` |
| **Estilos inline automáticos** | `build.inlineStylesheets: "auto"` |
| **Fuente auto-hosteada** | `@fontsource-variable/geist` (sin Google Fonts externo) |
| **Imágenes WebP** | `public/featured-projects/` usa `.webp` |
| **Videos con `preload="metadata"`** | Solo carga metadatos hasta hover |
| **React lazy hydration** | `client:visible` solo hidrata al entrar en viewport |

---

## 📁 Convenciones

- **Nombres de archivo**: `kebab-case.astro`, `PascalCase.tsx`
- **Imports**: Path alias `@/` → `src/`
- **Estilos**: Tailwind utility classes, sin CSS modules
- **Tipos**: Interfaces en `src/interfaces/`, un archivo por dominio

---

## 🛠️ Comandos

```bash
pnpm dev          # Desarrollo
pnpm build        # Build producción
pnpm preview      # Previsualizar build
pnpm astro check  # Type-checking
```

---

## 📄 CV Download

El CV se sirve desde `/files/cv.pdf`. El botón está en `src/components/ui/cv-download.astro`.
Coloca tu CV en `public/files/cv.pdf`.

---

## 📚 Referencias

- [Astro Docs](https://docs.astro.build)
- [Astro Islands](https://docs.astro.build/en/concepts/islands/)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Biome](https://biomejs.dev)

