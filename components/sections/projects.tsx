import { Lightbulb, SmilePlus, TriangleAlert } from "lucide-react";
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
  return (
    <>
      <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Projects
      </h2>
      <div className="grid w-full gap-6 sm:grid-cols-2" id="projects">
        {Projects.map(
          ({ title, time, description, problem, solution, results }) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                  <p className="font-semibold text-xs mb-1">{time}</p>
                  <p>{description}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="max-w-lg">
                  <AccordionItem value="problem">
                    <AccordionTrigger className="flex items-center gap-2">
                      <TriangleAlert className="w-4 h-4" />
                      Problem
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{problem}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="solution">
                    <AccordionTrigger className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Solution
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{solution}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="results">
                    <AccordionTrigger className="flex items-center gap-2">
                      <SmilePlus className="w-4 h-4" />
                      Results
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{results}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ),
        )}
      </div>
    </>
  );
}
