import { useState } from 'react';
import QRCodeReader from "react-qrcode-reader";
import { Link } from 'react-router-dom';

export const Escaneo = () => {

  const [text, setText] = useState("");

  return (<div className='border border-dark p-5 m-5 text-center'>
    <div className="d-inline ">
      <button className='btn btn-warning'>Nuevo Escaneo</button>
      <button className='btn btn-secondary mx-2'>Verificar</button>
    </div>
    <br></br> <br></br>



    <QRCodeReader onRead={(result) => {
      const text = result.data;
      if (result) {
        setText(text);
      } else {
        setText("");
      }
    }} />


    <div>
      {text ? <p>El texto del código QR es: {text}</p> : <p>No se ha detectado texto</p>}
    </div>
    <br></br>
    <Link to="/" className="links-style">
      <button className='boton-azul'>Regresar al inicio</button>
    </Link>

  </div>);
};
