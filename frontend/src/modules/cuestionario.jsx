import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import Header from "../components/header";
import { useGetCuestions } from "../hooks/useGetCuestions";
import { CreateQuestion } from "../services/createQuestion";
import Pregunta from "../components/pregunta";

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
            <div className="h-[85vh] flex justify-evenly items-center justify-items-center justify-self-center">
                <NavBar />
                <div className="bg-[#E8E8E8] justify-self-center h-[550px] w-full mx-10 grid grid-cols-1 overflow-auto">
                    <div className="self-center justify-self-center text-2xl font-bold">
                        Cuestionario
                    </div>
                    <div className="content-center p-4">
                        {questions.map((quest, index) => (
                            
                            <Pregunta key={index}
                            Id={quest.id}
                            Pregunta={quest.question}
                            Respuesta={quest.answer}
                        ></Pregunta>
                        ))}
                    </div>
                </div>
                <div className="bg-[#E8E8E8] justify-self-center h-[550px] w-full mr-5 grid grid-cols-1">
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
