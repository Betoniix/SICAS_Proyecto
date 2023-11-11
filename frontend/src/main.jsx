import React from "react";
import ReactDOM from "react-dom/client";
import Aforo from "./modules/aforo"
import Cuestionario from "./modules/cuestionario"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Aforo></Aforo>
    <Cuestionario></Cuestionario>
    
  </React.StrictMode>
);
