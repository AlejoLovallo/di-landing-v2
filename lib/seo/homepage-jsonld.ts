import { ORGANIZATION, SITE_URL } from "@/lib/seo/constants"

export function getHomepageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: ORGANIZATION.name,
        legalName: ORGANIZATION.legalName,
        url: SITE_URL,
        logo: ORGANIZATION.logo,
        description:
          "Destilería artesanal argentina que elabora gins, vermús y vinos premium bajo marcas propias como Capitán Gin, Gin Etheryo, El Refuerzo Gin Vermú y Plaza de Grillos.",
        email: ORGANIZATION.email,
        telephone: ORGANIZATION.phone,
        sameAs: [
          ORGANIZATION.instagram,
          "https://www.instagram.com/capitanginarg/",
          "https://www.instagram.com/ginetheryo/",
          "https://www.instagram.com/elrefuerzoginvermu/",
          "https://www.instagram.com/plazadegrillos/",
          "https://capitangin.mitiendanube.com/",
          "https://plazadegrillos.com/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: ORGANIZATION.phone,
          email: ORGANIZATION.email,
          contactType: "customer service",
          availableLanguage: ["Spanish", "English"],
          areaServed: "AR",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: ORGANIZATION.address.streetAddress,
          addressLocality: ORGANIZATION.address.addressLocality,
          addressRegion: ORGANIZATION.address.addressRegion,
          postalCode: ORGANIZATION.address.postalCode,
          addressCountry: ORGANIZATION.address.addressCountry,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Destilería Independencia",
        description:
          "Sitio oficial de Destilería Independencia: marcas, destilería, proceso artesanal y contacto.",
        inLanguage: ["es", "en"],
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Destilería Independencia | Destilería de espíritus artesanales",
        description:
          "Destilería Independencia elabora gins, vermús y vinos premium en Argentina.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#org` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".hero-description"],
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "Destilería Independencia",
        description:
          "Sitio web oficial de Destilería Independencia para descubrir marcas, conocer la destilería artesanal y contactar al equipo comercial.",
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        inLanguage: ["es", "en"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "ARS",
        },
        provider: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#spirits-production`,
        name: "Producción artesanal de espíritus",
        description:
          "Elaboración en pequeños lotes de gins, vermús y vinos con botánicos seleccionados y control de calidad en cada etapa.",
        serviceType: "Artisan spirits production",
        areaServed: {
          "@type": "Country",
          name: "Argentina",
        },
        provider: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#distribution`,
        name: "Distribución y ventas mayoristas",
        description:
          "Distribución para comercios, bares y partners gastronómicos interesados en las marcas de Destilería Independencia.",
        serviceType: "Beverage distribution",
        provider: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué productos elabora Destilería Independencia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Destilería Independencia elabora gins artesanales (Capitán Gin, Gin Etheryo), El Refuerzo Gin Vermú y vinos de Plaza de Grillos del Valle de Uco, Mendoza.",
            },
          },
          {
            "@type": "Question",
            name: "¿Dónde está ubicada Destilería Independencia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La microdestilería está en Capitán Sarmiento, provincia de Buenos Aires. La oficina comercial está en Cádiz 3757, 1° B, Ciudad Autónoma de Buenos Aires, Argentina.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo puedo comprar los productos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Podés comprar Capitán Gin en capitangin.mitiendanube.com y Plaza de Grillos en plazadegrillos.com. Para consultas comerciales, usá el formulario de contacto del sitio o WhatsApp al +54 11 2295-2023.",
            },
          },
          {
            "@type": "Question",
            name: "¿Trabajan con bares, comercios y distribuidores?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Destilería Independencia trabaja con comercios, bares y partners gastronómicos. Escribí a hola@destileriaindependencia.com o completá el formulario de contacto indicando distribución como motivo.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuáles son las marcas de Destilería Independencia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Las marcas propias son Capitán Gin (London Dry), Gin Etheryo (botánico), El Refuerzo Gin Vermú y Plaza de Grillos (bodega en Valle de Uco).",
            },
          },
        ],
      },
    ],
  }
}
