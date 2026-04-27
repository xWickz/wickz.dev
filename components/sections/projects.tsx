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
    <>
      <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {t("title")}
      </h2>
      <div className="grid w-full gap-6 sm:grid-cols-2" id="projects">
        {Projects.map(({ id, title }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>
                <p className="font-semibold text-xs mb-1">{q(`${id}.time`)}</p>
                <p>{q(`${id}.description`)}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="max-w-lg">
                <AccordionItem value="problem">
                  <AccordionTrigger className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                    <TriangleAlert className="w-4 h-4" />
                    {t("CTAProblem")}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{q(`${id}.problem`)}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="solution">
                  <AccordionTrigger className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                    <Lightbulb className="w-4 h-4" />
                    {t("CTASolution")}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{q(`${id}.solution`)}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="results">
                  <AccordionTrigger className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
                    <SmilePlus className="w-4 h-4" />
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
    </>
  );
}
