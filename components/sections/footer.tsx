import { Badge } from "@/ui/badge";
export default function Footer() {
  return (
    <footer className="relative z-10 flex w-full max-w-5xl items-center justify-between px-6 py-6 sm:px-16 text-zinc-600 dark:text-zinc-400">
      <p>Santiago Griman - 2026</p>
      <Badge variant="outline">wickzcs@gmail.com</Badge>
    </footer>
  );
}
