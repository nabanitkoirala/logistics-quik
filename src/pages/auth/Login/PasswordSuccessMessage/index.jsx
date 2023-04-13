import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";


import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUser, validateEmail } from "../../../../Services/AuthService";
import { SET_LOGIN, SET_NAME } from "../../../../redux/feature/AuthSlice";
import { selectCsrfToken } from '../../../../redux/feature/AuthSlice'
import Cookies from "js-cookie";
import loginBanner from '../../../../assets/icons/loginBanner.svg';
import registerLogo from '../../../../assets/icons/registerLogo.svg';
import eyeOpen from '../../../../assets/icons/eye.svg';
import closeEye from '../../../../assets/icons/eyeClose.svg';
import BulkUploadDocument from "../../../../components/BulkUploadDocument";
import GeneralButton from '../../../../components/Buttons/GeneralButton';
import mainLogo from '../../../../assets/icons/logo.svg';
import successBadge from '../../../../assets/icons/successBadge.svg';
const initialState = {
    username: "",
    password: "",
};

const PasswordSuccess = () => {

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
            Cookies.set('token', data.token)
            await dispatch(SET_LOGIN(true));
            // await dispatch(SET_NAME(data.name));
            navigate("/dashboard");
            // setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log("error", error)
        }
    };
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const [changePassword, setChangePassword] = useState(false)

    const [currentPassword, setCurrentPassword] = useState(false)
    const [newPassword, setNewPassword] = useState(false)
    const [reNewPassword, setRenewPassword] = useState(false)

    const [data, setData] = useState([
        "ram", 'shyam', 'hari', 'hariram'
    ])
    const [backup, setBackup] = useState([
        "ram", 'shyam', 'hari', 'hariram'
    ])
    const [reserveValue, setReserveValue] = useState('')
    console.log("Is this displayed")

    // const data = ["ram", 'shyam', 'hari', 'hariram']


    const filterdata = data.filter(i => i.includes('Ra'.toLowerCase()));
    console.log(filterdata)

    useEffect(() => {

        console.log("This is backup", reserveValue)
        const filterdata = backup.filter(i => i.includes(reserveValue.toLowerCase()));

        setData(filterdata)

    }, [reserveValue])
    return (

        <>

            <div className={styles.formContainer} >

                <div className={styles.mainFormDiv}>
                    <div className={styles.header}>
                        <img src={registerLogo} alt="" />
                        <span>Reset Password</span>
                    </div>
                    <div className={styles.formData1} >
                        <div className={styles.badge} >
                            <img src={successBadge} alt="" />
                        </div>

                        <span className={styles.checkMailText} style={{ display: 'flex', justifyContent: 'center' }} >Your password has been reset successfully</span>

                        <form  >
                            <div className={styles.submitButtonDiv} >

                                <GeneralButton
                                    title="Login"
                                    className={styles.orderButton}

                                    onClick={() => navigate('/orders/new-order')}
                                />
                            </div>
                        </form >
                    </div >

                </div>

            </div>
        </>
    );
};

export default PasswordSuccess;
