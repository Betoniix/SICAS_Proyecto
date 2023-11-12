import { useState } from "react"
import axios from 'axios'

export const useGetCapacity = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(0)


    axios.get('http://localhost:4444/capacity/')
        .then((res) => {
            setData(res.data.data)
        })
        .catch((err) => { console.log(err) })
        .finally(() => { setIsLoading(false) })

    return { isLoading, data }
}