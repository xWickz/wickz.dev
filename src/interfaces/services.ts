// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = (props: Record<string, any>) => any;

type ServiceId =
  | "web-dev"
  | "landing-pages"
  | "portfolios"
  | "digital-menus"
  | "web-catalogs"
  | "cross-platform";

interface ServiceDemo {
  label: string;
  href: string;
}

interface Service {
  id: ServiceId;
  Icon: IconComponent;
  demos?: ServiceDemo[];
}

export type { Service, ServiceDemo, ServiceId };
