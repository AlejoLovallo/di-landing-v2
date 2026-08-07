"use client"

import { useState, useEffect } from "react"

import { useTranslation } from "@/components/language-provider"
import { ServicesNavDropdown } from "@/components/services-nav-dropdown"
import { Button } from "@/components/ui/button"
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
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const section = (hash: string) => `${homeHref}${hash}`

  const navLinks = [
    { label: t.nav.brands, href: section("#marcas") },
    { label: t.nav.distillery, href: section("#destileria") },
    { label: t.nav.winery, href: section("#bodega") },
    { label: t.nav.aboutUs, href: section("#nosotros") },
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:gap-8 lg:px-10">
        <a
          href={section("#inicio") || "#inicio"}
          className="relative z-10 flex shrink-0 items-center gap-3 leading-none"
        >
          <img
            src={images.logos.diWhite}
            alt="Destilería Independencia"
            className="h-12 w-12 object-contain"
          />
          <span className="hidden font-heading text-lg font-bold leading-tight tracking-tight text-foreground xl:block">
            Destilería
            <br />
            Independencia
          </span>
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 lg:flex xl:gap-7">
          <a
            href={navLinks[0].href}
            className="shrink-0 text-xs uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-accent xl:text-sm xl:tracking-widest"
          >
            {navLinks[0].label}
          </a>
          <ServicesNavDropdown homeHref={homeHref} variant="header" />
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 text-xs uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-accent xl:text-sm xl:tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <LanguageToggle />
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<a href="/tienda" />}
            className="rounded-none border-foreground/30 bg-transparent px-4 text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            {t.nav.shop}
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
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
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            <a
              href={navLinks[0].href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 text-sm uppercase tracking-widest text-foreground/80"
            >
              {navLinks[0].label}
            </a>
            <ServicesNavDropdown
              homeHref={homeHref}
              variant="mobile"
              onNavigate={() => setOpen(false)}
            />
            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm uppercase tracking-widest text-foreground/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/tienda"
              onClick={() => setOpen(false)}
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
