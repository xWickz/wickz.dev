---
key: website-security
title: Is your website secure? 5 things to check
description: Five security checks any business owner can run on their website without knowing how to code, and what to do if something fails.
h1: Is your website secure? 5 things to check
published: 2026-10-04
faqs:
  - q: Can a small website be attacked too?
    a: Yes. Most attacks are automated, programs that crawl the internet looking for known flaws regardless of the size of the business.
  - q: Does the padlock in the browser mean the site is secure?
    a: It means the connection is encrypted (HTTPS), which is necessary but not enough. A site with a padlock can still have other problems, like weak passwords or outdated software.
  - q: What do I do if I think my site was hacked?
    a: Change the passwords for your hosting, domain and admin panel, tell whoever built the site and restore a clean backup. Search Console warns you if Google detects malicious content.
---

Many websites go live and nobody checks on them again. They work, they look good, and security gets left for later. The problem is that when something goes wrong, you find out late: a customer tells you your site redirects somewhere else, or Google flags it as dangerous.

You don't need to know how to code to do a basic check. These are five things you can verify yourself.

## 1. It loads over HTTPS (the padlock)

Open your site and look at the address bar. It should start with `https://` and show a padlock or settings icon, not a "Not secure" warning.

HTTPS encrypts what travels between the visitor and your site. Without it, the data in a contact form can be read along the way, and browsers warn visitors, which scares customers off.

**If it fails:** most hosting providers offer the certificate for free. Ask your provider or whoever built the site.

## 2. Who has access to your domain and hosting

List the accounts your website depends on:

- **The domain** (where you bought `yourbusiness.com`).
- **The hosting** (where the site lives).
- **The admin panel**, if your site has one.

For each one, ask yourself: is the account in **my name**? Do I know the password? Who else has it?

It's very common for the domain to be registered under the developer's name or a former employee's. If that person disappears, getting it back can be a serious problem.

**If it fails:** ask for the domain and hosting to be moved to an account you own, change the passwords and turn on two-step verification wherever you can.

## 3. Forms aren't an open door

If your site has a contact, sign-up or order form, check:

- **Are you getting spam?** If junk messages arrive every day, the form has no bot protection.
- **Does it ask only for what's needed?** The less personal data you store, the lower the risk if something leaks.
- **Where does the data go?** You should know whether it's saved in a database, sent to an email or both.

**If it fails:** a form can be protected with validation and an anti-spam system. It's a small fix for whoever maintains the site.

## 4. The software is up to date

If your site runs on WordPress or another system with plugins, every outdated plugin is a possible way in. Automated attacks look for exactly that: old versions with known flaws.

**What to check:** log in to the admin panel and see whether there are pending updates. Uninstall any plugins you don't use.

Static sites, which have no admin panel or exposed database, have far less to update. That's why they're often a good choice for landing pages and catalogs.

## 5. There's a backup

Ask your hosting provider or whoever maintains your site: **if the site gets deleted tomorrow, how do we get it back?**

The answer should include where the backup is, how often it's made and how long it takes to restore. If nobody can answer, there's no backup.

**If it fails:** many hosting providers make automatic backups, you just have to turn them on. If your site lives in a code repository, the repository itself is already a copy of the site.

## Quick checklist

- [ ] The site loads with `https://` and no warnings.
- [ ] The domain and hosting are in my name and I know the passwords.
- [ ] Those accounts have two-step verification.
- [ ] Forms don't get spam and only ask for what's needed.
- [ ] There are no pending updates or unused plugins.
- [ ] I know where the backup is and how to restore it.

If any box is left unchecked and you don't know how to fix it, [email me](mailto:hi@wickz.dev) and we'll go over it. If you're about to build a new site, [web development](/en/services/full-stack-web-development/) explains how I work.
