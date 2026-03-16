import type { ReactNode } from "react";

interface Project {
  title: string;
  time: string;
  description: ReactNode;
  problem: ReactNode;
  solution: ReactNode;
  results: ReactNode;
}

export type { Project };
