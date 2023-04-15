import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";


import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import httpBrowsing from '../../../../Services/httpBrowsing';
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
import Checkbox from "../../../../components/Checkbox";
import Loader from "react-loader";


const initialState = {
    username: "",
    password: "",
};

const LogingIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const csrfToken = useSelector(selectCsrfToken);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState(initialState);
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [tokenGranted, setTokenGranted] = useState(false)
    const { email, password } = formData;
    const [checked, setChecked] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const [showPassword, setShowPassword] = useState(false);
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // loginUser(credentials).then(
        //     () => {
        //         setIsLoading(false);
        //         navigate("/dashboard");
        //         // window.location.reload();
        //     },
        //     (error) => {
        //         setIsLoading(false);
        //         //   setMessage(resMessage);
        //     }
        // );
        try {
            const response = await httpBrowsing.post('/auth/login', credentials)
            if (response.data) {
                await localStorage.setItem("accessToken", response.data.accessToken);
                window.location.reload();
                // if (token) {
                //     await navigate("/dashboard");
                // }

            }
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            // toast.error(message);
        }



    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // if (!email || !password) {
    //     //     return toast.error("All fields are required");
    //     // }

    //     // if (!validateEmail(email)) {
    //     //     return toast.error("Please enter a valid email");
    //     // }

    //     const userData = {
    //         email: credentials.email,
    //         password: credentials.password,
    //     };
    //     setIsLoading(true);

    //     try {
    //         const data = await loginUser(userData);

    //         // Cookies.set('token', data.token)
    //         // await dispatch(SET_LOGIN(true));
    //         // await dispatch(SET_NAME(data.name));
    //         navigate("/dashboard");
    //         setIsLoading(false);
    //     } catch (error) {
    //         setIsLoading(false);
    //         // toast.error("Invalid Crenditials !!!")
    //         console.log("error", error.message)
    //     }
    // };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    console.log("This is value", tokenGranted)
    return (

        <>
            <div className={styles.formContainer} >

                <div className={styles.mainFormDiv}>
                    <div className={styles.header}>
                        <img src={registerLogo} alt="" />
                        <span>Login</span>
                    </div>
                    <div className={styles.formData1} >
                        <span>Login Details</span>
                        <form>
                            <label htmlFor="fname">Email Address/phone *</label>
                            <input type="text" id="fname" name="email" autoComplete="off" value={credentials.email} onChange={handleChange} />

                            <label htmlFor="lname">Password *</label>
                            <div style={{ position: 'relative' }}>

                                <input type={showPassword ? "text" : 'password'} id="lname" name="password"
                                    value={credentials.passsword}
                                    onChange={handleChange}
                                    autoComplete="off" />
                                <img src={showPassword ? closeEye : eyeOpen}

                                    alt='' style={{ position: 'absolute', cursor: 'pointer', top: '12px', right: '10px' }}
                                    onClick={() => setShowPassword(!showPassword)} />
                            </div>
                            <div className={styles.mainDivForgetPassword} >
                                <div className={styles.checkboxDiv} >
                                    <Checkbox checked={checked}
                                        handleChange={() => {


                                            if (checked) {
                                                setChecked(false)

                                            } else {
                                                setChecked(true)

                                            }
                                        }}
                                    />
                                    <span>Remember me</span>
                                </div>
                                <div className={styles.forgetPassword} >
                                    <Link to="/">Forgot passsword</Link>
                                </div>
                            </div>

                            <div className={styles.submitButtonDiv} >
                                <GeneralButton
                                    title="Cancel"
                                    className={styles.cancelButton}

                                />
                                <GeneralButton
                                    title={isLoading ? "Loging..." : 'Login'}
                                    className={styles.orderButton}
                                    disable={isLoading ? true : false}

                                    onClick={handleSubmit}
                                />
                            </div>
                        </form >
                    </div >

                </div>

            </div>
        </>
    );
};

export default LogingIn;
