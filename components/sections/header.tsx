import { socialMedia } from "@/config/socialMedia";
import { ModeToggle } from "@/ui/modeToggle";

export default function Header() {
  return (
    <header className="relative z-10 flex w-full max-w-5xl items-center justify-between px-6 py-6 sm:px-16">
      <a href="https://wickz.dev" target="_blank" rel="noopener noreferrer">
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
            <Icon className="h-6 w-6 fill-zinc-600 transition-colors duration-150 dark:fill-zinc-400 dark:hover:fill-zinc-300" />
          </a>
        ))}
        <ModeToggle />
      </div>
    </header>
  );
}
