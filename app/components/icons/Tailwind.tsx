import type { SVGProps } from "react";

const Tailwind = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" role="img" aria-label="Tailwind CSS logo" {...props}>
    <path
      d="M4 13.4c1.8-3.8 4.2-5.6 7.5-5.6 4.9 0 6 3.4 8.7 3.4 1.7 0 3-.8 4.3-2.7-1.8 3.9-4.2 5.7-7.5 5.7-4.9 0-6-3.4-8.7-3.4-1.7 0-3 .8-4.3 2.6Zm0 7.8c1.8-3.8 4.2-5.6 7.5-5.6 4.9 0 6 3.4 8.7 3.4 1.7 0 3-.8 4.3-2.7-1.8 3.9-4.2 5.7-7.5 5.7-4.9 0-6-3.4-8.7-3.4-1.7 0-3 .8-4.3 2.6Z"
      fill="#38bdf8"
    />
  </svg>
);

export { Tailwind };
