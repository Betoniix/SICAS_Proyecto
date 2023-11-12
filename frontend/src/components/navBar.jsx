
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div
            className="flex flex-col justify-center items-center border-b-[1px] border-gray-500 h-[60px]"
        >
            <Link
                to="/admin/alerta"
                className="bg-[#0A1446] text-white text-[25px] font-medium rounded-lg py-2 px-4 mt-4 w-[290px] h-[60px]"
            >
                Alertas
            </Link>
            <Link
                to="/admin/aforo"
                className="bg-[#0A1446] text-white text-[25px] font-medium rounded-lg py-2 px-4 mt-4 w-[290px] h-[60px]"
            >
                Aforo
            </Link>
            <Link
                to="/admin/aulas"
                className="bg-[#0A1446] text-white text-[25px] font-medium rounded-lg py-2 px-4 mt-4 w-[290px] h-[60px]"
            >
                Aulas
            </Link>
            <Link
                to="/admin/cuestionario"
                className="bg-[#0A1446] text-white text-[25px] font-medium rounded-lg py-2 px-4 mt-4 w-[290px] h-[60px]"
            >
                Cuestionario
            </Link>
        </div>
    );
}

export default NavBar;

