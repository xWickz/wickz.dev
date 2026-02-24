import type { SVGProps } from "react";

const Nextjs = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" role="img" aria-label="Next.js logo" {...props}>
    <rect width="32" height="32" rx="6" fill="#0a0a0a" />
    <path d="M10 8h3v16h-3z" fill="#fff" />
    <path d="M19 8h3v16h-3z" fill="#fff" />
    <path d="M11 8h-3l13 16h3z" fill="#fff" />
  </svg>
);

export { Nextjs };
