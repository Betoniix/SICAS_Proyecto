//import { useState } from "react";
import "../index.css";
import NavBar from "../components/navBar";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { useGetCapacity } from "../hooks/useGetCapacity";

const Aforo = () => {
    const { data, isLoading } = useGetCapacity()
    const [aforo, setAforo] = useState(0)

    useEffect(() => {
        if (!isLoading) setAforo(data)

    }, [isLoading])

    return (
        <>
            <Header />
            <div className="grid grid-cols-3 content-center h-4/5 mt-10">
                <NavBar className="z-index-[-1]" />
                <div className="col-span-2 bg-[#E8E8E8] justify-self-center h-[550px] w-full mr-12 grid grid-cols-1">
                    <div className="self-center justify-self-center text-2xl font-bold">Aforo</div>
                    <div className="flex flex-col justify-self-center text-center self-center">
                        Porcentaje de capacidad
                        <input className="w-60 h-8 rounded-md border-black border-2 p-1">{aforo}</input>
                    </div>
                    <div className="bg-[#D5A00F] w-44 h-14 rounded-md text-center self-center justify-self-center py-4">
                        Actualizar
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aforo;
