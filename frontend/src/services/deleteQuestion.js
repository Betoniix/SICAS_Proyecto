import axios from "axios";

export const deletQuestion = (id) => {
    return axios.delete('http://localhost:4444/questions/delete/' + id)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
};