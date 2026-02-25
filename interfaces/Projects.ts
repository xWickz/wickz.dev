import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface StackItem {
  label: string;
  Icon?: IconComponent;
}

interface Project {
  title: string;
  description: string;
  stack: StackItem[];
}

export type { Project };