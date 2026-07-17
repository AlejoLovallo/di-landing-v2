"use client"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"

const brandMeta = [
  {
    image: images.brands.capitan,
    secondaryImage: images.brands.capitanEtiquetaNegra,
    instagram: "https://www.instagram.com/capitanginarg/",
    shop: "https://capitangin.mitiendanube.com/",
    featured: true,
  },
  {
    image: images.brands.etheryo,
    instagram: "https://www.instagram.com/ginetheryo/",
  },
  {
    image: images.brands.refuerzo,
    instagram: "https://www.instagram.com/elrefuerzoginvermu/",
  },
  {
    image: images.brands.plazaGrillos,
    instagram: "https://www.instagram.com/plazadegrillos/",
    shop: "https://plazadegrillos.com/",
  },
]

export function Brands() {
  const { t } = useTranslation()

  return (
    <section id="marcas" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            {t.brands.label}
          </p>
          <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            {t.brands.title}
          </h2>
          <p className="mt-4 font-heading text-xl text-pretty text-primary lg:text-2xl">
            {t.brands.subtitle}
          </p>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.brands.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.brands.items.map((brand, index) => {
            const meta = brandMeta[index]
            return (
              <article
                key={brand.name}
                className={`group flex flex-col overflow-hidden border border-border bg-card transition-colors hover:border-primary/60 ${
                  meta.featured ? "md:col-span-2 md:flex-row" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-secondary ${
                    meta.featured ? "md:w-1/2" : ""
                  }`}
                >
                  {meta.secondaryImage ? (
                    <div
                      className={`grid h-full ${
                        meta.featured
                          ? "min-h-72 grid-cols-1 sm:grid-cols-2"
                          : "grid-cols-1"
                      }`}
                    >
                      <img
                        src={meta.image}
                        alt={brand.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:min-h-72"
                      />
                      <img
                        src={meta.secondaryImage}
                        alt={brand.secondaryImageAlt ?? brand.imageAlt}
                        className="h-full w-full border-t border-border object-cover transition-transform duration-700 group-hover:scale-105 sm:min-h-72 sm:border-t-0 sm:border-l"
                      />
                    </div>
                  ) : (
                    <img
                      src={meta.image}
                      alt={brand.imageAlt}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        meta.featured ? "h-full min-h-72" : "h-64"
                      }`}
                    />
                  )}
                </div>
                <div
                  className={`flex flex-1 flex-col p-8 ${
                    meta.featured ? "justify-center md:p-12" : ""
                  }`}
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-primary">
                    {brand.category}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-foreground lg:text-3xl">
                    {brand.name}
                  </h3>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {brand.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {meta.shop && (
                      <Button
                        nativeButton={false}
                        render={
                          <a href={meta.shop} target="_blank" rel="noreferrer" />
                        }
                        className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        {t.brands.buyOnline}
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      nativeButton={false}
                      render={
                        <a
                          href={meta.instagram}
                          target="_blank"
                          rel="noreferrer"
                        />
                      }
                      className="rounded-none border-border bg-transparent text-foreground hover:bg-foreground/10"
                    >
                      {t.brands.viewInstagram}
                    </Button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
