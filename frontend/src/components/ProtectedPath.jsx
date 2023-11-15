import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../services/useLocalStorage";

export const ProtectedPath = ({ role, children }) => {
    const navigate = useNavigate()

    useEffect(() => {
        const userData = useLocalStorage.getStorage('auth')
        if (userData === null || userData === undefined) navigate(-1)
        if (userData.role !== role) navigate(-1)
    }, [role])


    return children ? children : <Outlet />;
};
