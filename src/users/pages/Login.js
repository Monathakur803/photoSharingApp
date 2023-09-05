import React, { useContext, useState } from "react";

import { LoginContext } from "../../common/components/context";
import "./Login.css";

const Login = () => {
    const loggedin = useContext(LoginContext);
    const [newlogin, setNewlogin] = useState({
        email: "",
        password: "",
    });
    const submitHandler = (event) => {
        event.preventDefault();
        loggedin.login();
        console.log("login page: ", newlogin);
    };
    const changeHandler = (event) => {
        const inputname = event.target.name;
        const newValue = event.target.value; 

        setNewlogin((previousValue) => {
            if (inputname === "newloginemail") {
                return {
                    email: newValue,
                    password: previousValue.password,
                };
            }
            else if (inputname === "newloginpassword") {
                return {
                    email: previousValue.email,
                    password: newValue,
                };
            }
        });
    };
    return (
        <form className="login-form" onSubmit={submitHandler}>
            <div className="form-control">
                <lable>
                    Email
                    <input name="newloginemail"
                        type="email"
                        required
                        onChange={changeHandler}
                    />
                </lable>
            </div>
            <div> </div>

            <div className="form-control">
                <lable>
                    Password
                    <input name="newloginpassword"
                        type="password"
                        required
                        onChange={changeHandler}
                    />
                </lable>
            </div>
            <div className="form-control">
                <button>Submit</button>
            </div>
        </form>
    );
};
export default Login;