import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xzvl.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "XZVL - Web Development",
    template: "%s | XZVL",
  },
  description:
    "Engineering High-Performance Interfaces. A cyber-industrial portfolio by XZVL.",
  keywords: [
    "XZVL",
    "web development",
    "frontend engineering",
    "portfolio",
    "high-performance interfaces",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "XZVL",
    title: "XZVL - Web Development",
    description:
      "Engineering High-Performance Interfaces. A cyber-industrial portfolio by XZVL.",
    images: [
      {
        url: "/assets/screenshot.png",
        width: 1200,
        height: 630,
        alt: "XZVL portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XZVL - Web Development",
    description:
      "Engineering High-Performance Interfaces. A cyber-industrial portfolio by XZVL.",
    images: ["/assets/screenshot.png"],
  },
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-body-md text-body-md overflow-x-hidden">
        <div className="fixed inset-0 scanline z-[100]" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
