import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GestionAulas from "./modules/gestionAulas"
import LogIn from "./modules/logIn"
import AlertasAlumnos from "./modules/alertasAlumnos"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LogIn></LogIn>
    <AlertasAlumnos></AlertasAlumnos>
    <GestionAulas></GestionAulas>
  </React.StrictMode>
);
