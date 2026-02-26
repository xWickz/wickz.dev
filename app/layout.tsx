import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wickz.dev"),
  title: {
    default: "Santiago Griman - wickz.dev",
    template: "%s - wickz.dev",
  },
  description:
    "Fullstack (almost) web developer from Venezuela. I like to build things and learn new technologies. I love UI/UX design, build backend and frontend applications and more things.",
  keywords: [
    "Santiago Griman",
    "wickz dev",
    "fullstack developer",
    "portfolio",
  ],
  authors: [{ name: "Santiago Griman", url: "https://wickz.dev" }],
  openGraph: {
    type: "website",
    url: "https://wickz.dev",
    title: "Santiago Griman · Fullstack Developer",
    description:
      "Fullstack (almost) web developer from Venezuela. I like to build things and learn new technologies. I love UI/UX design, build backend and frontend applications and more things.",
    siteName: "wickz.dev",
    locale: "en-US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Santiago Griman - wickz.dev",
      },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
