import Hamburger from 'hamburger-react'
import { useState } from 'react'

interface HeaderProps {
  activo: boolean
}

export default function Header({ activo }: HeaderProps) {
  const [isOpen, setOpen] = useState(false)

  const getLogo = (type: number) => {
    switch (type) {
      case 1: return "/img/abr-logo-blue.png"
      case 2: return "/img/abr-logo-white.svg"
      default: return "/img/abr-logo-white.svg"
    }
  }

  return (
    // Contenedor Padre
    <div className="w-full z-50 fixed">
      <div
        className={`
          w-full
          
        `}
      >
        {/*  */}
        <div 
          className={`
          w-full h-23 lg:h-36
          ${
            activo
              ? "bg-white shadow"
              : "bg-transparent"
          }
          --DIV-COMPLICADO`}>
          
          {/* Contenedor superior con logo y hamburguesa */}
          <div 
            className={`
              flex justify-between items-center px-8 py-5 sm:px-16 sm:py-6 lg:relative    --DIV-MODIFICABLE
              
            `}
          >
            {/* Logo */}
            <div className="w-29 lg:absolute lg:scale-115 lg:left-21 lg:top-15.5 xl:left-26 2xl:left-38">
              <img
                className="w-full"
                src={activo ? getLogo(1) : getLogo(2)}
                alt="logo abr"
              />
            </div>

            {/* Botón "Contáctanos" para desktop */}
            <a
              className={`lg:absolute lg:right-20 lg:top-6 xl:right-24 2xl:right-36
              hidden lg:flex items-center px-3 py-0.25 tracking-wider border rounded-sm
              uppercase font-sm transition-all duration-300 
                ${
                  activo
                    ? "border-[#274885] bg-[#274885] hover:cursor-pointer text-white"
                    : "border-white text-white hover:bg-white hover:text-[#274885]"
                }
              `}
              href="#"
            >
              Contáctanos
            </a>

            {/* Hamburguesa (solo visible en pantallas chicas) */}
            <div className="lg:hidden">
              <Hamburger 
                size={32}
                color={activo ? "#274885" : "#FFFFFF"}
                toggled={isOpen} 
                toggle={setOpen}
              />
            </div>
          </div>

          {/* Menú responsive */}
          <div
            className={`w-4/5 mx-auto rounded-md 
              flex flex-col items-center transition-all duration-500 ease-in-out transform bg-[#274885]
              lg:relative lg:h-auto lg:bg-transparent lg:transform-none 
              
              // isOpen controla si Hamburger está abierto[? "..."] o cerrado[: "..."]
              // Pero --lg:translate-x-0 ASEGURA que en pantallas grandes SIEMPRE SE MUESTRE el menú de nav

              lg:translate-x-0

              ${isOpen
                ? "translate-x-0 "
                : "translate-x-[120%] "
              }
               -------DIV-3.2
            `}
          >
            {/* Navegación */}
            <div className="w-full lg:mt-0 lg:absolute lg:left-4 lg:top-9 xl:left-5 2xl:left-10 ">
              <nav 
                className='flex flex-col items-center px-8 py-5 gap-5 uppercase lg:p-0 lg:flex-row lg:justify-end lg:gap-10'
              >
                {["Nosotros", "Servicios", "Proyectos", "Publicaciones", "Blog"].map((text) => (
                  <li key={text} className="list-none">
                    <a
                      className={`
                        text-white lg:text-base xl:text-md font-sm tracking-wider hover:text-blue-200 transition-colors
                        ${activo ? "lg:text-[#274885]" : "lg:text-white"}
                      `}
                      href="#"
                    >
                      {text}
                    </a>
                  </li>
                ))}
                
                {/* Botón "Contáctanos" para móvil */}
                <li className="list-none lg:hidden">
                  <a
                    className="flex items-center px-6 py-2 lg:border border-white text-white uppercase font-semibold 
                    hover:bg-white hover:text-[#274885] transition-all duration-300"
                    href="#"
                  >
                    Contáctanos
                  </a>
                </li>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}