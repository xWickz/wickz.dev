import { CarouselOrientation } from "@/components/ui/carousel-orientation";
import { projects } from "@/config/projects";
// Interfaces
import { socialMedia } from "@/config/socialMedia";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import { ButtonGroup } from "@/ui/button-group";
// Shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import { ModeToggle } from "@/ui/modeToggle";
import { Separator } from "@/ui/separator";

const randomRes: string[] = [
  "I am working in this! Be pacient.",
  "Is this supposed to be working?",
  "Working on this, but it's a bit tricky. Stay tuned!",
  "This feature is in the works, but it's taking a bit longer than expected. Thanks for your patience!",
  "Oops... This may not be available yet!",
  "Wait, am I supposed to have this working? I'm on it!",
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      <header className="relative z-10 flex w-full max-w-5xl items-center justify-between px-6 py-6 sm:px-16">
        <a href="https://wickz.dev" target="_blank" rel="noopener noreferrer">
          wickz.dev
        </a>

        <div className="flex items-center gap-4">
          {socialMedia.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-6 w-6 fill-zinc-600 transition-colors duration-150 dark:fill-zinc-400 dark:hover:fill-zinc-300" />
            </a>
          ))}
          <ModeToggle />
        </div>
      </header>
      <main className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-start gap-12 px-6 pb-16 sm:px-16 sm:items-start">
        <div className="flex w-full flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-bold tracking-tight text-black dark:text-zinc-50 flex items-center gap-2">
            Santiago Griman <Badge variant="outline">Disponible</Badge>
          </h1>
          <h2 className="max-w-auto text-xl font-medium tracking-tight text-black dark:text-zinc-200">
            I build fast, scalable web apps for startups and small businesses.
          </h2>
          <p className="max-w-2xl text-justify text-lg text-zinc-600 dark:text-zinc-400">
            Full-stack web developer. I turn ideas into reliable, user-focused
            products with clean architecture and clear communication.
          </p>
          <ButtonGroup>
            <Button asChild variant="outline">
              <a href="#projects">View projects</a>
            </Button>
            <Button variant="positive" disabled={true}>
              <a href="#projects">Contact me</a>
            </Button>
          </ButtonGroup>
          {/* Projects */}
          <Separator />
          <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Projects
          </h2>
          <div className="grid w-full gap-6 sm:grid-cols-2" id="projects">
            {projects.map(({ title, description, href, demo, stack }) => (
              <Card key={title} className="h-full w-full">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {href && (
                    <Button variant="outline" asChild>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Go to ${title} repository`}
                      >
                        Go to repo
                      </a>
                    </Button>
                  )}
                  <Button
                    variant={demo ? "positive" : "destructive"}
                    asChild={Boolean(demo)}
                    className="ml-2"
                    disabled={!demo}
                  >
                    {demo ? (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View demo for ${title}`}
                      >
                        View project
                      </a>
                    ) : (
                      <span>Demo unavailable</span>
                    )}
                  </Button>
                  <div className="flex flex-wrap gap-2 text-xs mt-3">
                    {stack.map(({ label, Icon }) => (
                      <Badge variant="outline" key={label}>
                        {Icon && (
                          <Icon className="h-3 w-3" aria-hidden="true" />
                        )}
                        {label}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services */}
          <Separator />
          <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Services
          </h2>
          <div className="justify-center w-full gap-6 sm:flex my-15">
            <CarouselOrientation />
          </div>
          {/* Contact Me */}
          <Separator />
          <h2 className="max-w-xs text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Contact Me
          </h2>
          <p className="text-black dark:text-zinc-500">
            {randomRes[Math.floor(Math.random() * randomRes.length)]}
          </p>
          <Separator />
        </div>
      </main>

      <footer className="relative z-10 flex w-full max-w-5xl items-center justify-between px-6 py-6 sm:px-16 text-zinc-600 dark:text-zinc-400">
        <p>Santiago Griman - 2026</p>
        <Badge variant="outline">wickzcs@gmail.com</Badge>
      </footer>
    </div>
  );
}
