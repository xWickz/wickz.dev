---
key: prerender-react-vite
title: "Make Your React SPA Readable by AI Crawlers"
description: "AI crawlers don't run JavaScript, so your Vite app looks empty to ChatGPT. Pre-render your routes at build time with a 15-line script. No Next.js needed."
h1: "Make your React/Vite SPA readable by AI crawlers without rewriting it"
published: 2026-11-23
faqs:
  - q: Do AI crawlers run JavaScript?
    a: Mostly no. GPTBot, ClaudeBot and PerplexityBot read the HTML your server returns. If React builds the page in the browser, they get an empty div. Google is the exception, since it renders JavaScript.
  - q: Do I need to move to Next.js to fix this?
    a: No. Vite can build your app twice, once for the browser and once for Node, and a short script writes the HTML of each route at build time. Your app stays a normal Vite SPA.
  - q: Is pre-rendering the same as server-side rendering?
    a: No. Server-side rendering builds the HTML on every request and needs a server. Pre-rendering builds it once, at deploy time, and you keep hosting static files. It's the right fit for pages whose content doesn't change per visitor.
  - q: Does pre-rendering work with pages behind a login?
    a: No, and it doesn't need to. Crawlers can't log in either. Pre-render the public pages (home, about, projects, pricing, blog) and let the private ones render in the browser as before.
---
**Short answer:** a React or Vite app sends an empty `<div id="root"></div>` and builds the page in the browser. AI crawlers don't run that JavaScript, so to ChatGPT, Claude and Perplexity your site has no text. Pre-render it: build the HTML of each route at deploy time with a 15-line script, and React takes over in the browser as usual. You don't need to rewrite anything in Next.js.

When I audited 286 developer portfolios for [an earlier study](/en/blog/portfolios-invisible-to-ai/), **98 of them (34%) showed fewer than 20 words** to a bot that doesn't run JavaScript. Most were React, Vue or Vite single-page apps. They look great to a person and blank to a crawler.

## Check your site in 10 seconds

Ask for your page the way a crawler does and search for your main heading:

```bash
curl -s -A "GPTBot/1.1" https://yourdomain.com/ | grep -i "your main heading"
```

If nothing prints, AI crawlers can't see that text. You can also open `view-source:https://yourdomain.com` in the browser. If the body is a lone `<div id="root"></div>`, that's what the bots get.

## The fix: 4 small changes

Vite can build your app twice: once for the browser and once for Node. The Node build can turn a route into an HTML string, and a short script saves one file per route. I tested this with Vite 8, React 19 and React Router 8.

**1. Add a placeholder in `index.html`:**

```html
<div id="root"><!--app--></div>
```

**2. Create `src/entry-server.jsx`**, which renders a route to a string:

```jsx
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App.jsx";

export function render(url) {
  return renderToString(<StaticRouter location={url}><App /></StaticRouter>);
}
```

**3. In `src/main.jsx`, change `createRoot` to `hydrateRoot`**, so React reuses the HTML that's already there instead of building it from scratch:

```jsx
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter><App /></BrowserRouter>
);
```

**4. Add `prerender.js` at the project root** and list your public routes:

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

Then point the build script in `package.json` at the three steps:

```json
"build": "vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr && node prerender.js"
```

Run the build and `dist/projects/index.html` now has your real heading, text and links. Run the `curl` again after you deploy and you should see it.

## Things that break (and how to fix them)

- **`window` or `localStorage` at the top of a component.** The Node build doesn't have them. Move that code into a `useEffect`, which only runs in the browser.
- **Different output in Node and in the browser.** If something like `Date.now()` or `Math.random()` changes what's rendered, React warns about a hydration mismatch. Render the same thing in both places, and update it in a `useEffect`.
- **Routes with parameters.** `/blog/:slug` isn't a list the script can guess. Build the list from your data (the same JSON or Markdown files your app reads) and add those URLs to `routes`.
- **The `<title>`.** Every page still has the title from `index.html`. If you want one per route, replace it in the same loop, with a `.replace()` on the `<title>` tag.
- **Testing locally.** `vite preview` returns the home page for `/projects` and the right file for `/projects/`. Static hosts like Vercel and Netlify serve `dist/projects/index.html` for `/projects` before applying the SPA rewrite, so it works when deployed.

## When this isn't the right fix

If your content changes per visitor or every few minutes (a dashboard, prices in real time), pre-rendering at deploy time won't keep up. That's a job for server-side rendering, and at that point a framework like Next.js or React Router's framework mode is worth it. For a portfolio, a landing page or a small business site, pre-rendering is enough.

## Don't want to touch your build?

If your site is a React or Vite SPA and you'd rather not deal with it, [I can do it for you](/en/services/full-stack-web-development/?utm_source=blog&utm_campaign=prerender-react-vite). I pre-render your public pages, check that AI crawlers can read them, and leave your app working exactly as it does now.
