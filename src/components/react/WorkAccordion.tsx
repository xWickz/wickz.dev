"use client";

import { Lightbulb, SmilePlus, TriangleAlert } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

interface ProjectData {
  id: string;
  title: string;
}

interface Translations {
  time: string;
  problem: string;
  solution: string;
  results: string;
  CTAProblem: string;
  CTASolution: string;
  CTAResults: string;
}

export function WorkAccordion({
  project,
  translations,
}: {
  project: ProjectData;
  translations: Translations;
}) {
  return (
    <Accordion type="single" collapsible className="max-w-lg">
      <AccordionItem value="problem">
        <AccordionTrigger className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
          <TriangleAlert className="size-4" aria-hidden="true" />
          {translations.CTAProblem}
        </AccordionTrigger>
        <AccordionContent>
          <p dangerouslySetInnerHTML={{ __html: translations.problem }} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="solution">
        <AccordionTrigger className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
          <Lightbulb className="size-4" aria-hidden="true" />
          {translations.CTASolution}
        </AccordionTrigger>
        <AccordionContent>
          <p>{translations.solution}</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="results">
        <AccordionTrigger className="flex items-center gap-2 text-sky-700 dark:text-sky-300">
          <SmilePlus className="size-4" aria-hidden="true" />
          {translations.CTAResults}
        </AccordionTrigger>
        <AccordionContent>
          <p dangerouslySetInnerHTML={{ __html: translations.results }} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
