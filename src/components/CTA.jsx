
export default function CTA() {
  return (
    <section className="px-5 py-24">
      <div
        className="max-w-5xl p-10 mx-auto text-center border rounded-3xl theme-outline sm:p-16"
        style={{
          background: `
            linear-gradient(
              135deg,
              var(--page-background),
              var(--accent),
              var(--panel-background)
            )
          `,
        }}
      >
        <h2 className="text-4xl font-extrabold text-white font-display sm:text-5xl">
          Pronto para conhecer o próximo nível?
        </h2>

        <p className="mt-4 text-white/85">
          Descubra uma nova experiência em tecnologia.
        </p>

        <a
          href="#inicio"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-medium text-[#101216] transition hover:scale-105 hover:bg-white/90"
        >
          Explorar NEXORA ONE
        </a>
      </div>
    </section>
  )
}
