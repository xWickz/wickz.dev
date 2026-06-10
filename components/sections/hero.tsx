import { useTranslations } from "next-intl";
import { GitHub, XformerlyTwitter } from "@/components/icons/svgIcons";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/ui/button";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="z-10 mt-12 relative flex w-full flex-col" id="home">
      <div className="flex flex-col">
        <div className="relative inline-block">
          <div
            className="absolute inset-0 -z-10 opacity-10 bg-[repeating-linear-gradient(-45deg,#d4d4d8_0px,#d4d4d8_2px,transparent_1px,transparent_10px)]"
            aria-hidden="true"
          ></div>
          <h1 className="pl-1 max-w-xl text-4xl sm:text-7xl font-bold tracking-tight text-black dark:text-zinc-200 hover_blink select-none">
            <span className="blink_effect">
              Santiago <span className="text-blue-500/90">Griman</span>
            </span>
          </h1>
        </div>
        <h2 className="max-w-2xl text-md text-left sm:text-lg text-zinc-600 dark:text-zinc-200 font-semibold tracking-tight mt-2">
          {t.rich("longDesc", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </h2>
        <div className="mt-4 items-center justify-center flex sm:items-start sm:justify-start">
          <ButtonGroup>
            <Button variant="positive" asChild>
              <a href="mailto:wickzcs@gmail.com">{t("CTASecondary")}</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://x.com/wickzdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <XformerlyTwitter className="size-3" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/xWickz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <GitHub className="size-3" /> GitHub
              </a>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </section>
  );
}
