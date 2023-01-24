

import dashboardBreadCrump from '../../assets/icons/dashboardBreadCrump.svg';
// import setting from '../../../assets/icons/setting.svg';
// import transaction from '../../../assets/icons/transaction.svg';
// import TableComponent from '../../../components/Table';
// import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import GeneralButton from '../../components/Buttons/GeneralButton';
// import IconButton from '../../../components/Buttons/IconButton';
// import Card from '../../../components/Card';
// import add from '../../../assets/icons/add.svg';
// import order from '../../../assets/icons/order.svg';
// import delivered from '../../../assets/icons/delivered.svg';
// import returns from '../../../assets/icons/returns.svg';
// import orderValue from '../../../assets/icons/orderValue.svg';
// import orderDays from '../../../assets/icons/orderDays.svg';
// import GraphCard from '../../../components/GraphCard';
import upload from '../../assets/icons/upload.svg';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.scss'
// import DropdownButton from '../../../components/Buttons/Dropdown';
import PopDiv from '../../components/PopupDiv';
// import dropdownSelect from '../../../assets/icons/dropdownSelect.svg';
const Setting = () => {
    const [test, setTest] = useState(false)
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
                <Link to="/">
                    <span style={{ color: '#667085', fontWeight: '400' }} >Dashboard</span>
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
                            <input type="email" id="fname" name="fname" />
                            <label htmlFor="lname">Password *</label>
                            <input type="text" id="lname" name="lname" />
                            <label htmlFor="lname">Re-Enter Password *</label>
                            <input type="text" id="lname" name="lname" />
                            <div className={styles.changePassword} >

                                <button type='button'>Change Password</button>
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
                            <input type="text" id="fname" name="fname" />
                            <label htmlFor="lname">Business / Personal Address</label>
                            <input type="text" id="fname" name="fname" />
                            <label htmlFor="lname">Website</label>
                            <div className={styles.website} >
                                <span>https://</span>
                                <input type="text" id="lname" name="lname" />
                            </div>
                            <label htmlFor="lname">Phone</label>
                            <input type="text" id="lname" name="lname" />
                            <label htmlFor="lname">Alternative Phone Number</label>
                            <input type="text" id="lname" name="lname" />

                        </form>

                    </div>
                    <div className={styles.formData1}>
                        <span>Bank Details</span>
                        <form>
                            <label htmlFor="fname">Bank Name</label>
                            <input type="text" id="fname" name="fname" />
                            <label htmlFor="lname">Account Name</label>
                            <input type="text" id="lname" name="lname" />
                            <label htmlFor="fname">Account Number</label>
                            <input type="text" id="fname" name="fname" />
                            <label htmlFor="lname">Branch</label>
                            <input type="text" id="lname" name="lname" />

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
                                onClick={() => navigate('/orders')}


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