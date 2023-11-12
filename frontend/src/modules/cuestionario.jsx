import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import Header from "../components/header";
import { useGetCuestions } from "../hooks/useGetCuestions";
import { CreateQuestion } from "../services/createQuestion";

export const Cuestionario = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("si");
    const { data, isLoading } = useGetCuestions();

    useEffect(() => {
        if (!isLoading) setQuestions(data);
    }, [isLoading, data]);

    const agregarPregunta = () => {
        CreateQuestion(newQuestion, correctAnswer)
        setNewQuestion('')
        setCorrectAnswer('')
    };

    return (
        <>
            <Header />
            <div className="grid grid-cols-3 content-center h-4/5 mt-10">
                <NavBar />
                <div className="bg-[#E8E8E8] justify-self-center h-[550px] w-full mr-12 grid grid-cols-1 overflow-auto">
                    <div className="self-center justify-self-center text-2xl font-bold">
                        Cuestionario
                    </div>
                    <div className="grid grid-cols-4 content-center p-4">
                        {questions.map((quest, index) => (
                            <React.Fragment key={index}>
                                <div className="col-span-2">
                                    {quest.question} - {quest.answer}
                                </div>
                                <a
                                    className="bg-[#D5A00F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2"
                                    href="#"
                                >
                                    Editar
                                </a>
                                <a
                                    className="bg-[#D50F0F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2"
                                    href="#"
                                >
                                    Eliminar
                                </a>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="bg-[#E8E8E8] justify-self-center h-[550px] w-full mx-6 grid grid-cols-1">
                    <div className="self-center justify-self-center text-2xl font-bold">
                        Añadir nueva pregunta
                    </div>
                    <div className="flex flex-col justify-self-center text-center self-center">
                        Nueva pregunta
                        <input
                            className="w-96 h-8 rounded-md border-black border-2 p-1"
                            type="text"
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col justify-self-center text-center self-center">
                        Respuesta correcta
                        <select
                            name="respuesta"
                            id="respuesta"
                            value={correctAnswer}
                            onChange={(e) => setCorrectAnswer(e.target.value)}
                        >
                            <option value="yes">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button
                        onClick={agregarPregunta}
                        className="bg-[#D5A00F] w-44 h-14 rounded-md text-center self-center justify-self-center py-4">
                        Añadir
                    </button>
                </div>
            </div>
        </>
    );
};
