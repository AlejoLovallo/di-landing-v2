export function About() {
  return (
    <section id="destileria" className="relative overflow-hidden bg-card py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative">
          <img
            src="/distillery-detail.jpg"
            alt="Detalle del alambique de cobre de la Destilería Independencia"
            className="h-full w-full border border-border object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden border border-primary bg-background px-8 py-6 lg:block">
            <p className="font-heading text-3xl font-bold text-primary">Oficio</p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              en cada destilado
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            La destilería
          </p>
          <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            Independencia es una forma de hacer las cosas
          </h2>
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Nacimos con la convicción de que un buen destilado se construye
              con tiempo, materia prima honesta y una mirada propia. Esa libertad
              creativa es la que da nombre a la casa: Destilería Independencia.
            </p>
            <p>
              Desde nuestros gins hasta los vinos del Valle de Uco, cada producto
              es el resultado de un proceso cuidado de principio a fin. No
              seguimos modas: buscamos sabores que perduren y que inviten a
              compartir.
            </p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Producción artesanal en pequeños lotes",
              "Botánicos e ingredientes seleccionados",
              "Identidad argentina, alcance regional",
              "Control de calidad en cada etapa",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
