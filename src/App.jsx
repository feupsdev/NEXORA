
import Header from './components/Header'
import Hero from './components/Hero'
import Customization from './components/Customization'
import Specifications from './components/Specifications'
import DesignSection from './components/DesignSection'
import CTA from './components/CTA'
import Footer from './components/Footer'

import { useConfigurator } from './hooks/useConfigurator'

const themes = {
  azul: {
    accent: '#3988FF',
    rgb: '57, 136, 255',
    background: '#080E19',
    panel: '#101D30',
    glow: 'rgba(57, 136, 255, 0.20)',
    contrast: '#ffffff',
  },

  preto: {
    accent: '#9299A5',
    rgb: '146, 153, 165',
    background: '#090A0D',
    panel: '#17191E',
    glow: 'rgba(146, 153, 165, 0.15)',
    contrast: '#090A0D',
  },

  prata: {
    accent: '#C7D0DC',
    rgb: '199, 208, 220',
    background: '#11151B',
    panel: '#202731',
    glow: 'rgba(199, 208, 220, 0.17)',
    contrast: '#11151B',
  },

  roxo: {
    accent: '#A477FF',
    rgb: '164, 119, 255',
    background: '#130D20',
    panel: '#211631',
    glow: 'rgba(164, 119, 255, 0.20)',
    contrast: '#130D20',
  },

  dourado: {
    accent: '#D5A653',
    rgb: '213, 166, 83',
    background: '#19140D',
    panel: '#282014',
    glow: 'rgba(213, 166, 83, 0.20)',
    contrast: '#19140D',
  },
}

export default function App() {
  const cfg = useConfigurator()

  // O tema acompanha a cor do modelo 3D realmente aplicado.
  const theme = themes[cfg.applied] || themes.azul

  return (
    <div
      className="min-h-screen app-shell"
      style={{
        '--accent': theme.accent,
        '--accent-rgb': theme.rgb,
        '--page-background': theme.background,
        '--panel-background': theme.panel,
        '--page-glow': theme.glow,
        '--accent-contrast': theme.contrast,
      }}
    >
      <Header />

      <main>
        <Hero cfg={cfg} />
        <Customization cfg={cfg} />
        <DesignSection />
        <Specifications />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
