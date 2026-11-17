
import {
  Mail,
  Globe,
  Github,
  Instagram,
  Linkedin,
  Smartphone,
  ArrowUpRight,
} from 'lucide-react'

const NAVIGATION = [
  ['Produtos', '#produtos'],
  ['Tecnologia', '#design'],
  ['Sobre o projeto', '#rodape'],
]

const CONTACTS = [
  {
    label: 'E-mail',
    value: 'felipehenriquedsc@gmail.com',
    href: 'mailto:felipehenriquedsc@gmail.com',
    icon: Mail,
  },
  {
    label: 'Website',
    value: 'feupsdev.com.br',
    href: 'https://feupsdev.com.br',
    icon: Globe,
  },
  {
    label: 'GitHub',
    value: 'Feulips',
    href: 'https://github.com/Feulips',
    icon: Github,
  },
  {
    label: 'Instagram',
    value: '@feupsdev',
    href: 'https://www.instagram.com/feupsdev/',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn',
    href: 'https://www.linkedin.com/in/felipe-henrique-07990228a/',
    icon: Linkedin,
  },
]

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      id="rodape"
      className="px-5 border-t border-white/10 bg-black/20"
    >
      <div className="pt-16 pb-8 mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_1fr]">

          {/* Identidade */}
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-2"
              aria-label="NEXORA, voltar ao início"
            >
              <Smartphone className="w-6 h-6 theme-icon" />

              <span className="font-display text-2xl font-extrabold tracking-[0.18em] text-white">
                NEXORA
              </span>
            </a>

            <p className="max-w-sm mt-5 text-sm leading-relaxed text-silver/70">
              Tecnologia, design e experiência em uma nova perspectiva.
              Conheça o NEXORA ONE, um conceito de smartphone premium
              desenvolvido com uma experiência interativa em 3D.
            </p>

            <a
              href="https://feupsdev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm transition theme-link hover:brightness-125"
            >
              Desenvolvido por Feups
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <p className="text-xs font-bold uppercase tracking-[0.2em] theme-icon">
              Navegação
            </p>

            <ul className="mt-5 space-y-3 text-sm text-silver/80">
              {NAVIGATION.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="transition hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] theme-icon">
              Conecte-se
            </p>

            <ul className="mt-5 space-y-3">
              {CONTACTS.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center gap-3 text-sm transition group text-silver/80 hover:text-white"
                  >
                    <Icon className="w-4 h-4 transition shrink-0 theme-link group-hover:scale-110" />

                    <span>{value}</span>

                    <ArrowUpRight
                      size={12}
                      className="transition opacity-0 group-hover:opacity-70"
                    />
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="https://x.com/feupsdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm transition group text-silver/80 hover:text-white"
                >
                  <XIcon />
                  <span>X / Twitter</span>
                  <ArrowUpRight
                    size={12}
                    className="transition opacity-0 group-hover:opacity-70"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Créditos */}
        <div className="flex flex-col gap-5 pt-6 border-t mt-14 border-white/10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs leading-relaxed text-silver/50">
              Projeto demonstrativo e conceitual. NEXORA é uma marca fictícia;
              preços, especificações e disponibilidade não representam ofertas reais.
            </p>

            <p className="mt-3 text-xs leading-relaxed text-silver/40">
              Modelo 3D baseado em “Apple iPhone 15 Pro Max”, por polyman
              (Sketchfab), licença CC BY 4.0. Modificado com remoção do logotipo,
              substituição da textura de tela e otimização do arquivo.
            </p>
          </div>

          <p className="text-xs shrink-0 text-silver/50">
            © {new Date().getFullYear()} NEXORA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
