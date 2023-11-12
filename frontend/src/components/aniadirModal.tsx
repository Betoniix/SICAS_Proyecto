import React, { useState } from "react";

function AniadirModal({ anadirOnSubmit }) {
  const [nombre, setNombre] = useState("");
  const [edificio, setEdificio] = useState("");
  const [capacidad, setCapacidad] = useState("");

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 outline outline-2 outline-black">
      <div className="bg-[#E8E8E8] w-[338px] h-[468px] flex flex-col justify-around items-center ">
        <div>
          <p className="text-[20px]">Nombre del Aula</p>
          <input
            className="w-[237px] h-[58px] rounded-[10px] outline outline-2 outline-black p-4"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </div>
        <div>
          <p className="text-[20px]">Edificio</p>
          <input
            className="w-[237px] h-[58px] rounded-[10px] outline outline-2 outline-black p-4"
            value={edificio}
            onChange={(e) => setEdificio(e.target.value)}
          ></input>
        </div>
        <div>
          <p className="text-[20px]">Capacidad</p>
          <input
            className="w-[237px] h-[58px] rounded-[10px] outline outline-2 outline-black p-4"
            value={capacidad}
            onChange={(e) => setCapacidad(e.target.value)}
          ></input>
        </div>
        <button
          className="w-[214px] h-[60px] bg-[#D5A00F] text-white text-[25px] font-normal rounded-[10px] submit"
          onClick={() => anadirOnSubmit(nombre, edificio, capacidad)}
        >
          Añadir
        </button>
      </div>
    </div>
  );
}

export default AniadirModal;
