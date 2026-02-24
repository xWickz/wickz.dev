"use client";

import dynamic from "next/dynamic";

const BackgroundShader = dynamic(
  () => import("@/app/components/fun/BackgroundShader").then((mod) => mod.BackgroundShader),
  { ssr: false }
);

import { useRef, useState } from "react";

export default function InteractiveHeader() {
  const [shaderActive, setShader] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  const handleMouseEnter = () => {
    hoverTimeout.current = window.setTimeout(() => setShader(true), 3000);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current !== null) {
      window.clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setShader(false);
  };

  return (
    <>
      <BackgroundShader active={shaderActive} />
      <header
        className="text-lg text-zinc-600 dark:text-zinc-400 font-semibold hover:text-zinc-700 dark:hover:text-zinc-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
              <a
        href="https://wickz.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        wickz.dev
      </a>
        
      </header>
    </>
  );
}