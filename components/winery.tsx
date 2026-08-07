"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"

function WineryVideo({
  src,
  poster,
  label,
}: {
  src: string
  poster: string
  label: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px 0px" }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldLoad) return
    const video = videoRef.current
    if (!video) return
    void video.play().catch(() => {
      /* Autoplay can be blocked; poster remains visible */
    })
  }, [shouldLoad])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover object-center"
      muted
      playsInline
      loop
      preload="none"
      poster={poster}
      src={shouldLoad ? src : undefined}
      aria-label={label}
    />
  )
}

export function Winery() {
  const { t } = useTranslation()

  return (
    <section id="bodega" className="scroll-mt-36 bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 max-w-2xl lg:mb-12">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            {t.winery.label}
          </p>
          <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            {t.winery.title}
          </h2>
          <p className="mt-4 font-heading text-xl text-pretty text-primary lg:text-2xl">
            {t.winery.subtitle}
          </p>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.winery.description}
          </p>
        </div>

        <article className="border border-border bg-background">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary lg:aspect-auto lg:min-h-[32rem]">
              <WineryVideo
                src={images.brands.plazaGrillosVideo}
                poster={images.brands.plazaGrillos}
                label={t.winery.videoLabel}
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border-t border-border lg:aspect-auto lg:min-h-[32rem] lg:border-t-0 lg:border-l">
              <Image
                src={images.brands.plazaGrillosBottles}
                alt={t.winery.secondaryImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-border p-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:p-12">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-primary">
                {t.winery.category}
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold text-foreground lg:text-3xl">
                {t.winery.title}
              </h3>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
              <Button
                variant="brand"
                nativeButton={false}
                render={
                  <a
                    href="https://plazadegrillos.com/"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
              >
                {t.winery.buyOnline}
              </Button>
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a
                    href="https://www.instagram.com/plazadegrillos/"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                className="rounded-none border-border bg-transparent text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent"
              >
                {t.winery.viewInstagram}
              </Button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
