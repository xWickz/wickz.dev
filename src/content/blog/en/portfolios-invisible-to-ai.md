---
key: portfolios-invisible-to-ai
title: "1 in 3 Developer Portfolios Is a Blank Page to ChatGPT"
description: "I audited 286 developer portfolios the way AI crawlers read them. A third are nearly empty without JavaScript. Here's what I found and how to fix it."
h1: "I audited 286 developer portfolios: 1 in 3 is a blank page to ChatGPT"
published: 2026-11-17
faqs:
  - q: Do AI crawlers run JavaScript?
    a: Mostly no. GPTBot, ClaudeBot and PerplexityBot read the HTML your server returns. If your content is rendered in the browser by React or Vue, they see an empty shell. Google is the exception, since it renders JavaScript.
  - q: Does llms.txt actually work?
    a: It's a proposed standard, not a guarantee. No major AI company has confirmed it uses it for ranking. It takes five minutes to write, so it's cheap insurance, but server-rendered content matters far more.
  - q: Should I block AI crawlers?
    a: That's your call. If you want ChatGPT or Claude to recommend you, don't block them. If you use Cloudflare, check your robots.txt, because its managed setting can block them without you writing a single line.
  - q: How do I check my own site?
    a: Run it through audit.wickz.dev. It's free, needs no account and checks the same things as this study in about ten seconds.
---
**Short answer:** I ran 300 random developer portfolios through the same checks AI crawlers depend on. Of the 286 that loaded, **34% show fewer than 20 words to a bot that doesn't run JavaScript**, which is how GPTBot and ClaudeBot read the web. Only 15% have an `llms.txt`, and 7% block AI crawlers outright, usually without the owner knowing.

People increasingly ask ChatGPT, Claude or Perplexity things like *"find me a React developer who has built e-commerce sites"*. If those tools can't read your portfolio, you're not in the answer.

![Bar chart: what AI crawlers find on 286 developer portfolios](/blog/ai-visibility/chart-en.png)

## How I measured it

I took a reproducible random sample of 300 sites from [developer-portfolios](https://github.com/emmabostian/developer-portfolios), the biggest public list of portfolios on GitHub (2,100+ entries). Each one went through [site-audit](https://audit.wickz.dev/en/?utm_source=blog&utm_campaign=ai-visibility), a free tool I built that checks SEO, security headers and AI readiness.

The key detail: the audit reads the **raw HTML the server returns**, without running JavaScript. That's what AI crawlers see. 11 sites timed out or were down, and 3 returned an error, which leaves **286 live portfolios**.

## Finding 1: a third of portfolios are blank without JavaScript

98 portfolios (34%) contain **fewer than 20 visible words** in their HTML. Most are single-page React, Vue or Vite apps that render everything in the browser. To a human they look great. To a crawler that doesn't execute JavaScript, they look like this:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/assets/index-4f3a.js"></script>
</body>
```

No name, no skills, no projects. Google renders JavaScript, so these sites may still rank there. But [Vercel's analysis of AI crawler traffic](https://vercel.com/blog/the-rise-of-the-ai-crawler) found that OpenAI's and Anthropic's crawlers fetch JavaScript files without executing them.

Widen the threshold to 250 words and it's **54%** of portfolios. 35% have no `<h1>` in the HTML at all.

**Fix:** pre-render. Use static generation (Astro, Next.js `output: 'export'`, Nuxt `generate`, SvelteKit `prerender`) or a pre-render plugin for your Vite app. A portfolio is static content. It doesn't need to be built in the visitor's browser.

## Finding 2: 7% block AI crawlers, and most don't know it

19 portfolios block GPTBot, ClaudeBot and Google-Extended in `robots.txt`. When I opened those files, **17 of the 19 were written by Cloudflare**, not by the owner. Cloudflare's managed `robots.txt` adds the blocks for you when the AI crawler setting is on.

If you put your portfolio on Cloudflare and want AI assistants to find you, open `yourdomain.com/robots.txt` and check. To allow them explicitly:

```txt
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## Finding 3: almost nobody gives AI the context it needs

AI assistants prefer content they can quote with confidence: who wrote it, when, and what question it answers. Portfolios mostly skip this:

- **91%** have no publish or update date anywhere (meta tag, JSON-LD or `<time>`).
- **88%** have no question-and-answer structure (headings phrased as questions, or FAQ schema).
- **85%** have no `llms.txt`.
- **63%** have no structured data (JSON-LD) at all.
- **49%** don't declare an author.

The cheapest fix for most of these is one block of JSON-LD in your `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Frontend Developer",
  "url": "https://yourdomain.com",
  "sameAs": ["https://github.com/you", "https://linkedin.com/in/you"],
  "knowsAbout": ["React", "TypeScript", "Accessibility"]
}
</script>
```

And an `llms.txt` at the root of your site, a plain Markdown summary written for language models:

```md
# Your Name

> Frontend developer in Lisbon. I build fast, accessible React apps for startups.

## Projects
- [Project A](https://yourdomain.com/projects/a): e-commerce checkout, 40% faster load
- [Project B](https://yourdomain.com/projects/b): open-source date picker, 2k stars

## Contact
- Email: you@yourdomain.com
```

`llms.txt` is a proposal, and no major AI company has confirmed it reads it. It takes five minutes, though, and it doubles as a clean summary of your work.

## The classic SEO basics are missing too

These aren't AI-specific, but they decide what shows up when someone shares your link:

- **44%** have incomplete Open Graph tags, so a link on LinkedIn, Slack or X shows no image or the wrong text.
- **58%** have a meta description that is missing (17%) or outside the 50–160 character range.
- **57%** have no sitemap.

The median portfolio failed **14 of 33 checks**.

## A 15-minute checklist for your portfolio

1. View source (`Ctrl+U`). If you can't read your name and projects there, pre-render.
2. Open `/robots.txt` and make sure you aren't blocking crawlers you want.
3. Add one `<h1>` with your name and role.
4. Add Person JSON-LD and a meta author.
5. Add `og:title`, `og:description` and `og:image`.
6. Write an `llms.txt`.
7. Add a sitemap.

Or [run your portfolio through the audit](https://audit.wickz.dev/en/?utm_source=blog&utm_campaign=ai-visibility). It's free, needs no sign-up and checks all of the above in about ten seconds, with the exact fix for each item.

*I don't name any individual site: the point is the pattern, not the people.*
