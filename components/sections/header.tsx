"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { socialMedia } from "@/config/socialMedia";
import { ModeToggle } from "@/ui/modeToggle";

const links = {
  home: "/#home",
  "personal-projects": "/#personal-projects",
  projects: "/#projects",
} as const;
export default function Header() {
  const t = useTranslations("links");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative z-4 w-7xl max-w-[100rem] px-4 py-5 dark:border-zinc-700 sm:px-5">
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="font-bold hover:underline hover:underline-offset-4 transition-all duration-500"
        >
          wickz.dev
        </a>

        <div className="hidden items-center gap-4 text-sm font-semibold sm:flex">
          {Object.entries(links).map(([name, href]) => (
            <a
              key={href}
              href={href}
              className="hover:underline hover:dark:text-zinc-100 hover:text-zinc-500 hover_blink"
            >
              <p className="blink_effect">{t(`${name}`)}</p>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            {socialMedia.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover_blink"
              >
                <Icon className="size-5 fill-zinc-600 transition-colors duration-150 dark:fill-zinc-400 dark:hover:fill-zinc-300 blink_effect" />
              </a>
            ))}
            <ModeToggle />
          </div>

          <button
            type="button"
            className="sm:hidden rounded-md border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:text-zinc-200"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-nav"
          className="mt-3 flex flex-col gap-4 rounded-md border border-zinc-200 bg-white/95 p-4 text-sm font-semibold text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
        >
          <nav className="flex flex-col gap-3">
            {Object.entries(links).map(([name, href]) => (
              <a
                key={href}
                href={href}
                className="hover:underline hover:dark:text-zinc-100 hover:text-zinc-500 hover_blink"
                onClick={() => setIsOpen(false)}
              >
                <span className="blink_effect">{t(`${name}`)}</span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socialMedia.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover_blink"
              >
                <Icon className="size-5 fill-zinc-600 transition-colors duration-150 dark:fill-zinc-400 dark:hover:fill-zinc-300 blink_effect" />
              </a>
            ))}
            <ModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
