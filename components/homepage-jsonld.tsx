import { getHomepageJsonLd } from "@/lib/seo/homepage-jsonld"

export function HomepageJsonLd() {
  const jsonLd = getHomepageJsonLd()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
