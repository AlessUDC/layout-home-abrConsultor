import type { FC } from "react"

interface CardServicioProps {
  titulo: string
  Logo: React.FC<React.SVGProps<SVGSVGElement>>
  onVerMasClick: () => void
}

const CardServicio: FC<CardServicioProps> = ({ titulo, Logo, onVerMasClick }) => {
  return (
    // Div Contenedor padre
    <div className="w-full h-full flex md:justify-center lg: px-2 md:p-0">
      {/* Div contenedor hijo */}
      <div 
        className="
        w-full h-17/20
        
        md:min-w-[18rem] md:w-full md:max-w-[20rem]
        lg:min-w-[15rem] lg:w-full lg:max-w-[36rem]
        xl:min-w-[18rem] xl:w-full xl:max-w-[45rem]

        $$2xl:min-w-[28rem] $$2xl:w-full $$2xl:max-w-[36rem]

        md:h-52 lg:h-48 xl:h-52 2xl:h-56  
        
        flex 
        bg-[linear-gradient(90deg,_#40619e,_#274885_100%,_#00d4ff_0%)] 
        rounded-[2rem]
        transition-all duration-300 hover:shadow-xl"
      >
        {/* Contenedor de ícono VER MÁS */}
        <div className="flex flex-col justify-end ml-6 md:ml-5 lg:ml-6 xl:ml-7 mb-8 md:mb-7 lg:mb-8">
          <div 
            className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform"
            onClick={onVerMasClick}
          >
            <img 
              className="w-full h-full"
              src="/img/services-icon-MAS.svg" 
              alt="boton leer mas"
            />
          </div>
        </div>
        
        {/* Contenedor de Título */}
        <div className="flex-1 flex items-center my-auto pr-2 md:pr-3">
          <h1 className="w-full text-white text-lg md:text-xl lg:text-lg xl:text-lg p-1 mb-2 
            font-medium leading-tight md:leading-tight lg:leading-tight">
            {titulo}
          </h1>
        </div>

        {/* Contenedor de Logo */}
        <div 
          className="flex items-center justify-center my-auto
          min-w-20 min-h-20
          max-w-24 max-h-24
          md:w-24 md:h-24 
          lg:w-28 lg:h-28 
          xl:w-32 xl:h-32
          
          pr-4 md:pr-5 lg:pr-6"
        >
          <div className="w-full h-full flex items-center justify-center">
            <Logo className="w-3/5 h-3/5 md:w-full md:h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardServicio