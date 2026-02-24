import type { ComponentType, SVGProps } from "react";

import { GitHub } from "@/app/components/icons/GitHub";
import { JavaScript } from "@/app/components/icons/JavaScript";
import { LinkedIn } from "@/app/components/icons/LinkedIn";
import { Nextjs } from "@/app/components/icons/Nextjs";
import { Tailwind } from "@/app/components/icons/Tailwind";
import { TypeScript as TypeScriptIcon } from "@/app/components/icons/TypeScript";
import { Vite } from "@/app/components/icons/Vite";
import { Vue } from "@/app/components/icons/Vue";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface BaseLink {
  label: string;
  href: string;
}

interface SocialMedia extends BaseLink {
  Icon: IconComponent;
}

interface StackItem {
  label: string;
  Icon?: IconComponent;
}

interface Project {
  title: string;
  description: string;
  stack: StackItem[];
}

 // mudar 
const socialMedia: SocialMedia[] = [
  {
    label: "GitHub",
    href: "https://github.com/xWickz",
    Icon: GitHub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/santiago-griman/",
    Icon: LinkedIn,
  },
];
 // mudar
const projects: Project[] = [
  {
    title: "1",
    description: "11",
    stack: [
      { label: "Vite", Icon: Vite },
      { label: "Vue", Icon: Vue },
      { label: "JavaScript", Icon: JavaScript },
    ],
  },
  {
    title: "2",
    description: "22",
    stack: [
      { label: "Next.js", Icon: Nextjs },
      { label: "TypeScript", Icon: TypeScriptIcon },
      { label: "Tailwind", Icon: Tailwind },
    ],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-50 font-sans dark:bg-black">

      <header className="flex w-full max-w-5xl items-center justify-between px-6 py-6 sm:px-16">
        <a
          href="https://wickz.dev"
          className="text-lg text-zinc-600 dark:text-zinc-400 font-semibold hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          wickz.dev
        </a>

        hola
      </header>

      <main className="flex w-full max-w-5xl flex-col items-center justify-start gap-12 px-6 pb-16 sm:px-16 sm:items-start">

        <div className="flex w-full flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Santiago Griman
          </h1>

          <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Fullstack (almost) web developer from Venezuela. I like to build
            things and learn new technologies. I love UI/UX design, build
            backend and frontend applications and more things.
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            {socialMedia.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 font-semibold hover:text-zinc-700 dark:hover:text-zinc-300"
              >
                <Icon className="h-6 w-6 fill-zinc-600 transition-colors duration-150 dark:fill-zinc-400 dark:hover:fill-zinc-300" />
              </a>
            ))}
          </div>

          {/* Projects */}

          <h2 className="max-w-xs text-2xl font-semibold tracking-tighter text-black dark:text-zinc-50">
            Projects
          </h2>

          <div className="grid w-full gap-6 sm:grid-cols-2">
            {projects.map(({ title, description, stack }) => (
              <Card key={title} className="h-full w-full">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {stack.map(({ label, Icon }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1 text-zinc-600 dark:border-zinc-700 dark:text-zinc-200"
                      >
                        {Icon ? (
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        ) : null}
                        {label}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
