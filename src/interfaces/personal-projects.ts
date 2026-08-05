
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
  | "Apple Shortcuts"
  | "Tanstack Start"
  | "AWS Lambda"
  | "AWS DynamoDB"
  | "API Gateway";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = (props: Record<string, any>) => any;

interface StackItem {
  label: TechLabel;
  Icon?: IconComponent;
}

interface Project {
  id: string | number;
  stack: StackItem[];
  href?: string;
  demo?: string;
  newproject?: boolean;
}

export type { Project, StackItem };
