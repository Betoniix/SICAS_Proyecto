//import { useState } from "react";
import "../index.css";
import NavBar from "../components/navBar";
import Header from "../components/header";
import { useGetCuestions } from "../hooks/useGetCuestions";
import { useEffect, useState } from "react";

export const Cuestionario = () => {
    /*   const [questions, setQuestions] = useState()
      const { data, isLoading } = useGetCuestions()
  
      useEffect(() => {
          if (!isLoading) setQuestions(data)
          console.log(data)
      }, [isLoading, data]) */

    return (
        <>
            <Header />
            <div className=" grid grid-cols-3 content-center h-4/5 mt-10">
                <NavBar />
                <div className=" bg-[#E8E8E8] justify-self-center h-[550px] w-full mr-12 grid grid-cols-1 overflow-auto">
                    <div className="self-center justify-self-center text-2xl font-bold">Cuestionario</div>
                    <div className="grid grid-cols-4 content-center p-4">
                        {/*  {questions.map((quest) => {
                            return <>
                                <div className="col-span-2">
                                    {quest.question} - {quest.answer}
                                </div>
                                <a className="bg-[#D5A00F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Editar</a>
                                <a className="bg-[#D50F0F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Eliminar</a></>
                        })} */}
                    </div>

                </div>
                <div className=" bg-[#E8E8E8] justify-self-center h-[550px] w-full mx-6 grid grid-cols-1">
                    <div className="self-center justify-self-center text-2xl font-bold">Añadir nueva pregunta</div>
                    <div className="flex flex-col justify-self-center text-center self-center">
                        Nueva pregunta
                        <input className="w-96 h-8 rounded-md border-black border-2 p-1"></input>
                    </div>
                    <div className="flex flex-col justify-self-center text-center self-center">
                        Respuesta correcta
                        <select name="respuesta" id="respuesta">
                            <option value="si">Sí</option>
                            <option value="no">No</option>

                        </select>
                    </div>

                    <input type="submit" value="Añadir" className="bg-[#D5A00F] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 "></input>

                </div>
            </div>
        </>
    );

}

