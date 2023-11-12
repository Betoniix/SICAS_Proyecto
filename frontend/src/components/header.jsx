import { useEffect, useState } from "react";
import "./header.css";

export const Header = () => {
    const [display, setDisplay] = useState('hidden')

    function cookieExists(name) {
        return document.cookie.split(";").some((cookie) => cookie.trim().startsWith(name + "="));
    }

    useEffect(() => {
        if (cookieExists("sesion")) {
            setDisplay('visible')
        }
    }, [])

    function handleCerrarSesion() {

    }

    return (
        <div className="header bg-[#0A1446]">
            <h2
                className="title text-white text-[25px] font-medium rounded-lg py-2 px-4 mt-4 w-[400px] mx-auto text-center flex-grow justify-content-center"
            >
                Sistema de Control de Asistencia Segura
            </h2>
            <button
                type="button"
                value="Submit"
                className={`sesionbtn bg-[#0A1446] text-white text-[25px] font-medium rounded-lg py-2 px-4 mt-4`}
                onClick={() => handleCerrarSesion()}
                style={{ visibility: display }}
            >
                Cerrar Sesión
            </button>
        </div>
    );
}

export default Header;
