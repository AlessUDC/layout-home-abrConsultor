import { useState, useEffect,  type SetStateAction } from 'react';
import EmblaCarouselNS from './Carousel/EmblaCarouselNS'
import CardServicio from './Cards/CardServicio'
import LogoFinanzas from '../svg/LogoFinanzas'
import LogoContaTribu from '../svg/LogoContaTribu'
import LogoImpleEstand from '../svg/LogoImpleEstand'
import LogoAlertaMinero from '../svg/LogoAlertaMinero'
import LogoAsesoriaLaboral from '../svg/LogoAsesoriaLaboral'
import LogoAsisteciaTecnica from '../svg/LogoAsisteciaTecnica'
import LogoConstEmpresas from '../svg/LogoConstEmpresas'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

export default function NuestrosServicios() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const openPopup = (servicio: SetStateAction<string>) => {
    setSelectedService(servicio)
    setIsPopupOpen(true)
  };

  const closePopup = () => {
    setIsPopupOpen(false)
    setSelectedService('')
  }
 
  // Función para obtener el contenido del popup según el servicio seleccionado
  const getPopupContent = () => {
    const servicio = servicios.find(s => s.titulo === selectedService)
    return servicio ? servicio.popupContent : ''
  }
  
  const servicios = [
    { 
      titulo: 'Constitución de Empresas y Formalización', 
      Logo: LogoConstEmpresas,
      popupContent: "Sabemos que iniciar una nueva empresa requiere de grandes esfuerzos, por eso nosotros constituimos tu empresa de la manera más rápida y sin complicaciones.",
      imagen: "/img/popup-constiempres.jpg"
    },
    { 
      titulo: 'Contabilidad y Tributación', 
      Logo: LogoContaTribu,
      popupContent: "El objetivo principal de la asesoría es brindarle un servicio de calidad, responsable y eficiente. Manténgase tranquilo dirigiendo su empresa, nosotros nos ocuparemos del cumplimiento de sus obligaciones ante la SUNAT.",
      imagen: "/img/popup-contatribu.jpg"
    },
    { 
      titulo: 'Implementación de Estándares de Certificación', 
      Logo: LogoImpleEstand,
      popupContent: "La Pequeña Minería y Minería Artesanal al igual que otros sectores productivos, tienen actualmente una gran oportunidad de exportar al mercado internacional un producto producido responsablemente, y beneficiándose de un precio justo e incentivos.",
      imagen: "/img/popup-implemestanda.jpg"
    },
    { 
      titulo: 'Alerta Minero', 
      Logo: LogoAlertaMinero,
      popupContent: "Es un servicio de mensajería en el cual se brinda información y asistencia técnica personalizada a los mineros artesanales y de pequeña escala en el momento oportuno.",
      imagen: "/img/popup-alertaminero.png"
    },
    { 
      titulo: 'Asesoría Laboral', 
      Logo: LogoAsesoriaLaboral,
      popupContent: "Nuestra asesoría laboral consiste en el procesamiento, manejo y control de las planillas de pago de su empresa y del cumplimiento de sus obligaciones laborales ante SUNAFIL.",
      imagen: "/img/popup-asesorialab.jpg"
    },
    { 
      titulo: 'Finanzas', 
      Logo: LogoFinanzas,
      popupContent: "Evaluamos la gestión actual de su empresa y planteamos soluciones para mejorar el área de finanzas de su empresa, para así evitar la pérdida de recursos y poder acceder a un crédito financiero.",
      imagen: "/img/popup-finanzas.jpg"
    },
    { 
      titulo: 'Asistencia técnica para la Minería Artesanal y Pequeña Escala – MAPE',
      Logo: LogoAsisteciaTecnica,
      popupContent: "Brindamos asistencia técnica para lograr concluir su proceso de formalización y post formalización, y empoderarse para que cumplan con la normativa del sector. Contamos con un equipo de profesionales con amplia experiencia en el sector MAPE.",
      imagen: "/img/popup-asistemape.jpg"
    }
  ]
  // Función para obtener la imagen para popup
  const getPopupImage = () => {
    const servicio = servicios.find(selected => selected.titulo === selectedService)
    return servicio ? servicio.imagen : ''
  }
  
  const slides = servicios.map((servicio, item) => (
    <CardServicio 
      key={item} 
      titulo={servicio.titulo} 
      Logo={servicio.Logo}
      onVerMasClick={() => openPopup(servicio.titulo)}
    />
  ))
  
  const options = { 
    loop: true, 
    align: 'center',
    skipSnaps: false,
    duration: 20
  }

  //-------------------------
  const baseStyle = {
    margin: 'auto',
    background: 'transparent',
    border: 'none',
    padding: '0',
    borderRadius: '1rem',
  };
  const [popupStyle, setPopupStyle] = useState({
    ...baseStyle,
    width: '95%',
    maxWidth: '498px',
  });

  //Actualizacion del width
  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;
      if (w >= 1280) {
        setPopupStyle({ ...baseStyle, width: '1168px', maxWidth: '1168px' });
      } else if (w >= 1024) {
        setPopupStyle({ ...baseStyle, width: '828px', maxWidth: '828px' });
      } else {
        setPopupStyle({ ...baseStyle, width: 'clamp(0px, 95%, 498px)', maxWidth: '498px' });
      }
    };
    updateWidth(); // Ejecutar al montar
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="flex flex-col items-center p-6 pb-0 md:px-12 md:py-10 lg:p-12">
      {/* Seccion: Título + Texto */}
      <div className="flex justify-center">
        <h1 
          className="flex items-center md:text-4xl xl:pb-2 px-4 font-black text-2xl text-[#274885] uppercase 
          border-solid border-l-[3px] border-r-[3px] 
          border-l-[#DDA223] border-r-[#DDA223]"
        >
          <span>Nuestros servicios</span>
        </h1>
      </div>
                     
      <div className="w-4/5 md:w-full lg:w-3/5 xl:w-13/20 my-6 md:my-4">
        <p 
          className="w-full text-lg text-center md:text-justify leading-tight xl:pb-4 xl:pl-4"
          style={{ textAlignLast: 'center' }}
        >
          Abarcan desde una oferta de gestión integral hasta un asesoramiento puntual en aspectos 
          concretos de la gestión de cada organización. Estamos enfocados en brindar acompañamiento
          en el cumplimiento de la gestión y la normativa del sector. ABR se adapta a las necesidades
          específicas de cada organización de acuerdo a la actividad que desarrolla la empresa.
        </p>
      </div>

      {/* Popup */}
      <Popup
        open={isPopupOpen}
        onClose={closePopup}
        modal
        nested
        closeOnDocumentClick
        contentStyle={popupStyle}
      >
        {/* Contenedor padre */}
        <div className="bg-white xl:h-168 rounded-2xl relative w-full">
          {/* Botón de cerrar (signo menos) */}
          <button 
            className="close-btn absolute top-4 right-4 md:-top-3 md:-right-3 bg-[#274885] text-2xl text-[#DDA223] font-extrabold
            w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full shadow-lg z-10"
            onClick={closePopup}
          >
            —
          </button>
          
          {/* Contenido hijo */}
          <div className="w-full h-full overflow-hidden  flex flex-col lg:flex-row xl:items-center">
            {/* Imagen */}
            <div className='w-full lg:w-121 h-85 lg:h-103 xl:w-208 xl:h-full bg-no-repeat overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-tr-none flex justify-center'>
              <img
                className='w-full h-full object-cover'
                src={getPopupImage()} 
                alt={selectedService}
              />
            </div>

            {/* Contenido: Texto + boton VER MAS */}
            <div className='w-full lg:w-1/2 h-auto flex flex-col items-center px-5 py-4 lg:px-7 lg:py-6 xl:items-start'>
              <h2 className="w-full text-[#274885] text-2xl font-bold mb-2 text-left leading-tight">
                {selectedService}
              </h2>
              
              {/* Texto del Popup */}
              <p className="text-gray-700 leading-6 mb-6 text-left w-full xl:w-9/10">
                {getPopupContent()}
              </p>
              
              {/* Botón VER MÁS deshabilitado */}
              <div className='w-38 h-8 md:w-35 md:h-9 lg:flex lg:justify-start lg:mr-auto'>
                <button 
                  className="flex w-full h-full  
                  bg-[#274885] hover:bg-[#38568F] 
                  justify-center items-center gap-3
                  transition-colors duration-500 ease-in-out rounded-lg shadow tracking-wide 
                  text-white text-xs md:text-sm font-semibold"
                  disabled
                >
                  <span className='text-[0.85rem]'>
                    VER MÁS
                  </span>
                  {/* Flecha naranja */}
                  <div className='w-2.5 h-4'>
                      <img src="/img/leer-mas.svg" alt="flecha leer mas" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Popup>
      
      
        
      {/* Sección: mobile: Slide, desktop: elementos servicios */}
      <section className='w-full h-full'>
        {/* Pantallas medianas y grandes: Resolución desde 768px */}
        <div className='hidden md:flex md:flex-col md:gap-3 lg:gap- md:items-center'>
          
          {/* TABLET (768px - 1023px): Layout 2x2 + 2x2 + 1 */}
          <div className='md:flex md:flex-col md:gap-3 lg:hidden'>
            {/* Fila 1 */}
            <div className='flex gap-7 justify-between md:min-w-1/2 md:w-full md:max-w-full'>
              <CardServicio 
                titulo='Constitución de Empresas y Formalización' 
                Logo={LogoConstEmpresas}
                onVerMasClick={() => openPopup('Constitución de Empresas y Formalización')}
              />
              <CardServicio 
                titulo='Contabilidad y Tributación' 
                Logo={LogoContaTribu}
                onVerMasClick={() => openPopup('Contabilidad y Tributación')}
              />
            </div>

            {/* Fila 2 */}
            <div className='flex gap-7 justify-between'>
              <CardServicio 
                titulo='Implementación de Estándares de Certificación' 
                Logo={LogoImpleEstand}
                onVerMasClick={() => openPopup('Implementación de Estándares de Certificación')}
              />
              <CardServicio 
                titulo='Alerta Minero' 
                Logo={LogoAlertaMinero}
                onVerMasClick={() => openPopup('Alerta Minero')}
              />
            </div>

            {/* Fila 3 */}
            <div className='flex gap-7 justify-between'>                    
              <CardServicio 
                titulo='Asesoría Laboral' 
                Logo={LogoAsesoriaLaboral}
                onVerMasClick={() => openPopup('Asesoría Laboral')}
              />
              <CardServicio 
                titulo='Finanzas' 
                Logo={LogoFinanzas}
                onVerMasClick={() => openPopup('Finanzas')}
              />
            </div>

            {/* Fila 4 - Solo tablet */}
            <div className='flex gap-7 justify-center'>
              <CardServicio 
                titulo='Asistencia técnica para la Minería Artesanal y Pequeña Escala – MAPE' 
                Logo={LogoAsisteciaTecnica}
                onVerMasClick={() => openPopup('Asistencia técnica para la Minería Artesanal y Pequeña Escala – MAPE')}
              />
            </div>
          </div>

          
          {/* ---DESKTOP LARGE (1024px+): Layout 2x2 + 3 */}
          <div className='hidden lg:flex lg:flex-col lg:items-center lg:gap-3'>
            {/* Fila 1 */}
            <div 
              className='flex gap-6 xl:gap-7 justify-center lg:order-1 
              lg:min-w-3/5 lg:w-full lg:max-w-3/5 
              xl:min-w-3/5 xl:w-full xl:max-w-1/2
              2xl:min-w-3/5 2xl:w-full 2xl:max-w-7/10'
            >
              <div className='lg:min-w-1/2 lg:w-full lg:max-w-3/5'>
                <CardServicio 
                  titulo='Constitución de Empresas y Formalización' 
                  Logo={LogoConstEmpresas}
                  onVerMasClick={() => openPopup('Constitución de Empresas y Formalización')}
                />
              </div>
              <div className='lg:min-w-1/2 lg:w-full lg:max-w-3/5'>
                <CardServicio 
                  titulo='Contabilidad y Tributación' 
                  Logo={LogoContaTribu}
                  onVerMasClick={() => openPopup('Contabilidad y Tributación')}
                />
              </div>
            </div>

            {/* Fila 2 - En XL baja a posición 3 */}
            <div 
              className='flex gap-6 xl:gap-7 justify-center lg:order-2 xl:order-3 
              lg:min-w-3/5 lg:w-full lg:max-w-3/5 
              xl:min-w-1/2 xl:w-full xl:max-w-3/5
              2xl:min-w-3/5 2xl:w-full 2xl:max-w-7/10'
            >
              <div className='lg:min-w-1/2 lg:w-full lg:max-w-3/5'>
                <CardServicio 
                  titulo='Implementación de Estándares de Certificación' 
                  Logo={LogoImpleEstand}
                  onVerMasClick={() => openPopup('Implementación de Estándares de Certificación')}
                />
              </div>
              <div className='lg:min-w-1/2 lg:w-full lg:max-w-3/5'>
                <CardServicio 
                  titulo='Alerta Minero' 
                  Logo={LogoAlertaMinero}
                  onVerMasClick={() => openPopup('Alerta Minero')}
                />
              </div>
            </div>

            {/* Fila 3 - En XL sube a posición 2 */}
            <div 
              className='flex gap-6 xl:gap-7 justify-center lg:order-3 xl:order-2 
              xl:min-w-1/2 xl:w-full xl:max-w-9/10
              2xl:min-w-3/5 2xl:w-full 2xl:max-w-full'
            >
              <CardServicio 
                titulo='Asesoría Laboral' 
                Logo={LogoAsesoriaLaboral}
                onVerMasClick={() => openPopup('Asesoría Laboral')}
              />
              <CardServicio 
                titulo='Finanzas' 
                Logo={LogoFinanzas}
                onVerMasClick={() => openPopup('Finanzas')}
              />
              <CardServicio 
                titulo='Asistencia técnica para la Minería Artesanal y Pequeña Escala – MAPE' 
                Logo={LogoAsisteciaTecnica}
                onVerMasClick={() => openPopup('Asistencia técnica para la Minería Artesanal y Pequeña Escala – MAPE')}
              />
            </div>
          </div>
        </div>

        {/* MOVILES: Resolución menor a 768px */}
        <div className='w-full h-70 md:hidden mx-auto px-2 relative md:static'>
          <EmblaCarouselNS options={options} slides={slides}/>
        </div>
      </section>
    </div>
  )
}