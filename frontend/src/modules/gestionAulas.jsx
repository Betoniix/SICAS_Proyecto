import React, { useState } from "react";
import Header from "../components/header";
import NavBar from "../components/navBar";
import AulasModal from "../components/aulasModal";
import Aula from "../components/aula";
import AniadirModal from "../components/anñadirModal";

function GestionAulas() {
  let AulasActuales = [
    {
      NombreAula: "DB-02",
      Edificio: "Edificio D",
      Capacidad: "26",
    },
    {
      NombreAula: "EE-03",
      Edificio: "Edificio A",
      Capacidad: "45",
    },
    {
      NombreAula: "DB-04",
      Edificio: "Edificio D",
      Capacidad: "23",
    },
    {
      NombreAula: "EE-01",
      Edificio: "Edificio A",
      Capacidad: "50",
    },
    {
      NombreAula: "HA-02",
      Edificio: "Edifcio H",
      Capacidad: "30",
    },
    {
      NombreAula: "HA-02",
      Edificio: "Edifcio H",
      Capacidad: "30",
    },
    {
      NombreAula: "HA-02",
      Edificio: "Edifcio H",
      Capacidad: "30",
    },
    {
      NombreAula: "HA-02",
      Edificio: "Edifcio H",
      Capacidad: "30",
    },
  ];

  const [aulas, setAulas] = useState(AulasActuales);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [formData, setFormData] = useState({});

  function anadirOnSubmit(aula, edificio, capacidad) {
    let copyAulas = aulas;

    const nuevaAula = {
      NombreAula: aula,
      Edificio: edificio,
      Capacidad: capacidad,
    };

    copyAulas.push(nuevaAula);

    setMostrarForm(false);
    setAulas(copyAulas);
  }

  function añadir() {
    setMostrarForm(true);
  }

  function eliminar() {
    //quitar con el index, simular peticion y actualizar. USAR UNA COPIA
  }

  return (
    <>
      <Header></Header>
      {mostrarForm && (
        <AniadirModal anadirOnSubmit={anadirOnSubmit}></AniadirModal>
      )}
      <div class="h-[85vh] flex justify-evenly items-center justify-items-center justify-self-center">
        <NavBar />
        <div class="h-[100%] flex flex-col justify-around items-center">
          <div class="w-[1338px] h-[686px] max-h-[686px] bg-[#D9D9D9] flex flex-col content-center items-center overflow-auto ">
            <p class="font-bold text-[30px] ">Aulas</p>
            {aulas.map((aula) => (
              <Aula
                Nombre={aula.NombreAula}
                Edificio={aula.Edificio}
                Capacidad={aula.Capacidad}
              ></Aula>
            ))}
          </div>
          <button
            class="w-[214px] h-[60px] bg-[#D5A00F] text-white text-[25px] font-normal rounded-[10px]"
            onClick={() => añadir()}
          >
            Añadir
          </button>
          {mostrarForm ? true : false}
        </div>
      </div>
    </>
  );
}

export default GestionAulas;
