import axios from "axios"
import { envLoader } from "./envLoader"

export const CreateQuestion = (question, answer) => {
    const data = {
        question,
        answer
    }

    axios.post(`${envLoader.back}/questions/create`, data)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}