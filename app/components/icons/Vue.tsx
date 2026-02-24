import type { SVGProps } from "react";

const Vue = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" role="img" aria-label="Vue logo" {...props}>
    <path d="M2 4h7.6L16 17.3 22.4 4H30L16 28z" fill="#42b883" />
    <path d="M8.7 4h4l3.3 6 3.3-6h4L16 24.6z" fill="#35495e" />
  </svg>
);

export { Vue };
