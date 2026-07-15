import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Galeria from './components/Galeria'
import Depoimentos from './components/Depoimentos'
import Equipe from './components/Equipe'
import Contato from './components/Contato'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

export default function App() {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar onAgendar={() => setModalAberto(true)} />
      <Hero onAgendar={() => setModalAberto(true)} />
      <Sobre />
      <Servicos onAgendar={() => setModalAberto(true)} />
      <Galeria />
      <Depoimentos />
      <Equipe />
      <Contato />
      <Footer />
      <BookingModal aberto={modalAberto} onFechar={() => setModalAberto(false)} />
    </div>
  )
}
