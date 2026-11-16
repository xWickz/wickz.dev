import {
  Globe,
  QrCode,
  Rocket,
  ScanSearch,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
import type { Service, ServiceGroup } from "@/interfaces/services";

export const serviceGroups: ServiceGroup[] = ["sell", "capture", "custom"];

export const services: Service[] = [
  {
    id: "web-catalogs",
    Icon: ShoppingBag,
    group: "sell",
    demos: [
      { label: "Laptops", href: "https://agn2ws.wickz.dev/", image: "/demos/laptops.webp" },
      { label: "Wickz Extreme", href: "https://h66det.wickz.dev/", image: "/demos/wickz-extreme.webp" },
      { label: "WickzTech", href: "https://f3dpwm.wickz.dev/", image: "/demos/wickztech.webp" },
      { label: "WTECH", href: "https://hsfuxg.wickz.dev/", image: "/demos/wtech.webp" },
    ],
  },
  {
    id: "digital-menus",
    Icon: QrCode,
    group: "sell",
    demos: [
      { label: "Don Chaker", href: "https://donchaker-menu.vercel.app/", image: "/demos/don-chaker.webp" },
    ],
  },
  {
    id: "landing-pages",
    Icon: Rocket,
    group: "capture",
  },
  {
    id: "portfolios",
    Icon: Sparkles,
    group: "capture",
  },
  {
    id: "web-dev",
    Icon: Globe,
    group: "custom",
  },
  {
    id: "cross-platform",
    Icon: Smartphone,
    group: "custom",
  },
  {
    id: "web-audit",
    Icon: ScanSearch,
    group: "custom",
  },
];
