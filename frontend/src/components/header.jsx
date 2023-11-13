import { useEffect, useState } from "react";
import "./header.css";
import { useLocalStorage } from "../services/useLocalStorage";
import { useNavigate } from 'react-router-dom'


export const Header = () => {
    const [display, setDisplay] = useState('hidden');
    const navigate = useNavigate()

    useEffect(() => {
        try {
            const authData = useLocalStorage.getStorage('auth');

            if (authData !== null && authData !== undefined) {
                console.log('display')
                setDisplay('visible');
            }
        } catch (error) {
            console.error("Error al obtener datos de autenticación:", error);
        }
    }, []);

    function handleCerrarSesion() {
        useLocalStorage.deleteStorage();
        navigate('/');
    }

    return (
        <div className="header bg-[#0A1446]">
            <h2 className="title text-white text-[25px] font-medium rounded-lg py-2 px-4 mt-4 w-[400px] mx-auto text-center flex-grow">
                Sistema de Control de Asistencia Segura
            </h2>
            <button
                type="button"
                className={`sesionbtn bg-[#0A1446] text-white text-[25px] font-medium rounded-lg py-2 px-4 mt-4`}
                onClick={handleCerrarSesion}
                style={{ visibility: display }}
            >
                Cerrar Sesión
            </button>
        </div>
    );
}

export default Header;
