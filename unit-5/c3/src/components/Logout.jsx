import { AuthContext } from "../Context/Authcontext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
export const Logout = () => {
    const { handleAuth
    } = useContext(AuthContext);
    handleAuth(false);
    // log user out. it's just an inmemory value in context api
    return <div>
        {
            window.alert("logout")
        }
        <Navigate to="/" />
    </div>;
};