"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/components/lib/utils";
import type { StackItem } from "@/interfaces/PersonalProjects";
import {
  Apple,
  CSS,
  GitHub,
  HTML5,
  JavaScript,
  Nextjs,
  React as ReactIcon,
  Supabase,
  TailwindCSS,
  TypeScript,
  Vue,
} from "../icons/svgIcons";

const stackIconMap: Record<string, StackItem["Icon"]> = {
  React: ReactIcon,
  "Next.js": Nextjs,
  TypeScript: TypeScript,
  JavaScript: JavaScript,
  Tailwind: TailwindCSS,
  Vue: Vue,
  Supabase: Supabase,
  HTML: HTML5,
  CSS: CSS,
  "Apple Shortcuts": Apple,
};
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    demo?: string;
    github?: string;
    quote: string;
    name: string;
    title: string;
    stack: Pick<StackItem, "label">[];
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden", // [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap items-stretch gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative flex w-[350px] max-w-full shrink-0 flex-col rounded-2xl border border-b-0 border-zinc-200 bg-black px-8 py-6 md:w-[450px] dark:border-zinc-900 dark:bg-black"
            key={item.name}
          >
            <blockquote className="flex h-full flex-1 flex-col">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="text-md leading-[1.6] tracking-tight font-bold text-zinc-300 flex flex-row items-center justify-between w-full gap-4">
                <span>{item.title}</span>

                <div className="flex items-center gap-2">
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener"
                      className="hover_blink"
                    >
                      <SquareArrowOutUpRight className="w-4 h-4 text-zinc-500 blink_effect" />
                    </a>
                  )}

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener"
                      className="hover_blink"
                    >
                      <GitHub className="w-4 h-4 text-zinc-500 blink_effect" />
                    </a>
                  )}
                </div>
              </span>

              <span className="relative z-20 text-sm tracking-tight leading-[1.6] font-semibold text-neutral-800 dark:text-zinc-200">
                {item.quote}
              </span>
              {item.stack.length > 0 && (
                <div className="relative z-20 mt-auto flex flex-wrap items-center gap-2 pt-4">
                  {item.stack.map(({ label }) => {
                    const Icon = stackIconMap[label];
                    return (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1 rounded-md border border-zinc-800 px-2 py-1 text-xs font-semibold text-zinc-300"
                      >
                        {Icon && (
                          <Icon
                            className="h-3 w-3"
                            aria-label={label}
                            role="img"
                          />
                        )}
                        <span>{label}</span>
                      </span>
                    );
                  })}
                </div>
              )}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
