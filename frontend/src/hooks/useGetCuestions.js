import axios from "axios";
import { useState, useEffect } from "react";

export const useGetCuestions = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4444/questions/");
                setData(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error("Error fetching data:", error);
                setData([])
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // El array vacío indica que este efecto se ejecuta solo una vez al montar el componente.

    return { data, isLoading };
};
