import React from 'react'
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { SET_LOGIN } from "../../redux/feature/AuthSlice";
import { getLoginStatus } from "../../Services/AuthService";

function Protected({ children }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { pathname } = useLocation();
    console.log("This is path name", pathname)
    const redirectLoggedOutUser = async () => {
        const loginStatus = await getLoginStatus();
        const isLoggedIn = loginStatus ? true : false
        console.log("isloged in", isLoggedIn)
        dispatch(SET_LOGIN(isLoggedIn));
        if (!isLoggedIn) {
            navigate("/");
            return;
        }
        return children
    };
    redirectLoggedOutUser();
    return null

}
export default Protected