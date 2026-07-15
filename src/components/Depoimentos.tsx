import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { depoimentos } from '../data'

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-28 px-6 bg-obsidian">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Quem passou pela cadeira</p>
          <h2 className="section-title">
            Depoimentos <span className="italic text-gold">de clientes</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <motion.div
              key={d.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-charcoal border border-gold/15 p-8 relative"
            >
              <Quote className="text-gold/30 absolute top-6 right-6" size={30} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: d.nota }).map((_, j) => (
                  <Star key={j} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-smoke text-sm mb-6 leading-relaxed">"{d.texto}"</p>
              <p className="font-display text-lg text-ivory">{d.nome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
