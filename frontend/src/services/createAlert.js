import axios from "axios"

export const CreateAlert = (datos) => {
    return axios.post('http://localhost:4444/alerts/create', datos)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
}