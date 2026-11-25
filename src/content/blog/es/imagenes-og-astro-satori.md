---
key: og-images-satori
title: "Imágenes OG automáticas en Astro con Satori"
description: "Al 44% de los portafolios le falta og:image y sus links se ven vacíos. Un endpoint de Astro con Satori y sharp crea una PNG para cada página en el build."
h1: "Imágenes OG automáticas en Astro con Satori, generadas en el build (sin React ni servidor)"
published: 2026-11-25
faqs:
  - q: ¿Qué es una og:image?
    a: Es la imagen que muestran X, LinkedIn, WhatsApp y Slack cuando alguien comparte tu link. Sale de una etiqueta meta en el head de tu página. Sin ella, el link aparece como texto plano o con una imagen cualquiera de la página.
  - q: ¿Por qué no usar @vercel/og?
    a: "@vercel/og también usa Satori, pero dibuja la imagen en cada visita dentro de una función serverless. Si tu sitio de Astro es estático, es más simple crear las imágenes una vez al desplegar: son archivos PNG normales, funcionan en cualquier hosting y servirlas no cuesta nada."
  - q: ¿Qué tamaño debe tener una imagen OG?
    a: 1200 por 630 píxeles. X, LinkedIn, Facebook y WhatsApp la recortan bien a partir de ese tamaño. Deja el texto importante lejos de los bordes, porque algunas apps la muestran más pequeña o la recortan en cuadrado.
  - q: Cambié mi imagen OG. ¿Por qué LinkedIn sigue mostrando la vieja?
    a: Las redes guardan en caché la imagen la primera vez que alguien comparte el link. Pega la URL en el Post Inspector de LinkedIn o en el Sharing Debugger de Facebook para que la vuelvan a descargar. X la actualiza sola al cabo de un tiempo.
---
**Respuesta corta:** agrega un endpoint, `src/pages/og/[slug].png.ts`, que devuelva una PNG. Satori convierte un árbol de divs en un SVG y sharp convierte ese SVG en una PNG de 1200×630. Como Astro ejecuta `getStaticPaths` en el build, obtienes una imagen por artículo en `dist/og/`, sin servidor y sin pagar nada. Son unas 40 líneas, y es lo que usa este sitio.

Cuando audité 286 portafolios de desarrolladores para [un estudio anterior](/es/blog/portafolios-invisibles-para-la-ia/), **a 126 (el 44%) les faltaba la `og:image`**. Si compartes uno de esos links en LinkedIn o WhatsApp, sale un recuadro gris con una URL. Nadie hace clic en eso.

## Revisa tu sitio en 10 segundos

```bash
curl -s https://tudominio.com/ | grep -o '<meta property="og:image"[^>]*>'
```

Si no imprime nada, tu página no tiene imagen OG. Si el `content` es una ruta relativa como `/og.png`, también está mal: las redes necesitan la URL completa.

## Instala dos paquetes y una fuente

```bash
pnpm add satori sharp @fontsource/geist
```

Satori dibuja el texto por su cuenta, así que necesita el archivo de la fuente. Sirve cualquier `.woff` o `.ttf`. Yo uso Geist de Fontsource porque los archivos ya quedan en `node_modules`. Si usas `astro:assets`, seguramente ya tienes sharp instalado.

## El endpoint

Esta versión lee una colección `blog`. Cambia el nombre de la colección y los colores y ya está:

```ts
// src/pages/og/[slug].png.ts
import { readFileSync } from "node:fs";
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import sharp from "sharp";

const font = (w: 400 | 700) =>
  readFileSync(`node_modules/@fontsource/geist/files/geist-latin-${w}-normal.woff`);
const fonts = [
  { name: "Geist", data: font(400), weight: 400 as const },
  { name: "Geist", data: font(700), weight: 700 as const },
];

export const getStaticPaths = (async () => {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { title: post.data.title },
  }));
}) satisfies GetStaticPaths;

const div = (style: object, children: unknown) => ({ type: "div", props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const { title } = props as { title: string };
  const svg = await satori(
    div(
      {
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#09090b",
        color: "#fafafa",
        fontFamily: "Geist",
      },
      [
        div({ fontSize: 34, color: "#a1a1aa" }, "BLOG"),
        div({ fontSize: title.length > 60 ? 60 : 76, fontWeight: 700, lineHeight: 1.1 }, title),
        div({ fontSize: 34, color: "#a1a1aa" }, "tudominio.com · Tu Nombre"),
      ],
    ) as never,
    { width: 1200, height: 630, fonts },
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
```

La documentación de Satori usa JSX, pero JSX necesita React. Satori solo pide objetos con la forma `{ type, props: { style, children } }`, así que el pequeño helper `div()` los arma directamente y no tienes que agregar React a tu proyecto. El `as never` está porque los tipos de Satori esperan un nodo de React.

## Enlázala desde tus páginas

En el layout o en la página del artículo, arma la URL absoluta y agrega las etiquetas meta:

```astro
---
const { post } = Astro.props;
const ogImage = new URL(`/og/${post.id}.png`, Astro.site).href;
---
<meta property="og:image" content={ogImage} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
```

`Astro.site` sale de `site` en `astro.config.mjs`, así que ponle tu dominio real. Ejecuta `pnpm build` y abre `dist/og/` para ver todas las imágenes.

## Lo que falla (y cómo arreglarlo)

- **"Unsupported OpenType signature wOF2".** Satori lee `.woff` y `.ttf`, no `.woff2`. Fontsource trae los dos, así que elige el `.woff`.
- **Un div con varios hijos no se dibuja.** Satori solo usa flexbox. Todo div con más de un hijo necesita `display: "flex"`.
- **Los títulos largos se salen.** Satori parte el texto en líneas, pero no lo achica. Baja el tamaño de letra para los títulos largos, como el `title.length > 60` de arriba.
- **Algunas letras salen como cuadros.** El subconjunto `latin` cubre el español y el inglés, pero no todos los idiomas. Carga el que necesites (`latin-ext`, `cyrillic`) como otra fuente. Los emoji necesitan su propia configuración, con la opción `loadAdditionalAsset` de Satori.
- **LinkedIn sigue mostrando la imagen vieja.** Es la caché, no tu código. Pasa la URL por el Post Inspector de LinkedIn.

## ¿Quieres verlo funcionando?

Cada página de este sitio saca su imagen de este endpoint. Comparte cualquiera y la verás. Y si quieres ver qué más construyo, [mis proyectos están aquí](/es/?utm_source=blog&utm_campaign=og-images-satori#projects).
