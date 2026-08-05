import GitHub from "@/components/icons/GitHub.astro";
import Gmail from "@/components/icons/Gmail.astro";
import LinkedIn from "@/components/icons/LinkedIn.astro";

import type { SocialMedia } from "@/interfaces/social-media";

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
  {
    label: "Gmail",
    href: "mailto:wickzcs@gmail.com",
    Icon: Gmail,
  },
] as const;
