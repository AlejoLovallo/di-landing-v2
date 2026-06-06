import { Button } from "@/components/ui/button"

type Brand = {
  name: string
  category: string
  image: string
  description: string
  instagram: string
  shop?: string
  featured?: boolean
}

const brands: Brand[] = [
  {
    name: "Capitán Gin",
    category: "London Dry · Etiqueta Negra",
    image: "/capitan-gin.png",
    description:
      "Nuestro gin premium argentino. Un London Dry equilibrado y aromático, con un enebro protagonista y un final limpio. La Etiqueta Negra suma una infusión intensa para los paladares más audaces.",
    instagram: "https://www.instagram.com/capitanginarg/",
    shop: "https://capitangin.mitiendanube.com/",
    featured: true,
  },
  {
    name: "Gin Etheryo",
    category: "Gin botánico",
    image: "/gin-etheryo.png",
    description:
      "Un gin de inspiración botánica, fresco y floral, pensado para quienes buscan una experiencia más delicada y contemporánea en cada trago.",
    instagram: "https://www.instagram.com/ginetheryo/",
  },
  {
    name: "El Refuerzo Gin Vermú",
    category: "Gin Vermú",
    image: "/refuerzo-vermut.png",
    description:
      "La unión perfecta entre el gin y el vermú. Notas amargas, herbales y cítricas que rinden homenaje a la tradición del aperitivo argentino.",
    instagram: "https://www.instagram.com/elrefuerzoginvermu/",
  },
  {
    name: "Plaza de Grillos",
    category: "Bodega · Valle de Uco",
    image: "/plaza-grillos-wine.png",
    description:
      "Vinos elegantes y sofisticados del Valle de Uco, Mendoza. Malbecs y blends con gran potencial de guarda, hechos para conversar.",
    instagram: "https://www.instagram.com/plazadegrillos/",
    shop: "https://plazadegrillos.com/",
  },
]

export function Brands() {
  return (
    <section id="marcas" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Nuestras marcas
          </p>
          <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            Una familia de espíritus con identidad
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Bajo el sello de Destilería Independencia conviven marcas que
            comparten el mismo compromiso: producir con honestidad, creatividad
            y un profundo respeto por el origen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {brands.map((brand) => (
            <article
              key={brand.name}
              className={`group flex flex-col overflow-hidden border border-border bg-card transition-colors hover:border-primary/60 ${
                brand.featured ? "md:col-span-2 md:flex-row" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden bg-secondary ${
                  brand.featured ? "md:w-1/2" : ""
                }`}
              >
                <img
                  src={brand.image || "/placeholder.svg"}
                  alt={`Botella de ${brand.name}`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    brand.featured ? "h-full min-h-72" : "h-64"
                  }`}
                />
              </div>
              <div
                className={`flex flex-1 flex-col p-8 ${
                  brand.featured ? "justify-center md:p-12" : ""
                }`}
              >
                <span className="text-xs uppercase tracking-[0.25em] text-primary">
                  {brand.category}
                </span>
                <h3 className="mt-3 font-heading text-2xl font-bold text-foreground lg:text-3xl">
                  {brand.name}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {brand.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {brand.shop && (
                    <Button
                      nativeButton={false}
                      render={<a href={brand.shop} target="_blank" rel="noreferrer" />}
                      className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Comprar online
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    nativeButton={false}
                    render={<a href={brand.instagram} target="_blank" rel="noreferrer" />}
                    className="rounded-none border-border bg-transparent text-foreground hover:bg-foreground/10"
                  >
                    Ver en Instagram
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
