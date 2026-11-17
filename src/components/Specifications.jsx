import * as Icons from 'lucide-react'
import { SPECS } from '../data/product'
export default function Specifications() {
  return (
    <section id="especificacoes" className="px-5 py-24 mx-auto max-w-7xl">
      <h2 className="text-4xl font-bold text-white font-display sm:text-5xl">Especificações</h2>
      <p className="mt-3 text-silver/80">Informações demonstrativas. Campos vazios aguardam preenchimento.</p>
      <dl className="grid gap-px mt-12 overflow-hidden border rounded-2xl border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {SPECS.map(({ icon, title, value }) => {
          const Icon = Icons[icon]
          return (
            <div key={title} className="bg-ink p-7">
              <Icon className="theme-icon" size={26} aria-hidden />
              <dt className="mt-4 text-lg font-bold text-white font-display">{title}</dt>
              <dd className="mt-1 text-sm text-silver/80">{value ?? 'A preencher'}</dd>
            </div>
          )
        })}
      </dl>
    </section>
  )
}
