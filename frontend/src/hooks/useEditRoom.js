import { useState } from "react";
import axios from "axios";

export const UseEditRoom = () => {
  const [isLoading, setIsLoading] = useState(false);

  const editRoom = async (roomData) => {
    setIsLoading(true);
    try {
      console.log(roomData);
      await axios.put("http://localhost:4444/rooms/update", roomData);
    } catch (error) {
      console.error("Error posting room:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { editRoom, isLoading };
};
