"use client"

import Image from "next/image"
import { useState } from "react"

import { useTranslation } from "@/components/language-provider"
import { SectionTabs } from "@/components/section-tabs"
import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"

type BrandActionsProps = {
  shop?: string
  instagram: string
  buyLabel: string
  instagramLabel: string
}

function BrandActions({
  shop,
  instagram,
  buyLabel,
  instagramLabel,
}: BrandActionsProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {shop && (
        <Button
          variant="brand"
          nativeButton={false}
          render={<a href={shop} target="_blank" rel="noreferrer" />}
        >
          {buyLabel}
        </Button>
      )}
      <Button
        variant="outline"
        nativeButton={false}
        render={<a href={instagram} target="_blank" rel="noreferrer" />}
        className="rounded-none border-border bg-transparent text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent"
      >
        {instagramLabel}
      </Button>
    </div>
  )
}

const trustedMeta = [
  {
    image: images.brands.etheryo,
    instagram: "https://www.instagram.com/ginetheryo/",
  },
  {
    image: images.brands.refuerzo,
    instagram: "https://www.instagram.com/elrefuerzoginvermu/",
  },
  {
    image: images.brands.ribecky,
    instagram: "https://www.instagram.com/ribeckyspirits/",
  },
] as const

const capitanGallery = [
  images.brands.capitanDetail,
  images.brands.capitanEtiquetaNegra,
  images.brands.capitanLondonDry,
  images.brands.capitanCork,
] as const

const capitanAwardImages = [
  images.brands.capitanAwardGranOro,
  images.brands.capitanAwardOroCopa,
  images.brands.capitanAwardPlata,
] as const

export function Brands() {
  const { t } = useTranslation()
  const own = t.brands.own.item
  const [activeTab, setActiveTab] = useState(t.brands.trusted.items[0].name)

  const tabs = t.brands.trusted.items.map((brand, index) => ({
    id: brand.name,
    label: brand.name,
    number: String(index + 1).padStart(2, "0"),
  }))

  const activeIndex = t.brands.trusted.items.findIndex(
    (brand) => brand.name === activeTab
  )
  const brand =
    t.brands.trusted.items[activeIndex >= 0 ? activeIndex : 0]
  const meta = trustedMeta[activeIndex >= 0 ? activeIndex : 0]

  return (
    <section id="marcas" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary lg:mb-12">
          <span className="h-px w-10 bg-primary" />
          {t.brands.label}
        </p>

        <div className="space-y-20 lg:space-y-24">
          {/* Marca propia */}
          <div>
            <div className="mb-8 max-w-2xl lg:mb-10">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
                {t.brands.own.label}
              </p>
              <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
                {t.brands.own.title}
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                {t.brands.own.description}
              </p>
            </div>

            <article className="border border-border bg-card">
              <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="relative flex aspect-[5/6] items-center justify-center overflow-hidden bg-secondary p-4 lg:aspect-auto lg:min-h-[28rem] lg:p-6">
                  <Image
                    src={images.brands.capitan}
                    alt={own.imageAlt}
                    width={720}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="max-h-full w-full object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="text-xs uppercase tracking-[0.25em] text-primary">
                    {own.category}
                  </span>
                  <h3 className="mt-3 font-heading text-3xl font-bold text-foreground lg:text-4xl">
                    {own.name}
                  </h3>
                  <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                    {own.description}
                  </p>
                  <BrandActions
                    shop="https://capitangin.mitiendanube.com/"
                    instagram="https://www.instagram.com/capitanginarg/"
                    buyLabel={t.brands.buyOnline}
                    instagramLabel={t.brands.viewInstagram}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-border lg:grid-cols-4">
                {capitanGallery.map((src, photoIndex) => (
                  <div
                    key={src}
                    className="relative aspect-[2/3] overflow-hidden border-border bg-secondary lg:border-l lg:first:border-l-0"
                  >
                    <Image
                      src={src}
                      alt={own.galleryAlts?.[photoIndex] ?? own.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center"
                    />
                  </div>
                ))}
              </div>

              <div className="border-t border-border bg-background p-6 lg:p-10">
                <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">
                  {t.brands.own.awardsTitle}
                </p>
                <div className="grid gap-6 sm:grid-cols-3">
                  {t.brands.own.awards.map((award, index) => (
                    <div key={award.medal + award.detail} className="flex flex-col gap-4">
                      <div className="overflow-hidden border border-border bg-secondary">
                        <Image
                          src={capitanAwardImages[index]}
                          alt={award.imageAlt}
                          width={640}
                          height={360}
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="aspect-[16/9] w-full object-cover object-center"
                        />
                      </div>
                      <div>
                        <p className="font-heading text-lg font-bold text-accent">
                          {award.medal}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {award.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Marcas que confían */}
          <div>
            <div className="mb-8 max-w-2xl lg:mb-10">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
                {t.brands.trusted.label}
              </p>
              <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
                {t.brands.trusted.title}
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                {t.brands.trusted.description}
              </p>
            </div>

            <SectionTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              className="-mx-6 px-6 lg:-mx-10 lg:px-10"
            />

            <article
              key={brand.name}
              className="group mt-6 overflow-hidden border border-border bg-card transition-colors hover:border-accent/60"
              role="tabpanel"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative overflow-hidden bg-secondary">
                  <Image
                    src={meta.image}
                    alt={brand.imageAlt}
                    width={900}
                    height={1100}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-72 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 lg:h-full lg:min-h-[28rem]"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
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
                    instagram={meta.instagram}
                    buyLabel={t.brands.buyOnline}
                    instagramLabel={t.brands.viewInstagram}
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
