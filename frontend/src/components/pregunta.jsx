import { useState } from "react";
import PreguntaModal from "./editarPreguntaModal";
import { updateQuestion } from "../services/updateQuestion";

function Pregunta({ Id, Pregunta, Respuesta, callback }) {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [pregunta, setPregunta] = useState(Pregunta);
    const [respuesta, setRespuesta] = useState(Respuesta);
    const [id, setId] = useState(Id);
    const { editQuestion } = updateQuestion();

    const editarOnSubmit = (pregunta, respuesta) => {
        setPregunta(pregunta);
        setRespuesta(respuesta);
        setMostrarModal(false);

        let data = {
            id: id,
            question: pregunta,
            answer: respuesta,
        };

        editQuestion(data);
    };

    const eliminar = () => {
        callback(id);
        setMostrarModal(false);
    };

    const editar = () => {
        setMostrarModal(true);
    };

    return (
        <div className="grid grid-cols-4 content-center p-4 text-black">
            {mostrarModal && (
                <PreguntaModal
                    editarOnSubmit={editarOnSubmit}
                    pregunta={pregunta}
                    setPregunta={setPregunta}
                    respuesta={respuesta}
                    setRespuesta={setRespuesta}
                />
            )}
            <div className="col-span-2 mb-4">
                <p className="dark:text-black">
                    Pregunta: {pregunta} Respuesta: {respuesta}
                </p>
            </div>
            <div className="flex">
                <button
                    className="bg-yellow-600 w-28 h-10 rounded-md text-black dark:text-white text-center self-center justify-self-center py-2 mr-2 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={() => editar()}
                >
                    Editar
                </button>
                <button
                    className="bg-red-600 w-28 h-10 rounded-md text-black dark:text-white text-center self-center justify-self-center py-2 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={() => eliminar()}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Pregunta;
