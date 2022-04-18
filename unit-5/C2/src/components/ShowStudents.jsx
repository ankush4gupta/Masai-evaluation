import { useEffect, useState } from "react";
import "./Comp.css"

export const ShowStudents = () => {
    const [stdData, setstdData] = useState([]);
    const [sorting, setsorting] = useState({
        sort: "first_name",
        order: "asc"
    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setsorting({ ...sorting, [name]: value })
    }
    useEffect(() => {
        getdata()
    }, [])
    async function getdata() {
        const res = await fetch(`http://localhost:8080/students`)
        const data = await res.json();
        setstdData(data);
    }
    useEffect(() => {
        getdata2()
    }, [])
    async function getdata2() {
        const res = await fetch(`http://localhost:8080/students?_sort=${sorting.sort}&_order=${sorting.order}`)
        const data = await res.json();
        setstdData(data);
    }
    return (
        <div>
            <div className="controls">
                <div>
                    Sort By:{" "}
                    <select onChange={handlechange} name="sort"
                        // select dropdown needs both value and onChange
                        className="sortby"
                    >
                        <option value="first_name">First Name</option>
                        <option value="gender">Gender</option>
                        <option value="age">Age</option>
                        <option value="tenth_score">10th Score</option>
                        <option value="twelth_score">12th Score</option>
                    </select>
                </div>
                <div>
                    Order:
                    <select onChange={handlechange} name="order"
                        // select dropdown needs both value and onChange
                        className="sortorder"
                    >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                <button className="sort" onClick={() => getdata2()}>sort</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>10th Score</th>
                        <th>12th Score</th>
                        <th>Branch</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {/* populate all rows like below: */}
                    {
                        stdData.map((e) => {
                            return <tr className="row" key={e.id}>
                                <td className="first_name">{e.first_name}</td>
                                <td className="last_name">{e.last_name}</td>
                                <td className="email">{e.email}</td>
                                <td className="gender">{e.gender}</td>
                                <td className="age">{e.age}</td>
                                <td className="tenth_score">{e.tenth_score}</td>
                                <td className="twelth_score">{e.twelth_score}</td>
                                <td className="preferred_branch">{e.preferred_branch}</td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};