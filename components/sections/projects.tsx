import { Lightbulb, SmilePlus, TriangleAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import { Projects } from "@/config/projects";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
export default function WorkProjects() {
  const t = useTranslations("Projects");
  const q = useTranslations("Projects_Data");
  return (
    <section className="flex w-full flex-col gap-6 mb-12">
      <div className="mt-12">
        <div className="relative block">
          <div
            className="absolute inset-0 -z-10 opacity-10 bg-[repeating-linear-gradient(-45deg,_#d4d4d8_0px,_#d4d4d8_2px,_transparent_1px,_transparent_10px)]"
            aria-hidden="true"
          ></div>

          <h2 className="pl-1 max-w-2xl text-4xl text-zinc-600 dark:text-zinc-200 font-bold tracking-tighter hover_blink select-none">
            <span className="blink_effect">{t("title")}</span>
          </h2>
        </div>
      </div>
      <div className="grid w-full gap-8 sm:grid-cols-2" id="projects">
        {Projects.map(({ id, title }) => (
          <Card key={title} className="max-w-lg">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>
                <p className="font-semibold text-xs">{q(`${id}.time`)}</p>
                {/* <p>{q(`${id}.description`)}</p> */}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="max-w-lg">
                <AccordionItem value="problem">
                  <AccordionTrigger className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                    <TriangleAlert className="size-4" />
                    {t("CTAProblem")}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{q(`${id}.problem`)}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="solution">
                  <AccordionTrigger className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                    <Lightbulb className="size-4" />
                    {t("CTASolution")}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{q(`${id}.solution`)}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="results">
                  <AccordionTrigger className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
                    <SmilePlus className="size-4" />
                    {t("CTAResults")}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      {q.rich(`${id}.results`, {
                        strong: (chunks) => <strong>{chunks}</strong>,
                        br: () => <br />,
                      })}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
