import axios from "axios";
import { useState, useEffect } from "react";
import { envLoader } from "../services/envLoader";

export const useGetSubjects = (id) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${envLoader.back}/reservations/${id}`);
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
    }, [id]); // El array vacío indica que este efecto se ejecuta solo una vez al montar el componente.

    return { data, isLoading };
};