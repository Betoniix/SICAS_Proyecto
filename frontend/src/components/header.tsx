import React from "react";
import "./header.css";

function Header() {
    let displayBtn = "hidden";

    function cookieExists(name) {
        return document.cookie.split(";").some((cookie) => cookie.trim().startsWith(name + "="));
    }

    if (cookieExists("sesion")) {
        displayBtn = "visible";
    }

    function handleCerrarSesion() {
        document.cookie = `"${"sesion"}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

        // Y debe saltar al login, cuando tengamos enrutamiento. De momento hace esto:
        window.location.reload();
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
                style={{ visibility: (displayBtn as any) }}
            >
                Cerrar Sesión
            </button>
        </div>
    );
}

export default Header;
