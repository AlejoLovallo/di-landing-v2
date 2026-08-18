"use client"

import Image from "next/image"

import { useTranslation } from "@/components/language-provider"
import { useContactModal } from "@/components/contact-modal-provider"
import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"

export function Hero() {
  const { t } = useTranslation()
  const { openContactModal } = useContactModal()

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        src={images.di.still}
        alt={t.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-accent" />
            {t.hero.tagline}
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <div className="hero-description mt-6 max-w-xl space-y-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="brand"
              onClick={() => openContactModal()}
              className="px-8"
            >
              {t.hero.ctaQuote}
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#servicios" />}
              className="rounded-none border-foreground/30 bg-transparent px-8 text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              {t.hero.ctaServices}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
