import type { ComponentType, SVGProps } from "react";

type TechLabel =
  | "React"
  | "Next.js"
  | "TypeScript"
  | "JavaScript"
  | "Tailwind"
  | "Vue"
  | "Supabase"
  | "HTML"
  | "CSS"
  | "API"
  | "Apple Shortcuts";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface StackItem {
  label: TechLabel;
  Icon?: IconComponent;
}

interface Project {
  id: string | number;
  /* title: string;
  description: string; */
  stack: StackItem[];
  href?: string;
  demo?: string;
}

export type { Project, StackItem };
