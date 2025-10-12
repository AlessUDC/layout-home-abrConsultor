
export default function Footer() {
  return (
    <div 
        className="relative w-full h-full flex justify-center bg-[url('/img/footer-bg.jpg')] 
        bg-cover bg-center py-28 md:py-20 lg:py-25 px-6 md:px-12 lg:px-75"
    >
        <div className="absolute inset-0 bg-[#274885] opacity-80" />

        <div className="relative w-4/5 lg:w-full h-full flex flex-col md:flex-row gap-8 md:gap-12 xl:gap-20 justify-center items-center ">
            {/* Contenedor de imagen */}
            <div className="w-55 h-full md:w-52 lg:w-75 xl:w-70 2xl:w-100 flex justify-center items-center z-10 md:ml-25 lg:ml-0 xl:ml-10 2xl:ml-50">
                <img
                    className="w-full h-full"
                    src="/img/abr-logo-white.svg" 
                    alt="logo abr"
                />
            </div>

            {/* Contenedor derecho */}
            <div className="w-full flex flex-col gap-4 md:gap-3 text-center md:text-start">

                <div className="w-full font-normal text-white md:text-lg">
                    <p>ABR Grupo Consultor y Asociados S.A.C</p>
                    <p>Jr. Pascual Saco Oliveros N° 533 Urb. Santa Catalina - La Victoria, Lima</p>
                    <p>Jr. Santiago Mamani 119, 2do Piso. Juliaca, Puno</p>
                    <p>Telf. (01) 373 7948</p>
                    <p>Cel: 991 239 977</p>
                </div>

                <nav className="flex justify-center md:justify-start gap-3">
                    <div className="w-8 h-8 md:w-5 md:h-5 xl:w-8 xl:h-8">
                        <a href="#">
                            <img src="/img/footer-icon-facebook.svg" alt="logo facebook" />
                        </a>
                    </div>
                    <div className="w-8 h-8 md:w-5 md:h-5 xl:w-8 xl:h-8">
                        <a href="#">
                            <img src="/img/footer-icon-instagram.svg" alt="logo instagram" />
                        </a>
                    </div>
                    <div className="w-8 h-8 md:w-5 md:h-5 xl:w-8 xl:h-8">
                        <a href="#">
                            <img src="/img/footer-icon-whatsapp.svg" alt="logo whatsapp" />
                        </a>
                    </div>
                    <div className="w-8 h-8 md:w-5 md:h-5 xl:w-8 xl:h-8">
                        <a href="#">
                            <img src="/img/footer-icon-message.svg" alt="logo mensajes" />
                        </a>
                    </div>
                </nav>
            </div>
            
        </div>

    </div>
  )
}