---
key: llms-txt-template
title: "llms.txt en 5 minutos: plantilla para copiar y pegar"
description: "Qué es llms.txt, el formato exacto que pide la propuesta y una plantilla para rellenar y publicar en cinco minutos. Y los errores que lo vuelven inútil."
h1: "llms.txt en 5 minutos: plantilla para copiar y pegar"
published: 2026-11-18
faqs:
  - q: ¿Qué es llms.txt?
    a: Un archivo Markdown en la raíz de tu sitio (tudominio.com/llms.txt) que resume quién eres y enlaza tus páginas más importantes, escrito para modelos de lenguaje y no para personas. Lo propuso Jeremy Howard en 2024.
  - q: ¿ChatGPT o Claude leen de verdad el llms.txt?
    a: Ninguna empresa grande de IA ha confirmado que use llms.txt para buscar o responder. Es una propuesta, no un estándar. Se hace en cinco minutos y sirve como resumen claro de tu sitio, así que es un seguro barato, pero el HTML pre-renderizado importa mucho más.
  - q: ¿llms.txt reemplaza a robots.txt o a sitemap.xml?
    a: No. robots.txt dice qué pueden descargar los bots y sitemap.xml lista todas las URL. llms.txt es un resumen corto y elegido a mano de las páginas que más importan. Conserva los tres.
  - q: ¿Dónde pongo el llms.txt?
    a: En la raíz de tu dominio, servido como texto plano. En Astro, Vite, Next.js o SvelteKit, ponlo en la carpeta public (o static) y se publica tal cual.
---
**Respuesta corta:** `llms.txt` es un archivo Markdown en `tudominio.com/llms.txt` que le dice a los modelos de lenguaje quién eres y qué páginas importan. El formato es simple: un título con `#`, un resumen con `>` y secciones `##` con listas de enlaces. Copia la plantilla de abajo, rellena los corchetes y ponla en tu carpeta `public/`.

Cuando audité 286 portafolios de desarrolladores para [un estudio anterior](/es/blog/portafolios-invisibles-para-la-ia/), **el 85% no tenía uno**. Es de lo más barato de cualquier checklist de preparación para IA, así que aquí va cómo hacerlo bien.

## Qué es llms.txt (y qué no es)

[Jeremy Howard propuso llms.txt](https://llmstxt.org/) en septiembre de 2024. La idea: las páginas HTML están llenas de menús, scripts y maquetación que los modelos de lenguaje tienen que atravesar. Un archivo Markdown corto, en una dirección conocida, les da lo esencial directamente.

Conviene ser honesto sobre lo que hace:

- **Es** un resumen elegido a mano: quién eres, qué ofreces y enlaces a tus mejores páginas.
- **No es** una señal de posicionamiento confirmada. OpenAI, Anthropic y Google no han dicho que lo usen.
- **No reemplaza** a `robots.txt` (qué pueden descargar los bots) ni a `sitemap.xml` (todas tus URL).
- **No arregla** un sitio que está en blanco sin JavaScript. Si un bot ve `<div id="root"></div>`, primero pre-renderiza.

¿Entonces para qué? Toma cinco minutos, no cuesta nada y te obliga a escribir en dos líneas qué haces. Esa frase te sirve en todas partes: tu bio, tu meta description, tu LinkedIn.

## El formato

La propuesta es corta. En este orden:

1. **Un encabezado `#`** con el nombre de tu sitio o proyecto. Es lo único obligatorio.
2. **Una cita `>`** con un resumen corto. Que sea la frase que quieres que una IA repita sobre ti.
3. **Párrafos o listas opcionales** con más contexto, pero sin más encabezados.
4. **Secciones `##`**, cada una con una lista de enlaces así: `- [Título](url): nota de una línea`.
5. **Una sección opcional `## Optional`** con enlaces que un modelo puede saltarse si le falta espacio. El nombre va en inglés porque así lo define la propuesta.

## La plantilla

Cópiala, cambia todo lo que está entre corchetes y borra las secciones que no necesites:

```md
# [Tu nombre o negocio]

> [Qué haces, para quién y dónde, en una o dos frases.
> Ejemplo: Desarrolladora frontend en Lisboa que crea apps React
> rápidas y accesibles para startups en etapa temprana.]

[Opcional: un párrafo corto con datos útiles. Idiomas en los que trabajas,
disponibilidad, años de experiencia, en cuánto tiempo respondes.]

## Servicios
- [Servicio uno](https://[tudominio.com]/servicios/uno/): [qué es y para quién]
- [Servicio dos](https://[tudominio.com]/servicios/dos/): [lo mismo]

## Proyectos
- [Proyecto A](https://[tudominio.com]/proyectos/a/): [qué hiciste y un resultado concreto]
- [Proyecto B](https://[tudominio.com]/proyectos/b/): [lo mismo]

## Contacto
- [Email](mailto:[tu@tudominio.com]): [tiempo habitual de respuesta]
- [GitHub](https://github.com/[tu-usuario])
- [LinkedIn](https://www.linkedin.com/in/[tu-usuario]/)

## Optional
- [Blog](https://[tudominio.com]/blog/): [sobre qué escribes]
- [Sobre mí](https://[tudominio.com]/sobre-mi/)
```

## Dónde ponerlo

El archivo tiene que estar en la raíz de tu dominio y servirse como texto plano:

| Stack | Ruta en tu repo |
|---|---|
| Astro, Vite, Next.js | `public/llms.txt` |
| SvelteKit | `static/llms.txt` |
| Hugo | `static/llms.txt` |
| WordPress | Súbelo a la raíz del sitio, o usa un plugin de SEO que lo soporte |
| HTML simple | Al lado de tu `index.html` |

Después de publicar, abre `https://tudominio.com/llms.txt` en el navegador. Si ves tu Markdown como texto, listo. Si ves tu página de inicio o un 404, tu hosting está reescribiendo la ruta. Pasa mucho con las aplicaciones de una sola página que mandan todas las rutas a `index.html`.

## Cinco errores que lo vuelven inútil

1. **Enlazar páginas que están en blanco sin JavaScript.** El modelo sigue el enlace y encuentra una página vacía. Arregla la página primero.
2. **Escribir una lista de palabras clave.** "React, Vue, Node, SEO, freelance, barato" no le dice nada a un modelo. Escribe frases.
3. **Dejarlo desactualizado.** Si tu llms.txt menciona un servicio que dejaste hace un año, es peor que no tenerlo. Actualízalo cuando actualices tu sitio.
4. **URL sueltas sin nota.** `- https://sitio.com/proyectos/` es la mitad del valor. La nota después de los dos puntos es lo que ayuda al modelo a decidir qué enlace responde una pregunta.
5. **Bloquear a los bots que lo leerían.** Si tu `robots.txt` bloquea a GPTBot o ClaudeBot, tampoco van a descargar el llms.txt. En mi estudio, en 17 de los 19 sitios que bloqueaban bots de IA, el bloqueo lo había escrito Cloudflare, no el dueño.

## ¿Y llms-full.txt?

Algunos sitios de documentación publican también `llms-full.txt`, con el texto completo de todas las páginas en un solo archivo. No es parte de la propuesta original. Tiene sentido para documentación con cientos de páginas. Para un portafolio o el sitio de un negocio pequeño, con `llms.txt` basta.

## Revísalo

[Pasa tu sitio por la auditoría gratis](https://audit.wickz.dev/es/?utm_source=blog&utm_campaign=llms-txt-template). Revisa si tienes `llms.txt`, si `robots.txt` bloquea a los bots de IA y si tus páginas tienen contenido sin JavaScript, en unos diez segundos y sin registrarte.
