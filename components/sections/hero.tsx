import Link from "next/link";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";

export default function Hero() {
  return (
    <>
      <h1 className="max-w-xs text-3xl font-bold tracking-tight text-black dark:text-zinc-50 flex items-center gap-2">
        Santiago <span className="text-blue-500/90">Griman</span>
        <Badge variant="outline">Available</Badge>
      </h1>
      <h2 className="max-w-auto text-xl font-medium tracking-tight text-black dark:text-zinc-200">
        I build fast, scalable web apps for startups and businesses.
      </h2>
      <p className="max-w-2xl text-justify text-lg text-zinc-600 dark:text-zinc-400">
        Full-stack web developer. I turn ideas into reliable, user-focused
        products with clean architecture and clear communication.
      </p>
      <Button asChild variant="positive">
        <Link href="#projects">View projects</Link>
      </Button>
    </>
  );
}
