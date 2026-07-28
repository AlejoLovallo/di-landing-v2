"use client"

import { useEffect, useState } from "react"

import { useTranslation } from "@/components/language-provider"
import { cn } from "@/lib/utils"

const SECTION_IDS = [
  "marcas",
  "servicios",
  "destileria",
  "nosotros",
  "proceso",
  "contacto",
] as const

export function SectionNav() {
  const { t } = useTranslation()
  const [active, setActive] = useState<string>("")
  const [visible, setVisible] = useState(false)

  const sections = [
    { id: "marcas", label: t.nav.brands },
    { id: "servicios", label: t.nav.services },
    { id: "destileria", label: t.nav.distillery },
    { id: "nosotros", label: t.nav.aboutUs },
    { id: "proceso", label: t.nav.process },
    { id: "contacto", label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActive(visibleEntries[0].target.id)
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  if (!visible) return null

  return (
    <nav
      aria-label="Secciones"
      className="sticky top-[4.5rem] z-40 border-b border-border bg-background/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl gap-0 overflow-x-auto px-6 lg:px-10">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "shrink-0 border-b-2 px-4 py-3.5 text-xs uppercase tracking-[0.2em] transition-colors sm:px-5",
              active === section.id
                ? "border-primary text-foreground"
                : "border-transparent text-foreground/65 hover:text-foreground"
            )}
            aria-current={active === section.id ? "true" : undefined}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
