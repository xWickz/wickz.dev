import type { ReactNode } from "react";

interface Project {
  id: string;
  title: string;
}

interface Details extends Project {
  time: string;
  description: ReactNode;
  problem: ReactNode;
  solution: ReactNode;
  results: ReactNode;
}

export type { Project, Details };
