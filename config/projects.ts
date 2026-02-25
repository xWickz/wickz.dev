import { Project } from "@/interfaces/Projects";

import { TypeScript, JavaScript, TailwindCSS, HTML5, React, Vue, Supabase, CSS } from "@/components/icons/svgIcons";

export const projects: Project[] = [
  {
    title: "GD Search",
    description: "Search the most popular Geometry Dash Level (Just for Fun)",
    stack: [
      { label: "React", Icon: React },
      { label: "TypeScript", Icon: TypeScript },
      { label: "Tailwind CSS", Icon: TailwindCSS },
      { label: "CSS", Icon: CSS },
    ],
  },
  {
    title: "Google Translator AI",
    description: "AI-powered translation tool for Google Translate just for fun and testing with OOP concepts in JavaScript.",
    stack: [
      { label: "JavaScript", Icon: JavaScript },
      { label: "HTML", Icon: HTML5 },
      { label: "CSS", Icon: CSS   },
    ],
  },
  {
    title: "JavaScript Projects",
    description: "Some collection of personal JavaScript proyects, just for fun and learning. I made funny things like: Quiz, Podoromo, Todo List, etc.",
    stack: [
        { label: "JavaScript", Icon: JavaScript },
        { label: "Tailwind CSS", Icon: TailwindCSS },
        { label: "Vue", Icon: Vue },
        { label: "HTML", Icon: HTML5 },

    ]
  }, 
  {
    title: "Mini Forum for a Game",
    description: "A mini forum for Last War: Survival Game, this was dedicated to my alliance in the game, including features like: create posts with WYSIWYG editor, roles, etc. Such a fun project!",
    stack: [
        { label: "Vue", Icon: Vue },
        { label: "Tailwind CSS", Icon: TailwindCSS },
        { label: "JavaScript", Icon: JavaScript },
        { label: "Supabase", Icon: Supabase },
    ]
  }
];