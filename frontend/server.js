/*const express = import('express');
const mysql = import('mysql');
const app = express();
const port = 5174; // Puedes cambiar el puerto si es necesario
*/
/*

import mysql from "mysql";

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "sicas",
};

export default db;
*/


/*
// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sicas'
});

db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});

// Ruta de ejemplo para obtener datos de la base de datos
app.get('/', (req, res) => {
  db.query('SELECT * FROM administradores', (err, result) => {
    if (err) {
      console.error('Error al obtener datos:', err);
      res.status(500).json({ error: 'Error al obtener datos' });
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
}); */

