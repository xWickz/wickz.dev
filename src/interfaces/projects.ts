import type { ReactNode } from "react";

interface ProjectStat {
  value: string;
  key: string;
}

interface Project {
  id: string;
  title: string;
  stats?: ProjectStat[];
}

interface Details extends Project {
  time: string;
  description: ReactNode;
  problem: ReactNode;
  solution: ReactNode;
  results: ReactNode;
}

export type { Project, ProjectStat, Details };
