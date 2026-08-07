"use client"

import { useEffect, useState } from "react"

import { useTranslation } from "@/components/language-provider"
import { ServicesNavDropdown } from "@/components/services-nav-dropdown"
import { cn } from "@/lib/utils"

const SECTION_IDS = [
  "marcas",
  "servicios",
  "bodega",
  "destileria",
  "nosotros",
  "contacto",
] as const

export function SectionNav() {
  const { t } = useTranslation()
  const [active, setActive] = useState<string>("")
  const [visible, setVisible] = useState(false)

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

    const observedIds = [
      ...SECTION_IDS,
      ...t.services.items.map((service) => service.id),
    ]

    observedIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [t.services.items])

  if (!visible) return null

  const servicesActive =
    active === "servicios" ||
    t.services.items.some((service) => service.id === active)

  const links = [
    { id: "marcas", label: t.nav.brands },
    { id: "bodega", label: t.nav.winery },
    { id: "destileria", label: t.nav.distillery },
    { id: "nosotros", label: t.nav.aboutUs },
    { id: "contacto", label: t.nav.contact },
  ]

  return (
    <nav
      aria-label="Secciones"
      className="sticky top-[4.5rem] z-40 border-b border-border bg-background/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-stretch gap-0 overflow-x-auto px-6 lg:px-10">
        <a
          href="#marcas"
          className={cn(
            "shrink-0 border-b-2 px-4 py-3.5 text-xs uppercase tracking-[0.2em] transition-colors sm:px-5",
            active === "marcas"
              ? "border-primary text-foreground"
              : "border-transparent text-foreground/65 hover:text-accent"
          )}
          aria-current={active === "marcas" ? "true" : undefined}
        >
          {t.nav.brands}
        </a>
        <ServicesNavDropdown
          variant="section"
          triggerClassName={
            servicesActive
              ? "border-primary text-foreground"
              : "border-transparent text-foreground/65 hover:text-accent"
          }
        />
        {links.slice(1).map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "shrink-0 border-b-2 px-4 py-3.5 text-xs uppercase tracking-[0.2em] transition-colors sm:px-5",
              active === section.id
                ? "border-primary text-foreground"
                : "border-transparent text-foreground/65 hover:text-accent"
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
