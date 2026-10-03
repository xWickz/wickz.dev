import type { Project } from "@/interfaces/projects";

export const Projects: readonly Project[] = [
  {
    id: "good-life-insurance",
    title: "Good Life Insurance",
    stats: [
      { value: "+50%", key: "clients" },
      { value: "+40%", key: "growth" },
    ],
  },
] as const;
