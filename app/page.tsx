import type { ComponentType, SVGProps } from "react";

import { GitHub } from "@/app/components/GitHub";
import { LinkedIn } from "@/app/components/LinkedIn";

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

interface Project {
  title: string;
  description: string;
  cta: string;
}

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

const projects: Project[] = [
  {
    title: "Proyecto Uno",
    description: "Descripción breve del proyecto o stack usado.",
    cta: "Ver más",
  },
  {
    title: "Proyecto Dos",
    description: "Otra descripción para completar la segunda tarjeta.",
    cta: "Ver más",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-start gap-12 py-16 px-16 sm:items-start">
        <a
          href="https://wickz.dev"
          className="text-lg text-zinc-600 dark:text-zinc-400 font-semibold hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          wickz.dev
        </a>
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-0.5 tracking-tight text-black dark:text-zinc-50">
            Santiago Griman
          </h1>

          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
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
          <div className="grid w-full gap-6 sm:grid-cols-2">
            {projects.map(({ title, description, cta }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <button className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-900">
                    {cta}
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
