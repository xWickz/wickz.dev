import { Badge } from "@/ui/badge";
export default function Footer() {
  return (
    <footer className="relative z-4 flex w-full items-center justify-between px-4 py-1 sm:px-5 border-t border-zinc-200 dark:border-zinc-700">
      <p className="font-semibold text-zinc-200">Santiago Griman</p>
      <Badge variant="outline">wickzcs@gmail.com</Badge>
    </footer>
  );
}
