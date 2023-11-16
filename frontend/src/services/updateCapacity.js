import axios from "axios"

export const updateCapacity = (capacity) => {
    const body = { percentage: parseInt(capacity) }

    return axios.put('http://localhost:4444/capacity/update', body)
        .then((res) => {
            return res.data
        })
        .catch((err) => { throw err })
}