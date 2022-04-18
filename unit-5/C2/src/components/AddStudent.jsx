import { useState } from "react";
import "./Comp.css"

export const AddStudent = () => {


    const [table, settable] = useState({
        first_name: null,
        last_name: null,
        email: null,
        age: null,
        gender: null,
        age: null,
        tenth_score: null,
        twelth_score: null,
        preferred_branch: "Not defined"
    });
    const changeform = (e) => {
        const { name, value } = e.target;
        settable({ ...table, [name]: value })
    }

    const formdata = async () => {



        await fetch(`http://localhost:8080/students`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(table)

        })
        window.alert("data submitted")

    }

    return (
        <form className="addstudent" onSubmit={formdata}>
            <div>
                Firstname:{" "}
                <input onChange={changeform}
                    type="text"
                    name="first_name"
                    className="first_name"
                    placeholder="enter first name"
                    required
                />
            </div>
            <div>
                {" "}
                Last Name:
                <input onChange={changeform}
                    type="text"
                    name="last_name"
                    className="last_name"
                    placeholder="enter last name"
                    required
                />
            </div>
            <div>
                {" "}
                Email:
                <input onChange={changeform}
                    type="email"
                    name="email"
                    className="email"
                    placeholder="enter email"
                    required
                />
            </div>

            <div>
                Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
                <div>
                    Male
                    <input onChange={changeform}
                        name="gender"
                        className="male"
                        type="radio"
                        value={"male"}
                        required
                    />{" "}
                    Female{" "}
                    <input onChange={changeform}
                        name="gender"
                        className="female"
                        type="radio"
                        value={"female"}
                        required
                    />
                </div>
            </div>
            <div>
                Age{" "}
                <input onChange={changeform}
                    type="number"
                    name="age"
                    className="age"
                    placeholder="enter age"
                    required
                />
            </div>
            <div>
                Tenth Score:{" "}
                <input onChange={changeform}
                    type="number"
                    name="tenth_score"
                    className="tenth_score"
                    placeholder="enter 10th score"
                    required
                />{" "}
            </div>
            <div>
                Twelth Score:{" "}
                <input onChange={changeform}
                    type="number"
                    name="twelth_score"
                    className="twelth_score"
                    placeholder="enter 12th score"
                    required
                />{" "}
            </div>
            <div>
                <select onChange={changeform}
                    value={""} // select dropdown needs both value and onChange attributes
                    name="preferred_branch"

                    className="preferred_branch"
                >
                    <option value="law">law</option>
                    <option value="commerce">commerce</option>
                    <option value="science">science</option>
                    <option value="sports">sports</option>
                    <option value="arts">arts</option>
                    <option value="acting">acting</option>
                </select>
            </div>

            <input className="submit" type="submit" value="Submit" />
            {

                // show this div with proper error before submitting form, if there's anything not provided
                // eg: first name missing, age cannot be greater than 100 etc
            }
        </form>
    );
};