"use client"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"

const brandMeta = [
  {
    image: "/brands/capitan/capitan-gin.png",
    gallery: [
      images.brands.capitanDetail,
      images.brands.capitanEtiquetaNegra,
      images.brands.capitanLondonDry,
      images.brands.capitanCork,
    ],
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
    secondaryImage: images.brands.plazaGrillosBottles,
    instagram: "https://www.instagram.com/plazadegrillos/",
    shop: "https://plazadegrillos.com/",
    featured: true,
  },
]

function BrandActions({
  shop,
  instagram,
  buyLabel,
  instagramLabel,
}: {
  shop?: string
  instagram: string
  buyLabel: string
  instagramLabel: string
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {shop && (
        <Button
          nativeButton={false}
          render={<a href={shop} target="_blank" rel="noreferrer" />}
          className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {buyLabel}
        </Button>
      )}
      <Button
        variant="outline"
        nativeButton={false}
        render={<a href={instagram} target="_blank" rel="noreferrer" />}
        className="rounded-none border-border bg-transparent text-foreground hover:bg-foreground/10"
      >
        {instagramLabel}
      </Button>
    </div>
  )
}

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
            const gallery = "gallery" in meta ? meta.gallery : undefined
            const secondaryImage =
              "secondaryImage" in meta ? meta.secondaryImage : undefined

            if (meta.featured && gallery) {
              return (
                <article
                  key={brand.name}
                  className="group col-span-full overflow-hidden border border-border bg-card transition-colors hover:border-primary/60"
                >
                  <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="relative min-h-[28rem] overflow-hidden lg:min-h-full">
                      <img
                        src={meta.image}
                        alt={brand.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-14">
                      <span className="text-xs uppercase tracking-[0.25em] text-primary">
                        {brand.category}
                      </span>
                      <h3 className="mt-3 font-heading text-3xl font-bold text-foreground lg:text-4xl xl:text-5xl">
                        {brand.name}
                      </h3>
                      <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                        {brand.description}
                      </p>
                      <BrandActions
                        shop={meta.shop}
                        instagram={meta.instagram}
                        buyLabel={t.brands.buyOnline}
                        instagramLabel={t.brands.viewInstagram}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
                    {gallery.map((src, photoIndex) => (
                      <div
                        key={src}
                        className="relative aspect-[4/5] overflow-hidden bg-secondary md:aspect-[3/4]"
                      >
                        <img
                          src={src}
                          alt={
                            brand.galleryAlts?.[photoIndex] ?? brand.imageAlt
                          }
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </article>
              )
            }

            if (meta.featured && secondaryImage) {
              return (
                <article
                  key={brand.name}
                  className="group col-span-full overflow-hidden border border-border bg-card transition-colors hover:border-primary/60"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="relative min-h-[26rem] overflow-hidden lg:min-h-[34rem]">
                      <img
                        src={meta.image}
                        alt={brand.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="relative min-h-[26rem] overflow-hidden border-t border-border lg:min-h-[34rem] lg:border-t-0 lg:border-l">
                      <img
                        src={secondaryImage}
                        alt={brand.secondaryImageAlt ?? brand.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center border-t border-border p-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:p-12">
                    <div className="max-w-2xl">
                      <span className="text-xs uppercase tracking-[0.25em] text-primary">
                        {brand.category}
                      </span>
                      <h3 className="mt-3 font-heading text-3xl font-bold text-foreground lg:text-4xl xl:text-5xl">
                        {brand.name}
                      </h3>
                      <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                        {brand.description}
                      </p>
                    </div>
                    <BrandActions
                      shop={meta.shop}
                      instagram={meta.instagram}
                      buyLabel={t.brands.buyOnline}
                      instagramLabel={t.brands.viewInstagram}
                    />
                  </div>
                </article>
              )
            }

            return (
              <article
                key={brand.name}
                className="group flex flex-col overflow-hidden border border-border bg-card transition-colors hover:border-primary/60"
              >
                <div className="relative overflow-hidden bg-secondary">
                  <img
                    src={meta.image}
                    alt={brand.imageAlt}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <span className="text-xs uppercase tracking-[0.25em] text-primary">
                    {brand.category}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-foreground lg:text-3xl">
                    {brand.name}
                  </h3>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {brand.description}
                  </p>
                  <BrandActions
                    shop={"shop" in meta ? meta.shop : undefined}
                    instagram={meta.instagram}
                    buyLabel={t.brands.buyOnline}
                    instagramLabel={t.brands.viewInstagram}
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
