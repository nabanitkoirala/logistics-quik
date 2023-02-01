import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CSRF_TOKEN_VALUE, SET_LOGIN } from "../../redux/feature/AuthSlice";
import { getLoginStatus } from "../../Services/AuthService";



const UpdateCsrfToken = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("calling this")
        async function loginStatus() {
            const status = await getLoginStatus();
            const loginStatus = status ? true : false;
            const token = Cookies.get('csrftoken');
            dispatch(CSRF_TOKEN_VALUE(token))
            console.log("status", loginStatus)
            dispatch(SET_LOGIN(loginStatus));
        }
        loginStatus();
    }, [dispatch]);
}


export default UpdateCsrfToken;