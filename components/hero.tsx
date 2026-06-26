"use client"

import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <img
        src={images.di.still}
        alt={t.hero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            {t.hero.tagline}
          </p>
          <h1 className="font-heading text-5xl font-bold leading-[1.05] text-balance text-foreground sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="hero-description mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href="#marcas" />}
              className="rounded-none bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              {t.hero.ctaBrands}
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#destileria" />}
              className="rounded-none border-foreground/30 bg-transparent px-8 text-foreground hover:bg-foreground/10"
            >
              {t.hero.ctaDistillery}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
