import { SITE_URL } from "@/lib/seo/constants"

/** Spanish FAQ — must match visible `#faq` copy (default locale / JSON-LD). */
export const homepageFaqEs = [
  {
    question: "¿Qué servicios ofrece Destilería Independencia?",
    answer:
      "Ofrecemos producción de gin a granel y a fasón, gin tonic embarrilado, vino a granel y otros desarrollos enológicos junto a Bodega Plaza de Grillos. Acompañamos fábricas, marcas, distribuidores, bares y restaurantes como socio productivo.",
  },
  {
    question: "¿Dónde está ubicada Destilería Independencia?",
    answer:
      "La microdestilería está en Capitán Sarmiento, provincia de Buenos Aires, a unos 150 km de la Ciudad de Buenos Aires (aproximadamente 1 h 40 en auto). Se llega por la Ruta Nacional 8, saliendo de Capital por Panamericana (ramal Pilar) y continuando por la RN 8 hacia el noroeste de la provincia.",
  },
  {
    question: "¿Cómo cotizo un proyecto de producción o fasón?",
    answer:
      "Completá el formulario de contacto del sitio o escribinos por WhatsApp al +54 9 11 2285-2023 / info@destileriaindependencia.com indicando el tipo de servicio, volumen estimado y plazos aproximados. Te respondemos para armar la cotización.",
  },
  {
    question: "¿Trabajan con bares, comercios y distribuidores?",
    answer:
      "Sí. Destilería Independencia trabaja con comercios, bares, distribuidores y partners gastronómicos. Usá el formulario de contacto indicando distribución como motivo, o escribinos a info@destileriaindependencia.com.",
  },
  {
    question: "¿Los productos cuentan con certificaciones?",
    answer:
      "Trabajamos con procesos y documentación habilitante según el tipo de producto, incluyendo RNPA cuando corresponde en desarrollos de gin a fasón, y certificación INV / libre de circulación en vino a granel.",
  },
] as const

export function getFaqPageJsonLd() {
  return {
    "@type": "FAQPage" as const,
    "@id": `${SITE_URL}/#faq`,
    mainEntity: homepageFaqEs.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answer,
      },
    })),
  }
}
