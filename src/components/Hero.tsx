import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero({ onAgendar }: { onAgendar: () => void }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&h=1200&fit=crop"
          alt="Interior da Barbearia Visconde"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/70 to-obsidian" />
        <div className="absolute inset-0 bg-obsidian/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          Barbearia · Est. 2016
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-6xl md:text-8xl leading-[0.95] text-ivory"
        >
          Corte de <span className="italic text-gold">nobre</span>,
          <br /> navalha de <span className="text-outline-gold italic">respeito</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="gold-divider mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-smoke text-lg max-w-xl mx-auto mb-10"
        >
          Onde tradição encontra estilo. Ambiente em preto, dourado e madeira —
          feito pra quem trata o corte como um ritual.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onClick={onAgendar}
          className="bg-gold text-obsidian font-mono text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold-light transition-colors"
        >
          Agendar Horário
        </motion.button>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/70"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  )
}
