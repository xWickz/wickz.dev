"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { GitHub } from "@/components/icons/svgIcons";
import { personalProjects } from "@/config/personalprojects";

export default function FeaturedProject() {
  const q = useTranslations("PersonalProjects_Data");
  const [activeMediaId, setActiveMediaId] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const featuredProjects = personalProjects.slice(0, 2);
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
                    loading="eager"
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
                    <h2 className="text-4xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tighter text-center sm:text-left">
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener"
                        className="hover_blink hover:text-zinc-300 transition-colors"
                      >
                        <span className="blink_effect">{q(`${id}.title`)}</span>
                      </a>
                    </h2>
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener"
                        className="hover_blink"
                      >
                        <SquareArrowOutUpRight className="size-5 text-zinc-500 blink_effect" />
                      </a>
                    )}
                    {href && (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener"
                        className="hover_blink"
                      >
                        <GitHub className="size-5 text-zinc-500 blink_effect" />
                      </a>
                    )}
                  </div>
                  <p className="text-lg text-zinc-600 dark:text-zinc-300 font-semibold tracking-tighter">
                    {q.rich(`${id}.description`, {
                      highlight: (chunks) => (
                        <span className="bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold px-1.5 py-0.5 rounded inline-block">
                          {chunks}
                        </span>
                      ),
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
