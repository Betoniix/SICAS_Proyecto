import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../components/header";
import NavBar from "../components/navBar";
//import AulasModal from "../components/aulasModal";
import Aula from "../components/aula";
import AniadirModal from "../components/añadirModal";
import { usePostRoom } from "../hooks/usePostRoom";
import Layout from "./Layout";

function GestionAulas() {
  const [aulas, setAulas] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);
  const { addRoom } = usePostRoom();

  //const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4444/rooms");
        const a = response.data.data;
        console.log(a);

        setAulas(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // El array vacío indica que este efecto se ejecuta solo una vez al montar el componente.

  function anadirOnSubmit(aula, edificio, capacidad) {
    let copyAulas = aulas;
    console.log("esta pasando");
    const nuevaAula = {
      build: {
        id: copyAulas.index + 1,
        name: edificio,
      },
      capacity: capacidad,
      id: copyAulas.index + 1,
      name: aula,
    };

    copyAulas.push(nuevaAula);

    setMostrarForm(false);
    setAulas(copyAulas);

    let data = {
      name: aula,
      capacity: parseInt(capacidad),
      id_build: parseInt(edificio),
    };
    addRoom(data);
  }

  function añadir() {
    setMostrarForm(true);
  }

  function eliminar() {
    //quitar con el index, simular peticion y actualizar. USAR UNA COPIA
  }

  return (

    <Layout>
      {mostrarForm && (
        <AniadirModal anadirOnSubmit={anadirOnSubmit}></AniadirModal>
      )}
      <div className="h-[85vh] flex justify-evenly items-center justify-items-center justify-self-center">

        <div className="h-[100%] flex flex-col justify-around items-center">
          <div className="w-[1338px] h-[686px] max-h-[686px] bg-[#D9D9D9] flex flex-col content-center items-center overflow-auto ">
            <p className="font-bold text-[30px] ">Aulas</p>
            {aulas.map((aula, index) => (
              <Aula
                Id={aula.id}
                Id_build={aula.build.Id}
                Nombre={aula.name}
                Edificio={aula.build.name}
                Capacidad={aula.capacity}
              ></Aula>
            ))}
          </div>
          <button
            className="w-[214px] h-[60px] bg-[#D5A00F] text-white text-[25px] font-normal rounded-[10px]"
            onClick={() => añadir()}
          >
            Añadir
          </button>
          {mostrarForm ? true : false}
        </div>
      </div>

    </Layout>

  );
}

export default GestionAulas;
