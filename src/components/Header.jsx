
import { useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'

const LINKS = [
  ['Produtos', '#produtos'],
  ['Tecnologia', '#design'],
  ['Especificações', '#especificacoes'],
  ['Sobre', '#rodape'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b theme-header backdrop-blur-md">
      <nav
        className="flex items-center justify-between h-16 px-5 mx-auto max-w-7xl"
        aria-label="Principal"
      >
        <a
          href="#inicio"
          className="font-display text-xl font-extrabold tracking-[0.18em] text-white"
        >
          NEXORA
        </a>

        <ul className="hidden gap-8 md:flex">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm transition text-silver hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Carrinho (demonstrativo)"
            className="p-2 transition rounded-full text-silver hover:text-white"
          >
            <ShoppingBag size={20} />
          </button>

          <button
            type="button"
            className="p-2 rounded-full text-silver md:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="px-5 pb-4 border-t theme-panel md:hidden">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 text-silver"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
