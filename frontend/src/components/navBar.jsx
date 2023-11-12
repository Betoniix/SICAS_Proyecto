import { useState } from "react";
import "../index.css";

function navBar(){
    return(
        <div className="bg-white justify-self-center border-black border-2 h-[550px] w-[400px] grid grid-cols-1">
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Alertas</a>
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Aforo</a>
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Aulas</a>
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Cuestionario</a>
        </div>
    );
}

export default navBar;
