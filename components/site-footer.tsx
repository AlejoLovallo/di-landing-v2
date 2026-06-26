const brandLinks = [
  { label: "Capitán Gin", href: "https://www.instagram.com/capitanginarg/" },
  { label: "Gin Etheryo", href: "https://www.instagram.com/ginetheryo/" },
  { label: "El Refuerzo Gin Vermú", href: "https://www.instagram.com/elrefuerzoginvermu/" },
  { label: "Plaza de Grillos", href: "https://www.instagram.com/plazadegrillos/" },
]

const tiendaLinks = [
  { label: "Capitán Gin Tienda", href: "https://capitangin.mitiendanube.com/" },
  { label: "Plaza de Grillos", href: "https://plazadegrillos.com/" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 leading-none">
            <img
              src="/logo-di-white.png"
              alt="Destilería Independencia"
              className="h-16 w-16 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold tracking-tight text-foreground">
                Destilería
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                Independencia
              </span>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Espíritus artesanales con identidad argentina. Gins, vermús y vinos
            elaborados con oficio y libertad creativa.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-foreground">
            Marcas
          </h3>
          <ul className="mt-5 space-y-3">
            {brandLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-foreground">
            Tiendas
          </h3>
          <ul className="mt-5 space-y-3">
            {tiendaLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Destilería Independencia. Todos los derechos reservados.</p>
          <p>Beber con moderación. Prohibida su venta a menores de 18 años.</p>
        </div>
      </div>
    </footer>
  )
}
