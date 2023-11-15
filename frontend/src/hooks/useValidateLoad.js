import axios from "axios";
import { envLoader } from "../services/envLoader";

export const ValidateLoad = (id) => {
    return axios.get(`${envLoader.back}/student/reservation/${id}`)
        .then((res) => res.data)
        .catch((err) => { throw err })
};