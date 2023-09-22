import React from "react";
import "./header.css"

function Header(){
    let displayBtn = "hidden";

    function cookieExists(name) {
        return document.cookie.split(';').some(cookie => cookie.trim().startsWith(name + '='));
    }

    if (cookieExists('sesion')) {
        displayBtn = "visible";
    } 

    function handleCerrarSesiom() {
        document.cookie = `${"sesion"}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

        //Y debe saltar al login, cuando tengamos enrutamiento. De momento hace esto:
        window.location.reload();
    }
    
    return (
        <div className={"header"}>
            <img src="./escudo.svg" alt="Logo" className={"uadylogo"}/>
            <h2 className={"title"}>Sistema de Control de Asistencia Segura</h2>
            <button type="button" value="Submit" className={"sesionbtn"} onClick={() => handleCerrarSesiom()} style={{visibility: (displayBtn as any)}}>Cerrar Sesión</button>
        </div>
    )
}

export default Header;