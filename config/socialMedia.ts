import { GitHub, LinkedIn } from "@/components/icons/svgIcons";
import type { SocialMedia } from "@/interfaces/SocialMedia";

export const socialMedia: readonly SocialMedia[] = [
  {
    label: "GitHub",
    href: "https://github.com/xWickz",
    Icon: GitHub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/santiago-griman/",
    Icon: LinkedIn,
  },
] as const;
