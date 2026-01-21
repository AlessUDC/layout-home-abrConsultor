import {
  ComboBox,
  Label,
  Group,
  Input,
  Button,
  Popover,
  ListBox,
  ListBoxItem
} from "react-aria-components"
import { ChevronsUpDownIcon, CheckIcon } from "lucide-react"
import { useState } from "react"


export default function Contacto() {
    // Estados separados para cada campo
    const [nombre, setNombre] = useState("")
    const [dni, setDni] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [horario, setHorario] = useState("")
    const [asunto, setAsunto] = useState("")
    const [solicitud, setSolicitud] = useState("")

    // Estados de error separados para cada campo
    const [nombreError, setNombreError] = useState(false)
    const [dniError, setDniError] = useState(false)
    const [correoError, setCorreoError] = useState(false)
    const [telefonoError, setTelefonoError] = useState(false)
    const [horarioError, setHorarioError] = useState(false)
    const [asuntoError, setAsuntoError] = useState(false)
    const [solicitudError, setSolicitudError] = useState(false)

    // Handlers de blur separados para cada campo
    const handleNombreBlur = () => {
        setNombreError(!nombre.trim())
    }
    const handleDniBlur = () => {
        setDniError(!dni.trim())
    }
    const handleCorreoBlur = () => {
        setCorreoError(!correo.trim())
    }
    const handleTelefonoBlur = () => {
        setTelefonoError(!telefono.trim())
    }
    const handleHorarioBlur = () => {
        setHorarioError(!horario.trim())
    }
    const handleAsuntoBlur = () => {
        setAsuntoError(!asunto.trim())
    }
    const handleSolicitudBlur = () => {
        setSolicitudError(!solicitud.trim())
    }

  return (
    <div className="px-8 md:px-15 lg:px-16 py-8 md:py-16 lg:py-20 xl:py-30 xl:px-35 2xl:px-51">

        <form action="" className="w-full">

            {/* Título 'Contacto' */}
            <div className="w-full flex justify-start mb-3">
                <h1 
                    className="flex items-center pb-2 px-4 font-black text-2xl md:text-3xl lg:text-4xl text-[#274885] uppercase 
                    border-solid border-l-[3px] 
                    border-l-[#DDA223] "
                >
                    <span>Contacto</span>
                </h1>
            </div>
            <span className="text-sm md:text-base">* Requerido</span>
            
            {/* Seleccionar Tipo de persona- o Persona natural  o Represento una empresa */}
            <div className="w-full flex flex-col sm:flex-row my-5 md:gap-5 lg:gap-6">
                <label className=" role-option active flex items-center">
                    <input className=" mr-3 " type="radio" name="role" value="natural person" />
                    <span className="text-lg text-[#666666] md:text-base">Persona natural</span>
                </label>
                <label className="role-option active flex items-center">
                    <input className=" mr-3 " type="radio" name="role" value="factory"/>
                    <span className="text-lg text-[#666666] md:text-base">Represento a una empresa</span>
                </label>
            </div>

            {/* Contenedor de Bloques Flex */}
            <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">

                {/* Bloque izquierdo */}
                <div className="w-full lg:w-7/12 xl:w-13/20 flex flex-col gap-3 md:gap-2.5">

                    {/* Contenedor 1: Nombres y DNI */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-2.5 justify-between">

                        {/* Input 1: Nombres y Apellidos */}
                        <div className="w-full sm:w-1/2 relative">
                            <input 
                                type="text"
                                className={`peer w-full py-4 px-2.5 text-sm md:text-base border border-gray-300
                                            rounded outline-none transition-all focus:border-[#274885] focus:border-2
                                            ${nombreError 
                                                ? "border-red-500 placeholder:text-red-500 border-2 animate-shake"
                                                : "border-gray-300 focus:border-[#274885] focus:border-2"
                                            }`}
                                value={nombre}
                                onChange={(event) => setNombre(event.target.value)}
                                onBlur={handleNombreBlur}
                                placeholder=""
                                id="nombre" 
                                required 
                            />
                            <label 
                                htmlFor="nombre" 
                                className={`absolute pointer-events-none bg-white px-1.5 text-gray-500
                                            text-md md:text-base transition-all duration-200 ease-out top-3 left-2.5
                                            peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#274885]
                                            peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2
                                            peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#274885]
                                            ${nombreError
                                                ? "text-red-500 peer-focus:text-[#274885]"
                                                : "text-gray-500 peer-focus:text-[#274885]"
                                            }`}
                            >
                                Nombre y apellidos *
                            </label>
                        </div>

                        {/* Input 2: DNI */}
                        <div className="w-full sm:w-1/2 relative">
                            <input 
                                type="text"
                                className={`peer w-full py-4 px-2.5 text-sm md:text-base border border-gray-300
                                            rounded outline-none transition-all focus:border-[#274885] focus:border-2
                                            ${dniError 
                                                ? "border-red-500 placeholder:text-red-500 border-2 animate-shake"
                                                : "border-gray-300 focus:border-[#274885] focus:border-2"
                                            }`}
                                value={dni}
                                onChange={(event) => setDni(event.target.value)}
                                onBlur={handleDniBlur}
                                placeholder=""
                                id="dni" 
                                required 
                            />
                            <label 
                                htmlFor="dni" 
                                className={`absolute pointer-events-none bg-white px-1.5 text-gray-500
                                            text-md md:text-base transition-all duration-200 ease-out top-3 left-2.5
                                            peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#274885]
                                            peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2
                                            peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#274885]
                                            ${dniError
                                                ? "text-red-500 peer-focus:text-[#274885]"
                                                : "text-gray-500 peer-focus:text-[#274885]"
                                            }`}
                            >
                                DNI *
                            </label>
                        </div>

                    </div>

                    {/* Contenedor 2: Correo y Teléfono/Celular */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-2.5">
                        {/* Input 3: Correo */}
                        <div className="w-full sm:w-1/2 relative">
                            <input 
                                type="text"
                                className={`peer w-full py-4 px-2.5 text-sm md:text-base border border-gray-300
                                            rounded outline-none transition-all focus:border-[#274885] focus:border-2
                                            ${correoError 
                                                ? "border-red-500 placeholder:text-red-500 border-2 animate-shake"
                                                : "border-gray-300 focus:border-[#274885] focus:border-2"
                                            }`}
                                value={correo}
                                onChange={(event) => setCorreo(event.target.value)}
                                onBlur={handleCorreoBlur}
                                placeholder=""
                                id="correo" 
                                required 
                            />
                            <label 
                                htmlFor="correo" 
                                className={`absolute pointer-events-none bg-white px-1.5 text-gray-500
                                            text-md md:text-base transition-all duration-200 ease-out top-3 left-2.5
                                            peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#274885]
                                            peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2
                                            peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#274885]
                                            ${correoError
                                                ? "text-red-500 peer-focus:text-[#274885]"
                                                : "text-gray-500 peer-focus:text-[#274885]"
                                            }`}
                            >
                                Correo *
                            </label>
                        </div>

                        {/* Input 4: Teléfono/Celular */}
                        <div className="w-full sm:w-1/2 relative">
                            <input 
                                type="text"
                                className={`peer w-full py-4 px-2.5 text-sm md:text-base border border-gray-300
                                            rounded outline-none transition-all focus:border-[#274885] focus:border-2
                                            ${telefonoError 
                                                ? "border-red-500 placeholder:text-red-500 border-2 animate-shake"
                                                : "border-gray-300 focus:border-[#274885] focus:border-2"
                                            }`}
                                value={telefono}
                                onChange={(event) => setTelefono(event.target.value)}
                                onBlur={handleTelefonoBlur}
                                placeholder=""
                                id="telefono" 
                                required 
                            />
                            <label 
                                htmlFor="telefono" 
                                className={`absolute pointer-events-none bg-white px-1.5 text-gray-500
                                            text-md md:text-base transition-all duration-200 ease-out top-3 left-2.5
                                            peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#274885]
                                            peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2
                                            peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#274885]
                                            ${telefonoError
                                                ? "text-red-500 peer-focus:text-[#274885]"
                                                : "text-gray-500 peer-focus:text-[#274885]"
                                            }`}
                            >
                                Teléfono/Celular *
                            </label>
                        </div>

                    </div>

                    {/* Contenedor 3: Horario de Contacto y Asunto */} 
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-2.5">

                        {/* ComboBox 5: Horario de Contacto */}
                        <div className="w-full sm:w-1/2 relative">
                            <ComboBox className="group w-full">
                            {/* Label flotante */}
                            <Label
                                className={`absolute pointer-events-none bg-white px-1.5 text-gray-500
                                            text-md md:text-base transition-all duration-200 ease-out top-3 left-2.5
                                            peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#274885]
                                            peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2
                                            peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#274885]
                                            ${horarioError
                                                ? "text-[#274885] peer-focus:text-[#274885]"
                                                : "text-gray-500 peer-focus:text-[#274885]"
                                            }`}
                            >
                                Horario de contacto *
                            </Label>

                            {/* Input + botón */}
                            <Group className="relative border border-gray-300 rounded">
                                <Input
                                    className={`peer w-full py-4 px-2.5 text-sm md:text-base border border-gray-300
                                        rounded outline-none transition-all focus:border-[#274885] focus:border-2
                                        
                                        ${horarioError 
                                            ? "border-red-500 placeholder:text-red-500 border-2 animate-shake"
                                            : "border-gray-300 focus:border-[#274885] focus:border-2"
                                        }`}
                                    value={horario}
                                    onChange={(event) => setHorario(event.target.value)}
                                    onBlur={handleHorarioBlur}
                                    placeholder=" "
                                    id="horario"
                                    required
                                />
                                <Button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                                <ChevronsUpDownIcon size={16} />
                                </Button>
                            </Group>

                            {/* Opciones */}
                            <Popover className="w-(--trigger-width) mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                <ListBox
                                    items={[
                                        { id: 1, name: "Mañana (8am - 12pm)" },
                                        { id: 2, name: "Tarde (1pm - 5pm)" },
                                        { id: 3, name: "Noche (6pm - 9pm)" },
                                    ]}
                                >
                                {(item) => (
                                    <ListBoxItem
                                        textValue={item.name}
                                        className="px-3 py-2 cursor-pointer hover:bg-blue-50 focus:bg-blue-600 focus:text-white 
                                                    flex justify-between items-center text-sm md:text-base"
                                    >
                                    {({ isSelected }) => (
                                        <>
                                            <span>{item.name}</span>
                                            {isSelected && <CheckIcon size={16} />}
                                        </>
                                    )}
                                    </ListBoxItem>
                                )}
                                </ListBox>
                            </Popover>
                            </ComboBox>
                        </div>

                        {/* Input 6: Asunto */}
                        <div className="w-full sm:w-1/2 relative">
                            <input 
                                type="text"
                                className={`peer w-full py-4 px-2.5 text-sm md:text-base border border-gray-300
                                            rounded outline-none transition-all focus:border-[#274885] focus:border-2
                                            ${asuntoError 
                                                ? "border-red-500 placeholder:text-red-500 border-2 animate-shake"
                                                : "border-gray-300 focus:border-[#274885] focus:border-2"
                                            }`}
                                value={asunto}
                                onChange={(event) => setAsunto(event.target.value)}
                                onBlur={handleAsuntoBlur}
                                placeholder=""
                                id="asunto" 
                                required 
                            />
                            <label 
                                htmlFor="asunto" 
                                className={`absolute pointer-events-none bg-white px-1.5 text-gray-500
                                            text-md md:text-base transition-all duration-200 ease-out top-3 left-2.5
                                            peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#274885]
                                            peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2
                                            peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#274885]
                                            ${asuntoError
                                                ? "text-red-500 peer-focus:text-[#274885]"
                                                : "text-gray-500 peer-focus:text-[#274885]"
                                            }`}
                            >
                                Asunto *
                            </label>
                        </div>

                    </div>

                    {/* Contenedor 4: caja de texto de Solicitud */}
                    <div className="w-full h-full">
                        <div className="relative">
                            <textarea 
                                className={`peer w-full h-32 md:h-40 py-4 px-2.5 text-sm md:text-base border border-gray-300
                                            rounded outline-none transition-all focus:border-[#274885] focus:border-2
                                            ${solicitudError 
                                                ? "border-red-500 placeholder:text-red-500 border-2 animate-shake"
                                                : "border-gray-300 focus:border-[#274885] focus:border-2"
                                            }`}
                                value={solicitud}
                                onChange={(event) => setSolicitud(event.target.value)}
                                onBlur={handleSolicitudBlur}
                                placeholder=""
                                id="solicitud" 
                                required 
                            />
                            <label 
                                htmlFor="solicitud" 
                                className={`absolute pointer-events-none bg-white px-1.5 text-gray-500
                                            text-md md:text-base transition-all duration-200 ease-out top-3 left-2.5
                                            peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-[#274885]
                                            peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2
                                            peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#274885]
                                            ${solicitudError
                                                ? "text-red-500 peer-focus:text-[#274885]"
                                                : "text-gray-500 peer-focus:text-[#274885]"
                                            }`}
                            >
                                Solicitud *
                            </label>
                        </div>
                    </div>

                    {/* Botón azul enviar formulario */}
                    <div className="flex justify-center xl:justify-start">
                        <div
                            className="flex w-45 h-12 p-4 bg-[#274885] hover:bg-[#38568F] justify-center items-center gap-3 
                            transition-colors duration-500 ease-in-out rounded-sm shadow tracking-wide text-white text-md md:text-base"
                        >
                            <input className="cursor-pointer bg-transparent border-none" type="submit" value="Envíe su mensaje" />
                        </div>
                    </div>

                </div>

                {/* Bloque derecho */}
                <div className="w-full lg:w-5/12 xl:w-7/20 flex flex-col text-[#666666] gap-4 md:gap-6">
                    <div className="w-full flex items-start">
                        <div className="w-8 h-8 md:w-10 md:h-10 mr-4 md:mr-6 flex-shrink-0">
                            <img 
                                className="w-full h-full"
                                src="/img/contacto-ubicacion.svg" 
                                alt="contacto ubicacion" 
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="uppercase font-black text-[#274885] text-lg md:text-xl mb-2">Ubicación</h3>
                            <p className="text-sm md:text-base">Jr. Pascual Saco Oliveros N° 533 Urb. Santa Catalina</p>
                            <p className="text-sm md:text-base">- La Victoria, Lima</p>
                            <p className="text-sm md:text-base">Jr. Santiago Mamani 119, 2do Piso. Juliaca, Puno</p>
                        </div>
                    </div>

                    <div className="w-full flex items-start">
                        <div className="w-8 h-8 md:w-10 md:h-10 mr-4 md:mr-6 flex-shrink-0">
                            <img
                                className="w-full h-full"
                                src="/img/contacto-telefono.svg" 
                                alt="contacto telefono" 
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="uppercase font-black text-[#274885] text-lg md:text-xl mb-2">Telefono / Cell</h3>
                            <p className="text-sm md:text-base">[01] 373 7948</p>
                            <p className="text-sm md:text-base">991 239 977</p>
                        </div>
                    </div>

                    <div className="w-full flex items-start">
                        <div className="w-8 h-8 md:w-10 md:h-10 mr-4 md:mr-6 flex-shrink-0">
                            <img 
                                className="w-full h-full"
                                src="/img/contacto-correo.svg" 
                                alt="contacto correo" 
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="uppercase font-black text-[#274885] text-lg md:text-xl mb-2">Correo</h3>
                            <p className="text-sm md:text-base">abrconsultores@abrgrupoconsultor.pe</p>
                            <p className="text-sm md:text-base">administracion@abrgrupoconsultor.pe</p>
                            <p className="text-sm md:text-base">cbazan@abrgrupoconsultor.pe</p>
                        </div>
                    </div>

                </div>
            </div>

        </form>

    </div>
  )
}