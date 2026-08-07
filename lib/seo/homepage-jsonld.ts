import { getFaqPageJsonLd } from "@/lib/seo/faq"
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
          "Destilería artesanal argentina especializada en elaboración de bebidas espirituosas para terceros, producción a granel y desarrollo de marcas propias. Marca propia Capitán Gin; marcas que confían: Gin Etheryo, El Refuerzo Gin, Ribecky Spirits; alianza con Plaza de Grillos.",
        email: ORGANIZATION.email,
        telephone: ORGANIZATION.phone,
        sameAs: [
          ORGANIZATION.instagram,
          "https://www.instagram.com/capitanginarg/",
          "https://www.instagram.com/ginetheryo/",
          "https://www.instagram.com/elrefuerzoginvermu/",
          "https://www.instagram.com/ribeckyspirits/",
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
          "Sitio oficial de Destilería Independencia: producción a fasón y granel, marcas, destilería artesanal y contacto comercial.",
        inLanguage: ["es", "en"],
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Destilería Independencia | Producción a fasón y espíritus artesanales",
        description:
          "Socio productivo para marcas, distribuidores y gastronomía: gin a fasón y granel, gin tonic embarrilado, vino a granel y desarrollos enológicos en Argentina.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#org` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".hero-description"],
        },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#spirits-production`,
        name: "Producción artesanal de espíritus a fasón y granel",
        description:
          "Elaboración de gin a granel y fasón, gin tonic embarrilado y otros desarrollos para marcas y canal gastronómico, con control de calidad en cada etapa.",
        serviceType: "Contract and bulk spirits production",
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
      getFaqPageJsonLd(),
    ],
  }
}
