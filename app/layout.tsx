import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://greenplanet.bhathiya.dev"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Green Planet - Protect Nature Before It's Too Late",
    template: "%s | Green Planet",
  },
  description:
    "Green Planet is an environmental awareness platform dedicated to protecting nature, wildlife, forests, oceans, and inspiring eco-friendly lifestyles for a sustainable future.",
  keywords: [
    "green planet",
    "protect nature",
    "save earth",
    "climate change awareness",
    "environmental protection",
    "eco friendly lifestyle",
    "wildlife conservation",
    "sustainable future",
    "save forests",
    "clean environment",
  ],
  authors: [{ name: "Green Planet Initiative" }],
  creator: "Green Planet",
  publisher: "Green Planet",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Green Planet - Protect Nature Before It's Too Late",
    description:
      "Green Planet is an environmental awareness platform dedicated to protecting nature, wildlife, forests, oceans, and inspiring eco-friendly lifestyles for a sustainable future.",
    url: siteUrl,
    siteName: "Green Planet",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Green Planet Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Planet - Protect Nature Before It's Too Late",
    description:
      "Green Planet is an environmental awareness platform dedicated to protecting nature, wildlife, forests, oceans, and inspiring eco-friendly lifestyles for a sustainable future.",
    images: ["/twitter-image.png"],
    creator: "@greenplanet",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Green Planet",
      description:
        "Environmental awareness platform dedicated to protecting nature, wildlife, forests, and oceans.",
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Green Planet",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      sameAs: [],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", poppins.variable, inter.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="light" forcedTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}
