import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar({ onAgendar }: { onAgendar: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-obsidian/90 backdrop-blur-md border-b border-gold/20 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl tracking-widest text-ivory">
          VIS<span className="text-gold">CONDE</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-[0.2em] uppercase text-smoke hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onAgendar}
            className="border border-gold text-gold px-5 py-2 font-mono text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-obsidian transition-colors"
          >
            Agendar
          </button>
        </nav>

        <button className="md:hidden text-ivory" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-obsidian border-t border-gold/20 mt-4"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm tracking-[0.2em] uppercase text-smoke hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false)
                onAgendar()
              }}
              className="border border-gold text-gold px-5 py-3 font-mono text-xs tracking-[0.2em] uppercase"
            >
              Agendar
            </button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
