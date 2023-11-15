import axios from "axios"
import { envLoader } from "./envLoader"

export const CreateQuestion = (question, answer) => {
    const data = {
        question,
        answer
    }

    return axios.post(`${envLoader.back}/questions/create`, data)
        .then((res) => {
            console.log(res.data)
            return res
        })
        .catch((err) => {
            console.log(err)
            throw err
        })
}