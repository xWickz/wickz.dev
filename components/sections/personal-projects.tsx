"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { GitHub } from "@/components/icons/svgIcons";
import { personalProjects } from "@/config/personalprojects";
import FeaturedProject from "@/sections/featured-projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Separator } from "@/ui/separator";

export default function PersonalProjects() {
  const t = useTranslations("PersonalProjects");
  const q = useTranslations("PersonalProjects_Data");
  const compactProjects = personalProjects.slice(2);

  return (
    <section className="flex w-full flex-col gap-6" id="personal-projects">
      <div className="mt-12">
        <div className="relative block">
          <div
            className="absolute inset-0 -z-10 opacity-10 bg-[repeating-linear-gradient(-45deg,#d4d4d8_0px,#d4d4d8_2px,transparent_1px,transparent_10px)]"
            aria-hidden="true"
          ></div>

          <h2 className="pl-1 max-w-2xl text-4xl text-zinc-600 dark:text-zinc-200 font-bold tracking-tighter hover_blink select-none">
            <span className="blink_effect">{t("title")}</span>
          </h2>
        </div>
      </div>

      <Separator />

      <h2 className="max-w-2xl text-3xl text-zinc-600 dark:text-zinc-200 font-bold tracking-tighter hover_blink select-none">
        <span className="blink_effect">{t("featured")}</span>
      </h2>

      <div className="flex flex-col gap-6" id="personalprojects">
        <FeaturedProject />
        <div className="grid w-full gap-3 sm:grid-cols-1">
          {compactProjects.map(({ id, newproject, href, demo, stack }) => (
            <Card key={id} className="h-fit w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 w-full justify-center">
                  <span className="pr-1 text-sm">{q(`${id}.title`)}</span>
                  {newproject && (
                    <span className="bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold px-1.5 py-0.5 rounded inline-block text-xs">
                      {t("new")}
                    </span>
                  )}
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener"
                      className="hover_blink"
                    >
                      <SquareArrowOutUpRight className="w-4 h-4 text-zinc-500 blink_effect" />
                    </a>
                  )}

                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener"
                      className="hover_blink"
                    >
                      <GitHub className="w-4 h-4 text-zinc-500 blink_effect" />
                    </a>
                  )}
                  <span className="pl-1 text-zinc-600 text-sm hidden sm:block">
                    {q(`${id}.description`)}
                  </span>
                  <div className="ml-auto hidden sm:block">
                    {stack.map(({ label, Icon }) => (
                      <span
                        key={label}
                        className="hover:grayscale-0 grayscale transition-all duration-150 inline-flex items-center p-1"
                      >
                        {Icon && <Icon className="size-4" aria-hidden="true" />}
                      </span>
                    ))}
                  </div>
                </CardTitle>
                <CardDescription className="sm:hidden block">
                  {q(`${id}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent className="sm:hidden block">
                <div className="ml-auto block sm:hidden">
                  {stack.map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="hover:grayscale-0 grayscale transition-all duration-150 inline-flex items-center p-1"
                    >
                      {Icon && <Icon className="size-4" aria-hidden="true" />}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
