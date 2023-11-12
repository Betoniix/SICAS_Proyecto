import { useState } from "react"
import Header from "../components/header";
import NavBar from "../components/navBar";

function AlertasAlumnos() {

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

    return (
        <>
            <Header />
            <div className="h-[85vh] flex justify-evenly items-center justify-items-center justify-self-center">
                <NavBar />
                <form className="w-[852px] h-[650px] bg-[#E8E8E8] shadow-xl flex flex-col justify-around content-center items-center">
                    <p className="font-bold text-[30px] ">Alertas</p>
                    <div className="h-[60%] flex flex-col justify-around">
                        <div className="flex flex-col">
                            <label className="text-[20px]">Matrícula</label>
                            <input className="w-[417px] h-[58px] rounded-[10px] outline outline-2 outline-black p-4"
                                value={matricula} onChange={(e) => setMatricula(e.target.value)}>
                            </input>
                        </div>
                        <p className="text-[20px]">Periodo de restricción</p>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <label className="text-[20px]">Inicio</label>
                                <input className="w-[196px] h-[58px] rounded-[10px] outline outline-2 outline-black p-4"
                                    type="date" value={inicio} onChange={(e) => setInicio(e.target.value)}>
                                </input>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[20px]">Final</label>
                                <input className="w-[196px] h-[58px] rounded-[10px] outline outline-2 outline-black p-4"
                                    type="date" value={final} onChange={(e) => setFinal(e.target.value)}>
                                </input>
                            </div>
                        </div>
                    </div>
                    <button className="w-[214px] h-[60px] bg-[#D50F0F] text-white text-[25px] font-normal rounded-[10px]"
                        onClick={() => restringir()}>Restringir
                    </button>
                </form>
            </div>
        </>
    )
}

export default AlertasAlumnos;
