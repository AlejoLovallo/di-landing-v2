"use client"

import { useTranslation } from "@/components/language-provider"
import { images } from "@/lib/images"

const brandHrefs = [
  "https://www.instagram.com/capitanginarg/",
  "https://www.instagram.com/ginetheryo/",
  "https://www.instagram.com/elrefuerzoginvermu/",
  "https://www.instagram.com/plazadegrillos/",
]

const shopHrefs = [
  "https://capitangin.mitiendanube.com/",
  "https://plazadegrillos.com/",
]

export function SiteFooter() {
  const { t } = useTranslation()

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
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-foreground">
            {t.footer.brands}
          </h3>
          <ul className="mt-5 space-y-3">
            {t.footer.brandLinks.map((label, index) => (
              <li key={brandHrefs[index]}>
                <a
                  href={brandHrefs[index]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-subtle-foreground transition-colors hover:text-accent"
                >
                  {label}
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
