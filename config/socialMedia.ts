import { GitHub, Gmail, LinkedIn } from "@/components/icons/svgIcons";
import type { SocialMedia } from "@/interfaces/SocialMedia";

export const socialMedia: SocialMedia[] = [
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
  {
    label: "Gmail",
    href: "mailto:wickzcs@gmail.com",
    Icon: Gmail,
  },
];
