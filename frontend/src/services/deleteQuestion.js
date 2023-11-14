import { useState, useEffect } from "react";
import axios from "axios";

export const deleteQuestion = () => {
    const [isLoading, setIsLoading] = useState(true);
    

    
        const deletQuestion = async (id) => {
            const body={id};
            try {
                console.log('http://localhost:4444/questions/delete/'+id);
                await axios.delete('http://localhost:4444/questions/delete/'+id);
                fetchData();
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };


    return { deletQuestion, isLoading };
};
