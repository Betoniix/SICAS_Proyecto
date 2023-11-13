import { useState } from "react";
import axios from "axios";

export const usePostRoom = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addRoom = async (roomData) => {
    setIsLoading(true);
    try {
      console.log(roomData);
      await axios.post("http://localhost:4444/rooms/create", roomData);
    } catch (error) {
      console.error("Error posting room:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { addRoom, isLoading };
};
