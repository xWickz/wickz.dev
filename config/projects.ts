import {
  CSS,
  HTML5,
  JavaScript,
  React,
  Supabase,
  TailwindCSS,
  TypeScript,
  Vue,
} from "@/components/icons/svgIcons";
import type { Project } from "@/interfaces/Projects";

export const projects: Project[] = [
  {
    title: "GD Search",
    description: "🔺 Search the most popular Geometry-Dash Level.",
    href: "https://github.com/xWickz/gd-search",
    stack: [
      { label: "React", Icon: React },
      { label: "TypeScript", Icon: TypeScript },
      { label: "Tailwind", Icon: TailwindCSS },
    ],
  },
  {
    title: "Google Translator AI",
    description: "🤖 Simple project using AI-Powered Google Translator.",
    href: "https://github.com/xWickz/google-translator-ai",
    stack: [
      { label: "JavaScript", Icon: JavaScript },
      { label: "HTML", Icon: HTML5 },
      { label: "CSS", Icon: CSS },
    ],
  },
  {
    title: "JavaScript Projects",
    description: "📂 Collection of personal JavaScript Projects.",
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
    title: "Mini Forum for a Game",
    description: "🎮 A mini forum for a game using Vue and Supabase.",
    href: "https://github.com/xWickz/5dg-rott",
    demo: "https://rott-guides.vercel.app/",
    stack: [
      { label: "Vue", Icon: Vue },
      { label: "Tailwind", Icon: TailwindCSS },
      { label: "JavaScript", Icon: JavaScript },
      { label: "Supabase", Icon: Supabase },
    ],
  },
];
