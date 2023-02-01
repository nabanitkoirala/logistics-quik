import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SET_LOGIN } from "../../redux/feature/AuthSlice";
import { getLoginStatus } from "../../Services/AuthService";
import { toast } from "react-toastify";

const useRedirectLoggedOutUser = (path) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { pathname } = useLocation();
    console.log("This is path name", pathname)
    useEffect(() => {
        const redirectLoggedOutUser = async () => {
            const loginStatus = await getLoginStatus();
            const isLoggedIn = loginStatus ? true : false
            dispatch(SET_LOGIN(isLoggedIn));
            if (!isLoggedIn) {
                toast.info("Session expired, please login to continue.");
                navigate(path);
                return;
            }
            else if (pathname === "/" && isLoggedIn) {
                navigate("/dashboard");
            } else {
                navigate(pathname);
            }
        };
        redirectLoggedOutUser();
    }, [navigate, path, dispatch]);
};

export default useRedirectLoggedOutUser;
