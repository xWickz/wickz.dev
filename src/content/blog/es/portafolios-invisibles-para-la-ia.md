---
key: portfolios-invisible-to-ai
title: "1 de cada 3 portafolios está en blanco para ChatGPT"
description: "Audité 286 portafolios de desarrolladores como los leen los bots de IA. Un tercio está casi vacío sin JavaScript. Qué encontré y cómo arreglarlo."
h1: "Audité 286 portafolios de desarrolladores: 1 de cada 3 es una página en blanco para ChatGPT"
published: 2026-11-17
faqs:
  - q: ¿Los bots de IA ejecutan JavaScript?
    a: En general, no. GPTBot, ClaudeBot y PerplexityBot leen el HTML que devuelve tu servidor. Si tu contenido lo dibuja React o Vue en el navegador, ven una página vacía. Google es la excepción, porque sí ejecuta JavaScript.
  - q: ¿Sirve de algo el llms.txt?
    a: Es una propuesta, no una garantía. Ninguna empresa grande de IA ha confirmado que lo use. Se escribe en cinco minutos, así que es un seguro barato, pero el contenido renderizado en el servidor importa mucho más.
  - q: ¿Debería bloquear a los bots de IA?
    a: Es tu decisión. Si quieres que ChatGPT o Claude te recomienden, no los bloquees. Si usas Cloudflare, revisa tu robots.txt, porque su opción gestionada puede bloquearlos sin que escribas una sola línea.
  - q: ¿Cómo reviso mi propio sitio?
    a: Pásalo por audit.wickz.dev. Es gratis, no pide cuenta y revisa lo mismo que este estudio en unos diez segundos.
---
**Respuesta corta:** pasé 300 portafolios de desarrolladores, elegidos al azar, por los mismos checks de los que dependen los bots de IA. De los 286 que cargaron, **el 34% muestra menos de 20 palabras a un bot que no ejecuta JavaScript**, que es como GPTBot y ClaudeBot leen la web. Solo el 15% tiene `llms.txt`, y el 7% bloquea directamente a los bots de IA, casi siempre sin que el dueño lo sepa.

Cada vez más gente le pide a ChatGPT, Claude o Perplexity cosas como *"búscame un desarrollador React que haya hecho tiendas online"*. Si esas herramientas no pueden leer tu portafolio, no apareces en la respuesta.

![Gráfico de barras: lo que encuentran los bots de IA en 286 portafolios](/blog/ai-visibility/chart-es.png)

## Cómo lo medí

