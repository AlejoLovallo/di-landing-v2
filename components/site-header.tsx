"use client"

import { useState, useEffect } from "react"

import { useTranslation } from "@/components/language-provider"
import { useContactModal } from "@/components/contact-modal-provider"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/contact"
import { images } from "@/lib/images"
import type { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function LanguageToggle() {
  const { locale, setLocale, t } = useTranslation()

  const toggle = (nextLocale: Locale) => {
    setLocale(nextLocale)
  }

  return (
    <div className="flex items-center gap-1 border border-border">
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => toggle(code)}
          className={cn(
            "px-2.5 py-1.5 text-xs uppercase tracking-widest transition-colors",
            locale === code
              ? "bg-primary text-primary-foreground"
              : "text-foreground/65 hover:text-accent"
          )}
          aria-pressed={locale === code}
        >
          {t.language[code]}
        </button>
      ))}
    </div>
  )
}

export function SiteHeader({ homeHref = "" }: { homeHref?: string }) {
  const { t } = useTranslation()
  const { openContactModal } = useContactModal()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const section = (hash: string) => `${homeHref}${hash}`

  const navLinks = [
    { label: t.nav.brands, href: section("#marcas") },
    { label: t.nav.services, href: section("#servicios") },
    { label: t.nav.distillery, href: section("#destileria") },
    { label: t.nav.aboutUs, href: section("#nosotros") },
    { label: t.nav.process, href: section("#proceso") },
    { label: t.nav.contact, href: section("#contacto") },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <a
          href={section("#inicio") || "#inicio"}
          className="flex items-center gap-3 leading-none"
        >
          <img
            src={images.logos.diWhite}
            alt="Destilería Independencia"
            className="h-12 w-12 object-contain"
          />
          <span className="font-heading text-lg font-bold leading-tight tracking-tight text-foreground">
            Destilería
            <br />
            Independencia
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={
              <a
                href={getWhatsAppUrl(t.contact.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
              />
            }
            className="rounded-none border-brand-whatsapp/50 bg-transparent text-foreground hover:border-brand-whatsapp hover:bg-brand-whatsapp/10"
          >
            WhatsApp
          </Button>
          <Button
            variant="brand"
            size="sm"
            onClick={openContactModal}
            className="px-4"
          >
            {t.contact.writeUs}
          </Button>
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={
              <a
                href="https://capitangin.mitiendanube.com/"
                target="_blank"
                rel="noreferrer"
              />
            }
            className="rounded-none border-foreground/30 bg-transparent px-4 text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            {t.nav.shop}
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.openMenu}
            aria-expanded={open}
          >
            <span className="h-0.5 w-6 bg-foreground" />
            <span className="h-0.5 w-6 bg-foreground" />
            <span className="h-0.5 w-6 bg-foreground" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm uppercase tracking-widest text-foreground/80"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                openContactModal()
              }}
              className="border-b border-border py-3 text-left text-sm uppercase tracking-widest text-primary"
            >
              {t.contact.writeUs}
            </button>
            <a
              href={getWhatsAppUrl(t.contact.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="border-b border-border py-3 text-sm uppercase tracking-widest text-brand-whatsapp"
            >
              {t.contact.whatsapp}
            </a>
            <a
              href="https://capitangin.mitiendanube.com/"
              target="_blank"
              rel="noreferrer"
              className="py-3 text-sm uppercase tracking-widest text-foreground/80"
            >
              {t.nav.shop}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
