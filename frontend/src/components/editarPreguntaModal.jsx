import React, { useState } from "react";
import Select from 'react-select';

function editarPreguntaModal({
  editarOnSubmit,
  pregunta,
  setPregunta,
  respuesta,
  setRespuesta,
}) {
    const opciones = [
        { value: 'Si', label: 'Sí' },
        { value: 'No', label: 'No' },
      ]
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 outline outline-2 outline-black">
      <div className="bg-[#E8E8E8] w-[338px] h-[468px] flex flex-col justify-around items-center ">
        <div>
          <p className="text-[20px]">Pregunta</p>
          <input
            className="w-[237px] h-[58px] rounded-[10px] outline outline-2 outline-black p-4"
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
          ></input>
        </div>
        <div>
          <p className="text-[20px]">Respuesta Correcta</p>
          <select
                value={respuesta}
                onChange={(e) => setRespuesta(e.target.value)}>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                </select>
        </div>
        <button
          className="w-[214px] h-[60px] bg-[#D5A00F] text-white text-[25px] font-normal rounded-[10px] submit"
          onClick={() => editarOnSubmit(pregunta, respuesta)}
        >
          Actualizar
        </button>
      </div>
    </div>
  );
}

export default editarPreguntaModal;