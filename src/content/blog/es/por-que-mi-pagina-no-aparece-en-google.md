---
key: google-indexing
title: ¿Por qué mi página web no aparece en Google?
description: Las razones más comunes por las que una página web no sale en Google y qué hacer con cada una, explicadas sin tecnicismos.
h1: ¿Por qué mi página web no aparece en Google?
published: 2026-10-03
faqs:
  - q: ¿Cuánto tarda Google en mostrar una página nueva?
    a: Depende del sitio, pero lo normal es que pasen desde unos días hasta algunas semanas. Registrar la página en Google Search Console y enviar el sitemap ayuda a que la descubra antes.
  - q: ¿Tengo que pagar a Google para aparecer?
    a: No. Los resultados normales (orgánicos) son gratis. Lo que se paga son los anuncios de Google Ads, que salen marcados como "Patrocinado".
  - q: Busco mi negocio y no sale, ¿qué hago primero?
    a: Busca "site:tudominio.com" en Google. Si no aparece ningún resultado, Google todavía no tiene tu página en su índice y el primer paso es registrarla en Search Console.
---

Tener una página web no significa que Google la muestre. Para aparecer en los resultados, Google tiene que **encontrar** tu página, **entender** de qué trata y **considerarla útil** para lo que la gente busca. Si falla cualquiera de esos tres pasos, tu web no sale.

Estas son las razones más comunes y qué hacer con cada una.

## Primero: comprueba si Google conoce tu página

Escribe en Google `site:tudominio.com` (con tu dominio real). El resultado te dice en qué punto estás:

- **No sale nada:** Google todavía no ha indexado tu página. Sigue con la razón 1.
- **Sale, pero no cuando buscas lo que ofreces:** Google te conoce pero no te considera relevante para esa búsqueda. Mira las razones 3 a 6.

## 1. Google todavía no la ha encontrado

Las páginas nuevas no aparecen al instante. Google descubre sitios siguiendo enlaces y leyendo sitemaps, y eso lleva tiempo.

**Qué hacer:** registra tu web en [Google Search Console](https://search.google.com/search-console), que es gratis. Desde ahí envías el sitemap (la lista de páginas de tu sitio) y puedes pedir que Google revise una página concreta.

## 2. La página le dice a Google que no la muestre

A veces la propia web bloquea a Google sin que el dueño lo sepa. Pasa mucho cuando la página se hizo en un entorno de pruebas y se publicó con esa configuración:

- Una etiqueta `noindex`, que le pide a Google no mostrar la página.
- Un archivo `robots.txt` que bloquea a los buscadores.

**Qué hacer:** en Search Console, la herramienta "Inspección de URLs" te dice si la página se puede indexar y, si no, por qué.

## 3. No dice claramente qué ofreces ni dónde

Google lee el texto de tu página. Si la portada solo dice "Bienvenidos" y "Calidad y compromiso", no tiene forma de saber que vendes repuestos de celular en Maracaibo.

**Qué hacer:** que el título de la página, el encabezado principal y los primeros párrafos digan con palabras normales qué haces, para quién y en qué ciudad o país. Escribe como lo buscaría tu cliente.

## 4. Todo está en una sola página

Si ofreces tres servicios y los tienes resumidos en una sección de la portada, compites con una sola página por tres búsquedas distintas. Es difícil ganar en todas.

**Qué hacer:** dale a cada servicio importante su propia página, con su explicación, preguntas frecuentes y una forma de contactarte.

## 5. Es lenta o se ve mal en el celular

La mayoría de las búsquedas se hacen desde el teléfono, y Google lo tiene en cuenta. Una página que tarda en cargar o que obliga a hacer zoom ofrece mala experiencia y pierde visitas aunque aparezca.

**Qué hacer:** pasa tu web por [PageSpeed Insights](https://pagespeed.web.dev/), que es gratis y te dice qué la hace lenta. Lo más común son imágenes demasiado pesadas.

## 6. Nadie la menciona

Google confía más en las páginas a las que otros sitios enlazan. Una web recién creada y sin menciones parte con desventaja.

**Qué hacer:** pon el enlace de tu web en tu perfil de Instagram, en tu WhatsApp Business y en tu **Perfil de Empresa de Google** (la ficha que sale en Google Maps). Si un proveedor, cliente o directorio local puede enlazarte, mejor.

## Resumen

| Síntoma | Causa probable | Solución |
|---|---|---|
| `site:` no muestra nada | Google no la ha indexado | Search Console + sitemap |
| Search Console dice "excluida por noindex" | La web bloquea a Google | Quitar `noindex` |
| Sale con tu nombre pero no con tu servicio | No explica qué ofreces | Textos claros y una página por servicio |
| Aparece pero nadie entra | Lenta o mal título | Optimizar velocidad y títulos |

Si tu página no aparece y no sabes por dónde empezar, [escríbeme](mailto:hi@wickz.dev) y la reviso. Y si estás por hacer una nueva, en [desarrollo web](/es/servicios/desarrollo-web-full-stack/) y [landing pages](/es/servicios/landing-pages/) ya la entrego con esto resuelto desde el inicio: indexable, rápida y con un texto que explica lo que haces.
