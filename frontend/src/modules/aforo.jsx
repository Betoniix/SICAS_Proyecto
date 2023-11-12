import { useState } from "react";
import "../index.css";
import logo from "../assets/escudo.png";

function aforo(){

    

    const [aforo, setAforo] = useState("");
    function anadirOnSubmit(aforo){
        console.log({aforo});
        //Sí
    }

    
    return(
        <>
        <div className="bg-[#0A1446] h-24 grid grid-cols-3 justify-items-center content-center">
            <img src={logo} alt="" className="w-10"/>
            <div className="text-white text-2xl self-center">Sistema de Control de Asistencia Segura</div>
            <div className="">
            <button className="h-10 bg-[#D50F0F] rounded-md text-white w-28 ">Cerrar Sesión</button>
            </div>
        </div>
        <div className=" grid grid-cols-3 content-center h-4/5 mt-10">
            <div className="bg-white justify-self-center border-black border-2 h-[550px] w-[400px] grid grid-cols-1">
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Alertas</a>
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Aforo</a>
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Aulas</a>
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Cuestionario</a>
            </div>
            
            <div className="col-span-2 bg-[#E8E8E8] justify-self-center h-[550px] w-full mr-12 grid grid-cols-1">
                <div className="self-center justify-self-center text-2xl font-bold">Aforo</div>
                <div className="flex flex-col justify-self-center text-center self-center">
                    Porcentaje de capacidad
                    <input className="w-60 h-8 rounded-md border-black border-2 p-1" 
                    
                    onChange={(e) => setAforo(e.target.value)}
                    ></input>
                </div>
                <button className="bg-[#D5A00F] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 submit" onClick={() => anadirOnSubmit(aforo)} >Actualizar</button>

            </div>
        </div>
        </>
        );

}

export default aforo;