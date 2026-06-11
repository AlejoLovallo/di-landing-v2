import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <img
        src="/distillery-still.jpg"
        alt="Alambique de cobre en la Destilería Independencia"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Destilería artesanal · Argentina
          </p>
          <h1 className="font-heading text-5xl font-bold leading-[1.05] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Espíritus que cuentan su propia historia
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            En Destilería Independencia elaboramos gins, vermús y vinos con
            carácter propio. Cada botella nace del oficio, la paciencia y la
            búsqueda incansable de un sabor auténtico.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href="#marcas" />}
              className="rounded-none bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              Conocer nuestras marcas
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#destileria" />}
              className="rounded-none border-foreground/30 bg-transparent px-8 text-foreground hover:bg-foreground/10"
            >
              Sobre la destilería
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
