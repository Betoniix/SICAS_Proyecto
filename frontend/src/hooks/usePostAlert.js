import { useState } from "react";
import axios from "axios";

export const usePostAlert = () => {
  const [isLoading, setIsLoading] = useState(false);

  const banear = async (datos) => {
    setIsLoading(true);

    try {
      console.log(datos);
      await axios.post("http://localhost:4444/alerts/create", datos);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { banear, isLoading };
};
