import { useState } from "react";
import AulasModal from "./aulasModal";
import { UseEditRoom } from "../hooks/useEditRoom";

function Aula({ Id, Id_build, Nombre, Edificio, Capacidad }) {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [nombre, setNombre] = useState(Nombre);
  const [edificio, setEdificio] = useState(Edificio);
  const [capacidad, setCapacidad] = useState(Capacidad);
  const [id_build, setId_build] = useState(Id_build);
  const [id, setId] = useState(Id);
  const { editRoom } = UseEditRoom();

  const editarOnSubmit = (nombre, edificio, capacidad) => {
    setNombre(nombre);
    setCapacidad(capacidad);
    setEdificio(edificio);
    setMostrarForm(false);

    let data = {
      id: id,
      name: nombre,
      id_build: id_build,
      capacity: parseInt(capacidad),
    };

    console.log("datos: " + data.id + "y " + data.id_build);

    editRoom(data);
  };

  const actualizarAula = () => {
    setMostrarForm(false);
  };

  const eliminar = () => { };

  const editar = () => {
    setMostrarForm(true);
  };

  return (
    <div className="w-[100%] flex justify-evenly my-8">
      {mostrarForm && (
        <AulasModal
          editarOnSubmit={editarOnSubmit}
          nombre={nombre}
          setNombre={setNombre}
          edificio={edificio}
          setEdificio={setEdificio}
          capacidad={capacidad}
          setCapacidad={setCapacidad}
        ></AulasModal>
      )}

      <p className="text-[30px]">
        Nombre: {nombre} - Edificio: {edificio} - Capacidad: {capacidad}
      </p>
      <button
        className="w-[214px] h-[60px] bg-[#D5A00F] text-white text-[25px] font-normal rounded-[10px]"
        onClick={() => editar()}
      >
        Editar
      </button>

      {mostrarForm ? true : false}
    </div>
  );
}

export default Aula;
