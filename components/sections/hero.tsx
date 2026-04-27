import Link from "next/link";
import { useTranslations } from "next-intl";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <>
      <h1 className="max-w-xs text-3xl font-bold tracking-tight text-black dark:text-zinc-50 flex items-center gap-2">
        Santiago <span className="text-blue-500/90">Griman</span>
        <Badge variant="outline">{t("badge")}</Badge>
      </h1>
      <h2 className="max-w-auto text-xl font-medium tracking-tight text-black dark:text-zinc-200">
        {t("shortDesc")}
      </h2>
      <p className="max-w-2xl text-justify text-lg text-zinc-600 dark:text-zinc-400">
        {t("longDesc")}
      </p>
      <Button asChild variant="positive">
        <Link href="#projects">{t("CTAPrimary")}</Link>
      </Button>
    </>
  );
}
