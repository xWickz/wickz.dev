type SocialPlatform =
  | "GitHub"
  | "LinkedIn"
  | "Twitter"
  | "Facebook"
  | "Instagram"
  | "Gmail";


interface BaseLink {
  label: string;
  href: string;
}

interface SocialMedia extends BaseLink {
  label: SocialPlatform;
  Icon: (_props: Record<string, any>) => any;
}

export type { SocialMedia, SocialPlatform };
