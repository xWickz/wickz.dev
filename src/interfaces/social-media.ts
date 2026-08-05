import type { ComponentType, SVGProps } from "react";

type SocialPlatform =
  | "GitHub"
  | "LinkedIn"
  | "Twitter"
  | "Facebook"
  | "Instagram"
  | "Gmail";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface BaseLink {
  label: string;
  href: string;
}

interface SocialMedia extends BaseLink {
  label: SocialPlatform;
  Icon: (_props: Record<string, any>) => any;
}

export type { SocialMedia, SocialPlatform };
