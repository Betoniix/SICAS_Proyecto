import axios from "axios"
import { envLoader } from "./envLoader"

export const CreateReservation = (body) => {
    return axios.post(`${envLoader.back}/reservations/create`, body)
        .then((res) => {
            return res.data
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            throw error; // Puedes relanzar el error si es necesario
        });
}