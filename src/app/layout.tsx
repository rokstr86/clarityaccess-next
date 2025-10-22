import type { Metadata } from "next"
import { site } from "@/lib/site"
import "./globals.css"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"

// Make keywords compatible with Next Metadata: string | string[] | null
const keywordsValue: string | string[] | null =
  typeof site.keywords === "string"
    ? site.keywords
    : Array.isArray(site.keywords)
      ? // slice() turns readonly tuples into a mutable string[]
        (site.keywords as readonly string[]).slice()
      : null

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
  keywords: keywordsValue, // <-- fixed
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.url }],
  creator: site.creator,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    locale: site.locale,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} – ${site.description}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitterHandle,
    creator: site.twitterHandle,
    title: site.name,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: site.themeColorLight },
    { media: "(prefers-color-scheme: dark)", color: site.themeColorDark },
  ],
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
