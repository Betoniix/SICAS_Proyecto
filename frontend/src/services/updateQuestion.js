import { useState } from "react";
import axios from "axios"

export const updateQuestion = () => {
    const [isLoading, setIsLoading] = useState(false);

    const editQuestion = async (questionData) => {
        setIsLoading(true);
        try {
          console.log(questionData);
          await axios.put("http://localhost:4444/questions/update", questionData);
        } catch (error) {
          console.error("Error posting room:", error);
        } finally {
          setIsLoading(false);
        }
      };
    
      return { editQuestion, isLoading };
}