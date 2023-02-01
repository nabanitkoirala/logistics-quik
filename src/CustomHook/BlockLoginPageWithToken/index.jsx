import React from 'react'
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { SET_LOGIN } from "../../redux/feature/AuthSlice";
import { getLoginStatus } from "../../Services/AuthService";

function BlockLoginPageWithToken({ isAllowed, children }) {
    if (!isAllowed) {
        return <Navigate to={"/dashboard"} replace />;
    }

    return children

}
export default BlockLoginPageWithToken