import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/Authcontext";
import { useContext } from "react";
export const EmployeeDetails = () => {

    const { userid } = useContext(AuthContext);
    console.log(userid)

    useEffect(() => {
        getuser()
    }, [])
    const getuser = async () => {
        let d = await axios.get(`https://reqres.in/api/users/${userid}`)
        console.log(d.data)
    }

    return (
        <div className="user_details">
            <img className="user_image" />
            <h4 className="user_name"></h4>
            <span className="user_salary">$</span>
            <span className="tasks">
                <li className="task"></li>
            </span>
            Status: <b className="status"></b>
            Title: <b className="title"></b>
            {/* Show this button only if user is not already terminated (users status is working) */}
            <button className="fire">Fire Employee</button>
            {/* Show this button only if user is not already team lead or terminated */}
            <button className="promote">promote</button>
        </div>
    );
};