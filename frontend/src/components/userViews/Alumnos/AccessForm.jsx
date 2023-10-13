import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../../FormApp.css'
import { Link } from 'react-router-dom';


export const AccessForm = () => {

    return (
    <div class="cuestionario">
      <h3>Cuestionario de Accesso</h3>
      <h5>Por favor, responda el siguiente cuestionario con total honestidad</h5>
    <div class="border border-dark p-5 m-5">
      {/* ACCESS FORM */}
      <form>
        <div id='FormQuestions' className='text-start'>
          <a>¿Está usted vacunado?</a>  <br></br>
          <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"aria-haspopup="true" aria-expanded="false">
            Seleccione una opción
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item">Si</a>
            <a className="dropdown-item">No</a>
          </div>
          <br></br><br></br>
          <a>¿Está usted vacunado?</a>  <br></br>
          <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"aria-haspopup="true" aria-expanded="false">
            Seleccione una opción
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Si</a>
            <a className="dropdown-item" href="#">No</a>
          </div>
          <br></br><br></br>
          <a>¿Está usted vacunado?</a>  <br></br>
          <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"aria-haspopup="true" aria-expanded="false">
            Seleccione una opción
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item">Si</a>
            <a className="dropdown-item">No</a>
          </div>
        </div>

  
      {/* ACCESS BUTTONS */}     
        <br></br> <br></br>
        <Link to="/RegistroDeAsistencia" className="links-style">
            <button className="btn btn-warning d-inline">Enviar</button>
        </Link>
        {/*<button type='submit' className="btn btn-warning d-inline">Enviar</button>*/}
        <Link to="/" className="links-style">
            <button className="btn btn-danger d-inline mx-2">Cancerlar</button>
        </Link>
      </form>
    </div>
    </div>
  );
};