import "../index.css";

function encabezado(){
    return(
        <div className="bg-[#0A1446] h-24 grid grid-cols-3 justify-items-center content-center">
            <img src={logo} alt="" className="w-10"/>
            <div className="text-white text-2xl self-center">Sistema de Control de Asistencia Segura</div>
            <div className="">
            <button className="h-10 bg-[#D50F0F] rounded-md text-white w-28 self-center">Cerrar Sesión</button>
            </div>
        </div>
    );
}

export default encabezado;