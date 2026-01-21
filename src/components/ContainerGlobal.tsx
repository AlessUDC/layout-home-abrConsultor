import Contacto from "./Contacto"
import NuestrosProyectos from "./NuestrosProyectos"
import NuestrosServicios from "./NuestrosServicios"
import QuienesSomos from "./QuienesSomos"
import { useEffect, useRef } from "react"
import fondoGlobal from '/img/fondoGlobal.jpg'

interface ContainerGlobalProps {
  onVisible?: () => void
  onHidden?: () => void
}

export default function ContainerGlobal({ onVisible, onHidden }: ContainerGlobalProps) {
  const changeStylesHeader = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apenas entra 1px del componente QuienesSomos
          onVisible?.()
        } else {
          // Cuando deja de verse (ni 1px visible)
          onHidden?.()
        }
      },
      {
        root: null,          // viewport del navegador
        threshold: 0,        // activa apenas 1px visible
        rootMargin: "0px 0px -20% 0px"
      }
    )

    if (changeStylesHeader.current) observer.observe(changeStylesHeader.current)
    return () => observer.disconnect()
  }, [onVisible, onHidden])

  return (
    <div className="relative w-full h-full">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${fondoGlobal})` }}
      />
      {/* Imagen de fondo */}

      <div className="relative z-0" ref={changeStylesHeader}> 
        <QuienesSomos />
        <NuestrosServicios />
        <NuestrosProyectos />
        <Contacto />
      </div>
    </div>
  )
}
