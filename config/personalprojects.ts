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
import type { Project } from "@/interfaces/PersonalProjects";

export const personalProjects: Project[] = [
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
  {
    title: "BCV: Current Rate",
    description:
      "💸 A simple shortcut app to check the current exchange rate of BCV (Banco Central de Venezuela).",
    demo: "https://www.icloud.com/shortcuts/2a0b8f581a1f42eebe6bdd16c4f737f8",
    stack: [{ label: "API", Icon: undefined }],
  },
];
