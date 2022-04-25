import axios from "axios";
import { useState } from "react";
import { AuthContext } from "../Context/Authcontext";
import { useContext } from "react";

export const Login = () => {
    const { handleAuth
    } = useContext(AuthContext)
    const [log, setlog] = useState({});
    //  use reqres to log user in.
    const handleinput = (e) => {
        const { value, name } = e.target;
        setlog({ ...log, [name]: value })
    }
    const formpost = (e) => {
        e.preventDefault();
        axios.post(`https://reqres.in/api/login`, log).then((response) => {
            handleAuth(true);
            window.alert("login succesfully")
        })
    }

    return (
        <form className="loginform" onSubmit={formpost}>
            <input onChange={handleinput}
                name="username"
                type="text"
                placeholder="Enter username"
                className="login_username"
            />
            <input onChange={handleinput}
                name="password"
                type="text"
                placeholder="Enter password"
                className="login_password"
            />
            <input type="submit" value="SIGN IN" className="login_submit" />
        </form>
    );
};