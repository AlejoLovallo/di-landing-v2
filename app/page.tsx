import { About } from "@/components/about"
import { Brands } from "@/components/brands"
import { CtaContact } from "@/components/cta-contact"
import { Faq } from "@/components/faq"
import { Hero } from "@/components/hero"
import { HomepageJsonLd } from "@/components/homepage-jsonld"
import { Marquee } from "@/components/marquee"
import { Nosotros } from "@/components/nosotros"
import { Services } from "@/components/services"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Winery } from "@/components/winery"

export default function Page() {
  return (
    <>
      <HomepageJsonLd />
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Brands />
        <Services />
        <About />
        <Winery />
        <Nosotros />
        <Faq />
        <CtaContact />
      </main>
      <SiteFooter />
    </>
  )
}
