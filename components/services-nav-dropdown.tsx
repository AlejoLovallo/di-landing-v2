"use client"

import { useEffect, useId, useRef, useState } from "react"

import { useTranslation } from "@/components/language-provider"
import { cn } from "@/lib/utils"

type ServicesNavDropdownProps = {
  homeHref?: string
  className?: string
  triggerClassName?: string
  menuClassName?: string
  onNavigate?: () => void
  variant?: "header" | "section" | "mobile"
}

export function ServicesNavDropdown({
  homeHref = "",
  className,
  triggerClassName,
  menuClassName,
  onNavigate,
  variant = "header",
}: ServicesNavDropdownProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  const section = (hash: string) => `${homeHref}${hash}`
  const servicesHref = section("#servicios")

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  if (variant === "mobile") {
    return (
      <div className={cn("border-b border-border", className)}>
        <a
          href={servicesHref}
          onClick={onNavigate}
          className="block py-3 text-sm uppercase tracking-widest text-foreground/80"
        >
          {t.nav.services}
        </a>
        <div className="mb-3 flex flex-col gap-1 border-l border-border pl-4">
          {t.services.items.map((service) => (
            <a
              key={service.id}
              href={section(`#${service.id}`)}
              onClick={onNavigate}
              className="py-2 text-sm text-subtle-foreground transition-colors hover:text-accent"
            >
              {service.name}
            </a>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div ref={rootRef} className={cn("relative shrink-0", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          variant === "section"
            ? "flex items-center gap-1.5 border-b-2 px-4 py-3.5 text-xs uppercase tracking-[0.2em] transition-colors sm:px-5"
            : "flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-accent xl:text-sm xl:tracking-widest",
          variant === "section" &&
            (open
              ? "border-primary text-foreground"
              : "border-transparent text-foreground/65 hover:text-accent"),
          triggerClassName
        )}
      >
        {t.nav.services}
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className={cn(
            "h-2.5 w-2.5 transition-transform",
            open && "rotate-180"
          )}
        >
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className={cn(
            "absolute left-0 top-full z-50 mt-1 min-w-[16rem] border border-border bg-background/95 py-2 shadow-lg backdrop-blur-md",
            variant === "section" && "mt-0",
            menuClassName
          )}
        >
          <a
            role="menuitem"
            href={servicesHref}
            onClick={() => {
              setOpen(false)
              onNavigate?.()
            }}
            className="block px-4 py-2.5 text-xs uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:bg-accent/10 hover:text-accent"
          >
            {t.nav.services}
          </a>
          <div className="my-1 border-t border-border" />
          {t.services.items.map((service) => (
            <a
              key={service.id}
              role="menuitem"
              href={section(`#${service.id}`)}
              onClick={() => {
                setOpen(false)
                onNavigate?.()
              }}
              className="block px-4 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-accent/10 hover:text-accent"
            >
              {service.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
