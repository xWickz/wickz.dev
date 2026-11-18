---
key: llms-txt-template
title: "llms.txt in 5 Minutes: A Copy-Paste Template"
description: "What llms.txt is, the exact format the spec asks for, and a template you can fill in and deploy in five minutes. Plus the mistakes that make it useless."
h1: "llms.txt in 5 minutes: a copy-paste template"
published: 2026-11-18
faqs:
  - q: What is llms.txt?
    a: A plain Markdown file at the root of your site (yourdomain.com/llms.txt) that summarizes who you are and links to your most important pages, written for language models instead of people. It was proposed by Jeremy Howard in 2024.
  - q: Do ChatGPT or Claude actually read llms.txt?
    a: No major AI company has confirmed it uses llms.txt for search or answers. It's a proposal, not a standard. It takes five minutes and doubles as a clean summary of your site, so it's cheap insurance, but pre-rendered HTML matters far more.
  - q: Does llms.txt replace robots.txt or sitemap.xml?
    a: No. robots.txt says what crawlers may fetch, sitemap.xml lists every URL. llms.txt is a short, curated summary of the pages that matter most. Keep all three.
  - q: Where do I put llms.txt?
    a: At the root of your domain, served as plain text. In Astro, Vite, Next.js or SvelteKit, drop it in the public (or static) folder and it's deployed as is.
---
**Short answer:** `llms.txt` is a Markdown file at `yourdomain.com/llms.txt` that tells language models who you are and which pages matter. The format is simple: one `#` title, one `>` summary, then `##` sections with lists of links. Copy the template below, fill in the brackets and put it in your `public/` folder.

When I audited 286 developer portfolios for [an earlier study](/en/blog/portfolios-invisible-to-ai/), **85% didn't have one**. It's one of the cheapest items on any AI-readiness checklist, so here's how to do it right.

## What llms.txt is (and isn't)

[Jeremy Howard proposed llms.txt](https://llmstxt.org/) in September 2024. The idea: HTML pages are full of navigation, scripts and layout that language models have to dig through. A short Markdown file at a known address gives them the essentials directly.

Be honest with yourself about what it does:

- **It is** a curated summary: who you are, what you offer, and links to your best pages.
- **It isn't** a ranking signal anyone has confirmed. OpenAI, Anthropic and Google haven't said they use it.
- **It doesn't replace** `robots.txt` (what bots may fetch) or `sitemap.xml` (every URL you have).
- **It doesn't fix** a site that's blank without JavaScript. If a bot sees `<div id="root"></div>`, pre-render first.

So why bother? It takes five minutes, costs nothing, and forces you to write a clear, two-line description of what you do. That sentence is useful everywhere: your bio, your meta description, your LinkedIn.

## The format

The spec is short. In order:

1. **One `#` heading** with the name of your site or project. This is the only required part.
2. **One `>` blockquote** with a short summary. Make it the sentence you'd want an AI to repeat about you.
3. **Optional paragraphs or lists** with more context, but no extra headings.
4. **`##` sections**, each with a list of links in the form `- [Title](url): one-line note`.
5. **An optional `## Optional` section** for links a model can skip when it's short on space.

## The template

Copy this, replace everything in brackets, and delete the sections you don't need:

```md
# [Your name or business]

> [What you do, for whom, and where, in one or two sentences.
> Example: Frontend developer in Lisbon who builds fast, accessible
> React apps for early-stage startups.]

[Optional: one short paragraph with useful facts. Languages you work in,
availability, years of experience, how quickly you reply.]

## Services
- [Service one](https://[yourdomain.com]/services/one/): [what it is and who it's for]
- [Service two](https://[yourdomain.com]/services/two/): [same]

## Projects
- [Project A](https://[yourdomain.com]/projects/a/): [what you built and one concrete result]
- [Project B](https://[yourdomain.com]/projects/b/): [same]

## Contact
- [Email](mailto:[you@yourdomain.com]): [usual reply time]
- [GitHub](https://github.com/[you])
- [LinkedIn](https://www.linkedin.com/in/[you]/)

## Optional
- [Blog](https://[yourdomain.com]/blog/): [what you write about]
- [About](https://[yourdomain.com]/about/)
```

## Where to put it

The file has to be reachable at the root of your domain, served as plain text:

| Stack | Path in your repo |
|---|---|
| Astro, Vite, Next.js | `public/llms.txt` |
| SvelteKit | `static/llms.txt` |
| Hugo | `static/llms.txt` |
| WordPress | Upload to the site root, or use an SEO plugin that supports it |
| Plain HTML | Next to your `index.html` |

After you deploy, open `https://yourdomain.com/llms.txt` in a browser. If you see your Markdown as text, you're done. If you see your homepage or a 404, your host is rewriting the route. That's common with single-page app setups that send every path to `index.html`.

## Five mistakes that make it useless

1. **Linking to pages that are blank without JavaScript.** The model follows the link and finds an empty shell. Fix the page first.
2. **Writing a keyword list.** "React, Vue, Node, SEO, freelance, cheap" tells a model nothing. Write sentences.
3. **Leaving it stale.** If your llms.txt lists a service you dropped a year ago, it's worse than not having one. Update it when you update your site.
4. **Bare URLs with no notes.** `- https://site.com/projects/` is half the value. The note after the colon is what helps a model decide which link answers a question.
5. **Blocking the bots that would read it.** If your `robots.txt` blocks GPTBot or ClaudeBot, they won't fetch llms.txt either. In my study, 17 of the 19 sites blocking AI crawlers had that block written by Cloudflare, not by the owner.

## What about llms-full.txt?

Some documentation sites also publish `llms-full.txt`, with the full text of every page in one file. It isn't part of the original proposal. It makes sense for docs with hundreds of pages. For a portfolio or a small business site, `llms.txt` is enough.

## Check it

[Run your site through the free audit](https://audit.wickz.dev/en/?utm_source=blog&utm_campaign=llms-txt-template). It checks whether your `llms.txt` exists, whether AI crawlers are blocked in `robots.txt`, and whether your pages have content without JavaScript, in about ten seconds and with no sign-up.
