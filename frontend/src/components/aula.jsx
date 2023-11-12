import { useState } from "react";
import AulasModal from "./aulasModal";

function Aula({ Nombre, Edificio, Capacidad }) {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [nombre, setNombre] = useState(Nombre);
  const [edificio, setEdificio] = useState(Edificio);
  const [capacidad, setCapacidad] = useState(Capacidad);

  const editarOnSubmit = (nombre, edificio, capacidad) => {
    setNombre(nombre);
    setCapacidad(capacidad);
    setEdificio(edificio);
    setMostrarForm(false);
  };

  const actualizarAula = () => {
    //backend
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
        [{nombre}] - [{edificio}] - [{capacidad}]
      </p>
      <button
        className="w-[214px] h-[60px] bg-[#D5A00F] text-white text-[25px] font-normal rounded-[10px]"
        onClick={() => editar()}
      >
        Editar
      </button>
      <button
        className="w-[214px] h-[60px] bg-[#D50F0F] text-white text-[25px] font-normal rounded-[10px]"
        onClick={() => eliminar()}
      >Eliminar</button>
      {mostrarForm ? true : false}
    </div>
  );
}

export default Aula;
