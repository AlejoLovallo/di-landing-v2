const steps = [
  {
    number: "01",
    title: "Selección",
    description:
      "Elegimos cuidadosamente cada botánico, fruta y materia prima que da carácter a nuestros destilados.",
  },
  {
    number: "02",
    title: "Maceración",
    description:
      "Infusionamos los ingredientes el tiempo justo para extraer aromas y sabores en su punto óptimo.",
  },
  {
    number: "03",
    title: "Destilación",
    description:
      "Destilamos en pequeños lotes, controlando cada corte para lograr un resultado limpio y preciso.",
  },
  {
    number: "04",
    title: "Embotellado",
    description:
      "Embotellamos a mano y revisamos cada unidad, asegurando que llegue tal como la imaginamos.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Nuestro proceso
          </p>
          <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
            Del botánico a la botella
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-secondary"
            >
              <span className="font-heading text-5xl font-bold text-primary/30">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
