
import dashboardBreadCrump from '../../assets/icons/dashboardBreadCrump.svg';
import { useEffect, useState } from 'react';
import GeneralButton from '../../components/Buttons/GeneralButton';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.scss'
import eyeOpen from '../../assets/icons/eye.svg';
import closeEye from '../../assets/icons/eyeClose.svg';
import PopupDiv from '../../components/PopupDiv';
import closeButton from '../../assets/icons/closeButton.svg';

const Setting = () => {

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
    const navigate = useNavigate()
    // const data = ["ram", 'shyam', 'hari', 'hariram']


    const filterdata = data.filter(i => i.includes('Ra'.toLowerCase()));
    console.log(filterdata)

    useEffect(() => {

        console.log("This is backup", reserveValue)
        const filterdata = backup.filter(i => i.includes(reserveValue.toLowerCase()));

        setData(filterdata)

    }, [reserveValue])
    return (
        <div className={styles.mainContainer} >
            <div className={styles.breadCrump} >
                <img src={dashboardBreadCrump} alt="" />
                <Link to="/" className={styles.routeLink} >
                    <span >Dashboard</span>
                </Link>


                <span style={{ color: '#667085', fontWeight: '400' }}>/</span>
                <span>Settings</span>
            </div>
            <div className={styles.mainFormDataContainer}>
                <div className={styles.formDataContainer} >
                    <div className={styles.containerHeader} >
                        <div className={styles.headerBeginner} >
                            <span>Settings</span>

                        </div>
                        <div className={styles.vendorId}>
                            <span className={styles.vendorIdName}>Vendor Id:</span>
                            <span className={styles.vendorIdValue} >3728</span>
                        </div>
                    </div>
                    <span>Edit your Personal, Business & Bank details here.</span>
                </div>
                <div className={styles.formData} >
                    <div className={styles.formData1} >
                        <span>Login Details</span>
                        <form>
                            <label htmlFor="fname">Email Address *</label>
                            <input type="email" id="fname" name="fname" autoComplete="off" />
                            <label htmlFor="lname">Password *</label>
                            <div style={{ position: 'relative' }}>

                                <input type={showPassword ? "text" : 'password'} id="lname" name="lname" autoComplete="off" />
                                <img src={showPassword ? closeEye : eyeOpen}

                                    alt='' style={{ position: 'absolute', cursor: 'pointer', top: '12px', right: '10px' }}
                                    onClick={() => setShowPassword(!showPassword)} />
                            </div>
                            <label htmlFor="lname">Re-Enter Password *</label>
                            <div style={{ position: 'relative' }}>

                                <input type={showPasswordConfirm ? "text" : 'password'} id="lname" name="lname" autoComplete="off" />
                                <img src={showPasswordConfirm ? closeEye : eyeOpen}

                                    alt='' style={{ position: 'absolute', cursor: 'pointer', top: '12px', right: '10px' }}
                                    onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} />
                            </div>
                            <div className={styles.changePassword} >
                                <button type='button' onClick={() => setChangePassword(true)} >Change Password</button>
                                <div style={{ position: 'relative' }}>
                                    <PopupDiv
                                        show={changePassword}
                                        setShowInfo={setChangePassword}
                                        className={styles.changePasswordDiv}

                                    >
                                        <div className={styles.notificationContainer} >
                                            <div className={styles.header} >
                                                <span className={styles.notificationText} >Change Password</span>
                                                <img src={closeButton} alt="" onClick={() => setChangePassword(false)} />

                                            </div>


                                            <div className={styles.notificationDesc} >


                                                <div className={styles.details} >
                                                    <label htmlFor="lname">Current Password *</label>
                                                    <div style={{ position: 'relative' }}>

                                                        <input type={currentPassword ? "text" : 'password'} id="lname" name="lname" autoComplete="off" />
                                                        <img src={currentPassword ? closeEye : eyeOpen}

                                                            alt='' style={{ position: 'absolute', cursor: 'pointer', top: '12px', right: '10px' }}
                                                            onClick={() => setCurrentPassword(!currentPassword)} />
                                                    </div>
                                                    <label htmlFor="lname">New Password *</label>
                                                    <div style={{ position: 'relative' }}>

                                                        <input type={newPassword ? "text" : 'password'} id="lname" name="lname" autoComplete="off" />
                                                        <img src={newPassword ? closeEye : eyeOpen}

                                                            alt='' style={{ position: 'absolute', cursor: 'pointer', top: '12px', right: '10px' }}
                                                            onClick={() => setNewPassword(!newPassword)} />
                                                    </div>
                                                    <label htmlFor="lname">Re-Enter New Password *</label>
                                                    <div style={{ position: 'relative' }}>

                                                        <input type={reNewPassword ? "text" : 'password'} id="lname" name="lname" autoComplete="off" />
                                                        <img src={reNewPassword ? closeEye : eyeOpen}

                                                            alt='' style={{ position: 'absolute', cursor: 'pointer', top: '12px', right: '10px' }}
                                                            onClick={() => setRenewPassword(!reNewPassword)} />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className={styles.seeAll} >
                                                <GeneralButton
                                                    title="Cancel"
                                                    className={styles.downloadButton}
                                                    onClick={() => setChangePassword(false)}
                                                />
                                                <GeneralButton
                                                    title="Change Password"
                                                    className={styles.orderButton}


                                                />
                                            </div>

                                        </div>

                                    </PopupDiv>
                                </div>
                            </div>
                            <p>
                                Passwords must be 8 characters long & must contain at least one uppercase, one number and one symbol.
                            </p>
                        </form >
                    </div >
                    <div className={styles.formData1}>
                        <span>Business Information</span>
                        <form>
                            <label htmlFor="fname">Business / Personal Name</label>
                            <input type="text" id="fname" name="fname" autoComplete="off" />
                            <label htmlFor="lname">Business / Personal Address</label>
                            <input type="text" id="fname" name="fname" autoComplete="off" />
                            <label htmlFor="lname">Website</label>
                            <div className={styles.website} >
                                <span>https://</span>
                                <input type="text" id="lname" name="lname" autoComplete="off" />
                            </div>
                            <label htmlFor="lname">Phone</label>
                            <input type="text" id="lname" name="lname" autoComplete="off" />
                            <label htmlFor="lname">Alternative Phone Number</label>
                            <input type="text" id="lname" name="lname" autoComplete="off" />

                        </form>

                    </div>
                    <div className={styles.formData1} style={{ borderRight: 'none' }} >
                        <span>Bank Details</span>
                        <form>
                            <label htmlFor="fname">Bank Name</label>
                            <input type="text" id="fname" name="fname" autoComplete="off" />
                            <label htmlFor="lname">Account Name</label>
                            <input type="text" id="lname" name="lname" autoComplete="off" />
                            <label htmlFor="fname">Account Number</label>
                            <input type="text" id="fname" name="fname" autoComplete="off" />
                            <label htmlFor="lname">Branch</label>
                            <input type="text" id="lname" name="lname" autoComplete="off" />

                        </form>
                    </div>
                </div >
                <div className={styles.footerFormDataContainer} >
                    <div className={styles.containerHeader} >
                        <div className={styles.headerBeginner} >
                            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px', paddingBottom: '10px' }} >
                                <span>Fields marked with * are mandatory.</span>
                                <span>Business email will be used as your primary contact email.</span>
                                <span>Make sure you save all the changes</span>
                            </div>

                        </div>
                        <div className={styles.submitButton}>
                            <GeneralButton
                                title="Cancel"
                                className={styles.downloadButton}
                                onClick={() => navigate('/')}
                            />
                            <GeneralButton
                                title="Save Changes"
                                className={styles.orderButton}


                            />
                        </div>
                    </div>

                </div>

            </div >
        </div >
    )
}


export default Setting