import { useState } from "react"
import Header from "../components/header";
import NavBar from "../components/navBar";

function GestionAulas() {

    let AulasActuales = [
        {
            "NombreAula": "DB-02",
            "Edificio": "Edificio D",
            "Capacidad": "26"
        },
        {
            "NombreAula": "EE-03",
            "Edificio": "Edificio A",
            "Capacidad": "45"
        },
        {
            "NombreAula": "DB-04",
            "Edificio": "Edificio D",
            "Capacidad": "23"
        },
        {
            "NombreAula": "EE-01",
            "Edificio": "Edificio A",
            "Capacidad": "50"
        },
        {
            "NombreAula": "HA-02",
            "Edificio": "Edifcio H",
            "Capacidad": "30"
        },
        {
            "NombreAula": "HA-02",
            "Edificio": "Edifcio H",
            "Capacidad": "30"
        },
        {
            "NombreAula": "HA-02",
            "Edificio": "Edifcio H",
            "Capacidad": "30"
        },
        {
            "NombreAula": "HA-02",
            "Edificio": "Edifcio H",
            "Capacidad": "30"
        },

    ];

    const [aulas, setAulas] = useState(AulasActuales);

    function restringir() {

    }

    function editar() {
        //modificar con el index, simular peticion ya ctualizar. USAR UNA COPIA
    }

    function eliminar() {
        //quitar con el index, simular peticion y actualizar. USAR UNA COPIA
    }

    return (
        <>
            <Header></Header>
            <div className="h-[85vh] flex justify-evenly items-center justify-items-center justify-self-center">
                <NavBar />
                <div className="h-[100%] flex flex-col justify-around items-center">
                    <div className="w-[1338px] h-[686px] max-h-[686px] bg-[#D9D9D9] flex flex-col content-center items-center overflow-auto ">
                        <p className="font-bold text-[30px] ">Aulas</p>
                        {aulas.map(aula =>
                            <>
                                <div className="w-[100%] flex justify-evenly my-8">
                                    <p className="text-[30px]">[{aula.NombreAula}] - [{aula.Edificio}] - [{aula.Capacidad}]</p>
                                    <button className="w-[214px] h-[60px] bg-[#D5A00F] text-white text-[25px] font-normal rounded-[10px]"
                                        onClick={() => editar()}>Editar
                                    </button>
                                    <button className="w-[214px] h-[60px] bg-[#D50F0F] text-white text-[25px] font-normal rounded-[10px]"
                                        onClick={() => eliminar()}>Eliminar
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                    <button className="w-[214px] h-[60px] bg-[#D5A00F] text-white text-[25px] font-normal rounded-[10px]"
                        onClick={() => restringir()}>Añadir
                    </button>
                </div>
            </div>
        </>
    )
}

export default GestionAulas;
