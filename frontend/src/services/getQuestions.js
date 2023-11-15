import axios from "axios"

export const GetQuestions = () => {
    return axios.get('http://localhost:4444/questions/')
        .then((res) => {
            return res.data
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            throw error; // Puedes relanzar el error si es necesario
        });
}