import { SquareArrowOutUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { GitHub } from "@/components/icons/svgIcons";
import { personalProjects } from "@/config/personalprojects";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";

export default function PersonalProjects() {
  const t = useTranslations("PersonalProjects");
  const q = useTranslations("PersonalProjects_Data");
  return (
    <section className="flex w-full flex-col gap-6 mb-12">
      <div className="mt-12">
        <div className="relative block">
          <div
            className="absolute inset-0 -z-10 opacity-10 bg-[repeating-linear-gradient(-45deg,_#d4d4d8_0px,_#d4d4d8_2px,_transparent_1px,_transparent_10px)]"
            aria-hidden="true"
          ></div>

          <h2 className="pl-1 max-w-2xl text-4xl text-zinc-600 dark:text-zinc-200 font-bold tracking-tighter hover_blink select-none">
            <span className="blink_effect">
              <span className="text-blue-500/90">{t("title1")}</span>{" "}
              {t("title2")}
            </span>
          </h2>
        </div>
      </div>
      <div className="grid w-full gap-3 sm:grid-cols-1" id="personalprojects">
        {personalProjects.map(({ id, href, demo, stack }) => (
          <Card key={id} className="h-fit w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 w-full justify-center">
                <span className="pr-1 text-sm">{q(`${id}.title`)}</span>
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
    </section>
  );
}

/* 
            <Card key={id} className="flex flex-col h-full w-full">
              <CardHeader>
                <CardTitle>{q(`${id}.title`)}</CardTitle>
                <CardDescription>{q(`${id}.description`)}</CardDescription>
              </CardHeader>

              <CardContent className="flex grow flex-col justify-end space-y-4">
                <div className="flex flex-wrap gap-2 mt-auto">
                  {href && (
                    <Button variant="outline" asChild>
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {t("CTARepo")}
                      </a>
                    </Button>
                  )}

                  <Button
                    variant={demo ? "positive" : "destructive"}
                    asChild={Boolean(demo)}
                    disabled={!demo}
                  >
                    {demo ? (
                      <a href={demo} target="_blank" rel="noopener noreferrer">
                        {t("CTADemo")}
                      </a>
                    ) : (
                      <span>{t("CTANoDemo")}</span>
                    )}
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  {stack.map(({ label, Icon }) => (
                    <Badge variant="outline" key={label}>
                      {Icon && <Icon className="h-3 w-3" aria-hidden="true" />}
                      {label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

*/
