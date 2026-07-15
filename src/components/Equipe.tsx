import { motion } from 'framer-motion'
import { equipe } from '../data'

export default function Equipe() {
  return (
    <section id="equipe" className="py-28 px-6 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Os artesãos</p>
          <h2 className="section-title">
            Nossa <span className="italic text-gold">equipe</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipe.map((m, i) => (
            <motion.div
              key={m.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group text-center"
            >
              <div className="overflow-hidden mb-4 border border-gold/20">
                <img
                  src={m.foto}
                  alt={m.nome}
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl text-ivory">{m.nome}</h3>
              <p className="text-gold text-xs font-mono tracking-wider uppercase mt-1">{m.especialidade}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
