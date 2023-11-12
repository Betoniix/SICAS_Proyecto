import axios from "axios"

export const updateCapacity = (capacity) => {
    const body = { percentage: parseInt(capacity) }

    axios.put('http://localhost:4444/capacity/update', body)
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
}