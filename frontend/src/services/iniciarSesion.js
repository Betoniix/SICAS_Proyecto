import { envLoader } from "./envLoader";
import axios from 'axios';

export function apiLogin(user, pass) {
  const body = {
    email: user,
    password: pass
  };


  return axios.post(`${envLoader.back}/auth/`, body)
    .then(response => {
      console.log('Respuesta exitosa:', response.data);
      return response.data; // Puedes devolver los datos si es necesario
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
      throw error; // Puedes relanzar el error si es necesario
    });
}
