import React, { useState } from "react";
import styles from "./style.module.scss";


import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUser, validateEmail } from "../../../Services/AuthService";
import { SET_LOGIN, SET_NAME } from "../../../redux/feature/AuthSlice";
import { selectCsrfToken } from '../../../redux/feature/AuthSlice'
import Cookies from "js-cookie";


const initialState = {
    username: "",
    password: "",
};

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const csrfToken = useSelector(selectCsrfToken);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState(initialState);
    const { email, password } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const login = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.error("All fields are required");
        }

        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
        }

        const userData = {
            email,
            password,
        };
        setIsLoading(true);
        console.log("is csrf present", csrfToken)
        try {
            const data = await loginUser(userData);
            console.log(data);
            await dispatch(SET_LOGIN(true));
            // await dispatch(SET_NAME(data.name));
            navigate("/dashboard");
            // setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log("error", error)
        }
    };

    return (
        <div className={`container ${styles.auth}`}>
            {isLoading && <h2>Loading...</h2>}

            <div className={styles.form}>

                <h2>Login</h2>

                <form onSubmit={login}>
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="--btn --btn-primary --btn-block">
                        Login
                    </button>
                </form>
                <Link to="/forgot">Forgot Password</Link>

                <span className={styles.register}>
                    <Link to="/">Home</Link>
                    <p> &nbsp; Don't have an account? &nbsp;</p>
                    <Link to="/register">Register</Link>
                </span>
            </div>

        </div>
    );
};

export default Login;
