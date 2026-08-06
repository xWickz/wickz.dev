"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

const localeCookieName = "MY_LOCALE";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const toggleLanguage = (newLocale: string) => {
    document.cookie = `${localeCookieName}=${newLocale}; path=/; max-age=${365 * 24 * 60 * 60}`;
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-sans">
        <DropdownMenuItem
          onClick={() => toggleLanguage("en")}
          className={locale === "en" ? "underline underline-offset-4" : ""}
          aria-pressed={locale === "en"}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => toggleLanguage("es")}
          className={locale === "es" ? "underline underline-offset-4" : ""}
          aria-pressed={locale === "es"}
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
