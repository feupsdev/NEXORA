
import { useState } from 'react'
import ProductViewer from './ProductViewer'
import ColorSelector from './ColorSelector'
import StorageSelector from './StorageSelector'
import { PRICE } from '../data/product'

export default function Hero({ cfg }) {
  const [notice, setNotice] = useState(false)

  return (
    <section id="inicio" className="relative pt-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none theme-glow"
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-4 px-5 lg:grid-cols-[1fr_1.2fr_1fr]">

        <div className="order-1 pt-10 rise lg:pt-0">
          <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full theme-selected">
            Nova geração
          </span>

          <h1 className="mt-5 font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            NEXORA<br />ONE
          </h1>

          <p className="mt-4 text-xl text-white">
            Tecnologia que acompanha seu próximo nível.
          </p>

          <p className="max-w-sm mt-3 text-silver/80">
            Um smartphone conceitual com acabamento sofisticado e tecnologia em cada detalhe.
            Gire, aproxime e explore cada ângulo do modelo.
          </p>

          <a
            href="#design"
            className="inline-block py-3 font-medium transition rounded-full theme-button mt-7 px-7 hover:brightness-110"
          >
            Conhecer o produto
          </a>
        </div>

        <ProductViewer
          colorId={cfg.applied}
          className="order-2 h-[70svh] min-h-[420px] w-full cursor-grab active:cursor-grabbing lg:h-[78svh]"
        />

        <div className="order-3 p-6 space-y-6 border theme-panel rounded-2xl backdrop-blur lg:order-3">

          <ColorSelector
            requested={cfg.requested}
            onPick={cfg.pickColor}
            comingSoon={cfg.comingSoon}
          />

          <StorageSelector
            value={cfg.storage}
            onChange={cfg.setStorage}
          />

          <div>
            <p className="text-sm text-silver/70">Preço</p>

            <p className="text-2xl font-bold text-white font-display">
              {PRICE ?? 'A definir'}
            </p>

            <p className="text-xs text-silver/60">
              Valor demonstrativo — projeto conceitual.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setNotice(true)}
            className="w-full py-3 font-medium rounded-full theme-button"
          >
            Comprar
          </button>

          {notice && (
            <p className="text-sm text-silver" role="status">
              Projeto conceitual: a compra não está disponível.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
