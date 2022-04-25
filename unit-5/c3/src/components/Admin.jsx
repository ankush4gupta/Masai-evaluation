import { useEffect, useState } from "react";
import axios from "axios";
export const Admin = () => {

    const [pos, setpos] = useState({});
    //  use reqres to log user in.
    const handleinput = (e) => {
        const { value, name } = e.target;
        setpos({ ...pos, [name]: value })
    }
    const formsub = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/employee`, pos).then((response) => {

            window.alert("data added")
        })
    }
    return (
        <form className="createEmployee" onSubmit={formsub}>
            <input type="text" placeholder="Employee Name" name="employee_name" onClick={handleinput} />
            <input type="text" placeholder="Employee id" name="employee_id" onClick={handleinput} />
            <select name="title">
                <option value="intern">Intern</option>
                <option value="Jr Software Developer">Jr Software Developer</option>
                <option value="Sr Software Developer">Sr Software Developer</option>
                <option value="Team Lead">Team Lead</option>
            </select>
            <input type="number" placeholder="Salary" name="salary" onClick={handleinput} />
            <input type="text" placeholder="Image" name="image" onClick={handleinput} />
            <input type="text" placeholder="User Name" name="username" onClick={handleinput} />
            <input type="password" placeholder="Password" name="password" onClick={handleinput} />
            <input
                type="text"
                placeholder="Enter tasks separated by commas"
                name="tasks"
                onClick={handleinput}
            />
            <select name="status" id="status">
                <option value="">Select Status</option>
                <option value="terminated">Terminated</option>
                <option value="working">Working</option>
            </select>
            <select name="team" id="team">
                <option value="">Select team</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="qa">QA</option>
            </select>
            <input className="createUser" type="submit" value={"submit"} />
        </form>
    );
};