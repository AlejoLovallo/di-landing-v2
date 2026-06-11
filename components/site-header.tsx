"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Marcas", href: "#marcas" },
  { label: "Destilería", href: "#destileria" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3 leading-none">
          <img
            src="/logo-di-white.png"
            alt="Destilería Independencia"
            className="h-12 w-12 object-contain"
          />
          <span className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              Destilería
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.35em] text-primary">
              Independencia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={
              <a href="https://capitangin.mitiendanube.com/" target="_blank" rel="noreferrer" />
            }
            className="rounded-none bg-primary px-4 text-primary-foreground hover:bg-primary/90"
          >
            Tienda
          </Button>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-6 bg-foreground" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm uppercase tracking-widest text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://capitangin.mitiendanube.com/"
              target="_blank"
              rel="noreferrer"
              className="py-3 text-sm uppercase tracking-widest text-primary"
            >
              Tienda
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
