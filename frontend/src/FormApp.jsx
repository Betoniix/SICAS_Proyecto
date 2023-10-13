import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './FormApp.css';
import {Layout} from './components/userViews/Bienvenida';
import { Route, Routes } from 'react-router-dom';
import { AccessForm } from './components/userViews/Alumnos/AccessForm';
import { Carga } from './components/userViews/Alumnos/Carga';
import {Escaneo} from './components/userViews/Escaneadores/Escaneo';


export const FormApp = () => {
  return ( 
    <div>
       {/* HEADER */}
       <div className="header-container d-flex align-items-center justify-content-center">
            <div className="container">
            <div className="row align-items-center">
                <div className="col text-start">
                <img src="./src/images/logo_uady.png" alt="Imagen" width="40" height="60"/>
                </div>
                <div className="col text-center header-title">
                <h4><strong>Sistema de Control de Asistencia Segura</strong></h4>
                </div>
                <div className="col text-end">
                <button className="btn btn-danger" type="button">Cerrar Sesión</button>
                </div>
            </div>
            </div>
        </div>
        
      {/*RUTAS*/}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/RealizarCarga" element={<AccessForm />} />
        <Route path="/RegistroDeAsistencia" element={<Carga />} />
        <Route path="/Escaneo" element={<Escaneo />} />
      </Routes>
    </div>
  );
};
