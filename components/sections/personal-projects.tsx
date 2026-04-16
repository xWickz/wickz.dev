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
  return (
    <>
      <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        <span className="text-blue-500/90">Personal</span> Projects
      </h2>
      <div className="grid w-full gap-6 sm:grid-cols-2" id="personalprojects">
        {personalProjects.map(
          ({ id, title, description, href, demo, stack }) => (
            <Card key={id} className="h-full w-full">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>

              <CardContent>
                {href && (
                  <Button variant="outline" asChild>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Go to ${title} repository`}
                      className="mr-2"
                    >
                      Go to repo
                    </a>
                  </Button>
                )}

                <Button
                  variant={demo ? "positive" : "destructive"}
                  asChild={Boolean(demo)}
                  disabled={!demo}
                >
                  {demo ? (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View demo for ${title}`}
                    >
                      View project
                    </a>
                  ) : (
                    <span>Demo unavailable</span>
                  )}
                </Button>

                <div className="flex flex-wrap gap-2 text-xs mt-3">
                  {stack.map(({ label, Icon }) => (
                    <Badge variant="outline" key={label}>
                      {Icon && <Icon className="h-3 w-3" aria-hidden="true" />}
                      {label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ),
        )}
      </div>
    </>
  );
}
