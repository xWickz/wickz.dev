import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/app/components/theme-provider"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wickz.dev"),
  title: {
    default: "Santiago Griman - wickz.dev",
    template: "%s - wickz.dev",
  },
  description:
    "Personal portfolio, showcasing projects and social media links.",
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
    description: "Projects, ideas and experiments from Santiago Griman.",
    siteName: "wickz.dev",
  },
  alternates: {
    canonical: "https://wickz.dev",
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
        disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
