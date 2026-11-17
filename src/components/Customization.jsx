
import ProductViewer from './ProductViewer'
import ColorSelector from './ColorSelector'
import StorageSelector from './StorageSelector'
import { useInView } from '../hooks/useInView'

export default function Customization({ cfg }) {
  const [ref, visible] = useInView()

  return (
    <section
      id="produtos"
      ref={ref}
      className="px-5 py-24 mx-auto max-w-7xl"
    >
      <h2 className="text-4xl font-bold text-white font-display sm:text-5xl">
        Monte o seu NEXORA ONE
      </h2>

      <p className="max-w-xl mt-3 text-silver/80">
        Escolha cor e armazenamento. Cores sem modelo 3D aparecem como
        “em breve”, sem simular uma troca que ainda não existe.
      </p>

      <div className="grid items-center gap-10 mt-12 lg:grid-cols-2">
        <div className="theme-stage h-[460px] rounded-3xl border theme-outline">
          {visible && (
            <ProductViewer
              colorId={cfg.applied}
              className="w-full h-full cursor-grab"
            />
          )}
        </div>

        <div className="space-y-8">
          <ColorSelector
            requested={cfg.requested}
            onPick={cfg.pickColor}
            comingSoon={cfg.comingSoon}
          />

          <StorageSelector
            value={cfg.storage}
            onChange={cfg.setStorage}
          />

          <p className="p-4 text-sm border theme-panel rounded-xl text-silver">
            Configuração:{' '}
            <strong className="text-white">
              {cfg.appliedColor.name}
            </strong>
            {' · '}
            <strong className="text-white">{cfg.storage}</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
