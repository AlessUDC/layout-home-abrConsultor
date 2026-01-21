import EmblaCarouselNP from "./Carousel/EmblaCarouselNP"

export default function NuestrosProyectos() {
  const slides = [
    // Imagen 1
    <div className="w-full h-64 px-2">
        <div className="relative w-full h-full" key={1}>
            <img 
                className="w-full h-full  object-cover"
                src="/img/our-projects-1.jpg" 
                alt="Proyecto ABR 1" 
            />
            <div 
                className="absolute inset-0 bg-gradient-to-t from-[#123e89cc] to-transparent"
            />
        </div>
    </div>,

    // Imagen 2
    <div className="w-full h-64 px-2">
        <div className="relative w-full h-full" key={2}>
            <img 
                className="w-full h-full object-cover"
                src="/img/our-projects-2.jpg" 
                alt="Proyecto ABR 2" 
            />
            <div 
                className="absolute inset-0 bg-gradient-to-t from-[#123e89cc] to-transparent"
            />
        </div>
    </div>,

    // Imagen 3
    <div className="w-full h-64 px-2">
        <div className="relative w-full h-full" key={3}>
            <img 
                className="w-full h-full object-cover"
                src="/img/our-projects-3.jpg" 
                alt="Proyecto ABR 3" 
            />
            <div 
                className="absolute inset-0 bg-gradient-to-t from-[#123e89cc] to-transparent"
            />
        </div>
    </div>,

    // Imagen 4
    <div className="w-full h-64 px-2">
        <div className="relative w-full h-full" key={4}>
            <img 
                className="w-full h-full object-cover"
                src="/img/our-projects-4.jpg" 
                alt="Proyecto ABR 4" 
            />
            <div 
                className="absolute inset-0 bg-gradient-to-t from-[#123e89cc] to-transparent"
            />
        </div>
    </div>
  ]

  const slidesMD = [
    // Imagen 1
    <div className=" w-full h-64 flex justify-around" key={1}>
        <div className="relative w-9/20 h-full">
            <img 
                className="w-full h-full  object-cover"
                src="/img/our-projects-1.jpg" 
                alt="Proyecto ABR 1" 
            />
            <div 
                className="absolute inset-0 bg-gradient-to-t from-[#123e89cc] to-transparent"
            />
        </div>
        <div className="relative w-9/20 h-full">
            <img 
                className="w-full h-full object-cover"
                src="/img/our-projects-2.jpg" 
                alt="Proyecto ABR 2" 
            />
            <div 
                className="absolute inset-0 bg-gradient-to-t from-[#123e89cc] to-transparent"
            />
        </div>
    </div>,

    // Imagen 2
    <div className=" w-full h-64 flex justify-around" key={2}>
        <div className="relative w-9/20 h-full">
            <img 
                className="w-full h-full object-cover"
                src="/img/our-projects-2.jpg" 
                alt="Proyecto ABR 2" 
            />
            <div 
                className="absolute inset-0 bg-gradient-to-t from-[#123e89cc] to-transparent"
            />
        </div>
        <div className="relative w-9/20 h-full">
            <img 
                className="w-full h-full object-cover"
                src="/img/our-projects-3.jpg" 
                alt="Proyecto ABR 3" 
            />
            <div 
                className="absolute inset-0 bg-gradient-to-t from-[#123e89cc] to-transparent"
            />
        </div>
    </div>,

    // Imagen 3
    <div className=" w-full h-64 flex justify-around" key={3}>
        <div className="relative w-9/20 h-full">
            <img 
                className="w-full h-full object-cover"
                src="/img/our-projects-3.jpg" 
                alt="Proyecto ABR 3" 
            />
            <div 
                className="absolute inset-0 bg-gradient-to-t from-[#123e89cc] to-transparent"
            />
        </div>
        <div className="relative w-9/20 h-full">
            <img 
                className="w-full h-full object-cover"
                src="/img/our-projects-4.jpg" 
                alt="Proyecto ABR 4" 
            />
            <div 
                className="absolute inset-0 bg-gradient-to-t from-[#123e89cc] to-transparent"
            />
        </div>
        
    </div>,

  ]

  const options = { 
    loop: true, 
    align: 'center',
    skipSnaps: false,
    duration: 20
  }

  return (
    <div className="w-full h-full flex flex-col items-center py-6 md:px-0 md:py-8 lg:py-10 lg:px-13 xl:px-34 2xl:px-48">
        <div className="flex justify-center">
            <h1 
                className="flex items-center md:text-4xl xl:pb-2 px-4 font-black text-2xl text-[#274885] uppercase 
                border-solid border-l-[3px] border-r-[3px] 
                border-l-[#DDA223] border-r-[#DDA223]"
            >
                <span>Nuestros proyectos</span>
            </h1>
        </div>
                        
        <div className="w-4/5 text-[#666666] md:4/5 lg:w-4/5 xl:w-4/5 my-6 md:my-4">
            <p 
                className="w-full text-lg text-center md:text-center lg:text-justify leading-tight xl:pb-4 xl:pl-4"
                style={{ textAlignLast: 'center' }}
            >
                ABR Grupo Consultor, somos especialistas en proyectos de índole social que apoyen al sector
                de la Pequeña Minería y Minería Artesanal - MAPE, a implementar estándares de certificación
                y buenas prácticas para la producción de un Oro Responsable.
            </p>
        </div>

        {/* Móviles: EmblaCarousel */}
        <div className="w-9/10 h-72 md:hidden">
            <EmblaCarouselNP options={options} slides={slides}/>
        </div>
        {/* Tablets: EmblaCarousel */}
        <div className="w-9/10 h-72 hidden md:block lg:hidden">
            <EmblaCarouselNP options={options} slides={slidesMD}/>
        </div>

        {/* Desktop: >768px */}
        <div className="hidden lg:grid lg:grid-cols-4 xl:gap-2 xl:w-full">
            <div className="relative w-full h-48 md:h-40 lg:h-45">
                <img 
                    className="w-full h-full "
                    src="/img/our-projects-1.jpg" 
                    alt="abr nosotros" 
                />
                <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#123e89cc]
                    to-transparent flex justify-end items-end pb-5 pr-5"
                />

            </div>

            <div className="relative w-full h-45">
                <img 
                    className="w-full h-full "
                    src="/img/our-projects-2.jpg" 
                    alt="abr nosotros" 
                />
                <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#123e89cc]
                    to-transparent flex justify-end items-end pb-5 pr-5"
                />

            </div>

            <div className="relative w-full h-45">
                <img 
                    className="w-full h-full "
                    src="/img/our-projects-3.jpg" 
                    alt="abr nosotros" 
                />
                <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#123e89cc]
                    to-transparent flex justify-end items-end pb-5 pr-5"
                />

            </div>

            <div className="relative w-full h-45">
                <img 
                    className="w-full h-full "
                    src="/img/our-projects-4.jpg" 
                    alt="abr nosotros" 
                />
                <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#123e89cc]
                    to-transparent flex justify-end items-end pb-5 pr-5"
                />
            </div>

        </div>

        {/* Botón Leer más */}
        <a
            className="flex w-31 h-7 md:w-35 md:h-9 mt-5 md:mt-7 lg:mt-4 bg-[#274885] hover:bg-[#38568F]  justify-center items-center gap-3 
            transition-colors duration-500 ease-in-out rounded-sm shadow tracking-wide text-white text-xs md:text-sm font-semibold"
            href="#"
        >
            <span>Leer más</span>
            
            {/* Flecha naranja */}
            <div className='w-2.5 h-4'>
                <img src="/img/leer-mas.svg" alt="flecha leer mas" />
            </div>
        </a>

    </div>
  )
}
