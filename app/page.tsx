import { About } from "@/components/about"
import { Brands } from "@/components/brands"
import { CtaContact } from "@/components/cta-contact"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Nosotros } from "@/components/nosotros"
import { Services } from "@/components/services"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Winery } from "@/components/winery"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Brands />
        <Services />
        <About />
        <Winery />
        <Nosotros />
        <CtaContact />
      </main>
      <SiteFooter />
    </>
  )
}
