import { useState } from 'react';
import QRCodeReader from 'react-qrcode-reader';
import { VerifyReservation } from '../../../services/verifyReservation';
import Header from '../../header';

export const Escaneo = () => {
  const [buttonColor, setButtonColor] = useState('bg-gray-500')
  const [resultColor, setResultColor] = useState('')
  const [text, setText] = useState('');
  const [toVerify, setToVerify] = useState('')

  const handleNuevoEscaneo = () => {
    setText('')
    setButtonColor('bg-gray-500')
  };

  const handleVerificar = () => {
    VerifyReservation(toVerify)
      .then((res) => {
        if (res.data) setText('Codigo de acceso valido')
        setResultColor('text-blue-500')
      })
      .catch((err) => {
        console.log(err)
        setText('Codigo de acceso no valido')
        setResultColor('text-red-500')
      })
  };

  return (<>
    <Header></Header>
    <div className="border border-dark p-5 m-5 text-center">

      <QRCodeReader
        delay={1}
        height={750}
        width={750}
        onRead={(result) => {
          const text = result.data;
          if (result) {
            setToVerify(text)
            setButtonColor('bg-blue-500')
          } else {
            setText('');
          }
        }}
      />

      <div className="inline-block">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleNuevoEscaneo}
        >
          Nuevo Escaneo
        </button>
        <button
          className={`${buttonColor} hover:bg-gray-600 text-white font-bold py-2 px-4 rounded`}
          onClick={handleVerificar}
        >
          Verificar
        </button>
      </div>



      <div className="mt-4">
        <p className={`${resultColor}`}>{text} </p>
      </div>
    </div>
  </>

  );
};
