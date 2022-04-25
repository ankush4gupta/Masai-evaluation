import { useEffect, useState } from "react";
import axios from "axios"
import "./comp.css"
import { AuthContext } from "../Context/Authcontext";
import { useContext } from "react";

import { Link, Navigate } from "react-router-dom";
export const EmployeeList = () => {
    const { handleudata, handleID } = useContext(AuthContext)
    const [user, setuser] = useState([]);

    useEffect(() => {
        getdata()
        handleudata("TotalEmployees", user.length)
    }, [])
    const getdata = async () => {
        let data = await axios.get(` http://localhost:8080/employee`)
        setuser(data.data);

    }
    const particular = (id) => {
        console.log(id)
        handleID(id)

    }
    console.log(user)
    return (
        <div className="list_container" >
            {/* On clicking this card anywhere, user goes to user details */}
            {
                user.map((e) => {
                    return <Link to="/employees/:e.id"><div className="employee_card" onClick={particular(e.id)}>
                        <img className="employee_image" src={e.image} />
                        <span className="employee_name">{e.employee_name}</span>
                        <span className="employee_title">{e.title}</span>
                    </div></Link>
                })
            }

        </div>
    );
};