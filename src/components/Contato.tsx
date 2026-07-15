import { motion } from 'framer-motion'
import { MessageCircle, Instagram, Clock, MapPin } from 'lucide-react'

export default function Contato() {
  return (
    <section id="contato" className="py-28 px-6 bg-obsidian">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Venha nos visitar</p>
          <h2 className="section-title">
            Fale com a <span className="italic text-gold">Visconde</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-gold/20 overflow-hidden h-[380px]"
          >
            <iframe
              title="Localização Visconde Barbearia"
              className="w-full h-full grayscale contrast-125 opacity-90"
              loading="lazy"
              src="https://www.google.com/maps?q=Barbearia&output=embed"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-gold/20 p-6 hover:border-gold/60 transition-colors"
            >
              <MessageCircle className="text-gold" size={28} />
              <div>
                <p className="font-display text-lg text-ivory">WhatsApp</p>
                <p className="text-smoke text-sm">(11) 99999-9999</p>
              </div>
            </a>

            <a
              href="https://instagram.com/visconde.barbearia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-gold/20 p-6 hover:border-gold/60 transition-colors"
            >
              <Instagram className="text-gold" size={28} />
              <div>
                <p className="font-display text-lg text-ivory">Instagram</p>
                <p className="text-smoke text-sm">@visconde.barbearia</p>
              </div>
            </a>

            <div className="flex items-center gap-4 border border-gold/20 p-6">
              <MapPin className="text-gold" size={28} />
              <div>
                <p className="font-display text-lg text-ivory">Endereço</p>
                <p className="text-smoke text-sm">Rua das Tesouras, 123 — Centro</p>
              </div>
            </div>

            <div className="flex items-center gap-4 border border-gold/20 p-6">
              <Clock className="text-gold" size={28} />
              <div>
                <p className="font-display text-lg text-ivory">Horários</p>
                <p className="text-smoke text-sm">Ter–Sáb: 09h às 19h · Dom-Seg: fechado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
