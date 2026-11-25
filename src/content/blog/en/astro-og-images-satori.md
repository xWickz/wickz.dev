---
key: og-images-satori
title: "Generate OG Images at Build Time in Astro"
description: "44% of portfolios have no og:image, so their links show up bare. One Astro endpoint with Satori and sharp makes a PNG for every page at build time."
h1: "Generate OG images at build time in Astro with Satori (no React, no server)"
published: 2026-11-25
faqs:
  - q: What is an og:image?
    a: It's the picture X, LinkedIn, WhatsApp and Slack show when someone shares your link. It comes from a meta tag in your page's head. Without it, the link shows up as plain text or with a random image from the page.
  - q: Why not use @vercel/og?
    a: "@vercel/og uses Satori too, but it draws the image on every request inside a serverless function. If your Astro site is static, building the images once at deploy time is simpler: they're plain PNG files, they work on any host and they cost nothing to serve."
  - q: What size should an OG image be?
    a: 1200 by 630 pixels. X, LinkedIn, Facebook and WhatsApp all crop well from that size. Keep the important text away from the edges, because some apps show it smaller or crop it to a square.
  - q: I changed my OG image. Why does LinkedIn still show the old one?
    a: Social networks cache the image the first time someone shares the link. Paste the URL into LinkedIn's Post Inspector or Facebook's Sharing Debugger to make them fetch it again. X refreshes on its own after a while.
---
**Short answer:** add one endpoint, `src/pages/og/[slug].png.ts`, that returns a PNG. Satori turns a tree of divs into an SVG, and sharp turns the SVG into a 1200×630 PNG. Because Astro runs `getStaticPaths` at build time, you get one image per post in `dist/og/`, with no server and nothing to pay for. It's about 40 lines, and it's what this site uses.

When I audited 286 developer portfolios for [an earlier study](/en/blog/portfolios-invisible-to-ai/), **126 of them (44%) had no `og:image`**. Share one of those links on LinkedIn or WhatsApp and it shows up as a grey box with a URL. Nobody clicks that.

## Check your site in 10 seconds

```bash
curl -s https://yourdomain.com/ | grep -o '<meta property="og:image"[^>]*>'
```

If nothing prints, your page has no OG image. If the `content` is a relative path like `/og.png`, it's broken too: social networks need the full URL.

## Install two packages and a font

```bash
pnpm add satori sharp @fontsource/geist
```

Satori draws the text itself, so it needs the font file. Any `.woff` or `.ttf` works. I use Geist from Fontsource because the files are already in `node_modules`. If you use `astro:assets` you probably have sharp installed already.

## The endpoint

This version reads a `blog` collection. Change the collection name and the colors and it's ready:

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
        div({ fontSize: 34, color: "#a1a1aa" }, "yourdomain.com · Your Name"),
      ],
    ) as never,
    { width: 1200, height: 630, fonts },
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
```

Satori's docs use JSX, but JSX needs React. Satori only wants objects shaped like `{ type, props: { style, children } }`, so the small `div()` helper builds them directly and you don't add React to your project. The `as never` is there because Satori's types expect a React node.

## Point your pages at it

In the layout or the post page, build the absolute URL and add the meta tags:

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

`Astro.site` comes from `site` in `astro.config.mjs`, so set it to your real domain. Run `pnpm build` and open `dist/og/` to see every image.

## Things that break (and how to fix them)

- **"Unsupported OpenType signature wOF2".** Satori reads `.woff` and `.ttf`, not `.woff2`. Fontsource ships both, so pick the `.woff` file.
- **A div with several children doesn't render.** Satori uses flexbox only. Any div with more than one child needs `display: "flex"`.
- **Long titles overflow.** Satori wraps text, but it doesn't shrink it. Lower the font size for long titles, like the `title.length > 60` above.
- **Some letters show as boxes.** The `latin` subset covers English and Spanish, but not every language. Load the subset you need (`latin-ext`, `cyrillic`) as another font. Emoji need their own setup, through Satori's `loadAdditionalAsset` option.
- **The old image still shows on LinkedIn.** That's the cache, not your code. Run the URL through LinkedIn's Post Inspector.

## Want to see it working?

Every page on this site gets its image from this endpoint. Share any of them and you'll see it. And if you want to see what else I build, [my projects are here](/en/?utm_source=blog&utm_campaign=og-images-satori#projects).
