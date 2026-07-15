import { motion } from 'framer-motion'
import { Award, Gem, Users } from 'lucide-react'

const valores = [
  { icone: Award, titulo: 'Excelência', texto: 'Cada corte tratado como assinatura, não como tarefa.' },
  { icone: Gem, titulo: 'Elegância', texto: 'Detalhes que fazem diferença, do café à toalha quente.' },
  { icone: Users, titulo: 'Comunidade', texto: 'Mais que clientes, uma casa pra quem preza o próprio estilo.' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-28 px-6 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow mb-4">Nossa história</p>
            <h2 className="section-title mb-6">
              Uma tradição que <span className="italic text-gold">começou pequena</span>
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-smoke leading-relaxed mb-4">
              A Visconde nasceu em 2016, numa esquina discreta, com uma cadeira e um
              espelho emprestado. Hoje é referência em corte clássico e barba bem
              feita — sem perder a essência de barbearia de bairro que trata cada
              cliente pelo nome.
            </p>
            <p className="text-smoke leading-relaxed">
              Nossa missão é simples: devolver a confiança de quem senta na cadeira,
              com técnica apurada e um ambiente que respira elegância em cada detalhe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&h=800&fit=crop"
              alt="Barbeiro trabalhando"
              className="w-full h-[420px] object-cover border border-gold/30"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold text-obsidian px-6 py-4 font-display text-2xl italic hidden sm:block">
              Desde 2016
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mt-24">
          {valores.map((v, i) => (
            <motion.div
              key={v.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gold/20 p-8 text-center hover:border-gold/50 transition-colors"
            >
              <v.icone className="mx-auto text-gold mb-4" size={30} />
              <h3 className="font-display text-xl mb-2 text-ivory">{v.titulo}</h3>
              <p className="text-smoke text-sm">{v.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
