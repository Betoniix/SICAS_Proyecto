import { Outlet, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ProtectedPath = ({ isAllowed, children }) => {
    const navigate = useNavigate();

    if (!isAllowed) {
        console.log(isAllowed)
        navigate(-1)
    }

    return children ? children : <Outlet />;
};
