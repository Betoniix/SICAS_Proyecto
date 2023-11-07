import React, { useState } from "react"
import Header from "../components/header";
import "./login.css"
import {apiLogin} from "../services/iniciarSesion.js"

function LogIn() {
    
    const [usuario, setUsuario] = useState("");
    const [contra, setContra] = useState("");

    async function iniciarSesion() {
       
        let respuesta = await apiLogin(usuario, contra);
        
        if(respuesta == "error"){
            alert("Error al iniciar sesión")
        } else {
            cookieSesion(respuesta.token)

            //Aca debe saltar al componente principal, pero por ahora esta esto ekisde: 
            window.location.href = 'https://www.latercera.com/resizer/PsCS_pBJPvJA_Nv7j9u9jg_644w=/800x0/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/JXPNFABGL5HJXM3DDXZA2XH5CE.jpg';
        }
    }

    function cookieSesion(token) {
        document.cookie = `${"sesion"}=${token}; path=/`;
    }

    return (
        <div>
            <Header></Header>
            <div className={"login"}>
                <div className={"formulario"}>
                    <p className={"titulo"}>Iniciar Sesión</p>
                    <div className={"campo"}>
                        <p>Usuario</p>
                        <input className={"UserInput"} value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>
                    </div>
                    <div className={"campo"}>
                        <p>Contraseña</p>
                        <input className={"contraInput"} value={contra} onChange={(e) => setContra(e.target.value)}></input> 
                    </div>
                    <button type="button" value="Submit" className={"ingresarBtn"} onClick={() => iniciarSesion()} >Ingresar</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn;

