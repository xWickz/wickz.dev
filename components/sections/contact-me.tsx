import { useTranslations } from "next-intl";
import { Separator } from "@/ui/separator";
export default function Contact() {
  const t = useTranslations("contact-me");
  return (
    <>
      <Separator />
      <section className="flex flex-col">
        <h2 className="font-bold text-zinc-500 dark:text-zinc-500">
          {t("title")}
        </h2>
        <h1 className="max-w-lg text-4xl sm:text-7xl font-semibold tracking-tight text-zinc-600 dark:text-zinc-200 ">
          {t("message")} <br />
          <span className="text-zinc-400 dark:text-zinc-50 hover_blink hover:underline hover:underline-offset-14">
            <a href="mailto:wickzcs@gmail.com" className="blink_effect">
              wickzcs@gmail.com
            </a>
          </span>
        </h1>
      </section>
    </>
  );
}
