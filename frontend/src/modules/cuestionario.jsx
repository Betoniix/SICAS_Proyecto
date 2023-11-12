import { useState } from "react";
import React from 'react'
import "../index.css";
import logo from "../assets/escudo.png";
import Pregunta from "../components/pregunta";
import Select from 'react-select';


function cuestionario(){

    const opciones = [
        { value: 'Si', label: 'Sí' },
        { value: 'No', label: 'No' },
      ]
    

    let ListaPreguntas = [
        {
            Pregunta: "¿Estás vacunado?",
            Respuesta: "Si",
        },
        {
            Pregunta: "¿Tienes covid?",
            Respuesta: "No",
        },
        {
            Pregunta: "¿Estás vacunado?",
            Respuesta: "Si",
        },
        {
            Pregunta: "¿Tienes covid?",
            Respuesta: "No",
        },
        {
          Pregunta: "¿Estás vacunado?",
          Respuesta: "Si",
        },
        {
          Pregunta: "¿Tienes covid?",
          Respuesta: "No",
        },
        {
            Pregunta: "¿Estás vacunado?",
            Respuesta: "Si",
        },
        {
            Pregunta: "¿Tienes covid?",
            Respuesta: "No",
        },
      ];


        const [preguntas, setPreguntas] = useState(ListaPreguntas);
        

    function anadirOnSubmit(pregunta, respuesta) {
        console.log({pregunta, respuesta});
        let copyPreguntas = preguntas;
    
        const nuevaPregunta = {
          Pregunta: pregunta,
          Respuesta: respuesta,
        };
    
        copyPreguntas.push(nuevaPregunta);
    
        setMostrarModal(false);
        setPreguntas(copyPreguntas);
      }

      function eliminar() {
        
      }
    
      const [pregunta, setPregunta] = useState("");
      const [respuesta, setRespuesta] = useState("");
  
    return(
        <>
        <div className="bg-[#0A1446] h-24 grid grid-cols-3 justify-items-center content-center">
            <img src={logo} alt="" className="w-10"/>
            <div className="text-white text-2xl self-center">Sistema de Control de Asistencia Segura</div>
            <div className="">
            <button className="h-10 bg-[#D50F0F] rounded-md text-white w-28 self-center">Cerrar Sesión</button>
            </div>
        </div>
        <div className=" grid grid-cols-3 content-center h-4/5 mt-10">
            <div className="bg-white justify-self-center border-black border-2 h-[550px] w-[400px] grid grid-cols-1">
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Alertas</a>
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Aforo</a>
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Aulas</a>
                <a className="bg-[#0A1446] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 text-white">Cuestionario</a>
            </div>
            
            <div className=" bg-[#E8E8E8] justify-self-center h-[550px] w-full mr-12 grid grid-cols-1 overflow-auto">
                <div className="self-center justify-self-center text-2xl font-bold">Cuestionario</div>
                {
                preguntas.map((pregunta) => (
                    <Pregunta
                        Pregunta={pregunta.Pregunta}
                        Respuesta={pregunta.Respuesta}
                    ></Pregunta>
                ))
            }

                <div className="grid grid-cols-4 content-center p-4">
                    <div className="col-span-2">
                        [Pregunta]-[Respuesta correcta]
                    </div>
                    <button className="bg-[#D5A00F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Editar</button>
                    <button className="bg-[#D50F0F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Eliminar</button>
                </div>
                <div className="grid grid-cols-4 content-center p-4">
                    <div className="col-span-2">
                        [Pregunta]-[Respuesta correcta]
                    </div>
                    <a className="bg-[#D5A00F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Editar</a>
                    <a className="bg-[#D50F0F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Eliminar</a>
                </div>
                <div className="grid grid-cols-4 content-center p-4">
                    <div className="col-span-2">
                        [Pregunta]-[Respuesta correcta]
                    </div>
                    <a className="bg-[#D5A00F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Editar</a>
                    <a className="bg-[#D50F0F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Eliminar</a>
                </div>
                <div className="grid grid-cols-4 content-center p-4">
                    <div className="col-span-2">
                        [Pregunta]-[Respuesta correcta]
                    </div>
                    <a className="bg-[#D5A00F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Editar</a>
                    <a className="bg-[#D50F0F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Eliminar</a>
                </div>
                <div className="grid grid-cols-4 content-center p-4">
                    <div className="col-span-2">
                        [Pregunta]-[Respuesta correcta]
                    </div>
                    <a className="bg-[#D5A00F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Editar</a>
                    <a className="bg-[#D50F0F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Eliminar</a>
                </div>
                <div className="grid grid-cols-4 content-center p-4">
                    <div className="col-span-2">
                        [Pregunta]-[Respuesta correcta]
                    </div>
                    <a className="bg-[#D5A00F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Editar</a>
                    <a className="bg-[#D50F0F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Eliminar</a>
                </div>
                <div className="grid grid-cols-4 content-center p-4">
                    <div className="col-span-2">
                        [Pregunta]-[Respuesta correcta]
                    </div>
                    <a className="bg-[#D5A00F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Editar</a>
                    <a className="bg-[#D50F0F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Eliminar</a>
                </div>
                <div className="grid grid-cols-4 content-center p-4">
                    <div className="col-span-2">
                        [Pregunta]-[Respuesta correcta]
                    </div>
                    <a className="bg-[#D5A00F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Editar</a>
                    <a className="bg-[#D50F0F] w-28 h-10 rounded-md text-center self-center justify-self-center py-2 ">Eliminar</a>
                </div>
                


                
               

            </div>
            <div className=" bg-[#E8E8E8] justify-self-center h-[550px] w-full mx-6 grid grid-cols-1">
            <div className="self-center justify-self-center text-2xl font-bold">Añadir nueva pregunta</div>
            <div className="flex flex-col justify-self-center text-center self-center">
                Nueva pregunta
                <input className="w-96 h-8 rounded-md border-black border-2 p-1"
                value={pregunta}
                onChange={(e) => setPregunta(e.target.value)}
                ></input>
            </div>
            <div className="flex flex-col justify-self-center text-center self-center">
                Respuesta correcta
                <select
                value={respuesta}
                onChange={(e) => setRespuesta(e.target.value)}>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                </select>
                
            </div>

            <button value="Añadir" className="bg-[#D5A00F] w-44 h-14 rounded-md text-center self-center justify-self-center py-4 submit" onClick={() => anadirOnSubmit(pregunta, respuesta)}>Añadir</button>
                
            </div>
        </div>
        </>
        );

}

export default cuestionario;