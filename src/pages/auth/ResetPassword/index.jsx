import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loginUser, validateEmail, resetPassword } from "../../../Services/AuthService";



const ResetPassword = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log("is this id", id)

    const [pass, setPass] = useState({
        newPass: '',
        confirmPass: ''
    })

    const { newPass, confirmPass } = pass;
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setError('')
        setPass({
            ...pass,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPass === "" || confirmPass === "") {
            setError("All fields are required")
            return
        }
        if (newPass !== confirmPass) {
            setError("New and confirm password does not match")
            return
        }
        // if (!validateEmail(email)) {
        //     return toast.error("Please enter a valid email");
        // }

        const password = confirmPass

        try {
            const data = await resetPassword({ password }, id);
            console.log(data);
            Cookies.set('token', data.token)
            // await dispatch(SET_LOGIN(true));
            // // await dispatch(SET_NAME(data.name));
            navigate("/dashboard");
            // setIsLoading(false);
        } catch (error) {

            console.log("error", error)
        }
    }
    return (
        <>
            <h2>Reset Password</h2>
            <div>
                <h5>New Password</h5>
                <input type="password" name="newPass" value={newPass} onChange={handleChange} />
            </div>
            <div>
                <h5>Confirm New Password</h5>
                <input type="password" name="confirmPass" value={confirmPass} onChange={handleChange} />
            </div>

            {error ? <h2 style={{ color: 'red' }} >{error}</h2> : ''}
            <button type="button" onClick={handleSubmit}>Submit</button>
        </>



    )
}


export default ResetPassword;