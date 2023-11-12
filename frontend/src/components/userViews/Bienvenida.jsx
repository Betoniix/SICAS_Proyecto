import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/*import axios from 'axios';

import db from '../../../server.js';
*/
export const Layout = () => {
/*
  const [connection, setConnection] = useState(null);
  const [data, setData] = useState([]);

  useEffect() => 
    
    if (!connection) {
      const connection = mysql.createConnection(config);
      connection.connect();
      setConnection(connection);
    }

    const query = `SELECT * FROM administradores`;
    connection.query(query, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        setData(results);
      }
    });
  }, [connection]);
*/
  return (
      <div>
        {/* FORM TITLE */}
        <div className="center-div">
        <h2>Te damos la bienvenida</h2>
        {/*<ul>
          {data.map(item => (
            <li key={item.id}>{item.nombres} {item.apellidos}</li>
          ))}
          </ul>*/}


          
          <a>Reserva tu asistencia</a>
          <br />
          <br />
          <br />
          <Link to="/RealizarCarga" className="links-style">
            {/* Usar Link para navegar a la página de RealizarCarga */}
            <button className="btn btn-warning d-inline">Realizar Carga</button>
          </Link>
        </div>

      <br></br>

      <div className="center-div">
          <h2>Te damos la bienvenida [Nombre Escaneadores]</h2>
          <a>Comienza a registrar asistencias</a>
          <br />
          <br />
          <br />
          <Link to="/Escaneo" className="links-style">
            {/* Usar Link para navegar a la página de RealizarCarga */}
            <button className="btn btn-warning d-inline">Escanear</button>
          </Link>
        </div>



      </div>
  );
};
