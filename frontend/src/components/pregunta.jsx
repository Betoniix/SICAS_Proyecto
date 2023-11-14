import React, { useState } from "react";
import PreguntaModal from "./editarPreguntaModal";
import { updateQuestion } from "../services/updateQuestion";
import { deleteQuestion } from "../services/deleteQuestion";

function Pregunta({Id, Pregunta, Respuesta}){

    const [mostrarModal, setMostrarModal] = useState(false);
    const [pregunta, setPregunta] = useState(Pregunta);
    const [respuesta, setRespuesta] = useState(Respuesta);
    const [id, setId] = useState(Id);
    const {editQuestion} = updateQuestion();
    const {deletQuestion} = deleteQuestion();

    const editarOnSubmit = (pregunta, respuesta) => {
        setPregunta(pregunta);
        setRespuesta(respuesta);
        setMostrarModal(false);

        let data = {
            id: id,
            question: pregunta,
            answer: respuesta,
          };
      
          console.log("datos: " + data.id + "y " + data.respuesta);
      
          editQuestion(data);
    };



    const eliminar = () => {
        console.log(id); 
        deletQuestion(id);
           
    };

    const editar = () => {
        setMostrarModal(true);
    };

    return(
        <div className="grid grid-cols-4 content-center p-4">
            {mostrarModal && (
        <PreguntaModal
          editarOnSubmit={editarOnSubmit}
          pregunta={pregunta}
          setPregunta={setPregunta}
          respuesta={respuesta}
          setRespuesta={setRespuesta}
        ></PreguntaModal>
      )}
            <div className="col-span-2">
                [{pregunta}]-[{respuesta}]
            </div>
            <button 
            className="bg-[#D5A00F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 "
            onClick={() => editar()}
            >
                Editar
            </button>
            <button 
            className="bg-[#D50F0F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 "
            onClick={() => eliminar()}
            >
                Eliminar
            </button>
        </div>
    );
}


export default Pregunta;