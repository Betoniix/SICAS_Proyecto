import "../index.css";
import NavBar from "../components/navBar";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { useGetCapacity } from "../hooks/useGetCapacity";
import { updateCapacity } from "../services/updateCapacity";

const Aforo = () => {
    const { data, isLoading } = useGetCapacity();
    const [aforo, setAforo] = useState(0);

    useEffect(() => {
        if (!isLoading) {
            setAforo(data);
        }
    }, [data, isLoading]);

    const handleChange = (e) => {
        setAforo(e.target.value);
    };

    const handleClick = () => {
        updateCapacity(aforo)
    };

    return (
        <>
            <Header />
            <div className="h-[85vh] flex justify-evenly items-center justify-items-center justify-self-center">
                <NavBar className="z-index-[-1]" />
                <div className="col-span-2 bg-[#E8E8E8] justify-self-center h-[550px] w-full mx-12 grid grid-cols-1">
                    <div className="self-center justify-self-center text-2xl font-bold">Aforo</div>
                    <div className="flex flex-col justify-self-center text-center self-center">
                        Porcentaje de capacidad
                        <input
                            type="number"
                            className="w-60 h-8 rounded-md border-black border-2 p-1"
                            value={aforo}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        className="bg-[#D5A00F] w-44 h-14 rounded-md text-center self-center justify-self-center py-4"
                        onClick={handleClick}
                    >
                        Actualizar
                    </button>
                </div>
            </div>
        </>
    );
};

export default Aforo;
