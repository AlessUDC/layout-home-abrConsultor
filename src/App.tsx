import { useState } from "react"
import ContainerGlobal from "./components/ContainerGlobal"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

export default function App() {
  const [activo, setActivo] = useState(false)

  return (
    <>
      <Header activo={activo} />
      <Hero />
      <ContainerGlobal 
        onVisible={() => setActivo(true)} 
        onHidden={() => setActivo(false)} 
      />
      <Footer />
    </>
  )
}


