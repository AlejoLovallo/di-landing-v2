import { Button } from "@/components/ui/button"

export function CtaContact() {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <img
        src="/distillery-gauge.jpg"
        alt="Termómetro del alambique de cobre de la Destilería Independencia"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/90" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary">
          Contacto
        </p>
        <h2 className="font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl">
          ¿Querés conocer más o sumar nuestras marcas?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Trabajamos con comercios, bares y amantes de los buenos destilados.
          Escribinos y conversemos sobre distribución, eventos o pedidos
          especiales.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            render={<a href="mailto:hola@destileriaindependencia.com" />}
            className="rounded-none bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            Escribinos
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={
              <a
                href="https://www.instagram.com/destileriaindependencia/"
                target="_blank"
                rel="noreferrer"
              />
            }
            className="rounded-none border-foreground/30 bg-transparent px-8 text-foreground hover:bg-foreground/10"
          >
            Seguinos en Instagram
          </Button>
        </div>
      </div>
    </section>
  )
}
