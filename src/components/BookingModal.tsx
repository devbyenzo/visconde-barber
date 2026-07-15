import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Check, Scissors, ChevronLeft } from 'lucide-react'
import { equipe, servicos, horarios } from '../data'

type Props = {
  aberto: boolean
  onFechar: () => void
}

export default function BookingModal({ aberto, onFechar }: Props) {
  const [etapa, setEtapa] = useState(1)
  const [servico, setServico] = useState<string | null>(null)
  const [barbeiro, setBarbeiro] = useState<string | null>(null)
  const [horario, setHorario] = useState<string | null>(null)

  const reset = () => {
    setEtapa(1)
    setServico(null)
    setBarbeiro(null)
    setHorario(null)
  }

  const fechar = () => {
    onFechar()
    setTimeout(reset, 300)
  }

  const proximo = () => setEtapa((e) => Math.min(e + 1, 4))
  const voltar = () => setEtapa((e) => Math.max(e - 1, 1))

  return (
    <AnimatePresence>
      {aberto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-sm"
          onClick={fechar}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-charcoal border border-gold/30 w-full max-w-lg max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20 sticky top-0 bg-charcoal z-10">
              <div className="flex items-center gap-2">
                <Scissors className="text-gold" size={18} />
                <span className="font-display text-xl text-ivory">Agendar Horário</span>
              </div>
              <button onClick={fechar} className="text-smoke hover:text-gold transition-colors">
                <X size={22} />
              </button>
            </div>

            {etapa < 4 && (
              <div className="flex gap-2 px-6 pt-5">
                {[1, 2, 3].map((n) => (
                  <div key={n} className={`h-1 flex-1 rounded-full ${n <= etapa ? 'bg-gold' : 'bg-gold/15'}`} />
                ))}
              </div>
            )}

            <div className="p-6">
              {etapa === 1 && (
                <Etapa titulo="Escolha o serviço">
                  <div className="flex flex-col gap-3">
                    {servicos.map((s) => (
                      <OpcaoCard
                        key={s.nome}
                        selecionado={servico === s.nome}
                        onClick={() => setServico(s.nome)}
                        titulo={s.nome}
                        subtitulo={s.preco}
                      />
                    ))}
                  </div>
                </Etapa>
              )}

              {etapa === 2 && (
                <Etapa titulo="Escolha o barbeiro">
                  <div className="grid grid-cols-2 gap-3">
                    {equipe.map((m) => (
                      <button
                        key={m.nome}
                        onClick={() => setBarbeiro(m.nome)}
                        className={`text-left border p-3 transition-colors ${
                          barbeiro === m.nome ? 'border-gold bg-gold/10' : 'border-gold/15 hover:border-gold/40'
                        }`}
                      >
                        <img src={m.foto} alt={m.nome} className="w-full aspect-square object-cover mb-2 grayscale" />
                        <p className="font-display text-sm text-ivory leading-tight">{m.nome}</p>
                        <p className="text-smoke text-[10px] font-mono uppercase mt-1">{m.especialidade}</p>
                      </button>
                    ))}
                  </div>
                </Etapa>
              )}

              {etapa === 3 && (
                <Etapa titulo="Escolha o horário">
                  <div className="grid grid-cols-3 gap-3">
                    {horarios.map((h) => (
                      <button
                        key={h}
                        onClick={() => setHorario(h)}
                        className={`py-3 font-mono text-sm border transition-colors ${
                          horario === h
                            ? 'border-gold bg-gold text-obsidian'
                            : 'border-gold/15 text-smoke hover:border-gold/40 hover:text-gold'
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </Etapa>
              )}

              {etapa === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="text-obsidian" size={30} />
                  </motion.div>
                  <h3 className="font-display text-3xl text-ivory mb-2">Agendado com sucesso!</h3>
                  <p className="text-smoke text-sm mb-8">
                    {servico} com {barbeiro?.split(' ')[0]} às {horario}. Te esperamos na cadeira!
                  </p>
                  <div className="bg-obsidian/60 border border-gold/20 p-4 text-left text-sm font-mono mb-8">
                    <p className="text-smoke">Serviço: <span className="text-gold">{servico}</span></p>
                    <p className="text-smoke">Barbeiro: <span className="text-gold">{barbeiro}</span></p>
                    <p className="text-smoke">Horário: <span className="text-gold">{horario}</span></p>
                  </div>
                  <button
                    onClick={fechar}
                    className="bg-gold text-obsidian font-mono text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-gold-light transition-colors"
                  >
                    Fechar
                  </button>
                </motion.div>
              )}
            </div>

            {etapa < 4 && (
              <div className="flex items-center justify-between px-6 py-5 border-t border-gold/20">
                <button
                  onClick={voltar}
                  disabled={etapa === 1}
                  className="flex items-center gap-1 text-smoke text-xs font-mono uppercase tracking-widest disabled:opacity-30 hover:text-gold transition-colors"
                >
                  <ChevronLeft size={16} /> Voltar
                </button>
                <button
                  onClick={proximo}
                  disabled={
                    (etapa === 1 && !servico) || (etapa === 2 && !barbeiro) || (etapa === 3 && !horario)
                  }
                  className="bg-gold text-obsidian font-mono text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold-light transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  {etapa === 3 ? 'Confirmar' : 'Continuar'}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Etapa({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
      <h3 className="font-display text-2xl text-ivory mb-5">{titulo}</h3>
      {children}
    </motion.div>
  )
}

function OpcaoCard({
  selecionado,
  onClick,
  titulo,
  subtitulo,
}: {
  selecionado: boolean
  onClick: () => void
  titulo: string
  subtitulo: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between border p-4 text-left transition-colors ${
        selecionado ? 'border-gold bg-gold/10' : 'border-gold/15 hover:border-gold/40'
      }`}
    >
      <span className="font-display text-lg text-ivory">{titulo}</span>
      <span className="font-mono text-gold text-sm">{subtitulo}</span>
    </button>
  )
}
