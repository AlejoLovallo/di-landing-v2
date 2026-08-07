"use client"

import { useTranslation } from "@/components/language-provider"
import { getWhatsAppUrl } from "@/lib/contact"
import { images } from "@/lib/images"
import { ORGANIZATION } from "@/lib/seo/constants"

const brandLinks = [
  {
    labelKey: 0,
    href: "https://www.instagram.com/capitanginarg/",
    name: "Capitán Gin",
  },
  {
    labelKey: 1,
    href: "https://www.instagram.com/ginetheryo/",
    name: "Gin Etheryo",
  },
  {
    labelKey: 2,
    href: "https://www.instagram.com/elrefuerzoginvermu/",
    name: "El Refuerzo Gin",
  },
  {
    labelKey: 3,
    href: "https://www.instagram.com/ribeckyspirits/",
    name: "Ribecky Spirits",
  },
  {
    labelKey: 4,
    href: "https://www.instagram.com/plazadegrillos/",
    name: "Plaza de Grillos",
  },
] as const

const shopHrefs = [
  "https://capitangin.mitiendanube.com/",
  "https://plazadegrillos.com/",
]

export function SiteFooter() {
  const { t } = useTranslation()
  const whatsappHref = getWhatsAppUrl(t.contact.whatsappMessage)

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 leading-none">
            <img
              src={images.logos.diWhite}
              alt="Destilería Independencia"
              className="h-16 w-16 object-contain"
            />
            <span className="font-heading text-2xl font-bold leading-tight tracking-tight text-foreground">
              Destilería
              <br />
              Independencia
            </span>
          </div>
          <p className="mt-5 max-w-sm text-pretty leading-relaxed text-subtle-foreground">
            {t.footer.description}
          </p>
          <div className="mt-8 max-w-md space-y-3 text-sm text-subtle-foreground">
            <p className="font-medium text-foreground">{t.footer.legalName}</p>
            <p>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground">
                {t.footer.distilleryLabel}
              </span>
              <br />
              {ORGANIZATION.distilleryLocation}
            </p>
            <p>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground">
                {t.footer.emailLabel}
              </span>
              <br />
              <a
                href={`mailto:${ORGANIZATION.email}`}
                className="transition-colors hover:text-accent"
              >
                {ORGANIZATION.email}
              </a>
            </p>
            <p>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground">
                {t.footer.whatsappLabel}
              </span>
              <br />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                +54 9 11 2285-2023
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-foreground">
            {t.footer.brands}
          </h3>
          <ul className="mt-5 space-y-3">
            {brandLinks.map((brand) => (
              <li key={brand.href}>
                <a
                  href={brand.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-subtle-foreground transition-colors hover:text-accent"
                >
                  {t.footer.brandLinks[brand.labelKey] ?? brand.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-foreground">
            {t.footer.shops}
          </h3>
          <ul className="mt-5 space-y-3">
            {t.footer.shopLinks.map((label, index) => (
              <li key={shopHrefs[index]}>
                <a
                  href={shopHrefs[index]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-subtle-foreground transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 text-xs uppercase tracking-[0.25em] text-foreground">
            {t.footer.contact}
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={`mailto:${ORGANIZATION.email}`}
                className="text-sm text-subtle-foreground transition-colors hover:text-accent"
              >
                {ORGANIZATION.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-subtle-foreground transition-colors hover:text-accent"
              >
                +54 9 11 2285-2023
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-sm text-subtle-foreground transition-colors hover:text-accent"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-subtle-foreground sm:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p>{t.footer.legal}</p>
        </div>
      </div>
    </footer>
  )
}
