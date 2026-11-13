import {
  Globe,
  QrCode,
  Rocket,
  ScanSearch,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
import type { Service } from "@/interfaces/services";

export const services: Service[] = [
  {
    id: "web-dev",
    Icon: Globe,
  },
  {
    id: "landing-pages",
    Icon: Rocket,
  },
  {
    id: "web-audit",
    Icon: ScanSearch,
  },
  {
    id: "portfolios",
    Icon: Sparkles,
  },
  {
    id: "digital-menus",
    Icon: QrCode,
    demos: [
      { label: "Don Chaker", href: "https://donchaker-menu.vercel.app/" },
    ],
  },
  {
    id: "web-catalogs",
    Icon: ShoppingBag,
    demos: [
      { label: "Laptops", href: "https://agn2ws.wickz.dev/" },
      { label: "Wickz Extreme", href: "https://h66det.wickz.dev/" },
      { label: "WickzTech", href: "https://f3dpwm.wickz.dev/" },
      { label: "WTECH", href: "https://hsfuxg.wickz.dev/" },
    ],
  },
  {
    id: "cross-platform",
    Icon: Smartphone,
  },
];
