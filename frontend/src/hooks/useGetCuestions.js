import axios from "axios"
import { useState } from "react"

export const useGetCuestions = () => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState()

    axios.get('http://localhost:4444/questions/')
        .then((res) => {
            console.log(res.data)
            setData([])
        })
        .catch((err) => {
            console.log(err)
            setData([])
        })
        .finally(() => { setIsLoading(false) })

    return { data, isLoading }
}