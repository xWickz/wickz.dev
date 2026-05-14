"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { GitHub } from "@/components/icons/svgIcons";
import { personalProjects } from "@/config/personalprojects";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Separator } from "@/ui/separator";

export default function PersonalProjects() {
  const t = useTranslations("PersonalProjects");
  const q = useTranslations("PersonalProjects_Data");
  const [activeMediaId, setActiveMediaId] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const featuredProjects = personalProjects.slice(0, 2);
  const compactProjects = personalProjects.slice(2);
  const featuredMedia = {
    "case-shell": {
      imageSrc: "/featured-projects/caseshell-banner.webp",
      videoSrc: "/featured-projects/caseshell-demo.mp4",
      alt: "Vista previa del proyecto CaseShell",
    },
    "collections-dev": {
      imageSrc: "/featured-projects/collections-banner-01.webp",
      videoSrc: "/featured-projects/collections-demo.mp4",
      alt: "Vista previa del proyecto Collections",
    },
  } as const;

  const stopVideo = (id: string | null) => {
    if (!id) {
      return;
    }

    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const startVideo = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      void video.play();
    }
  };
  return (
    <section className="flex w-full flex-col gap-6" id="personal-projects">
      <div className="mt-12">
        <div className="relative block">
          <div
            className="absolute inset-0 -z-10 opacity-10 bg-[repeating-linear-gradient(-45deg,#d4d4d8_0px,#d4d4d8_2px,transparent_1px,transparent_10px)]"
            aria-hidden="true"
          ></div>

          <h2 className="pl-1 max-w-2xl text-4xl text-zinc-600 dark:text-zinc-200 font-bold tracking-tighter hover_blink select-none">
            <span className="blink_effect">{t("title")}</span>
          </h2>
        </div>
      </div>

      <Separator />

      <h2 className="max-w-2xl text-3xl text-zinc-600 dark:text-zinc-200 font-bold tracking-tighter hover_blink select-none">
        <span className="blink_effect">{t("featured")}</span>
      </h2>

      <div className="flex flex-col gap-6" id="personalprojects">
        <div className="grid w-full gap-6">
          {featuredProjects.map(({ id, href, demo }) => {
            const media =
              featuredMedia[id as keyof typeof featuredMedia] ??
              ({
                imageSrc:
                  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
                videoSrc:
                  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                alt: "Vista previa del proyecto personal",
              } as const);
            const isActive = activeMediaId === id;

            return (
              <div key={id} className="overflow-hidden">
                <div className="pl-4 border-t p-4">
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
                    <button
                      type="button"
                      className="group relative aspect-video w-full overflow-hidden bg-zinc-100/70 text-left dark:bg-zinc-900"
                      data-active={isActive ? "true" : "false"}
                      aria-pressed={isActive}
                      aria-label={`Reproducir vista previa de ${q(`${id}.title`)}`}
                      onPointerEnter={(event) => {
                        if (event.pointerType !== "mouse") {
                          return;
                        }

                        if (activeMediaId && activeMediaId !== id) {
                          stopVideo(activeMediaId);
                        }
                        setActiveMediaId(String(id));
                        startVideo(String(id));
                      }}
                      onClick={() =>
                        setActiveMediaId((current) => {
                          if (current === String(id)) {
                            stopVideo(String(id));
                            return null;
                          }

                          if (current) {
                            stopVideo(current);
                          }

                          startVideo(String(id));
                          return String(id);
                        })
                      }
                      onPointerLeave={(event) => {
                        if (event.pointerType !== "mouse") {
                          return;
                        }

                        stopVideo(String(id));
                        setActiveMediaId(null);
                      }}
                    >
                      <Image
                        src={media.imageSrc}
                        alt={media.alt}
                        width={640}
                        height={360}
                        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0 group-data-[active=true]:opacity-0"
                        loading="lazy"
                      />
                      <video
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-data-[active=true]:opacity-100"
                        src={media.videoSrc}
                        muted
                        playsInline
                        preload="metadata"
                        ref={(node) => {
                          videoRefs.current[String(id)] = node;
                        }}
                      />
                    </button>
                    <div className="flex flex-col gap-2 p-0 items-center text-center sm:items-start sm:text-left">
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tighter text-center sm:text-left">
                          {q(`${id}.title`)}
                        </h2>
                        {demo && (
                          <a
                            href={demo}
                            target="_blank"
                            rel="noopener"
                            className="hover_blink"
                          >
                            <SquareArrowOutUpRight className="size-4 text-zinc-500 blink_effect" />
                          </a>
                        )}
                        {href && (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener"
                            className="hover_blink"
                          >
                            <GitHub className="size-4 text-zinc-500 blink_effect" />
                          </a>
                        )}
                      </div>
                      <p className="text-lg text-zinc-600 dark:text-zinc-300 font-semibold tracking-tighter">
                        {q(`${id}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="max-w-2xl text-3xl text-zinc-600 dark:text-zinc-200 font-bold tracking-tighter hover_blink select-none">
          <span className="blink_effect">{t("subtitle")}</span>
        </h2>
        <div className="grid w-full gap-3 sm:grid-cols-1">
          {compactProjects.map(({ id, href, demo, stack }) => (
            <Card key={id} className="h-fit w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 w-full justify-center">
                  <span className="pr-1 text-sm">{q(`${id}.title`)}</span>
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener"
                      className="hover_blink"
                    >
                      <SquareArrowOutUpRight className="w-4 h-4 text-zinc-500 blink_effect" />
                    </a>
                  )}

                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener"
                      className="hover_blink"
                    >
                      <GitHub className="w-4 h-4 text-zinc-500 blink_effect" />
                    </a>
                  )}
                  <span className="pl-1 text-zinc-600 text-sm hidden sm:block">
                    {q(`${id}.description`)}
                  </span>
                  <div className="ml-auto hidden sm:block">
                    {stack.map(({ label, Icon }) => (
                      <span
                        key={label}
                        className="hover:grayscale-0 grayscale transition-all duration-150 inline-flex items-center p-1"
                      >
                        {Icon && <Icon className="size-4" aria-hidden="true" />}
                      </span>
                    ))}
                  </div>
                </CardTitle>
                <CardDescription className="sm:hidden block">
                  {q(`${id}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent className="sm:hidden block">
                <div className="ml-auto block sm:hidden">
                  {stack.map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="hover:grayscale-0 grayscale transition-all duration-150 inline-flex items-center p-1"
                    >
                      {Icon && <Icon className="size-4" aria-hidden="true" />}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 
            <Card key={id} className="flex flex-col h-full w-full">
              <CardHeader>
                <CardTitle>{q(`${id}.title`)}</CardTitle>
                <CardDescription>{q(`${id}.description`)}</CardDescription>
              </CardHeader>

              <CardContent className="flex grow flex-col justify-end space-y-4">
                <div className="flex flex-wrap gap-2 mt-auto">
                  {href && (
                    <Button variant="outline" asChild>
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {t("CTARepo")}
                      </a>
                    </Button>
                  )}

                  <Button
                    variant={demo ? "positive" : "destructive"}
                    asChild={Boolean(demo)}
                    disabled={!demo}
                  >
                    {demo ? (
                      <a href={demo} target="_blank" rel="noopener noreferrer">
                        {t("CTADemo")}
                      </a>
                    ) : (
                      <span>{t("CTANoDemo")}</span>
                    )}
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  {stack.map(({ label, Icon }) => (
                    <Badge variant="outline" key={label}>
                      {Icon && <Icon className="h-3 w-3" aria-hidden="true" />}
                      {label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

*/
