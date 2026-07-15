import { motion } from 'framer-motion'
import { galeria } from '../data'

export default function Galeria() {
  return (
    <section id="galeria" className="py-28 px-6 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Nosso ambiente</p>
          <h2 className="section-title">
            Galeria <span className="italic text-gold">Visconde</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galeria.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="overflow-hidden aspect-square"
            >
              <img
                src={src}
                alt={`Ambiente da barbearia ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
