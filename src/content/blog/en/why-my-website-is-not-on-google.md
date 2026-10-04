---
key: google-indexing
title: Why isn't my website showing up on Google?
description: The most common reasons a website doesn't show up on Google and what to do about each one, explained without jargon.
h1: Why isn't my website showing up on Google?
published: 2026-10-04
faqs:
  - q: How long does Google take to show a new page?
    a: It depends on the site, but anywhere from a few days to a few weeks is normal. Adding your site to Google Search Console and submitting the sitemap helps Google find it sooner.
  - q: Do I have to pay Google to show up?
    a: No. Regular (organic) results are free. What you pay for are Google Ads, which are labeled "Sponsored".
  - q: I search for my business and it doesn't show up. What do I do first?
    a: Search Google for "site:yourdomain.com". If nothing comes up, Google doesn't have your site in its index yet, and the first step is adding it to Search Console.
---

Having a website doesn't mean Google will show it. To appear in the results, Google has to **find** your page, **understand** what it's about and **consider it useful** for what people are searching. If any of those three steps fails, your site won't show up.

These are the most common reasons and what to do about each one.

## First: check whether Google knows your site

Search Google for `site:yourdomain.com` (with your real domain). The result tells you where you stand:

- **Nothing shows up:** Google hasn't indexed your site yet. Go to reason 1.
- **It shows up, but not when you search for what you offer:** Google knows you but doesn't see you as relevant for that search. See reasons 3 to 6.

## 1. Google hasn't found it yet

New pages don't show up instantly. Google discovers sites by following links and reading sitemaps, and that takes time.

**What to do:** add your site to [Google Search Console](https://search.google.com/search-console), which is free. From there you submit your sitemap (the list of pages on your site) and can ask Google to check a specific page.

## 2. The page tells Google not to show it

Sometimes the site itself blocks Google without the owner knowing. It happens a lot when the site was built in a test environment and went live with that setting:

- A `noindex` tag, which asks Google not to show the page.
- A `robots.txt` file that blocks search engines.

**What to do:** in Search Console, the "URL Inspection" tool tells you whether the page can be indexed and, if not, why.

## 3. It doesn't clearly say what you offer or where

Google reads the text on your page. If your homepage only says "Welcome" and "Quality and commitment", it has no way of knowing you sell phone parts in your city.

**What to do:** make the page title, the main heading and the first paragraphs say in plain words what you do, who it's for and in which city or country. Write it the way your customer would search for it.

## 4. Everything is on one page

If you offer three services and summarize them in one section of your homepage, you're competing with a single page for three different searches. It's hard to win all of them.

**What to do:** give each important service its own page, with an explanation, frequently asked questions and a way to contact you.

## 5. It's slow or looks bad on phones

Most searches happen on phones, and Google takes that into account. A page that loads slowly or makes people zoom in gives a bad experience and loses visitors even when it shows up.

**What to do:** run your site through [PageSpeed Insights](https://pagespeed.web.dev/), which is free and tells you what's slowing it down. The usual culprit is images that are too heavy.

## 6. Nobody mentions it

Google trusts pages that other sites link to. A brand-new site with no mentions starts at a disadvantage.

**What to do:** put your website link in your Instagram profile, your WhatsApp Business profile and your **Google Business Profile** (the listing that shows up on Google Maps). If a supplier, customer or local directory can link to you, even better.

## Summary

| Symptom | Likely cause | Fix |
|---|---|---|
| `site:` shows nothing | Google hasn't indexed it | Search Console + sitemap |
| Search Console says "excluded by noindex" | The site blocks Google | Remove `noindex` |
| Shows up for your name but not your service | It doesn't explain what you offer | Clear copy and one page per service |
| Shows up but nobody clicks | Slow or weak title | Improve speed and titles |

If your site isn't showing up and you don't know where to start, [email me](mailto:hi@wickz.dev) and I'll take a look. And if you're about to build a new one, my [web development](/en/services/full-stack-web-development/) and [landing pages](/en/services/landing-pages/) work ships with this solved from day one: indexable, fast and with copy that explains what you do.
