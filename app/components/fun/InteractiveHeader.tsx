"use client";

import dynamic from "next/dynamic";

const BackgroundShader = dynamic(
  () => import("@/app/components/fun/BackgroundShader").then((mod) => mod.BackgroundShader),
  { ssr: false }
);

import { useRef, useState } from "react";
import { ModeToggle } from "../ui/modeToggle";

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
        <a
        href="https://wickz.dev"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        wickz.dev
      </a>
        
        <ModeToggle/>
    </>
  );
}