
export default function DesignSection() {
  return (
    <section
      id="design"
      className="py-24 theme-section border-y theme-outline"
    >
      <div className="grid gap-10 px-5 mx-auto max-w-7xl lg:grid-cols-2">
        <h2 className="text-4xl font-bold text-white font-display sm:text-6xl">
          Design que some para a experiência aparecer.
        </h2>

        <div className="space-y-5 text-silver/85">
          <p>
            Linhas limpas, acabamento sofisticado e um traseiro sem símbolos:
            o aparelho fala pela forma.
          </p>

          <p>
            O modelo 3D mostra o acabamento em tempo real.
            Arraste para ver os ângulos e use o zoom para aproximar os detalhes.
          </p>
        </div>
      </div>
    </section>
  )
}
