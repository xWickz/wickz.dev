import { MoveDown } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { personalProjects } from "@/config/personalprojects";
import { Button } from "@/ui/button";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Hero() {
  const t = useTranslations("Hero");
  const q = useTranslations("PersonalProjects");
  const r = useTranslations("PersonalProjects_Data");
  const projects = personalProjects
    .map(({ id, href, demo, stack }) => ({
      demo: demo,
      github: href,
      quote: r(`${id}.description`),
      name: r(`${id}.title`),
      title: r(`${id}.title`),
      stack: stack.map(({ label }) => ({ label })),
    }))
    .slice(0, 5);
  return (
    <>
      {/* <BackgroundRippleEffect /> */}
      <div className="z-10 mt-12 relative flex w-full flex-col pb-16">
        <div className="flex flex-col">
          <div className="relative inline-block">
            <div
              className="absolute inset-0 -z-10 opacity-10 bg-[repeating-linear-gradient(-45deg,_#d4d4d8_0px,_#d4d4d8_2px,_transparent_1px,_transparent_10px)]"
              aria-hidden="true"
            ></div>
            <h1 className="pl-1 max-w-xl text-4xl sm:text-7xl font-bold tracking-tight text-black dark:text-zinc-200 hover_blink select-none">
              <span className="blink_effect">
                Santiago <span className="text-blue-500/90">Griman</span>
              </span>
            </h1>
          </div>

          <h2 className="max-w-2xl text-md text-left sm:text-lg text-zinc-600 dark:text-zinc-200 font-bold tracking-tight mt-2">
            {t("longDesc")}
          </h2>

          <div className="mt-12">
            <div className="relative block">
              <div
                className="absolute inset-0 -z-10 opacity-10 bg-[repeating-linear-gradient(-45deg,_#d4d4d8_0px,_#d4d4d8_2px,_transparent_1px,_transparent_10px)]"
                aria-hidden="true"
              ></div>

              <h2 className="pl-1 max-w-2xl text-4xl text-zinc-600 dark:text-zinc-200 font-bold tracking-tighter hover_blink select-none">
                <span className="blink_effect">{q("featured")}</span>
              </h2>
            </div>
          </div>

          <div className="mt-5 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full">
            <InfiniteMovingCards
              items={projects}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center pt-8 text-center -mx-4 sm:-mx-5 font-bold">
          <Button asChild variant="outline" size="sm">
            <Link href="#projects" className="flex items-center gap-2">
              <MoveDown className="w-4 h-4" />
              {t("CTAPrimary")}
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
