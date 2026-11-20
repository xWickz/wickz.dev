---
key: cloudflare-blocking-chatgpt
title: "¿Cloudflare bloquea a ChatGPT? Compruébalo en 30 segundos"
description: "Cloudflare puede bloquear bots de IA en tu robots.txt sin que escribas una línea. Dos comprobaciones rápidas para ver qué bloquea y cómo cambiarlo."
h1: "¿Cloudflare bloquea a ChatGPT en tu sitio? Compruébalo en 30 segundos"
published: 2026-11-20
faqs:
  - q: ¿Cloudflare bloquea a ChatGPT por defecto?
    a: A la búsqueda de ChatGPT, no. El robots.txt gestionado de Cloudflare bloquea a los bots de entrenamiento como GPTBot y ClaudeBot, pero no incluye a OAI-SearchBot, ChatGPT-User ni PerplexityBot. Un bloqueo de firewall en AI Crawl Control es otra cosa y puede bloquear al bot que elijas.
  - q: ¿Cómo sé si Cloudflare escribió mi robots.txt?
    a: Abre tudominio.com/robots.txt. Si ves un bloque entre "# BEGIN Cloudflare Managed content" y "# END Cloudflare Managed Content", lo añadió Cloudflare.
  - q: ¿Debería bloquear a GPTBot y ClaudeBot?
    a: Es tu decisión. Bloquearlos deja tu contenido fuera del entrenamiento de los modelos. No te saca de los resultados de búsqueda de ChatGPT o Claude, que usan otros bots.
  - q: ¿Basta con robots.txt para bloquear a los bots de IA?
    a: No. robots.txt es una petición y los bots pueden ignorarla. Para bloquear de verdad hace falta una regla de firewall, que en Cloudflare es lo que crea AI Crawl Control.
---
**Respuesta corta:** a la *búsqueda* de ChatGPT probablemente no, pero al *entrenamiento* probablemente sí. El `robots.txt` gestionado de Cloudflare bloquea a bots de entrenamiento como GPTBot y ClaudeBot. No bloquea a OAI-SearchBot ni a ChatGPT-User, que son los que leen páginas para responder y citarlas. Abre `tudominio.com/robots.txt` para comprobar lo primero y ejecuta el `curl` de abajo para lo segundo.

Cuando audité 286 portafolios de desarrolladores para [un estudio anterior](/es/blog/portafolios-invisibles-para-la-ia/), 19 bloqueaban a GPTBot y ClaudeBot. Al abrir esos archivos, **17 de los 19 bloqueos los había escrito Cloudflare**, no el dueño. La mayoría nunca decidió bloquear a la IA. Lo decidió un ajuste del panel.

## Dos tipos de bots de IA

Aquí se equivocan casi todos los artículos. Los «bots de IA» no son una sola cosa:

| Bot | Empresa | Qué hace |
|---|---|---|
| GPTBot | OpenAI | Recoge contenido para **entrenar** modelos |
| OAI-SearchBot | OpenAI | Indexa páginas para la **búsqueda de ChatGPT** |
| ChatGPT-User | OpenAI | Lee una página **cuando un usuario pregunta** por ella |
| ClaudeBot | Anthropic | Recoge contenido para **entrenar** modelos |
| Claude-SearchBot | Anthropic | Indexa páginas para la **búsqueda de Claude** |
| PerplexityBot | Perplexity | Indexa páginas para las **respuestas de Perplexity** |
| Google-Extended | Google | Decide si Gemini **entrena** con tu contenido (no afecta a la búsqueda de Google) |

Bloquear un bot de entrenamiento te deja fuera de los modelos futuros. Bloquear un bot de búsqueda te deja fuera de las respuestas. Son resultados muy distintos.

## Comprobación 1: robots.txt (10 segundos)

Abre `https://tudominio.com/robots.txt` en el navegador. Si lo gestiona Cloudflare, verás algo así arriba del todo:

```txt
# BEGIN Cloudflare Managed content
User-Agent: *
Content-signal: search=yes,ai-train=no
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /
# (Amazonbot, Applebot-Extended, Bytespider, CCBot, meta-externalagent...)
# END Cloudflare Managed Content
```

Esa es la lista de entrenamiento. Los bots de búsqueda no están, así que con solo este bloque la búsqueda de ChatGPT y Perplexity te pueden seguir leyendo. La línea `Content-signal` dice lo mismo con palabras: búsqueda sí, entrenamiento no.

Si ves `Disallow: /` debajo de `OAI-SearchBot`, `ChatGPT-User` o `PerplexityBot`, ese sí te está sacando de las respuestas de la IA. Lo añadió alguien a mano o un plugin.

## Comprobación 2: el firewall (20 segundos)

`robots.txt` es solo una petición. Cloudflare también tiene **AI Crawl Control**, que bloquea bots en el firewall con un `403`. Eso no aparece en `robots.txt`, así que hay que preguntar haciéndose pasar por el bot:

```bash
curl -s -o /dev/null -w "%{http_code}\n" -A "OAI-SearchBot/1.0; +https://openai.com/searchbot" https://tudominio.com/
curl -s -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0" https://tudominio.com/
```

Si la segunda línea imprime `200` y la primera `403` (o `402`), te están bloqueando en el firewall. Cambia el nombre por `ChatGPT-User`, `PerplexityBot` o `GPTBot` para probar los demás. En Windows, usa `curl.exe` y `NUL` en vez de `/dev/null`.

No es perfecto. Cloudflare también puede verificar los bots reales por su IP, así que un user agent falso desde tu portátil no siempre recibe la misma respuesta que el bot de verdad. Pero un `403` aquí es una buena pista para ir a mirar el panel.

## Cómo cambiarlo

Mientras escribo esto, los dos ajustes están en el panel de Cloudflare de tu dominio:

- **robots.txt:** ve a **Security → Settings**, filtra por **Bot traffic** y abre **AI Crawler and Agent access policies**. Pon Training en permitir (o desactiva **Bot Preference Sync**) y Cloudflare deja de añadir su bloque.
- **Firewall:** ve a **AI Crawl Control**. Cada bot tiene una acción **Allow** o **Block**. Pon en Allow los que quieras.

Mi opinión para un portafolio o el sitio de un negocio pequeño: **deja pasar a los bots de búsqueda**, porque así es como ChatGPT, Claude y Perplexity te encuentran y te recomiendan. Lo del entrenamiento es una decisión real y bloquearlo es razonable. Solo que sea a propósito.

Para permitirlos de forma explícita en un `robots.txt` escrito por ti:

```txt
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: PerplexityBot
Allow: /
```

## Revísalo

[Pasa tu sitio por la auditoría gratis](https://audit.wickz.dev/es/?utm_source=blog&utm_campaign=cloudflare-blocking-chatgpt). Lee tu `robots.txt` y te dice por separado qué bots de búsqueda de IA y qué bots de entrenamiento están bloqueados, en unos diez segundos y sin registrarte.
