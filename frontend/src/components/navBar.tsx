import React from "react";

function NavBar(){

    return (
     <div className="w-[338px] h-[468px] outline outline-2 outline-black flex flex-col justify-center items-center">
        <button className="w-[290px] h-[60px] bg-[#0A1446] text-white text-[25px] font-normal rounded-[10px] m-4">Alertas</button>
        <button className="w-[290px] h-[60px] bg-[#0A1446] text-white text-[25px] font-normal rounded-[10px] m-4">Aforo</button>
        <button className="w-[290px] h-[60px] bg-[#0A1446] text-white text-[25px] font-normal rounded-[10px] m-4">Aulas</button>
        <button className="w-[290px] h-[60px] bg-[#0A1446] text-white text-[25px] font-normal rounded-[10px] m-4">Cuestionario</button>
     </div>
    )
}

export default NavBar;