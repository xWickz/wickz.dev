// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = (props: Record<string, any>) => any;

type ServiceId =
  | "web-dev"
  | "landing-pages"
  | "web-audit"
  | "portfolios"
  | "digital-menus"
  | "web-catalogs"
  | "cross-platform";

interface ServiceDemo {
  label: string;
  href: string;
  /** Captura en public/demos/ (800×500). */
  image: string;
}

type ServiceGroup = "sell" | "capture" | "custom";

interface Service {
  id: ServiceId;
  Icon: IconComponent;
  group: ServiceGroup;
  demos?: ServiceDemo[];
}

export type { Service, ServiceDemo, ServiceGroup, ServiceId };
