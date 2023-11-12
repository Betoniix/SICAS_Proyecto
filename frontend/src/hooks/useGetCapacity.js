import { useState, useEffect } from "react";
import axios from "axios";

export const useGetCapacity = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4444/capacity/");
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { isLoading, data };
};
