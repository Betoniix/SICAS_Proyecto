
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../../FormApp.css';
import { Link } from 'react-router-dom';

export const Carga = () => {


  return (<div className='registro'>
    <h3>Registro de Asistencia</h3>
    <h5>Por favor, responda el siguiente cuestionario con total honestidad</h5>

    <div className="border border-dark p-5 m-5 ">
      <div className="materia">
        {/* CONTENT */}
        <a>Estas son las clases disponibles para mañana:</a>
        <br></br>

        <a>[Nombre de la materia] - [Aula] - [Horario]</a>
        <a>[Nombre de la materia] - [Aula] - [Horario]</a>
        <a>[Nombre de la materia] - [Aula] - [Horario]</a>
      </div>

      {/* ACCESS BUTTONS */}
      <br></br> <br></br>
      {/*
        <button type='submit' className="btn btn-warning d-inline">Enviar</button>
        <button  className="btn btn-danger d-inline  mx-2">Cancelar</button>*/}

      <Link to="#" className="links-style">
        <button className="btn btn-warning d-inline">Enviar</button>
      </Link>
      {/*<button type='submit' className="btn btn-warning d-inline">Enviar</button>*/}
      <Link to="/RealizarCarga" className="links-style">
        <button className="btn btn-danger d-inline mx-2">Cancelar</button>
      </Link>



    </div>





  </div>);
};