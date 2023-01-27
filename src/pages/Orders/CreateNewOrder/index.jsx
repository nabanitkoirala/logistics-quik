

import dashboardBreadCrump from '../../../assets/icons/dashboardBreadCrump.svg';
import setting from '../../../assets/icons/setting.svg';
import transaction from '../../../assets/icons/transaction.svg';
import TableComponent from '../../../components/Table';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import GeneralButton from '../../../components/Buttons/GeneralButton';
import IconButton from '../../../components/Buttons/IconButton';
import Card from '../../../components/Card';
import add from '../../../assets/icons/add.svg';
import order from '../../../assets/icons/order.svg';
import delivered from '../../../assets/icons/delivered.svg';
import returns from '../../../assets/icons/returns.svg';
import orderValue from '../../../assets/icons/orderValue.svg';
import orderDays from '../../../assets/icons/orderDays.svg';
import GraphCard from '../../../components/GraphCard';
import upload from '../../../assets/icons/upload.svg';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.scss'
import DropdownButton from '../../../components/Dropdown';
import PopDiv from '../../../components/PopupDiv';
import dropdownSelect from '../../../assets/icons/dropdownSelect.svg';
const CreateNewOrder = () => {
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
                <Link to="/orders">
                    <span style={{ color: '#667085', fontWeight: '400' }} >Orders</span>
                </Link>
                <span style={{ color: '#667085', fontWeight: '400' }}>/</span>
                <span>Create New Order</span>
            </div>
            <div className={styles.mainFormDataContainer}>
                <div className={styles.formDataContainer} >
                    <div className={styles.containerHeader} >
                        <div className={styles.headerBeginner} >
                            <span>Create New Order</span>

                        </div>
                        <GeneralButton
                            title="Upload Bulk Order"
                            className={styles.downloadButton}
                            imgSource={upload}

                        />
                    </div>
                    <span>Take time to enter all the required details for most efficient delivery.</span>
                </div>
                <div className={styles.formData} >

                    <div className={styles.formData1} >
                        <span>Customer Information</span>
                        <form>
                            <label htmlFor="fname">First Name *</label>
                            <input type="text" id="fname" name="fname" />
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" />
                            <label htmlFor="fname">Email</label>
                            <input type="text" id="fname" name="fname" />
                            <label htmlFor="lname">Phone *</label>
                            <input type="text" id="lname" name="lname" />
                            <label htmlFor="lname">Alternative Phone</label>
                            <input type="text" id="lname" name="lname" />
                        </form >
                    </div >
                    <div className={styles.formData1}>
                        <span>Address Information</span>
                        <form>
                            <label htmlFor="fname">District *</label>
                            <input type="text" id="fname" name="fname" />
                            <label htmlFor="lname">Area *</label>
                            <input className={styles.searchFilter} type="text" id="lname" name="lname" value={reserveValue}
                                onClick={() => setTest(true)}
                                onChange={(e) => setReserveValue(e.target.value)}

                            />
                            <div style={{ position: 'relative' }}>
                                <PopDiv
                                    show={test}
                                    setShowInfo={setTest}
                                    className={styles.notificationContainer}

                                >

                                    {data.map((i) => (
                                        <div className={styles.header} key={i} value={i} onClick={() => {
                                            setTest(false)
                                            setReserveValue(i)
                                        }} >
                                            {i}
                                        </div>
                                    ))}



                                </PopDiv>
                            </div>



                            <label htmlFor="fname">Street</label>
                            <input type="text" id="fname" name="fname" />
                            <label htmlFor="lname">Landmark</label>
                            <input type="text" id="lname" name="lname" />
                            <label htmlFor="lname">Google Plus Code</label>
                            <input type="text" id="lname" name="lname" />
                            <label htmlFor="lname">Full Address (Optional)</label>
                            <input type="text" id="lname" name="lname" />
                        </form>

                    </div>
                    <div className={styles.formData1}>
                        <span>Package Details</span>
                        <form>
                            <label htmlFor="fname">Item Type *</label>
                            <input type="text" id="fname" name="fname" />
                            <label htmlFor="lname">Weight</label>
                            <input type="text" id="lname" name="lname" />
                            <label htmlFor="fname">COD Amount (0 if paid online)</label>
                            <input type="text" id="fname" name="fname" />
                            <label htmlFor="lname">Package Instruction</label>
                            <input type="text" id="lname" name="lname" />
                            <div className={styles.selectDiv} >

                                <label htmlFor="lname">Package Handle</label>
                                <select name="cars" id="cars"  >
                                    <option value="volvo">All</option>
                                    <option value="saab">Saab sadasdasdasdasdadasd</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div >
                <div className={styles.footerFormDataContainer} >
                    <div className={styles.containerHeader} >
                        <div className={styles.headerBeginner} >
                            <span>Delivery Charge: 75.00</span>

                        </div>
                        <div className={styles.submitButton}>
                            <GeneralButton
                                title="Cancel"
                                className={styles.downloadButton}
                                onClick={() => navigate('/orders')}


                            />
                            <GeneralButton
                                title="Confirm & Post Order"
                                className={styles.orderButton}


                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px' }} >
                        <span>Fields marked with * are mandatory.</span>
                        <span>Delivery charges are inclusive of all taxes</span>
                        <span>Google Plus Codes are most accurate locations of customers</span>
                    </div>
                </div>

            </div >
        </div >
    )
}


export default CreateNewOrder