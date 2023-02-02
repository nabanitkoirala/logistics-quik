import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "../../pages/auth/Login";

const Auth = (props) => {
    const {
        children,
        isLoginPage = false
    } = props;

    const [isLoggedIn, setIsLoggedIn] = useState();
    fetch(import.meta.env.VITE_APP_BACKEND_URL + "/auth/me/", {
        credentials: 'include'
    }).then(res => {
        if (res.status == 200) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    })
    if (isLoggedIn === true) {
        return (
            <>
                {children}
            </>
        )
    } else if (isLoggedIn === false && !isLoginPage) {
        return (
            <Navigate to='/' />
        )
    } else if (isLoggedIn === false && isLoginPage) {
        return (
            <Login />
        )
    }
    else {
        return (
            <>
            </>
        )
    }
}

export default Auth;