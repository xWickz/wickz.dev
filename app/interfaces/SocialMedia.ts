import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface BaseLink {
  label: string;
  href: string;
}

interface SocialMedia extends BaseLink {
  Icon: IconComponent;
}

export type { SocialMedia };