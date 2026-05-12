import { socialMedia } from "@/config/socialMedia";
import { ModeToggle } from "@/ui/modeToggle";

export default function Header() {
  return (
    <header className="relative z-4 flex w-full items-center justify-between px-4 py-1 sm:px-5 border-b border-zinc-200 dark:border-zinc-700 ">
      <a
        href="https://wickz.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold hover:underline hover:underline-offset-4 transition-all duration-500"
      >
        wickz.dev
      </a>

      <div className="flex items-center gap-4">
        {socialMedia.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-5 w-5 fill-zinc-600 transition-colors duration-150 dark:fill-zinc-400 dark:hover:fill-zinc-300" />
          </a>
        ))}
        <ModeToggle />
      </div>
    </header>
  );
}
