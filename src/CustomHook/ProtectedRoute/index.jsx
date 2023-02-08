import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "../../pages/auth/Login";
import { getLoginStatus } from "../../Services/AuthService";
const Auth = (props) => {
    const {
        children,
        isLoginPage = false
    } = props;

    const [isLoggedIn, setIsLoggedIn] = useState();
    // const getLoginStat = async () => {
    //     console.log("Is entered")
    //     try {
    //         const data = await getLoginStatus();
    //         console.log("what data", data);
    //         if (data) {
    //             setIsLoggedIn(true);
    //         } else {
    //             setIsLoggedIn(false);
    //         }

    //     } catch (error) {
    //         console.log("what error", error)
    //         setIsLoggedIn(false);
    //     }
    // }

    // console.log('is logged in', isLoggedIn)
    // useEffect(() => {
    //     getLoginStat()
    // }, [])
    fetch(import.meta.env.VITE_APP_BACKEND_URL + "/auth/me", {
        credentials: 'include',

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