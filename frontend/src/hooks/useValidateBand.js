import axios from "axios";
import { envLoader } from "../services/envLoader";

export const ValidateBan = (id) => {
    return axios.get(`${envLoader.back}/student/ban/${id}`)
        .then((res) => res.data)
        .catch((err) => { throw err })
};