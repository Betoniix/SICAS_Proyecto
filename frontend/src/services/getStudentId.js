import axios from "axios"
import { envLoader } from "./envLoader"

export const GetStudentID = (id) => {
    return axios.get(`${envLoader.back}/student/${id}`)
        .then((res) => {
            return res.data
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            throw error; // Puedes relanzar el error si es necesario
        });
}