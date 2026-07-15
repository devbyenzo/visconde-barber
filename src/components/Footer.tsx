import { Instagram, MessageCircle, Facebook } from 'lucide-react'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/20 py-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a href="#home" className="font-display text-2xl tracking-widest text-ivory">
            VIS<span className="text-gold">CONDE</span>
          </a>
          <p className="text-smoke text-xs mt-2 font-mono">Corte de nobre, navalha de respeito.</p>
        </div>

        <nav className="flex flex-wrap gap-6 justify-center">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-mono text-xs tracking-widest uppercase text-smoke hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-smoke hover:text-gold transition-colors">
            <MessageCircle size={20} />
          </a>
          <a href="https://instagram.com/visconde.barbearia" target="_blank" rel="noopener noreferrer" className="text-smoke hover:text-gold transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-smoke hover:text-gold transition-colors">
            <Facebook size={20} />
          </a>
        </div>
      </div>

      <p className="text-center text-smoke/60 text-xs font-mono mt-10">
        © {new Date().getFullYear()} Visconde Barbearia. Todos os direitos reservados.
      </p>
    </footer>
  )
}
