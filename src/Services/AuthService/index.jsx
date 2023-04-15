import axios from "axios";
import { toast } from "react-toastify";


export const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;


export const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Register User
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}/api/users/register`,
            userData,
            { withCredentials: true }
        );
        if (response.statusText === "OK") {
            toast.success("User Registered successfully");
        }
        return response.data;
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        toast.error(message);
    }
};


// Login User
export const loginUser = async (userData, token) => {


    try {
        const response = await axios.post(
            `${BACKEND_URL}/auth/login`,
            userData,

            {
                // headers: {
                //     'X-CSRFToken': token
                // }
            }
        );
        if (response.statusText === "OK") {
            // toast.success("Login Successful...");
            console.log("Login successful")
        }
        return localStorage.setItem("accessToken", JSON.stringify(response.data));;
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        // toast.error(message);
    }

};

export const logout = () => {
    localStorage.removeItem("accessToken");
};

// Forgot Password
export const forgotPassword = async (userData) => {
    try {
        const response = await axios.post(
            `${BACKEND_URL}/api/users/forgotpassword`,
            userData
        );

        toast.success(response.data.message);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        toast.error(message);
    }
};

// Reset Password
export const resetPassword = async (userData, resetToken) => {
    try {
        const response = await axios.put(
            `${BACKEND_URL}/auth/resetpassword/${resetToken}`,
            userData
        );
        return response.data;
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        toast.error(message);
    }
};

// Get Login Status
export const getLoginStatus = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/auth/me`);
        return response.data;
    } catch (error) {
        console.log("is it error", error)
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        toast.error(message);
    }
};
// Get User Profile
export const getUser = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/users/getuser`);
        return response.data;
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        toast.error(message);
    }
};
// Update Profile
export const updateUser = async (formData) => {
    try {
        const response = await axios.patch(
            `${BACKEND_URL}/api/users/updateuser`,
            formData
        );
        return response.data;
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        toast.error(message);
    }
};
// Update Profile
export const changePassword = async (formData) => {
    try {
        const response = await axios.patch(
            `${BACKEND_URL}/api/users/changepassword`,
            formData
        );
        return response.data;
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        toast.error(message);
    }
};
