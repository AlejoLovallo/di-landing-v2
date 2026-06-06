import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Brands } from "@/components/brands"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { CtaContact } from "@/components/cta-contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Brands />
        <About />
        <Process />
        <CtaContact />
      </main>
      <SiteFooter />
    </>
  )
}
