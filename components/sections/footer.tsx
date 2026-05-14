import { useTranslations } from "next-intl";
import { Separator } from "@/ui/separator";

const links = {
  home: "/#home",
  "personal-projects": "/#personal-projects",
  projects: "/#projects",
} as const;

const socialLinks = [
  { label: "X", href: "https://x.com/wickzdev" },
  { label: "GitHub", href: "https://github.com/xWickz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/santiago-griman/" },
] as const;

export default function Footer() {
  const t = useTranslations("links");
  return (
    <>
      {/* ↓ I made this because footer is outside the children page.tsx */}

      <div className="px-5 w-full">
        <Separator />
      </div>
      <footer className="relative z-4 flex w-full items-end justify-between px-4 pb-3 pt-12 mt-12 sm:px-5 border-zinc-200 dark:border-zinc-700 ">
        <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-200 font-semibold text-sm">
          {socialLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener"
              className="hover:underline hover:dark:text-zinc-100 hover:text-zinc-500"
            >
              {label}
            </a>
          ))}
        </div>
        <span className="font-bold text-zinc-600 dark:text-zinc-200 flex flex-col tracking-tight text-lg">
          {Object.entries(links).map(([name, href]) => (
            <a
              key={href}
              href={href}
              className="hover:underline hover:dark:text-zinc-100 hover:text-zinc-500"
            >
              {t(`${name}`)}
            </a>
          ))}
        </span>
      </footer>
    </>
  );
}
