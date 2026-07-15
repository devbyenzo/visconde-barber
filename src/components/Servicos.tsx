import { motion } from 'framer-motion'
import { Scissors, Sparkles, Crown, Brush, Droplet } from 'lucide-react'
import { servicos } from '../data'

const iconMap: Record<string, typeof Scissors> = {
  scissors: Scissors,
  razor: Droplet,
  crown: Crown,
  brush: Brush,
  sparkles: Sparkles,
}

export default function Servicos({ onAgendar }: { onAgendar: () => void }) {
  return (
    <section id="servicos" className="py-28 px-6 bg-obsidian">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">O que fazemos</p>
          <h2 className="section-title">
            Serviços de <span className="italic text-gold">Visconde</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s, i) => {
            const Icon = iconMap[s.icone]
            return (
              <motion.div
                key={s.nome}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-charcoal border border-gold/15 p-8 hover:border-gold/60 transition-colors flex flex-col"
              >
                <Icon className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-display text-2xl text-ivory mb-2">{s.nome}</h3>
                <p className="text-smoke text-sm flex-1 mb-6">{s.descricao}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                  <span className="font-mono text-gold text-lg">{s.preco}</span>
                  <button
                    onClick={onAgendar}
                    className="font-mono text-xs tracking-widest uppercase text-smoke hover:text-gold transition-colors"
                  >
                    Agendar →
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
