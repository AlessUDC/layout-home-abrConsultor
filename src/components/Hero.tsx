import EmblaCarouselHero from './Carousel/EmblaCarouselHero'

const Hero = () => {
  const slides = [
    // -----------Primera IMAGEN
    <div className='relative w-full h-full xl:h-screen' key={1}>
      <div className='relative w-full h-120 xl:h-screen overflow-hidden'>
        <img
          className='w-full h-full xl:h-screen object-cover'
          src="/img/hero-alerta-mineroAS1.jpg"
          alt="Apoyo a mineros artesanales"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a3acc] to-transparent" />
      </div>

      <div className='absolute inset-0 flex items-center pt-20'>
        <div className='container mx-auto px-10 md:px-15 lg:px-20'>
          <div className='max-w-2xl'>
            {/* Textos Izquierda */}
            <h1 className='text-2xl md:text-4xl lg:text-[40px] font-extrabold text-white mb-4 leading-tight'>
              ABR Grupo Consultor y<br/>Asociados S.A.C.
            </h1>
            <div className="w-27/50 xl:w-full mb-8 border-l-4 pl-5 border-l-[#F5A623]">
              <p className='hidden sm:block text-md md:text-lg text-white/90 leading-snug'>
                Somos consultores en gestión Minera, Empresarial y brindamos asistencia en proyectos para la 
                pequeña minería, minería artesanal y otras actividades económicas.
              </p>
            </div>

            {/* Botón Leer Más */}
            <a 
              className='inline-flex items-center px-8 py-1.5 bg-[#274885] hover:bg-[#38568F] text-white
              transition-all duration-300 ease-in-out rounded-md shadow-lg hover:shadow-xl gap-3'
              href="#"
            >
              <span>Leer más</span>
              <div className='w-3 h-4 transition-transform duration-300 hover:translate-x-1'>
                <img src="/img/leer-mas.svg" alt="flecha leer mas" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>,

    // -------------Segunda IMAGEN
    <div className='relative w-full h-full xl:h-screen' key={1}>
      <div className='relative w-full h-120 xl:h-screen overflow-hidden'>
        <img
          className='w-full h-full xl:h-screen object-cover'
          src="/img/hero-alerta-mineroAS1.jpg"
          alt="Apoyo a mineros artesanales"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a3acc] to-transparent" />
      </div>

      <div className='absolute inset-0 flex items-center pt-20'>
        <div className='container mx-auto px-10 md:px-15 lg:px-20'>
          <div className='max-w-2xl'>
            {/* Textos Izquierda */}
            <h1 className='text-2xl md:text-4xl lg:text-[40px] font-extrabold text-white mb-4 leading-tight'>
              Proyecto - BGI
            </h1>
            <div className="w-27/50 xl:w-full mb-8 border-l-4 pl-5 border-l-[#F5A623]">
              <p className='hidden sm:block text-md md:text-lg text-white/90 leading-snug'>
                Es un proyecto que busca apoyar a los mineros artesanales para que alcancen estándares que les permitan vender su 
                producción a un precio justo, a compradores que valoran el cumplimiento de medidas ambientales, sociales y laborales.
              </p>
            </div>

            {/* Botón Leer Más */}
            <a 
              className='inline-flex items-center px-8 py-1.5 bg-[#274885] hover:bg-[#38568F] text-white
              transition-all duration-300 ease-in-out rounded-md shadow-lg hover:shadow-xl gap-3'
              href="#"
            >
              <span>Leer más</span>
              <div className='w-3 h-4 transition-transform duration-300 hover:translate-x-1'>
                <img src="/img/leer-mas.svg" alt="flecha leer mas" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>,

      // -------------Tercera IMAGEN
    <div className='relative w-full h-full xl:h-screen' key={1}>
      <div className='relative w-full h-120 xl:h-screen overflow-hidden '>
        <img
          className='w-full h-full xl:h-screen object-cover'
          src="/img/hero-alerta-mineroAS1.jpg"
          alt="Apoyo a mineros artesanales"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a3acc] to-transparent" />
      </div>

      <div className='absolute inset-0 flex items-center pt-20'>
        <div className='container mx-auto px-10 md:px-15 lg:px-20'>
          <div className='max-w-2xl'>
            {/* Textos Izquierda */}
            <div className='flex gap-4'>
              <h1 className='text-2xl md:text-4xl lg:text-[40px] font-extrabold text-white mb-4 leading-tight'>
                Alerta Minero
              </h1>
              <div className='w-8 h-8 md:w-12 md:h-12 lg:w-15 lg:h-15 '>
                <img className='w-full h-full' src="/img/hero-icon-alerta-minero.png" alt="icono alerta minero" />
              </div>
            </div>

            <div className="w-29/50 xl:w-full mb-8 border-l-4 pl-5 border-l-[#F5A623]">
              <p className='hidden sm:block text-md md:text-lg text-white/90 leading-snug'>
                Es un servicio de mensajería e información, en el cual se brinda asistencia a los Mineros Artesanales 
                y de Pequeña Escala, dándoles apoyo en el cumplimiento de sus obligaciones con el Estado.
              </p>
            </div>

            {/* Botón Leer Más */}
            <a 
              className='inline-flex items-center px-8 py-1.5 bg-[#274885] hover:bg-[#38568F] text-white
              transition-all duration-300 ease-in-out rounded-md shadow-lg hover:shadow-xl gap-3'
              href="#"
            >
              <span>Leer más</span>
              <div className='w-3 h-4 transition-transform duration-300 hover:translate-x-1'>
                <img src="/img/leer-mas.svg" alt="flecha leer mas" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    
  ]

  const options = { 
    loop: true, 
    align: 'center',
    skipSnaps: false,
    duration: 20
  }

  return (
    <div className='relative w-full h-full xl:h-screen'>
      <EmblaCarouselHero slides={slides} options={options} />
    </div>
  )
}

export default Hero 