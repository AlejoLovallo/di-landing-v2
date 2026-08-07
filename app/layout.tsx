import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"

import { AgeGateModal } from "@/components/age-gate-modal"
import { ContactModalProvider } from "@/components/contact-modal-provider"
import { HomepageJsonLd } from "@/components/homepage-jsonld"
import { LanguageProvider } from "@/components/language-provider"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { es } from "@/lib/i18n/dictionaries/es"
import { SITE_URL } from "@/lib/seo/constants"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: es.meta.title,
  description: es.meta.description,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/logos/logo-di-blue.png",
  },
  alternates: {
    types: {
      "text/plain": [{ url: "/llms.txt", title: "llms.txt" }],
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <HomepageJsonLd />
        <LanguageProvider>
          <ContactModalProvider>
            {children}
            <WhatsAppFab />
            <AgeGateModal />
          </ContactModalProvider>
        </LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
