import { useState } from "react";
import Header from "../components/header.jsx";
import "./login.css";
import { apiLogin } from "../services/iniciarSesion.js";
import { useLocalStorage } from "../services/useLocalStorage.js";
import { Roles } from "../services/roles.js";
import { useNavigate } from "react-router-dom";

function LogIn() {
    const [usuario, setUsuario] = useState("");
    const [contra, setContra] = useState("");
    const navigate = useNavigate()

    function iniciarSesion() {
        apiLogin(usuario, contra)
            .then((res) => {
                const result = res.data
                const body = { id: result.id, email: usuario, role: result.role }
                useLocalStorage.setStorage('auth', body)

                if (result.role === Roles.ADMIN) navigate('/admin/alerta')
                if (result.role === Roles.STUDENT) navigate('/student/welcome')
                if (result.role === Roles.SCANNER) navigate('/scanner/scanning')
            })
            .catch((err) => {
                console.error("Error al realizar la solicitud:", err);
                alert("Error al iniciar sesión");
            })
    }


    return (
        <div>
            <Header></Header>
            <div className={"login"}>
                <div className={"formulario"}>
                    <p className={"titulo"}>Iniciar Sesión</p>
                    <div className={"campo"}>
                        <p>Usuario</p>
                        <input
                            className={"UserInput"}
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        ></input>
                    </div>
                    <div className={"campo"}>
                        <p>Contraseña</p>
                        <input
                            className={"contraInput"}
                            value={contra}
                            onChange={(e) => setContra(e.target.value)}
                        ></input>
                    </div>
                    <button
                        type="button"
                        value="Submit"
                        className={"ingresarBtn"}
                        onClick={() => iniciarSesion()}
                    >
                        Ingresar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
