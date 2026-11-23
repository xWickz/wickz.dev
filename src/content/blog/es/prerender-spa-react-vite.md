---
key: prerender-react-vite
title: "Haz que la IA pueda leer tu SPA de React"
description: "Los bots de IA no ejecutan JavaScript y tu app de Vite les llega vacía. Pre-renderiza tus rutas en el build con 15 líneas, sin pasarte a Next.js."
h1: "Haz que los bots de IA puedan leer tu SPA de React/Vite sin reescribirla"
published: 2026-11-23
faqs:
  - q: ¿Los bots de IA ejecutan JavaScript?
    a: En general, no. GPTBot, ClaudeBot y PerplexityBot leen el HTML que devuelve tu servidor. Si React arma la página en el navegador, reciben un div vacío. Google es la excepción, porque sí renderiza JavaScript.
  - q: ¿Tengo que pasarme a Next.js para arreglarlo?
    a: No. Vite puede compilar tu app dos veces, una para el navegador y otra para Node, y un script corto escribe el HTML de cada ruta en el build. Tu app sigue siendo una SPA normal de Vite.
  - q: ¿Pre-renderizar es lo mismo que renderizar en el servidor (SSR)?
    a: No. El SSR arma el HTML en cada visita y necesita un servidor. El pre-render lo arma una sola vez, al desplegar, y sigues sirviendo archivos estáticos. Es lo indicado para páginas cuyo contenido no cambia según quién las visita.
  - q: ¿El pre-render sirve para páginas detrás de un login?
    a: No, y no hace falta. Los bots tampoco pueden iniciar sesión. Pre-renderiza las páginas públicas (inicio, sobre mí, proyectos, precios, blog) y deja que las privadas se rendericen en el navegador como siempre.
---
**Respuesta corta:** una app de React o Vite manda un `<div id="root"></div>` vacío y arma la página en el navegador. Los bots de IA no ejecutan ese JavaScript, así que para ChatGPT, Claude y Perplexity tu sitio no tiene texto. Pre-renderízalo: genera el HTML de cada ruta al desplegar con un script de 15 líneas, y React toma el control en el navegador como siempre. No tienes que reescribir nada en Next.js.

Cuando audité 286 portafolios de desarrolladores para [un estudio anterior](/es/blog/portafolios-invisibles-para-la-ia/), **98 (el 34%) mostraban menos de 20 palabras** a un bot que no ejecuta JavaScript. Casi todos eran SPAs de React, Vue o Vite. Una persona los ve perfectos y un bot los ve en blanco.

## Comprueba tu sitio en 10 segundos

Pide tu página como lo hace un bot y busca tu título principal:

```bash
curl -s -A "GPTBot/1.1" https://tudominio.com/ | grep -i "tu título principal"
```

Si no aparece nada, los bots de IA no ven ese texto. También puedes abrir `view-source:https://tudominio.com` en el navegador. Si el body es un `<div id="root"></div>` solo, eso es lo que reciben los bots.

## La solución: 4 cambios pequeños

Vite puede compilar tu app dos veces: una para el navegador y otra para Node. La versión de Node convierte una ruta en un string de HTML, y un script corto guarda un archivo por ruta. Lo probé con Vite 8, React 19 y React Router 8.

**1. Pon un marcador en `index.html`:**

```html
<div id="root"><!--app--></div>
```

**2. Crea `src/entry-server.jsx`**, que renderiza una ruta a un string:

```jsx
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App.jsx";

export function render(url) {
  return renderToString(<StaticRouter location={url}><App /></StaticRouter>);
}
```

**3. En `src/main.jsx`, cambia `createRoot` por `hydrateRoot`**, para que React reutilice el HTML que ya está en la página en lugar de armarlo desde cero:

```jsx
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter><App /></BrowserRouter>
);
```

**4. Añade `prerender.js` en la raíz del proyecto** con la lista de tus rutas públicas:

```js
import fs from "node:fs";
import { render } from "./dist-ssr/entry-server.js";

const routes = ["/", "/projects", "/about"];
const template = fs.readFileSync("dist/index.html", "utf8");

for (const url of routes) {
  const html = template.replace("<!--app-->", render(url));
  const file = `dist${url === "/" ? "" : url}/index.html`;
  fs.mkdirSync(file.replace("/index.html", ""), { recursive: true });
  fs.writeFileSync(file, html);
}
```

Después cambia el script de build en `package.json` para que haga los tres pasos:

```json
"build": "vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr && node prerender.js"
```

Ejecuta el build y verás que `dist/projects/index.html` ya trae tu título, tus textos y tus enlaces. Repite el `curl` cuando lo despliegues y deberías verlos.

## Lo que se rompe (y cómo arreglarlo)

- **`window` o `localStorage` al principio de un componente.** En el build de Node no existen. Pasa ese código a un `useEffect`, que solo corre en el navegador.
- **Un resultado distinto en Node y en el navegador.** Si algo como `Date.now()` o `Math.random()` cambia lo que se renderiza, React avisa de un error de hidratación. Renderiza lo mismo en los dos sitios y actualízalo en un `useEffect`.
- **Rutas con parámetros.** El script no puede adivinar las URLs de `/blog/:slug`. Arma la lista con tus datos (los mismos JSON o Markdown que lee tu app) y añade esas URLs a `routes`.
- **El `<title>`.** Todas las páginas siguen teniendo el título de `index.html`. Si quieres uno por ruta, cámbialo en el mismo bucle con un `.replace()` sobre la etiqueta `<title>`.
- **Las pruebas en local.** `vite preview` devuelve la página de inicio para `/projects` y el archivo correcto para `/projects/`. Los hostings estáticos como Vercel y Netlify sirven `dist/projects/index.html` para `/projects` antes de aplicar la redirección de la SPA, así que una vez desplegado funciona.

## Cuándo no es la solución

Si tu contenido cambia según quién lo visita o cada pocos minutos (un panel, precios en tiempo real), un pre-render al desplegar no da abasto. Eso pide renderizado en el servidor, y ahí sí compensa un framework como Next.js o el modo framework de React Router. Para un portafolio, una landing page o el sitio de un negocio pequeño, el pre-render es suficiente.

## ¿No quieres tocar tu build?

Si tu sitio es una SPA de React o Vite y prefieres no meterte con esto, [me encargo yo](/es/servicios/desarrollo-web-full-stack/?utm_source=blog&utm_campaign=prerender-react-vite). Pre-renderizo tus páginas públicas, compruebo que los bots de IA puedan leerlas y tu app sigue funcionando igual que ahora.
