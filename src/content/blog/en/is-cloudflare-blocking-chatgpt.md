---
key: cloudflare-blocking-chatgpt
title: "Is Cloudflare Blocking ChatGPT? Check in 30 Seconds"
description: "Cloudflare can add AI crawler blocks to your robots.txt without you writing a line. Two quick checks to see what it blocks, and how to change it."
h1: "Is Cloudflare blocking ChatGPT from your site? Check in 30 seconds"
published: 2026-11-20
faqs:
  - q: Does Cloudflare block ChatGPT by default?
    a: Not ChatGPT search. Cloudflare's managed robots.txt blocks training crawlers like GPTBot and ClaudeBot, but it doesn't list OAI-SearchBot, ChatGPT-User or PerplexityBot. A firewall block in AI Crawl Control is different, and it can block any crawler you pick.
  - q: How do I know if Cloudflare wrote my robots.txt?
    a: Open yourdomain.com/robots.txt. If you see a block between "# BEGIN Cloudflare Managed content" and "# END Cloudflare Managed Content", Cloudflare added it.
  - q: Should I block GPTBot and ClaudeBot?
    a: It's your call. Blocking them keeps your content out of model training. It doesn't remove you from ChatGPT or Claude search results, which use different crawlers.
  - q: Is robots.txt enough to block AI crawlers?
    a: No. robots.txt is a request, and crawlers can ignore it. To actually block a crawler you need a firewall rule, which on Cloudflare is what AI Crawl Control creates.
---
**Short answer:** probably not ChatGPT *search*, but probably ChatGPT *training*. Cloudflare's managed `robots.txt` blocks training crawlers like GPTBot and ClaudeBot. It doesn't block OAI-SearchBot or ChatGPT-User, which fetch pages to answer and cite. Open `yourdomain.com/robots.txt` to check the first part, and run the `curl` below to check the second.

When I audited 286 developer portfolios for [an earlier study](/en/blog/portfolios-invisible-to-ai/), 19 blocked GPTBot and ClaudeBot. When I opened those files, **17 of the 19 blocks had been written by Cloudflare**, not by the owner. Most of those people never decided to block AI. A dashboard setting decided for them.

## Two kinds of AI crawlers

This is the part most posts get wrong. "AI bots" aren't one thing:

| Crawler | Company | What it does |
|---|---|---|
| GPTBot | OpenAI | Collects content to **train** models |
| OAI-SearchBot | OpenAI | Indexes pages for **ChatGPT search** |
| ChatGPT-User | OpenAI | Fetches a page **when a user asks** about it |
| ClaudeBot | Anthropic | Collects content to **train** models |
| Claude-SearchBot | Anthropic | Indexes pages for **Claude search** |
| PerplexityBot | Perplexity | Indexes pages for **Perplexity answers** |
| Google-Extended | Google | Controls whether Gemini **trains** on your content (Google Search isn't affected) |

Blocking a training crawler keeps you out of future models. Blocking a search crawler keeps you out of the answers. Those are very different outcomes.

## Check 1: robots.txt (10 seconds)

Open `https://yourdomain.com/robots.txt` in your browser. If Cloudflare manages it, you'll see something like this at the top:

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

That's the training list. Search crawlers aren't in it, so with only this block, ChatGPT search and Perplexity can still read you. The `Content-signal` line says the same thing in words: search yes, training no.

If you see `Disallow: /` under `OAI-SearchBot`, `ChatGPT-User` or `PerplexityBot`, that one *is* blocking you from AI answers. Someone added it by hand or with a plugin.

## Check 2: the firewall (20 seconds)

`robots.txt` is only a request. Cloudflare also has **AI Crawl Control**, which blocks crawlers at the firewall with a `403`. That doesn't show up in `robots.txt` at all, so you have to ask as the bot:

```bash
curl -s -o /dev/null -w "%{http_code}\n" -A "OAI-SearchBot/1.0; +https://openai.com/searchbot" https://yourdomain.com/
curl -s -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0" https://yourdomain.com/
```

If the second line prints `200` and the first prints `403` (or `402`), you're blocked at the firewall. Swap in `ChatGPT-User`, `PerplexityBot` or `GPTBot` to test the others. On Windows, use `curl.exe` and `NUL` instead of `/dev/null`.

This isn't perfect. Cloudflare can also verify real bots by IP, so a fake user agent from your laptop won't always get the same answer as the real crawler. But a `403` here is a strong hint to go look at the dashboard.

## How to change it

At the time of writing, both settings live in the Cloudflare dashboard for your domain:

- **robots.txt:** go to **Security → Settings**, filter by **Bot traffic**, and open **AI Crawler and Agent access policies**. Set Training to allow (or turn off **Bot Preference Sync**) and Cloudflare stops adding its block.
- **Firewall:** go to **AI Crawl Control**. Each crawler has an **Allow** or **Block** action. Set the ones you want to Allow.

My take for a portfolio or a small business site: **allow the search crawlers**, because that's how ChatGPT, Claude and Perplexity find and recommend you. Training is a real choice, and blocking it is reasonable. Just make it on purpose.

To allow everything explicitly in a `robots.txt` you write yourself:

```txt
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: PerplexityBot
Allow: /
```

## Check it

[Run your site through the free audit](https://audit.wickz.dev/en/?utm_source=blog&utm_campaign=cloudflare-blocking-chatgpt). It reads your `robots.txt` and tells you which AI search crawlers and which training crawlers are blocked, separately, in about ten seconds and with no sign-up.
