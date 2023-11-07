import React, { useState } from "react"
import Header from "../components/header";
import NavBar from "../components/navBar";

function AlertasAlumnos(){
    
    const [matricula, setMatricula] = useState("");
    const [inicio, setInicio] = useState("");
    const [final, setFinal] = useState("");

    function restringir() {
        if (matricula && inicio && final) {
            alert(matricula + " Ha sido restringido desde " + inicio + " hasta " + final);
        } else {
            alert("Por favor, complete todos los campos antes de continuar.");
        }
    }

    return(
    <>
        <Header/>
        <div class="h-[85vh] flex justify-evenly items-center justify-items-center justify-self-center">
            <NavBar/>
            <form class="w-[852px] h-[650px] bg-[#E8E8E8] shadow-xl flex flex-col justify-around content-center items-center">
                <p class="font-bold text-[30px] ">Alertas</p>
                <div class="h-[60%] flex flex-col justify-around">
                    <div class="flex flex-col">
                        <label class="text-[20px]">Matrícula</label>
                        <input class="w-[417px] h-[58px] rounded-[10px] outline outline-2 outline-black p-4" 
                            value={matricula} onChange={(e) => setMatricula(e.target.value)}>
                        </input>
                    </div>
                    <p class="text-[20px]">Periodo de restricción</p>
                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <label class="text-[20px]">Inicio</label>
                            <input class="w-[196px] h-[58px] rounded-[10px] outline outline-2 outline-black p-4" 
                                type="date" value={inicio} onChange={(e) => setInicio(e.target.value)}>
                            </input>
                        </div>
                        <div class="flex flex-col">
                            <label class="text-[20px]">Final</label>
                            <input class="w-[196px] h-[58px] rounded-[10px] outline outline-2 outline-black p-4" 
                                type="date" value={final} onChange={(e) => setFinal(e.target.value)}>
                            </input>
                        </div>
                    </div>
                </div>
                <button class="w-[214px] h-[60px] bg-[#D50F0F] text-white text-[25px] font-normal rounded-[10px]" 
                    onClick={() => restringir()}>Restringir
                </button>
            </form>
        </div>
    </>
    )
}

export default AlertasAlumnos;