Tomé una muestra aleatoria reproducible de 300 sitios de [developer-portfolios](https://github.com/emmabostian/developer-portfolios), la lista pública de portafolios más grande de GitHub (más de 2.100). Cada uno pasó por [site-audit](https://audit.wickz.dev/es/?utm_source=blog&utm_campaign=ai-visibility), una herramienta gratuita que hice y que revisa SEO, cabeceras de seguridad y preparación para IA.

El detalle clave: la auditoría lee **el HTML que devuelve el servidor**, sin ejecutar JavaScript. Eso es lo que ven los bots de IA. 11 sitios no respondieron y 3 devolvieron error, así que quedan **286 portafolios activos**.

## Hallazgo 1: un tercio de los portafolios está en blanco sin JavaScript

98 portafolios (34%) tienen **menos de 20 palabras visibles** en su HTML. La mayoría son aplicaciones de una sola página en React, Vue o Vite que dibujan todo en el navegador. Para una persona se ven bien. Para un bot que no ejecuta JavaScript, se ven así:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/assets/index-4f3a.js"></script>
</body>
```

Sin nombre, sin habilidades, sin proyectos. Google sí ejecuta JavaScript, así que puede que esos sitios aparezcan ahí. Pero el [análisis de Vercel sobre el tráfico de bots de IA](https://vercel.com/blog/the-rise-of-the-ai-crawler) encontró que los bots de OpenAI y Anthropic descargan los archivos JavaScript sin ejecutarlos.

Si el umbral sube a 250 palabras, es el **54%** de los portafolios. El 35% no tiene ningún `<h1>` en el HTML.

**Solución:** pre-renderizar. Usa generación estática (Astro, Next.js con `output: 'export'`, Nuxt `generate`, SvelteKit `prerender`) o un plugin de pre-render para tu app de Vite. Un portafolio es contenido estático: no hace falta construirlo en el navegador del visitante.

## Hallazgo 2: el 7% bloquea a los bots de IA, y casi nadie lo sabe

19 portafolios bloquean a GPTBot, ClaudeBot y Google-Extended en su `robots.txt`. Al abrir esos archivos, **17 de los 19 los había escrito Cloudflare**, no el dueño. El `robots.txt` gestionado de Cloudflare añade esos bloqueos cuando la opción de bots de IA está activa.

Si tu portafolio está en Cloudflare y quieres que los asistentes de IA te encuentren, abre `tudominio.com/robots.txt` y revísalo. Para permitirlos de forma explícita:

```txt
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://tudominio.com/sitemap.xml
```

## Hallazgo 3: casi nadie le da a la IA el contexto que necesita

Los asistentes de IA prefieren contenido que puedan citar con confianza: quién lo escribió, cuándo y qué pregunta responde. Los portafolios casi nunca lo dicen:

- **91%** no tiene fecha de publicación ni de actualización (ni meta, ni JSON-LD, ni `<time>`).
- **88%** no tiene estructura de pregunta y respuesta (títulos en forma de pregunta o schema de FAQ).
- **85%** no tiene `llms.txt`.
- **63%** no tiene datos estructurados (JSON-LD).
- **49%** no declara un autor.

Lo más barato para resolver casi todo es un bloque de JSON-LD en tu `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tu Nombre",
  "jobTitle": "Desarrollador Frontend",
  "url": "https://tudominio.com",
  "sameAs": ["https://github.com/tu-usuario", "https://linkedin.com/in/tu-usuario"],
  "knowsAbout": ["React", "TypeScript", "Accesibilidad"]
}
</script>
```

Y un `llms.txt` en la raíz del sitio, un resumen en Markdown pensado para modelos de lenguaje:

```md
# Tu Nombre

> Desarrollador frontend en Madrid. Hago apps React rápidas y accesibles para startups.

## Proyectos
- [Proyecto A](https://tudominio.com/proyectos/a): checkout de tienda online, 40% más rápido
- [Proyecto B](https://tudominio.com/proyectos/b): selector de fechas open source, 2k estrellas

## Contacto
- Email: tu@tudominio.com
```

`llms.txt` es una propuesta y ninguna empresa grande de IA ha confirmado que lo lea. Pero se escribe en cinco minutos y de paso te deja un buen resumen de tu trabajo.

## También faltan lo básico del SEO

No es específico de la IA, pero decide qué se ve cuando alguien comparte tu enlace:

- **44%** tiene Open Graph incompleto: en LinkedIn, Slack o X el enlace sale sin imagen o con el texto equivocado.
- **58%** tiene la meta description ausente (17%) o fuera de los 50–160 caracteres.
- **57%** no tiene sitemap.

El portafolio típico (la mediana) falló **14 de 33 checks**.

## Checklist de 15 minutos para tu portafolio

1. Mira el código fuente (`Ctrl+U`). Si no ves tu nombre y tus proyectos ahí, pre-renderiza.
2. Abre `/robots.txt` y comprueba que no bloqueas a los bots que quieres.
3. Pon un solo `<h1>` con tu nombre y tu rol.
4. Añade JSON-LD de tipo Person y un meta author.
5. Añade `og:title`, `og:description` y `og:image`.
6. Escribe un `llms.txt`.
7. Añade un sitemap.

O [pasa tu portafolio por la auditoría](https://audit.wickz.dev/es/?utm_source=blog&utm_campaign=ai-visibility). Es gratis, no pide registro y revisa todo lo anterior en unos diez segundos, con la solución exacta para cada punto.

*No nombro ningún sitio: lo que importa es el patrón, no las personas.*
