
export default function QuienesSomos() {
  return (
    <div className="flex flex-col lg:flex-row items-center p-6 md:p-8 lg:pt-32 lg:px-12 gap-8 lg:gap-0 xl:px-37 xl:pt-36 xl:pb-20">
      <div className="flex flex-col xl:flex-row items-center md:items-start px-auto">
        <div className="w-9/10 md:w-4/5 md:px-4 lg:w-19/20 xl:w-3/5 xl:pr-12">
          <div
            className="
              flex justify-center md:justify-start xl:w-full
            "
          >
            <h1 
              className="inline-block font-black text-center text-2xl md:text-4xl xl:text-start
              text-[#274885] uppercase border-l-[#DDA223] border-l-3 pl-5 xl:pl-0 xl:w-1/2
              xl:border-none xl:relative xl:before:content-[''] xl:before:absolute xl:before:bg-[#DDA223] 
              xl:before:w-[3px] xl:before:h-[40%] xl:before:-left-4 xl:before:top-3"
            >
              <span className="xl:abso">Quienes Somos</span>
            </h1>
          </div>
          {/* border-l-4 border-l-amber-400 pl-4 */}

          <div className="w-full lg:w-9/10 xl:w-full h-1/4 my-4">
            <p className='w-full text-lg text-center md:text-justify leading-snug'>
            ABR Grupo Consultor y Asociados S.A.C. es una consultora privada con más de 10 años de
            experiencia en el mercado, creada con el propósito de ofrecer servicios empresariales
            integrales orientados en brindar asesorías, asistencia técnica, capacitación, alternativas
            de soluciones hacia la mejora empresarial. Ofrecemos servicios a diversos sectores como
            minería, industria, comercio, servicios y demás actividades económicas.
            </p>
          </div>
          
        </div>

        <div className="relative w-full lg:w-full h-72 md:h-80 lg:h-70  xl:h-100">
          <img src="/img/hero-somos-nosotros.jpg" alt="abr nosotros" className="w-full h-full object-cover"/>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#123e89cc] to-transparent flex justify-end items-end pb-5 pr-5">
            <a 
              className="flex w-31 h-7  bg-[#274885] hover:bg-[#38568F]  justify-center items-center gap-3 
              transition-colors duration-500 ease-in-out rounded-sm shadow tracking-wide text-white uppercase text-xs font-semibold"
              href="#"
            >
              <span>Leer más</span>

              <div className='w-2.5 h-4'>
                <img src="/img/leer-mas.svg" alt="flecha leer mas" />
              </div>
            </a>

          </div>
          
        </div>

      </div>
    </div>
  )
}
