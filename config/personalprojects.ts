import {
  Apple,
  CSS,
  HTML5,
  JavaScript,
  Nextjs,
  React,
  Supabase,
  TailwindCSS,
  TypeScript,
  Vue,
} from "@/components/icons/svgIcons";
import type { Project } from "@/interfaces/PersonalProjects";

export const personalProjects: Project[] = [
  {
    id: "case-shell",
    href: "https://github.com/xWickz/CaseShell-Hackaton",
    demo: "https://caseshell.wickz.dev",
    stack: [
      { label: "Next.js", Icon: Nextjs },
      { label: "Tailwind", Icon: TailwindCSS },
      { label: "TypeScript", Icon: TypeScript },
    ],
  },
  {
    id: "collections-dev",
    demo: "https://collections-dev.vercel.app/",
    href: "https://github.com/xWickz/collections.dev",
    stack: [
      { label: "Next.js", Icon: Nextjs },
      { label: "Tailwind", Icon: TailwindCSS },
      { label: "TypeScript", Icon: TypeScript },
    ],
  },
  {
    id: "notidev",
    demo: "https://notidev.vercel.app",
    href: "",
    stack: [
      { label: "Tanstack Start", Icon: React },
      { label: "Tailwind", Icon: TailwindCSS },
      { label: "TypeScript", Icon: TypeScript },
    ],
  },
  {
    id: "javascript-projects",
    href: "https://github.com/xWickz/proyectos-javascript",
    demo: "https://proyectosjs-wickz.netlify.app/",
    stack: [
      { label: "JavaScript", Icon: JavaScript },
      { label: "Tailwind", Icon: TailwindCSS },
      { label: "Vue", Icon: Vue },
      { label: "HTML", Icon: HTML5 },
    ],
  },
  {
    id: "google-translator-ai",
    href: "https://github.com/xWickz/google-translator-ai",
    stack: [
      { label: "JavaScript", Icon: JavaScript },
      { label: "HTML", Icon: HTML5 },
      { label: "CSS", Icon: CSS },
    ],
  },
  {
    id: "bcv-rate-shortcut",
    demo: "https://www.icloud.com/shortcuts/2a0b8f581a1f42eebe6bdd16c4f737f8",
    stack: [{ label: "Apple Shortcuts", Icon: Apple }],
  },
  {
    id: "mini-forum-game",
    href: "https://github.com/xWickz/5dg-rott",
    demo: "https://rott-guides.vercel.app/",
    stack: [
      { label: "Vue", Icon: Vue },
      { label: "Tailwind", Icon: TailwindCSS },
      { label: "JavaScript", Icon: JavaScript },
      { label: "Supabase", Icon: Supabase },
    ],
  },
  {
    id: "gd-search",
    href: "https://github.com/xWickz/gd-search",
    stack: [
      { label: "React", Icon: React },
      { label: "TypeScript", Icon: TypeScript },
      { label: "Tailwind", Icon: TailwindCSS },
    ],
  },
];
