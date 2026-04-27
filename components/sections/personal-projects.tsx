import { useTranslations } from "next-intl";
import { personalProjects } from "@/config/personalprojects";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
export default function PersonalProjects() {
  const t = useTranslations("PersonalProjects");
  const q = useTranslations("PersonalProjects_Data");
  return (
    <section className="flex w-full flex-col gap-6">
      <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        <span className="text-blue-500/90">{t("title1")}</span> {t("title2")}
      </h2>
      <div className="grid w-full gap-8 sm:grid-cols-2" id="personalprojects">
        {personalProjects.map(({ id, href, demo, stack }) => (
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
        ))}
      </div>
    </section>
  );
}
