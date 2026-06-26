import { About } from "@/components/about"
import { Brands } from "@/components/brands"
import { CtaContact } from "@/components/cta-contact"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Nosotros } from "@/components/nosotros"
import { Process } from "@/components/process"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Brands />
        <About />
        <Nosotros />
        <Process />
        <CtaContact />
      </main>
      <SiteFooter />
    </>
  )
}
